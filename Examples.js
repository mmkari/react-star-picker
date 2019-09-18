"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

require("./Examples.css");

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StarPicker = _interopRequireDefault(require("../src/StarPicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  &:hover {\n    animation: ", " 0.3s ease-in-out;\n  }\n  padding: 0;\n  margin: 0;\n  font-size: 1.2rem;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  30% {\n    transform: rotate(10deg);\n  }\n\n  70% {\n    transform: rotate(-10deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var rotate = (0, _styledComponents.keyframes)(_templateObject());

var DollarSvgContainer = _styledComponents["default"].div(_templateObject2(), rotate);

var dollarRenderer = function dollarRenderer(_ref) {
  var index = _ref.index,
      hoverIndex = _ref.hoverIndex,
      selectedIndex = _ref.selectedIndex,
      size = _ref.size;
  var selected = index <= selectedIndex;
  var nextSelection = hoverIndex != null && index <= hoverIndex;
  var hasHover = hoverIndex != null;
  var colored = selected && !hasHover || nextSelection && hasHover;
  var color = colored ? '#1ca363' : 'grey';
  var colorOutline = colored ? 'green' : 'grey';
  return React.createElement(DollarSvgContainer, null, React.createElement("svg", {
    style: {
      padding: 5
    },
    width: size * 0.7,
    viewBox: "0 0 15 22"
  }, React.createElement("path", {
    d: "M 5.7672275,0.10454656 5.7687798,1.8432524 C 3.1530349,2.1696584 0.85511786,3.5105694 0.63651923,5.9335327 0.51636012,10.566614 10.734409,11.654347 10.934687,15.030807 10.864893,17.460972 4.2894804,17.706665 3.2163668,14.995092 L 0.02261549,15.720285 C 0.77014071,18.029563 3.1584552,19.322457 5.7677453,19.684782 L 5.7687798,21.539435 8.6509212,21.539953 8.6504035,19.710663 C 11.644631,19.349577 14.241035,17.773814 14.225752,15.097063 14.229088,9.1564354 4.1341996,9.133676 3.9524306,6.0044467 3.9494677,3.7582878 10.035145,3.326126 10.629806,6.0577627 L 13.68535,5.4536939 C 13.196125,3.4596776 11.059157,2.2534069 8.6509212,1.8856981 L 8.6504035,0.10506428 Z",
    stroke: colorOutline,
    fill: selected ? color : 'none',
    strokeWidth: "0.9"
  })));
};

var Examples =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Examples, _React$Component);

  function Examples() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Examples);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Examples)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      rating1: null,
      rating2: null,
      rating3: null,
      rating4: null,
      rating5: null
    });

    _defineProperty(_assertThisInitialized(_this), "setValue", function (value, name) {
      if (name) {
        _this.setState(_defineProperty({}, name, value));
      }
    });

    return _this;
  }

  _createClass(Examples, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          rating1 = _this$state.rating1,
          rating2 = _this$state.rating2,
          rating3 = _this$state.rating3,
          rating4 = _this$state.rating4,
          rating5 = _this$state.rating5;
      return React.createElement("div", {
        className: "Examples"
      }, React.createElement(_StarPicker["default"], {
        name: "rating1",
        value: rating1,
        onChange: this.setValue,
        defaultStarRendererProps: {
          colorActive: '#df00ff',
          colorInactive: '#ccccff',
          colorBlendFractionAdd: 0.5,
          colorBlendFractionRemove: 0.6,
          charCodeUnselected: 9734
        }
      }), React.createElement(_StarPicker["default"], {
        name: "rating2",
        value: rating2,
        onChange: this.setValue,
        halfStars: true,
        size: 50,
        defaultStarRendererProps: {
          colorActive: 'orange',
          colorBlendFractionRemove: 0.4,
          charCodeUnselected: 9734
        }
      }), React.createElement(_StarPicker["default"], {
        name: "rating3",
        value: rating3,
        onChange: this.setValue,
        numberStars: 4,
        starRenderer: dollarRenderer
      }), React.createElement(_StarPicker["default"], {
        name: "rating4",
        value: rating4,
        onChange: this.setValue,
        halfStars: true,
        size: 70,
        defaultStarRendererProps: {
          colorActive: '#ff3333',
          colorInactive: '#e4e4e4',
          colorBlendFractionRemove: 0.5,
          charCodeSelected: 10029,
          charCodeUnselected: 9733
        }
      }), React.createElement(_StarPicker["default"], {
        name: "rating5",
        className: "rating-enlarge",
        value: rating5,
        onChange: this.setValue,
        doubleTapResets: true,
        defaultStarRendererProps: {
          colorInactive: '#e4e4e4',
          colorBlendFractionAdd: null,
          colorBlendFractionRemove: null,
          charCodeUnselected: 9733
        }
      }), React.createElement(_StarPicker["default"], {
        value: 2,
        onChange: this.setValue,
        numberStars: 3,
        disabled: true,
        defaultStarRendererProps: {
          colorActive: 'blue'
        }
      }));
    }
  }]);

  return Examples;
}(React.Component);

var _default = Examples;
exports["default"] = _default;