import * as React from 'react';
import { mix } from 'polished';
import DefaultStarComponent from './defaultStarRendererStarComponent';

import { StarRendererProps } from './types';

const defaultStarRenderer = ({
  index,
  selectedIndex,
  hoverIndex,
  starRendererProps,
}: StarRendererProps): React.ReactNode => {
  // default renderer props:
  const {
    colorActive = 'gold',
    colorInactive = '#e4e4e4', // a light gray
    colorAdd = mix(0.2, colorActive, colorInactive), // mix colors for cue on stars to be added
    colorRemove = mix(0.6, colorInactive, colorActive), // mix colors for cue on stars to be removed
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
