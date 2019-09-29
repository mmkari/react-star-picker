"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: color 0.2s;\n  color: ", ";\n\n  &.selected {\n    color: ", ";\n  }\n\n  &.newSelection {\n    color: ", ";\n  }\n\n  &.lostSelection {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefaultStarComponent = function DefaultStarComponent(_ref) {
  var index = _ref.index,
      selectedIndex = _ref.selectedIndex,
      hoverIndex = _ref.hoverIndex,
      className = _ref.className,
      charCodeSelected = _ref.charCodeSelected,
      charCodeUnselected = _ref.charCodeUnselected;
  var selected = index <= selectedIndex;
  var nextSelection = hoverIndex != null && index <= hoverIndex;
  var hasHover = hoverIndex != null;
  return React.createElement("div", {
    className: (0, _classnames["default"])(className, 'DefaultStarComponent', {
      selected: selected,
      newSelection: hasHover && nextSelection && !selected,
      lostSelection: hasHover && selected && !nextSelection
    })
  }, selected ? String.fromCharCode(charCodeSelected) : String.fromCharCode(charCodeUnselected));
};

var StyledDefaultStarComponent = (0, _styledComponents["default"])(DefaultStarComponent)(_templateObject(), function (props) {
  return props.colorInactive;
}, function (props) {
  return props.colorActive;
}, function (props) {
  return props.colorAdd;
}, function (props) {
  return props.colorRemove;
});
var _default = StyledDefaultStarComponent;
exports["default"] = _default;