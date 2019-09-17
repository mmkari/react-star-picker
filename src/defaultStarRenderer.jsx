// @flow
import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { mix } from 'polished';

import type { StarRendererProps, DefaultStarComponentProps } from './types';

const DefaultStarComponent = ({
  index,
  selectedIndex,
  hoverIndex,
  className,
  charCodeSelected,
  charCodeUnselected,
}: DefaultStarComponentProps) => {
  const selected = index <= selectedIndex;
  const nextSelection = hoverIndex != null && index <= hoverIndex;
  const hasHover = hoverIndex != null;

  return (
    <div
      className={classnames(className, 'DefaultStarComponent', {
        selected,
        newSelection: hasHover && nextSelection && !selected,
        lostSelection: hasHover && selected && !nextSelection,
      })}
    >
      {selected
        ? String.fromCharCode(charCodeSelected)
        : String.fromCharCode(charCodeUnselected)}
    </div>
  );
};

const StyledDefaultStarComponent = styled(DefaultStarComponent)`
  transition: color ${(props) => `${props.colorTransitionDuration}s`};
  color: ${(props) => props.colorInactive};

  &.selected {
    color: ${(props) => props.colorActive};
  }

  &.newSelection {
    color: ${(props) =>
      props.colorBlendFractionAdd
        ? mix(
            props.colorBlendFractionAdd,
            props.colorActive,
            props.colorInactive
          )
        : props.colorInactive};
  }

  &.lostSelection {
    color: ${(props) =>
      props.colorBlendFractionRemove
        ? mix(
            props.colorBlendFractionRemove,
            props.colorInactive,
            props.colorActive
          )
        : props.colorActive};
  }
`;

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
    colorBlendFractionAdd = 0.3,
    colorBlendFractionRemove = 0.3,
    colorTransitionDuration = 0.2,
  } = defaultStarRendererProps;

  return (
    <StyledDefaultStarComponent
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
      colorTransitionDuration={colorTransitionDuration}
    />
  );
};

export default defaultStarRenderer;
