"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeorm = require("typeorm");
var _uuid = require("uuid");
var _CostCenter = _interopRequireDefault(require("../../costCenter/entities/CostCenter"));
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }
let Apportion = (_dec = (0, _typeorm.Entity)('apportion'), _dec2 = Reflect.metadata("design:type", Function), _dec3 = Reflect.metadata("design:paramtypes", []), _dec4 = (0, _typeorm.PrimaryColumn)({
  name: 'app_id_s'
}), _dec5 = Reflect.metadata("design:type", String), _dec6 = (0, _typeorm.ManyToOne)(() => _CostCenter.default), _dec7 = (0, _typeorm.JoinColumn)({
  name: 'app_costcenter_s'
}), _dec8 = Reflect.metadata("design:type", typeof _CostCenter.default === "undefined" ? Object : _CostCenter.default), _dec9 = (0, _typeorm.Column)({
  name: 'app_costcenter_s'
}), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.ManyToOne)(() => _CostCenter.default), _dec12 = (0, _typeorm.JoinColumn)({
  name: 'app_apportion_s'
}), _dec13 = Reflect.metadata("design:type", typeof _CostCenter.default === "undefined" ? Object : _CostCenter.default), _dec14 = (0, _typeorm.Column)({
  name: 'app_apportion_s'
}), _dec15 = Reflect.metadata("design:type", String), _dec16 = (0, _typeorm.Column)({
  name: 'app_value_n'
}), _dec17 = Reflect.metadata("design:type", Number), _dec18 = (0, _typeorm.CreateDateColumn)({
  name: 'app_created_d'
}), _dec19 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec20 = (0, _typeorm.UpdateDateColumn)({
  name: 'app_updated_d'
}), _dec21 = Reflect.metadata("design:type", typeof Date === "undefined" ? Object : Date), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class Apportion {
  constructor() {
    _initializerDefineProperty(this, "id", _descriptor, this);
    _initializerDefineProperty(this, "costCenterRef", _descriptor2, this);
    _initializerDefineProperty(this, "costCenter", _descriptor3, this);
    _initializerDefineProperty(this, "apportionRef", _descriptor4, this);
    _initializerDefineProperty(this, "apportion", _descriptor5, this);
    _initializerDefineProperty(this, "value", _descriptor6, this);
    _initializerDefineProperty(this, "create", _descriptor7, this);
    _initializerDefineProperty(this, "update", _descriptor8, this);
    if (!this.id) {
      this.id = (0, _uuid.v4)();
    }
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "costCenterRef", [_dec6, _dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "costCenter", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "apportionRef", [_dec11, _dec12, _dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "apportion", [_dec14, _dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "value", [_dec16, _dec17], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "create", [_dec18, _dec19], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "update", [_dec20, _dec21], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class) || _class) || _class);
var _default = Apportion;
exports.default = _default;