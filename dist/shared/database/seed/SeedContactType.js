"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SeedContactType = void 0;
var _uuid = require("uuid");
const SeedContactType = [{
  id: (0, _uuid.v4)(),
  name: 'Suporte',
  status: '9fd12d17-5581-4ffd-9b70-e7d92cdca30b',
  created: `${new Date()}`,
  updated: `${new Date()}`
}, {
  id: (0, _uuid.v4)(),
  name: 'Financeiro',
  status: '9fd12d17-5581-4ffd-9b70-e7d92cdca30b',
  created: `${new Date()}`,
  updated: `${new Date()}`
}, {
  id: (0, _uuid.v4)(),
  name: 'Comercial',
  status: '9fd12d17-5581-4ffd-9b70-e7d92cdca30b',
  created: `${new Date()}`,
  updated: `${new Date()}`
}, {
  id: (0, _uuid.v4)(),
  name: 'Empresarial',
  status: '9fd12d17-5581-4ffd-9b70-e7d92cdca30b',
  created: `${new Date()}`,
  updated: `${new Date()}`
}];
exports.SeedContactType = SeedContactType;