"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _uuid = require("uuid");
var _Status = _interopRequireDefault(require("../../status/entities/Status"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let Profile = (_dec = (0, _typeorm.Entity)('profile'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)({
  name: 'pro_id_s'
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _Status.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'pro_status_s'
}), _dec8 = Reflect.metadata("design:type", typeof _Status.default === "undefined" ? Object : _Status.default), _dec9 = (0, _typeorm.Column)({
  name: 'pro_status_s'
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)({
  name: 'pro_name_s'
}), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)({
  name: 'pro_obs_s',
  nullable: true
}), _dec14 = Reflect.metadata("design:type", String), _dec15 = (0, _typeorm.CreateDateColumn)({
  name: 'pro_created_d'
}), _dec16 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec17 = (0, _typeorm.UpdateDateColumn)({
  name: 'pro_updated_d'
}), _dec18 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Profile {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "statusRef", _descriptor2, this);
    _initializerDefineProperty(this, "status", _descriptor3, this);
    _initializerDefineProperty(this, "name", _descriptor4, this);
    _initializerDefineProperty(this, "obs", _descriptor5, this);
    _initializerDefineProperty(this, "create", _descriptor6, this);
    _initializerDefineProperty(this, "update", _descriptor7, this);
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
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "obs", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "create", [_dec15, _dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "update", [_dec17, _dec18], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
var _default = Profile;
exports.default = _default;