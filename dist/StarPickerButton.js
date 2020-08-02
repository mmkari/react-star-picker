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

var StarPickerButton = function StarPickerButton(_ref) {
  var className = _ref.className,
      index = _ref.index,
      selectedIndex = _ref.selectedIndex,
      hoverIndex = _ref.hoverIndex,
      onClick = _ref.onClick,
      onHoverChange = _ref.onHoverChange,
      starRenderer = _ref.starRenderer,
      starRendererProps = _ref.starRendererProps,
      halfStars = _ref.halfStars,
      disabled = _ref.disabled;

  var onMouseEnter = function onMouseEnter() {
    if (!disabled) {
      onHoverChange(index);
    }
  };

  var onMouseLeave = function onMouseLeave() {
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
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    disabled: disabled
  }, React.createElement("div", {
    className: "StarPickerButton-buttonContent"
  }, starRenderer({
    index: index,
    selectedIndex: selectedIndex,
    hoverIndex: hoverIndex,
    starRendererProps: starRendererProps
  })));
};

var StyledStarPickerButton = (0, _styledComponents["default"])(StarPickerButton).withConfig({
  displayName: "StarPickerButton__StyledStarPickerButton",
  componentId: "dig9c0-0"
})(["background:transparent;border:none;font-size:", ";cursor:pointer;padding:0;margin:0;line-height:100%;&.disabled{cursor:not-allowed;}width:", ";.StarPickerButton-buttonContent{display:flex;justify-content:center;align-items:center;}&.halfStars{width:", ";.StarPickerButton-buttonContent{width:", ";}overflow:hidden;direction:", ";}"], function (props) {
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