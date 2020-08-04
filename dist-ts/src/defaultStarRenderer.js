import * as React from 'react';
import DefaultStarComponent from './defaultStarRendererStarComponent';
const defaultStarRenderer = ({ index, selectedIndex, hoverIndex, starRendererProps, }) => {
    // default renderer props:
    const colorActive = 'gold', colorInactive = '#e4e4e4', colorAdd = '#e9e1b6', colorRemove = '##eede88', charCodeSelected = 9733, charCodeUnselected = 9733;
    return (React.createElement(DefaultStarComponent, { index: index, selectedIndex: selectedIndex, hoverIndex: hoverIndex, colorActive: colorActive, colorInactive: colorInactive, charCodeSelected: charCodeSelected, charCodeUnselected: charCodeUnselected, colorAdd: colorAdd, colorRemove: colorRemove }));
};
export default defaultStarRenderer;
//# sourceMappingURL=defaultStarRenderer.js.map