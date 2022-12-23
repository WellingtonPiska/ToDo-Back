"use strict";

require("reflect-metadata");
require("dotenv/config");
var _app = require("./app");
var _database = require("./database");
_database.dataSource.initialize().then(() => {
  _app.app.listen(process && process.env && process.env.PORT || "3300" || 3000, () => {
    console.log(`Server started on port ${process && process.env && process.env.PORT || "3300" || 3000}!`);
  });
});