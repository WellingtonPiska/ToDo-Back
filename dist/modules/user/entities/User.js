"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _uuid = require("uuid");
var _CostCenter = _interopRequireDefault(require("../../costCenter/entities/CostCenter"));
var _Profile = _interopRequireDefault(require("../../profile/entities/Profile"));
var _Sector = _interopRequireDefault(require("../../sector/entities/Sector"));
var _Status = _interopRequireDefault(require("../../status/entities/Status"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _dec46, _dec47, _dec48, _dec49, _dec50, _dec51, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let User = (_dec = (0, _typeorm.Entity)('user'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)({
  name: 'use_id_s'
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Status.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'use_status_s'
}), _dec8 = Reflect.metadata("design:type", typeof _Status.default === "undefined" ? Object : _Status.default), _dec9 = (0, _typeorm.Column)({
  name: 'use_status_s'
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.ManyToOne)(() => _Sector.default), _dec12 = (0, _typeorm.JoinColumn)({
  name: 'use_sector_s'
}), _dec13 = Reflect.metadata("design:type", typeof _Sector.default === "undefined" ? Object : _Sector.default), _dec14 = (0, _typeorm.Column)({
  name: 'use_sector_s'
}), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.ManyToOne)(() => _Profile.default), _dec17 = (0, _typeorm.JoinColumn)({
  name: 'use_profile_s'
}), _dec18 = Reflect.metadata("design:type", typeof _Profile.default === "undefined" ? Object : _Profile.default), _dec19 = (0, _typeorm.Column)({
  name: 'use_profile_s'
}), _dec20 = Reflect.metadata("design:type", String), _dec21 = (0, _typeorm.ManyToOne)(() => _CostCenter.default), _dec22 = (0, _typeorm.JoinColumn)({
  name: 'use_costcenter_s'
}), _dec23 = Reflect.metadata("design:type", typeof _CostCenter.default === "undefined" ? Object : _CostCenter.default), _dec24 = (0, _typeorm.Column)({
  name: 'use_costcenter_s',
  nullable: true
}), _dec25 = Reflect.metadata("design:type", String), _dec26 = (0, _typeorm.Column)({
  name: 'use_name_s'
}), _dec27 = Reflect.metadata("design:type", String), _dec28 = (0, _typeorm.Column)({
  name: 'use_avatar_s',
  nullable: true
}), _dec29 = Reflect.metadata("design:type", String), _dec30 = (0, _typeorm.Column)({
  name: 'use_lastname_s'
}), _dec31 = Reflect.metadata("design:type", String), _dec32 = (0, _typeorm.Column)({
  name: 'use_display_s'
}), _dec33 = Reflect.metadata("design:type", String), _dec34 = (0, _typeorm.Column)({
  name: 'use_login_s'
}), _dec35 = Reflect.metadata("design:type", String), _dec36 = (0, _typeorm.Column)({
  name: 'use_password_s',
  nullable: true
}), _dec37 = Reflect.metadata("design:type", String), _dec38 = (0, _typeorm.Column)({
  name: 'use_cpf_s',
  nullable: true
}), _dec39 = Reflect.metadata("design:type", String), _dec40 = (0, _typeorm.Column)({
  name: 'use_mail_s',
  nullable: true
}), _dec41 = Reflect.metadata("design:type", String), _dec42 = (0, _typeorm.Column)({
  name: 'use_dn_s',
  nullable: true
}), _dec43 = Reflect.metadata("design:type", String), _dec44 = (0, _typeorm.Column)({
  name: 'use_sid_s',
  nullable: true
}), _dec45 = Reflect.metadata("design:type", String), _dec46 = (0, _typeorm.Column)({
  name: 'use_sync_s',
  nullable: true
}), _dec47 = Reflect.metadata("design:type", String), _dec48 = (0, _typeorm.CreateDateColumn)({
  name: 'use_created_d'
}), _dec49 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec50 = (0, _typeorm.UpdateDateColumn)({
  name: 'use_updated_d'
}), _dec51 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class User {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "statusRef", _descriptor2, this);
    _initializerDefineProperty(this, "status", _descriptor3, this);
    _initializerDefineProperty(this, "sectorRef", _descriptor4, this);
    _initializerDefineProperty(this, "sector", _descriptor5, this);
    _initializerDefineProperty(this, "profileRef", _descriptor6, this);
    _initializerDefineProperty(this, "profile", _descriptor7, this);
    _initializerDefineProperty(this, "costCenterRef", _descriptor8, this);
    _initializerDefineProperty(this, "costCenter", _descriptor9, this);
    _initializerDefineProperty(this, "name", _descriptor10, this);
    _initializerDefineProperty(this, "avatar", _descriptor11, this);
    _initializerDefineProperty(this, "lastName", _descriptor12, this);
    _initializerDefineProperty(this, "display", _descriptor13, this);
    _initializerDefineProperty(this, "login", _descriptor14, this);
    _initializerDefineProperty(this, "password", _descriptor15, this);
    _initializerDefineProperty(this, "cpf", _descriptor16, this);
    _initializerDefineProperty(this, "mail", _descriptor17, this);
    _initializerDefineProperty(this, "dn", _descriptor18, this);
    _initializerDefineProperty(this, "sid", _descriptor19, this);
    _initializerDefineProperty(this, "sync", _descriptor20, this);
    _initializerDefineProperty(this, "create", _descriptor21, this);
    _initializerDefineProperty(this, "update", _descriptor22, this);
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
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sectorRef", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "sector", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "profileRef", [_dec16, _dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "profile", [_dec19, _dec20], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "costCenterRef", [_dec21, _dec22, _dec23], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "costCenter", [_dec24, _dec25], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "name", [_dec26, _dec27], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "avatar", [_dec28, _dec29], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lastName", [_dec30, _dec31], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "display", [_dec32, _dec33], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "login", [_dec34, _dec35], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "password", [_dec36, _dec37], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "cpf", [_dec38, _dec39], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "mail", [_dec40, _dec41], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "dn", [_dec42, _dec43], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "sid", [_dec44, _dec45], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "sync", [_dec46, _dec47], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "create", [_dec48, _dec49], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "update", [_dec50, _dec51], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
var _default = User;
exports.default = _default;