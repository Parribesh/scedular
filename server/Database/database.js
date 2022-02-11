const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: "localhost",
  user: "paribesh",
  password: "Meronepal",
  database: "todayUsers",
});
