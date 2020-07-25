import * as React from 'react';
import { mix } from 'polished';
import DefaultStarComponent from './defaultStarRendererStarComponent';

import { StarRendererProps } from './types';

const defaultColorActive = 'gold';
const defaultColorInactive = '#e4e4e4';
export const mixColorAdd = (active, inactive) => mix(0.2, active, inactive);
export const mixColorRemove = (active, inactive) => mix(0.6, inactive, active);
export const defaultColors = {
  colorActive: defaultColorActive,
  colorInactive: defaultColorInactive, // a light gray
  colorAdd: mixColorAdd(defaultColorActive, defaultColorInactive), // mix colors for cue on stars to be added
  colorRemove: mixColorRemove(defaultColorActive, defaultColorInactive), // mix colors for cue on stars to be removed
};

const defaultStarRenderer = ({
  index,
  selectedIndex,
  hoverIndex,
  starRendererProps,
}: StarRendererProps): React.ReactNode => {
  // default renderer props:
  const {
    colorActive = defaultColors.colorActive,
    colorInactive = defaultColors.colorInactive,
    colorAdd = defaultColors.colorAdd,
    colorRemove = defaultColors.colorRemove,
    charCodeSelected = 9733,
    charCodeUnselected = 9733,
  } = starRendererProps;

  return (
    <DefaultStarComponent
      index={index}
      selectedIndex={selectedIndex}
      hoverIndex={hoverIndex}
      colorActive={colorActive}
      colorInactive={colorInactive}
      charCodeSelected={charCodeSelected}
      charCodeUnselected={charCodeUnselected}
      colorAdd={colorAdd}
      colorRemove={colorRemove}
    />
  );
};

export default defaultStarRenderer;
