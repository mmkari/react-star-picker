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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: transparent;\n  border: none;\n  font-size: ", ";\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  line-height: 100%;\n\n  &.disabled {\n    cursor: not-allowed;\n  }\n\n  width: ", ";\n  .StarPickerStar-buttonContent {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  &.halfStars {\n    width: ", ";\n    .StarPickerStar-buttonContent {\n      width: ", ";\n    }\n    overflow: hidden;\n    direction: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  transition: color ", ";\n  color: ", ";\n\n  &.selected {\n    color: ", ";\n  }\n\n  &.newSelection {\n    color: ", ";\n  }\n\n  &.lostSelection {\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DefaultStarComponent = function DefaultStarComponent(_ref) {
  var value = _ref.value,
      rating = _ref.rating,
      hoverValue = _ref.hoverValue,
      className = _ref.className,
      charCodeSelected = _ref.charCodeSelected,
      charCodeUnselected = _ref.charCodeUnselected;
  var selected = value <= rating;
  var nextSelection = hoverValue && value <= hoverValue;
  var hasHover = hoverValue !== null;
  return React.createElement("div", {
    className: (0, _classnames["default"])(className, 'DefaultStarComponent', {
      selected: selected,
      nextSelection: nextSelection && hasHover,
      newSelection: hasHover && nextSelection && !selected,
      lostSelection: hasHover && selected && !nextSelection
    })
  }, selected ? String.fromCharCode(charCodeSelected) : String.fromCharCode(charCodeUnselected));
};

var StyledDefaultStarComponent = (0, _styledComponents["default"])(DefaultStarComponent)(_templateObject(), function (props) {
  return props.colorTransitionDuration + 's';
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
  var starRendererProps = _ref2.starRendererProps,
      rest = _objectWithoutProperties(_ref2, ["starRendererProps"]);

  // default renderer props:
  var _starRendererProps$co = starRendererProps.colorActive,
      colorActive = _starRendererProps$co === void 0 ? 'gold' : _starRendererProps$co,
      _starRendererProps$co2 = starRendererProps.colorInactive,
      colorInactive = _starRendererProps$co2 === void 0 ? '#e4e4e4' : _starRendererProps$co2,
      _starRendererProps$ch = starRendererProps.charCodeSelected,
      charCodeSelected = _starRendererProps$ch === void 0 ? 9733 : _starRendererProps$ch,
      _starRendererProps$ch2 = starRendererProps.charCodeUnselected,
      charCodeUnselected = _starRendererProps$ch2 === void 0 ? 9733 : _starRendererProps$ch2,
      _starRendererProps$co3 = starRendererProps.colorBlendFractionAdd,
      colorBlendFractionAdd = _starRendererProps$co3 === void 0 ? 0.3 : _starRendererProps$co3,
      _starRendererProps$co4 = starRendererProps.colorBlendFractionRemove,
      colorBlendFractionRemove = _starRendererProps$co4 === void 0 ? 0.3 : _starRendererProps$co4,
      _starRendererProps$co5 = starRendererProps.colorTransitionDuration,
      colorTransitionDuration = _starRendererProps$co5 === void 0 ? 0.2 : _starRendererProps$co5;
  return React.createElement(StyledDefaultStarComponent, _extends({}, rest, {
    colorActive: colorActive,
    colorInactive: colorInactive,
    charCodeSelected: charCodeSelected,
    charCodeUnselected: charCodeUnselected,
    colorBlendFractionAdd: colorBlendFractionAdd,
    colorBlendFractionRemove: colorBlendFractionRemove,
    colorTransitionDuration: colorTransitionDuration
  }));
};

var StarPickerStar = function StarPickerStar(_ref3) {
  var value = _ref3.value,
      onClick = _ref3.onClick,
      rating = _ref3.rating,
      hoverValue = _ref3.hoverValue,
      onHoverChange = _ref3.onHoverChange,
      disabled = _ref3.disabled,
      className = _ref3.className,
      customStarRenderer = _ref3.customStarRenderer,
      halfStars = _ref3.halfStars,
      size = _ref3.size,
      starRendererProps = _ref3.starRendererProps;

  var handleMouseEnter = function handleMouseEnter() {
    if (!disabled) {
      onHoverChange(value);
    }
  };

  var handleMouseLeave = function handleMouseLeave() {
    if (!disabled) {
      onHoverChange(null);
    }
  };

  var handleClick = function handleClick() {
    onClick(value);
  };

  var starRenderer = customStarRenderer || defaultStarRenderer;
  return React.createElement("button", {
    className: (0, _classnames["default"])(className, 'StarPickerStar', {
      disabled: disabled,
      halfStars: halfStars
    }),
    type: "button",
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    disabled: disabled
  }, React.createElement("div", {
    className: "StarPickerStar-buttonContent"
  }, starRenderer({
    value: value,
    rating: rating,
    hoverValue: hoverValue,
    size: size,
    starRendererProps: starRendererProps
  })));
};

var StyledStarPickerStar = (0, _styledComponents["default"])(StarPickerStar)(_templateObject2(), function (props) {
  return props.size + 'px';
}, function (props) {
  return props.size + 'px';
}, function (props) {
  return props.size / 2.0 + 'px';
}, function (props) {
  return props.size + 'px';
}, function (props) {
  return props.value % 2 === 0 ? 'rtl' : 'ltr';
});

var StarPicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(StarPicker, _React$Component);

  function StarPicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, StarPicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StarPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hoverValue: null
    });

    _defineProperty(_assertThisInitialized(_this), "updateRating", function (value) {
      var _this$props = _this.props,
          rating = _this$props.rating,
          name = _this$props.name,
          onChange = _this$props.onChange,
          halfStars = _this$props.halfStars,
          doubleTapResets = _this$props.doubleTapResets;

      if (onChange) {
        var newRating = halfStars ? value / 2.0 : value;

        if (doubleTapResets && newRating === rating) {
          newRating = 0;
        }

        onChange(newRating, name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onHoverChange", function (index) {
      _this.setState({
        hoverValue: index
      });
    });

    return _this;
  }

  _createClass(StarPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          numberStars = _this$props2.numberStars,
          rating = _this$props2.rating,
          disabled = _this$props2.disabled,
          halfStars = _this$props2.halfStars,
          customStarRenderer = _this$props2.customStarRenderer,
          className = _this$props2.className,
          starRendererProps = _objectWithoutProperties(_this$props2, ["numberStars", "rating", "disabled", "halfStars", "customStarRenderer", "className"]); // starRendererProps contains rest of props so this component's props are exact


      var numberRating = rating || 0;
      return React.createElement("div", {
        className: (0, _classnames["default"])('StarPicker', className)
      }, _toConsumableArray(Array(halfStars ? 2 * numberStars : numberStars)).map(function (_, index) {
        return React.createElement(StyledStarPickerStar, {
          key: index,
          value: index + 1,
          onClick: _this2.updateRating,
          rating: halfStars ? numberRating * 2 : numberRating,
          halfStars: halfStars,
          hoverValue: _this2.state.hoverValue,
          onHoverChange: _this2.onHoverChange,
          disabled: disabled,
          customStarRenderer: customStarRenderer,
          starRendererProps: starRendererProps,
          size: _this2.props.size
        });
      }));
    }
  }]);

  return StarPicker;
}(React.Component);

_defineProperty(StarPicker, "defaultProps", {
  rating: 0,
  // undefined rating interpreted as 0 stars
  halfStars: false,
  numberStars: 5,
  size: 34 // in px, used for font-size and width stylings

});

var _default = StarPicker;
exports["default"] = _default;