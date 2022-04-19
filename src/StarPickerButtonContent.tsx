import * as React from 'react';
import classnames from 'classnames';

import { StarPickerButtonContentProps } from './types.ts';

import './StarPickerButtonContent.css';

const StarPickerButtonContent = ({
  halfStars,
  starRenderer,
  index,
  selectedIndex,
  hoverIndex,
}: StarPickerButtonContentProps) => {
  return (
    <div className={classnames('StarPickerButtonContent', { halfStars })}>
      {starRenderer({
        index,
        selectedIndex,
        hoverIndex,
      })}
    </div>
  );
};

export default StarPickerButtonContent;
