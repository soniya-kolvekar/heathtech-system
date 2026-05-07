const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database/healthtech.db", (err) => {
    if (err) {
        console.log("Database connection error:", err.message);
    } else {
        console.log("Connected to SQLite Database");
    }
});

module.exports = db;