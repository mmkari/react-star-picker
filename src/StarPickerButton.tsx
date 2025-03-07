import * as React from 'react';

import StarPickerButtonContent from './StarPickerButtonContent';

import { StarPickerButtonProps } from './types';

import './StarPickerButton.css';
import { getClassName } from './helpers';

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

  // to make styling easier, we add several classes to the returned button
  const selected = index <= selectedIndex; // this button is part of the current selection
  const hoverActive = hoverIndex != null; // cursor is currently hovered over the buttons
  const inHoverRange = hoverActive && index <= hoverIndex; // this button is part of the active hover selection

  return (
    <button
      aria-label={`button ${index + 1}`}
      className={getClassName('StarPickerButton', {
        disabled,
        halfStars,
        selected, // button currently selected
        addSelection: hoverActive && !selected && inHoverRange, // hover active and button part of next suggested selection
        removeSelection: hoverActive && selected && !inHoverRange, // hover active but button not part of next suggested selection
        isHovered: hoverIndex === index, // button currently being hovered over
        isClicked: index === selectedIndex, // button previously clicked to get the current selection
      })}
      type="button"
      onClick={handleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
    >
      <StarPickerButtonContent
        halfStars={halfStars}
        starRenderer={starRenderer}
        index={index}
        selectedIndex={selectedIndex}
        hoverIndex={hoverIndex}
      />
    </button>
  );
};

export default StarPickerButton;
