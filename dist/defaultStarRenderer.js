"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultColors = exports.mixColorRemove = exports.mixColorAdd = void 0;

var React = _interopRequireWildcard(require("react"));

var _polished = require("polished");

var _defaultStarRendererStarComponent = _interopRequireDefault(require("./defaultStarRendererStarComponent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var defaultColorActive = 'gold';
var defaultColorInactive = '#e4e4e4';

var mixColorAdd = function mixColorAdd(active, inactive) {
  return (0, _polished.mix)(0.2, active, inactive);
};

exports.mixColorAdd = mixColorAdd;

var mixColorRemove = function mixColorRemove(active, inactive) {
  return (0, _polished.mix)(0.6, inactive, active);
};

exports.mixColorRemove = mixColorRemove;
var defaultColors = {
  colorActive: defaultColorActive,
  colorInactive: defaultColorInactive,
  // a light gray
  colorAdd: mixColorAdd(defaultColorActive, defaultColorInactive),
  // mix colors for cue on stars to be added
  colorRemove: mixColorRemove(defaultColorActive, defaultColorInactive) // mix colors for cue on stars to be removed

};
exports.defaultColors = defaultColors;

var defaultStarRenderer = function defaultStarRenderer(_ref) {
  var index = _ref.index,
      selectedIndex = _ref.selectedIndex,
      hoverIndex = _ref.hoverIndex,
      starRendererProps = _ref.starRendererProps;
  // default renderer props:
  var _starRendererProps$co = starRendererProps.colorActive,
      colorActive = _starRendererProps$co === void 0 ? defaultColors.colorActive : _starRendererProps$co,
      _starRendererProps$co2 = starRendererProps.colorInactive,
      colorInactive = _starRendererProps$co2 === void 0 ? defaultColors.colorInactive : _starRendererProps$co2,
      _starRendererProps$co3 = starRendererProps.colorAdd,
      colorAdd = _starRendererProps$co3 === void 0 ? mixColorAdd(colorActive, colorInactive) || defaultColors.colorAdd : _starRendererProps$co3,
      _starRendererProps$co4 = starRendererProps.colorRemove,
      colorRemove = _starRendererProps$co4 === void 0 ? mixColorRemove(colorActive, colorInactive) || defaultColors.colorRemove : _starRendererProps$co4,
      _starRendererProps$ch = starRendererProps.charCodeSelected,
      charCodeSelected = _starRendererProps$ch === void 0 ? 9733 : _starRendererProps$ch,
      _starRendererProps$ch2 = starRendererProps.charCodeUnselected,
      charCodeUnselected = _starRendererProps$ch2 === void 0 ? 9733 : _starRendererProps$ch2;
  return React.createElement(_defaultStarRendererStarComponent["default"], {
    index: index,
    selectedIndex: selectedIndex,
    hoverIndex: hoverIndex,
    colorActive: colorActive,
    colorInactive: colorInactive,
    charCodeSelected: charCodeSelected,
    charCodeUnselected: charCodeUnselected,
    colorAdd: colorAdd,
    colorRemove: colorRemove
  });
};

var _default = defaultStarRenderer;
exports["default"] = _default;