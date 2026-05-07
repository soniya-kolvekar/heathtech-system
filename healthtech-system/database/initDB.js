const fs = require("fs");
const path = require("path");
const db = require("../config/db");

// Read schema.sql
const schema = fs.readFileSync(
    path.join(__dirname, "schema.sql"),
    "utf8"
);

// Execute schema
db.exec(schema, (err) => {
    if (err) {
        console.log("Error creating tables:", err.message);
    } else {
        console.log("Tables created successfully");
    }
});