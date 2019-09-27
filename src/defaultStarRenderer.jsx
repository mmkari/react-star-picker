// @flow
import * as React from 'react';
import { mix } from 'polished';
import DefaultStarComponent from './defaultStarRendererStarComponent';

// import type { StarRendererProps, DefaultStarComponentProps } from './types';

type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorAdd?: ?string,
  colorRemove?: ?string,
|};
type GenericRendererProps = {|
  /** the zero based index of this star */
  index: number,
  /** index of the star matching the current rating  */
  selectedIndex: number,
  /** index of the star currently hovered on */
  hoverIndex: ?number,
  size: number,
|};
type StarRendererProps = {|
  ...GenericRendererProps,
  defaultStarRendererProps: DefaultRendererProps,
|};

const defaultStarRenderer = ({
  index,
  selectedIndex,
  hoverIndex,
  size,
  defaultStarRendererProps,
}: StarRendererProps): React.Node => {
  // default renderer props:
  const {
    colorActive = 'gold',
    colorInactive = '#e4e4e4', // a light gray
    colorAdd = mix(0.2, colorActive, colorInactive), // mix colors for cue on stars to be added
    colorRemove = mix(0.6, colorInactive, colorActive), // mix colors for cue on stars to be removed
    charCodeSelected = 9733,
    charCodeUnselected = 9733,
  } = defaultStarRendererProps;

  return (
    <DefaultStarComponent
      index={index}
      selectedIndex={selectedIndex}
      hoverIndex={hoverIndex}
      size={size}
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
