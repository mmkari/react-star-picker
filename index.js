"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

require("./index.css");

var _Examples = _interopRequireDefault(require("./Examples"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (typeof window !== 'undefined') {
  _reactDom["default"].render(_react["default"].createElement(_Examples["default"], null), window.document.getElementById('root'));
}