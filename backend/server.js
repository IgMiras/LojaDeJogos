process.env['NODE_CONFIG_DIR'] = __dirname + '/config/';
const express = require('express');
const connectDB = require('./config/db');
const jogosRota = require('./routes/api/jogos');
const desenvolvedoraRota = require('./routes/api/desenvolvedora');
const clienteRota = require('./routes/api/cliente');
const PORT = process.env.PORT || 5000;
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API running'));

// Define Routes
app.use('/api/jogos', jogosRota);
app.use('/api/desenvolvedora', desenvolvedoraRota);
app.use('/api/cliente', clienteRota);
//app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
