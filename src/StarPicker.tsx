'use client';

import * as React from 'react';
import classnames from 'classnames';

import defaultStarRenderer from './defaultStarRenderer';
import StarPickerButton from './StarPickerButton';

import { StarPickerProps } from './types';

import './StarPicker.css';

const valueToIndex = (value: number | null, halfStars: boolean): number => {
  if (!value) return -1;
  return halfStars ? value * 2 - 1 : value - 1;
};
const indexToValue = (index: number, halfStars: boolean): number => {
  return halfStars ? (index + 1) / 2.0 : index + 1;
};

const formatValue = (
  index: number,
  previousValue: number | null,
  halfStars: boolean,
  resettable: boolean
): number | null => {
  const newValue = indexToValue(index, halfStars);
  if (resettable && newValue === previousValue) {
    return null;
  }
  return newValue;
};

const StarPicker = ({
  value,
  onChange,
  name,
  className,
  starCount,
  size = 34, // in px, used for font-size and width stylings
  disabled = false,
  halfStars = false,
  resettable = false,
  starRenderer = defaultStarRenderer,
}: StarPickerProps) => {
  const [hoverIndex, setHoverIndex] = React.useState<number | null>(null);

  const updateValue = (index: number): void => {
    if (onChange) {
      onChange(formatValue(index, value, halfStars, resettable), name);
    }
  };

  const onHoverChange = (index: number | null): void => {
    setHoverIndex(index);
  };

  const count = starCount ?? 5;
  const selectedIndex = valueToIndex(value, halfStars);
  const numberButtons = halfStars ? 2 * count : count;

  return (
    <div
      className={classnames('StarPicker', className)}
      style={{ fontSize: `${size}px` }}
    >
      {[...Array(numberButtons).keys()].map((i) => (
        <StarPickerButton
          key={`star-${i}`}
          index={i}
          selectedIndex={selectedIndex}
          hoverIndex={hoverIndex}
          onClick={updateValue}
          onHoverChange={onHoverChange}
          starRenderer={starRenderer}
          halfStars={halfStars}
          disabled={disabled}
          size={size}
        />
      ))}
    </div>
  );
};

export default StarPicker;
