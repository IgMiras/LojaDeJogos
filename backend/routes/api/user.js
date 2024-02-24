const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

const User = require('../../models/UserModel');

// @route   POST api/user
// @desc    Register user
// @acess   Public
router.post(
	'/',
	[
		check('username', 'Username is required').not().isEmpty(), // Check if the field 'name' is not empty
		check('email', 'Please include a valid email').isEmail(), // Check if the field 'email' is valid
		check(
			'password',
			'Please enter a password with six or more characters'
		).isLength({ min: 6 }), // Check if the field 'password' is valid (min 6 characters)
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			// if there are errors
			return res.status(400).json({ errors: errors.array() });
		}

		let { username, email, password } = req.body;
		email = email.toLowerCase();

		try {
			// See if the user exists
			let user = await User.findOne({ email });

			if (user) {
				return res
					.status(400)
					.json({ errors: [{ msg: 'User already exists' }] });
			}

			user = new User({
				username,
				email,
				password,
			});

			// Encrypt password
			const salt = await bcrypt.genSalt(10);

			user.password = await bcrypt.hash(password, salt);

			await user.save();

			// Return jsonwebtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				process.env.JWT_SECRET,
				{ expiresIn: '10h' },
				(err, token) => {
					if (err) throw err;
					res.status(200).json({ token });
				}
			);
		} catch (err) {
			console.log(err.message);
			res.status(500).send('Server error');
		}
	}
);

module.exports = router;
