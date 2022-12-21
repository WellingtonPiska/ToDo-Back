"use strict";

require("reflect-metadata");
require("dotenv/config");
var _app = require("./app");
var _database = require("./database");
_database.dataSource.initialize().then(() => {
  _app.app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started on port ${process.env.PORT || 3000}!`);
  });
});