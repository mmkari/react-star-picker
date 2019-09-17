"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _defaultStarRenderer = _interopRequireDefault(require("./defaultStarRenderer"));

var _StarPickerButton = _interopRequireDefault(require("./StarPickerButton"));

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

var valueToIndex = function valueToIndex(value, halfStars) {
  if (!value) return -1;
  return halfStars ? value * 2 - 1 : value - 1;
};

var indexToValue = function indexToValue(index, halfStars) {
  return halfStars ? (index + 1) / 2.0 : index + 1;
};

var formatValue = function formatValue(index, previousValue, halfStars, doubleTapResets) {
  var newValue = indexToValue(index, halfStars);

  if (doubleTapResets && newValue === previousValue) {
    return null;
  }

  return newValue;
};

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
      hoverIndex: null
    });

    _defineProperty(_assertThisInitialized(_this), "updateValue", function (index) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          value = _this$props.value,
          halfStars = _this$props.halfStars,
          doubleTapResets = _this$props.doubleTapResets,
          name = _this$props.name;

      if (onChange) {
        onChange(formatValue(index, value, halfStars, doubleTapResets), name);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onHoverChange", function (index) {
      _this.setState({
        hoverIndex: index
      });
    });

    return _this;
  }

  _createClass(StarPicker, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          value = _this$props2.value,
          className = _this$props2.className,
          numberStars = _this$props2.numberStars,
          size = _this$props2.size,
          disabled = _this$props2.disabled,
          halfStars = _this$props2.halfStars,
          starRenderer = _this$props2.starRenderer,
          defaultStarRendererProps = _this$props2.defaultStarRendererProps;
      var hoverIndex = this.state.hoverIndex;
      var selectedIndex = valueToIndex(value, halfStars);
      var numberButtons = halfStars ? 2 * numberStars : numberStars;
      return React.createElement("div", {
        className: (0, _classnames["default"])('StarPicker', className)
      }, _toConsumableArray(Array(numberButtons).keys()).map(function (i) {
        return React.createElement(_StarPickerButton["default"], {
          key: "star-".concat(i),
          index: i,
          selectedIndex: selectedIndex,
          hoverIndex: hoverIndex,
          onClick: _this2.updateValue,
          onHoverChange: _this2.onHoverChange,
          starRenderer: starRenderer,
          defaultStarRendererProps: defaultStarRendererProps,
          halfStars: halfStars,
          disabled: disabled,
          size: size
        });
      }));
    }
  }]);

  return StarPicker;
}(React.Component);

_defineProperty(StarPicker, "defaultProps", {
  name: undefined,
  className: undefined,
  numberStars: 5,
  size: 34,
  // in px, used for font-size and width stylings
  disabled: false,
  halfStars: false,
  starRenderer: _defaultStarRenderer["default"],
  doubleTapResets: false
});

var _default = StarPicker;
exports["default"] = _default;