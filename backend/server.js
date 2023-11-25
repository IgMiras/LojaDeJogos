process.env["NODE_CONFIG_DIR"] = __dirname + "/config/";
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const app = express();

const jogosRota = require("./routes/api/jogos");
const desenvolvedoraRota = require("./routes/api/desenvolvedora");
const clienteRota = require("./routes/api/cliente");
const gerenteRota = require("./routes/api/gerente");
const transportadoraRota = require("./routes/api/transportadora");

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(cors());

app.get("/", (req, res) => res.send("API running"));

// Define Routes
app.use("/api/jogos", jogosRota);
app.use("/api/desenvolvedora", desenvolvedoraRota);
app.use("/api/cliente", clienteRota);
app.use("/api/gerente", gerenteRota);
app.use("/api/transportadora", transportadoraRota);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
