"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FakeContactType = void 0;
var _uuid = require("uuid");
const FakeContactType = [{
  id: (0, _uuid.v4)(),
  name: 'Financeiro'
}, {
  id: (0, _uuid.v4)(),
  name: 'Suporte'
}, {
  id: (0, _uuid.v4)(),
  name: 'Comercial'
}];
exports.FakeContactType = FakeContactType;