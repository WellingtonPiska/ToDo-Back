"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _uuid = require("uuid");
var _CompanyContact = _interopRequireDefault(require("../../companyContact/entities/CompanyContact"));
var _Status = _interopRequireDefault(require("../../status/entities/Status"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let Company = (_dec = (0, _typeorm.Entity)('company'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)({
  name: 'com_id_s'
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Status.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'com_status_s'
}), _dec8 = Reflect.metadata("design:type", typeof _Status.default === "undefined" ? Object : _Status.default), _dec9 = (0, _typeorm.Column)({
  name: 'com_status_s'
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)({
  name: 'com_name_s'
}), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)({
  name: 'com_fantasy_s'
}), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.Column)({
  name: 'com_type_s'
}), _dec16 = Reflect.metadata("design:type", String), _dec17 = (0, _typeorm.Column)({
  name: 'com_inscription_s'
}), _dec18 = Reflect.metadata("design:type", String), _dec19 = (0, _typeorm.Column)({
  name: 'com_zipcode_s',
  nullable: true
}), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.Column)({
  name: 'com_street_s',
  nullable: true
}), _dec22 = Reflect.metadata("design:type", String), _dec23 = (0, _typeorm.Column)({
  name: 'com_complement_s',
  nullable: true
}), _dec24 = Reflect.metadata("design:type", String), _dec25 = (0, _typeorm.Column)({
  name: 'com_number_s',
  nullable: true
}), _dec26 = Reflect.metadata("design:type", String), _dec27 = (0, _typeorm.Column)({
  name: 'com_district_s',
  nullable: true
}), _dec28 = Reflect.metadata("design:type", String), _dec29 = (0, _typeorm.Column)({
  name: 'com_city_s',
  nullable: true
}), _dec30 = Reflect.metadata("design:type", String), _dec31 = (0, _typeorm.Column)({
  name: 'com_state_s',
  nullable: true
}), _dec32 = Reflect.metadata("design:type", String), _dec33 = (0, _typeorm.CreateDateColumn)({
  name: 'com_created_d'
}), _dec34 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec35 = (0, _typeorm.UpdateDateColumn)({
  name: 'com_updated_d'
}), _dec36 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec37 = (0, _typeorm.OneToMany)(() => _CompanyContact.default, contact => contact.companyRef), _dec38 = Reflect.metadata("design:type", Array), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Company {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "statusRef", _descriptor2, this);
    _initializerDefineProperty(this, "status", _descriptor3, this);
    _initializerDefineProperty(this, "name", _descriptor4, this);
    _initializerDefineProperty(this, "fantasy", _descriptor5, this);
    _initializerDefineProperty(this, "type", _descriptor6, this);
    _initializerDefineProperty(this, "inscription", _descriptor7, this);
    _initializerDefineProperty(this, "zipCode", _descriptor8, this);
    _initializerDefineProperty(this, "street", _descriptor9, this);
    _initializerDefineProperty(this, "complement", _descriptor10, this);
    _initializerDefineProperty(this, "number", _descriptor11, this);
    _initializerDefineProperty(this, "district", _descriptor12, this);
    _initializerDefineProperty(this, "city", _descriptor13, this);
    _initializerDefineProperty(this, "state", _descriptor14, this);
    _initializerDefineProperty(this, "create", _descriptor15, this);
    _initializerDefineProperty(this, "update", _descriptor16, this);
    _initializerDefineProperty(this, "contacts", _descriptor17, this);
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
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fantasy", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "inscription", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "zipCode", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "street", [_dec21, _dec22], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "complement", [_dec23, _dec24], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "number", [_dec25, _dec26], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "district", [_dec27, _dec28], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "city", [_dec29, _dec30], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "state", [_dec31, _dec32], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "create", [_dec33, _dec34], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "update", [_dec35, _dec36], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "contacts", [_dec37, _dec38], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
var _default = Company;
exports.default = _default;