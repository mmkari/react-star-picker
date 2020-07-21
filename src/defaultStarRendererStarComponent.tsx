import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import { DefaultStarComponentProps } from './types';

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

export default StyledDefaultStarComponent;
