require("dotenv").config();

const express = require("express");
const db = require("./config/db");
const authMiddleware = require("./middleware/authMiddleware");

require("./database/initDB");

const authRoutes = require("./routes/authRoutes");

const prescriptionRoutes =
require("./routes/prescriptionRoutes");

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use(
    "/api/prescriptions",
    prescriptionRoutes
);

app.get("/", (req, res) => {
    res.send("HealthTech Backend Running");
});

app.get(
    "/protected",
    authMiddleware,
    (req, res) => {
        res.json({
            message: "Protected route accessed",
            user: req.user
        });
    }
);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});