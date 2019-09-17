"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: color ", ";\n  color: ", ";\n\n  &.selected {\n    color: ", ";\n  }\n\n  &.newSelection {\n    color: ", ";\n  }\n\n  &.lostSelection {\n    color: ", ";\n  }\n"]);

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
  return "".concat(props.colorTransitionDuration, "s");
}, function (props) {
  return props.colorInactive;
}, function (props) {
  return props.colorActive;
}, function (props) {
  return props.colorBlendFractionAdd ? (0, _polished.mix)(props.colorBlendFractionAdd, props.colorActive, props.colorInactive) : props.colorInactive;
}, function (props) {
  return props.colorBlendFractionRemove ? (0, _polished.mix)(props.colorBlendFractionRemove, props.colorInactive, props.colorActive) : props.colorActive;
});

var defaultStarRenderer = function defaultStarRenderer(_ref2) {
  var index = _ref2.index,
      selectedIndex = _ref2.selectedIndex,
      hoverIndex = _ref2.hoverIndex,
      size = _ref2.size,
      defaultStarRendererProps = _ref2.defaultStarRendererProps;
  // default renderer props:
  var _defaultStarRendererP = defaultStarRendererProps.colorActive,
      colorActive = _defaultStarRendererP === void 0 ? 'gold' : _defaultStarRendererP,
      _defaultStarRendererP2 = defaultStarRendererProps.colorInactive,
      colorInactive = _defaultStarRendererP2 === void 0 ? '#e4e4e4' : _defaultStarRendererP2,
      _defaultStarRendererP3 = defaultStarRendererProps.charCodeSelected,
      charCodeSelected = _defaultStarRendererP3 === void 0 ? 9733 : _defaultStarRendererP3,
      _defaultStarRendererP4 = defaultStarRendererProps.charCodeUnselected,
      charCodeUnselected = _defaultStarRendererP4 === void 0 ? 9733 : _defaultStarRendererP4,
      _defaultStarRendererP5 = defaultStarRendererProps.colorBlendFractionAdd,
      colorBlendFractionAdd = _defaultStarRendererP5 === void 0 ? 0.3 : _defaultStarRendererP5,
      _defaultStarRendererP6 = defaultStarRendererProps.colorBlendFractionRemove,
      colorBlendFractionRemove = _defaultStarRendererP6 === void 0 ? 0.3 : _defaultStarRendererP6,
      _defaultStarRendererP7 = defaultStarRendererProps.colorTransitionDuration,
      colorTransitionDuration = _defaultStarRendererP7 === void 0 ? 0.2 : _defaultStarRendererP7;
  return React.createElement(StyledDefaultStarComponent, {
    index: index,
    selectedIndex: selectedIndex,
    hoverIndex: hoverIndex,
    size: size,
    colorActive: colorActive,
    colorInactive: colorInactive,
    charCodeSelected: charCodeSelected,
    charCodeUnselected: charCodeUnselected,
    colorBlendFractionAdd: colorBlendFractionAdd,
    colorBlendFractionRemove: colorBlendFractionRemove,
    colorTransitionDuration: colorTransitionDuration
  });
};

var _default = defaultStarRenderer;
exports["default"] = _default;