"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _uuid = require("uuid");
var _Company = _interopRequireDefault(require("../../company/entities/Company"));
var _DeviceType = _interopRequireDefault(require("../../deviceType/entities/DeviceType"));
var _Status = _interopRequireDefault(require("../../status/entities/Status"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let Model = (_dec = (0, _typeorm.Entity)('model'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)({
  name: 'mod_id_s'
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Status.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'mod_status_s'
}), _dec8 = Reflect.metadata("design:type", typeof _Status.default === "undefined" ? Object : _Status.default), _dec9 = (0, _typeorm.Column)({
  name: 'mod_status_s'
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.ManyToOne)(() => _DeviceType.default), _dec12 = (0, _typeorm.JoinColumn)({
  name: 'mod_devicetype_s'
}), _dec13 = Reflect.metadata("design:type", typeof _DeviceType.default === "undefined" ? Object : _DeviceType.default), _dec14 = (0, _typeorm.Column)({
  name: 'mod_devicetype_s'
}), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.ManyToOne)(() => _Company.default), _dec17 = (0, _typeorm.JoinColumn)({
  name: 'mod_company_s'
}), _dec18 = Reflect.metadata("design:type", typeof _Company.default === "undefined" ? Object : _Company.default), _dec19 = (0, _typeorm.Column)({
  name: 'mod_company_s'
}), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)({
  name: 'mod_name_s'
}), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)({
  name: 'mod_description_s'
}), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.CreateDateColumn)({
  name: 'mod_created_d'
}), _dec26 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec27 = (0, _typeorm.UpdateDateColumn)({
  name: 'mod_updated_d'
}), _dec28 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Model {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "statusRef", _descriptor2, this);
    _initializerDefineProperty(this, "status", _descriptor3, this);
    _initializerDefineProperty(this, "deviceTypeRef", _descriptor4, this);
    _initializerDefineProperty(this, "deviceType", _descriptor5, this);
    _initializerDefineProperty(this, "companyRef", _descriptor6, this);
    _initializerDefineProperty(this, "company", _descriptor7, this);
    _initializerDefineProperty(this, "name", _descriptor8, this);
    _initializerDefineProperty(this, "description", _descriptor9, this);
    _initializerDefineProperty(this, "create", _descriptor10, this);
    _initializerDefineProperty(this, "update", _descriptor11, this);
    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "statusRef", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "deviceTypeRef", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "deviceType", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "companyRef", [_dec16, _dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "company", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "description", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "create", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "update", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
var _default = Model;
exports.default = _default;