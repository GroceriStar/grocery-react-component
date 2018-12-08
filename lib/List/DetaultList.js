"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _List = _interopRequireDefault(require("./List"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wrapper = function Wrapper(_ref) {
  var children = _ref.children;
  return _react.default.createElement("ul", null, children);
};

var renderItem = function renderItem(_ref2) {
  var key = _ref2.key,
      value = _ref2.value;
  return _react.default.createElement("li", {
    key: key
  }, value);
};

var DefaultList = function DefaultList(_ref3) {
  var items = _ref3.items;
  return _react.default.createElement(Wrapper, null, _react.default.createElement(_List.default, {
    items: items,
    renderItem: renderItem
  }));
};

var _default = DefaultList;
exports.default = _default;