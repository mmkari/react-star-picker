// @flow
import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { mix } from 'polished';

// import type { StarRendererProps, DefaultStarComponentProps } from './types';

type DefaultRendererPropsWithDefaults = {|
  colorActive: string,
  colorInactive: string,
  /** UTF-16 decimal */
  charCodeSelected: number,
  /** UTF-16 decimal */
  charCodeUnselected: number,
  colorBlendFractionAdd: ?number,
  colorBlendFractionRemove: ?number,
  colorTransitionDuration: number,
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
type DefaultStarComponentProps = {|
  className: string,
  ...GenericRendererProps,
  ...DefaultRendererPropsWithDefaults,
|};

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

export default StyledDefaultStarComponent;
