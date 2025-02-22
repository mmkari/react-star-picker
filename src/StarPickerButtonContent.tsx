import * as React from 'react';

import { StarPickerButtonContentProps } from './types';

import './StarPickerButtonContent.css';
import { getClassName } from './helpers';

const StarPickerButtonContent = ({
  halfStars,
  starRenderer,
  index,
  selectedIndex,
  hoverIndex,
}: StarPickerButtonContentProps) => {
  return (
    <div className={getClassName('StarPickerButtonContent', { halfStars })}>
      {starRenderer({
        index,
        selectedIndex,
        hoverIndex,
      })}
    </div>
  );
};

export default StarPickerButtonContent;
