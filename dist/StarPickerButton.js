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
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  font-size: ", ";\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  line-height: 100%;\n\n  &.disabled {\n    cursor: not-allowed;\n  }\n\n  width: ", ";\n  .StarPickerButton-buttonContent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &.halfStars {\n    width: ", ";\n    .StarPickerButton-buttonContent {\n      width: ", ";\n    }\n    overflow: hidden;\n    direction: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StarPickerButton = function StarPickerButton(_ref) {
  var index = _ref.index,
      onClick = _ref.onClick,
      selectedIndex = _ref.selectedIndex,
      hoverIndex = _ref.hoverIndex,
      onHoverChange = _ref.onHoverChange,
      disabled = _ref.disabled,
      className = _ref.className,
      starRenderer = _ref.starRenderer,
      halfStars = _ref.halfStars,
      size = _ref.size,
      defaultStarRendererProps = _ref.defaultStarRendererProps;

  var handleMouseEnter = function handleMouseEnter() {
    if (!disabled) {
      onHoverChange(index);
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (!disabled) {
      onHoverChange(null);
    }
  };

  var handleClick = function handleClick() {
    onClick(index);
  };

  return React.createElement("button", {
    className: (0, _classnames["default"])(className, 'StarPickerButton', {
      disabled: disabled,
      halfStars: halfStars
    }),
    type: "button",
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    disabled: disabled
  }, React.createElement("div", {
    className: "StarPickerButton-buttonContent"
  }, starRenderer({
    index: index,
    selectedIndex: selectedIndex,
    hoverIndex: hoverIndex,
    size: size,
    defaultStarRendererProps: defaultStarRendererProps
  })));
};

var StyledStarPickerButton = (0, _styledComponents["default"])(StarPickerButton)(_templateObject(), function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(props.size / 2.0, "px");
}, function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return props.index % 2 !== 0 ? 'rtl' : 'ltr';
});
var _default = StyledStarPickerButton;
exports["default"] = _default;