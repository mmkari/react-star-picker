// @flow
import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import type { StarPickerButtonProps } from './types';

const StarPickerButton = ({
  index,
  onClick,
  selectedIndex,
  hoverIndex,
  onHoverChange,
  disabled,
  className,
  starRenderer,
  halfStars,
  size,
  defaultStarRendererProps,
}: StarPickerButtonProps) => {
  const handleMouseEnter = () => {
    if (!disabled) {
      onHoverChange(index);
    }
  };
  const handleMouseLeave = () => {
    if (!disabled) {
      onHoverChange(null);
    }
  };
  const handleClick = () => {
    onClick(index);
  };

  return (
    <button
      className={classnames(className, 'StarPickerButton', {
        disabled,
        halfStars,
      })}
      type="button"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={disabled}
    >
      <div className="StarPickerButton-buttonContent">
        {starRenderer({
          index,
          selectedIndex,
          hoverIndex,
          size,
          defaultStarRendererProps,
        })}
      </div>
    </button>
  );
};

const StyledStarPickerButton = styled(StarPickerButton)`
  background: transparent;
  border: none;
  font-size: ${(props) => `${props.size}px`};
  cursor: pointer;
  padding: 0;
  margin: 0;
  line-height: 100%;

  &.disabled {
    cursor: not-allowed;
  }

  width: ${(props) => `${props.size}px`};
  .StarPickerButton-buttonContent {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &.halfStars {
    width: ${(props) => `${props.size / 2.0}px`};
    .StarPickerButton-buttonContent {
      width: ${(props) => `${props.size}px`};
    }
    overflow: hidden;
    direction: ${(props) => (props.index % 2 !== 0 ? 'rtl' : 'ltr')};
  }
`;

export default StyledStarPickerButton;
