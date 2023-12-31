process.env['NODE_CONFIG_DIR'] = __dirname;
const mongoose = require('mongoose');
const config = require('config');
if (!config.has('mongoURI')) {
    console.log('mongoURI nao encontrada');
    process.exit(1);
}
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.log('passou aqui');
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
