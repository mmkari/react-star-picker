import * as React from 'react';
import classnames from 'classnames';

import { StarPickerButtonProps } from './types';

import './StarPickerButton.css';

const StarPickerButton = ({
  index,
  selectedIndex,
  hoverIndex,
  onClick,
  onHoverChange,
  starRenderer,
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
      className={classnames('StarPickerButton', {
        disabled,
        halfStars,
        directionRtl: halfStars && index % 2 !== 0,
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
        })}
      </div>
    </button>
  );
};

export default StarPickerButton;
