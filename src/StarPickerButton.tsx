import * as React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';

import type { StarPickerButtonProps } from './types';

const StarPickerButton = ({
  className,
  index,
  selectedIndex,
  hoverIndex,
  onClick,
  onHoverChange,
  starRenderer,
  starRendererProps,
  halfStars,
  disabled,
}: StarPickerButtonProps) => {
  const onMouseEnter = () => {
    if (!disabled) {
      onHoverChange(index);
    }
  };
  const onMouseLeave = () => {
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      <div className="StarPickerButton-buttonContent">
        {starRenderer({
          index,
          selectedIndex,
          hoverIndex,
          starRendererProps,
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
