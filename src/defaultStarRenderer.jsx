// @flow
import * as React from 'react';
import DefaultStarComponent from './defaultStarRendererStarComponent';

// import type { StarRendererProps, DefaultStarComponentProps } from './types';

type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorBlendFractionAdd?: ?number,
  colorBlendFractionRemove?: ?number,
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
}: StarRendererProps) => {
  // default renderer props:
  const {
    colorActive = 'gold',
    colorInactive = '#e4e4e4', // a light gray
    charCodeSelected = 9733,
    charCodeUnselected = 9733,
    colorBlendFractionAdd = 0.2,
    colorBlendFractionRemove = 0.5,
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
      colorBlendFractionAdd={colorBlendFractionAdd}
      colorBlendFractionRemove={colorBlendFractionRemove}
    />
  );
};

export default defaultStarRenderer;
