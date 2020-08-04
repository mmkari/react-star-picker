import * as React from 'react';
import { mix } from 'polished';
import classnames from 'classnames';
import styled from 'styled-components';
const DefaultStarComponent = ({ index, selectedIndex, hoverIndex, className, charCodeSelected, charCodeUnselected, }) => {
    const selected = index <= selectedIndex;
    const nextSelection = hoverIndex != null && index <= hoverIndex;
    const hasHover = hoverIndex != null;
    return (React.createElement("div", { className: classnames(className, 'DefaultStarComponent', {
            selected,
            newSelection: hasHover && nextSelection && !selected,
            lostSelection: hasHover && selected && !nextSelection,
        }) }, selected
        ? String.fromCharCode(charCodeSelected)
        : String.fromCharCode(charCodeUnselected)));
};
const StyledDefaultStarComponent = styled(DefaultStarComponent) `
  transition: color 0.2s;
  color: ${(props) => props.colorInactive};

  &.selected {
    color: ${(props) => props.colorActive};
  }

  &.newSelection {
    color: ${(props) => props.colorAdd};
  }

  &.lostSelection {
    color: ${(props) => props.colorRemove};
  }
`;
const defaultColorActive = 'gold';
const defaultColorInactive = '#e4e4e4';
export const mixColorAdd = (active, inactive) => mix(0.2, active, inactive);
export const mixColorRemove = (active, inactive) => mix(0.6, inactive, active);
export const defaultColors = {
    colorActive: defaultColorActive,
    colorInactive: defaultColorInactive,
    colorAdd: mixColorAdd(defaultColorActive, defaultColorInactive),
    colorRemove: mixColorRemove(defaultColorActive, defaultColorInactive),
};
const defaultStarRenderer = ({ index, selectedIndex, hoverIndex, starRendererProps, }) => {
    // default renderer props:
    const { colorActive = defaultColors.colorActive, colorInactive = defaultColors.colorInactive, colorAdd = mixColorAdd(colorActive, colorInactive) ||
        defaultColors.colorAdd, colorRemove = mixColorRemove(colorActive, colorInactive) ||
        defaultColors.colorRemove, charCodeSelected = 9733, charCodeUnselected = 9733, } = starRendererProps;
    return (React.createElement(DefaultStarComponent, { index: index, selectedIndex: selectedIndex, hoverIndex: hoverIndex, colorActive: colorActive, colorInactive: colorInactive, charCodeSelected: charCodeSelected, charCodeUnselected: charCodeUnselected, colorAdd: colorAdd, colorRemove: colorRemove }));
};
export default defaultStarRenderer;
//# sourceMappingURL=defaultStarRenderer.js.map