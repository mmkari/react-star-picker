import * as React from 'react';
import classnames from 'classnames';

import './defaultStarRenderer.css';

import { StarRendererProps } from './types';

const defaultStarRenderer = ({
  index,
  selectedIndex,
  hoverIndex,
}: StarRendererProps): React.ReactNode => {
  const selected = index <= selectedIndex;
  const hoverActive = hoverIndex != null;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;

  return (
    <div
      className={classnames('DefaultStarComponent', {
        selected,
        addSelection: hoverActive && !selected && inHoverRange,
        removeSelection: hoverActive && selected && !inHoverRange,
      })}
    >
      {String.fromCharCode(9733)}
    </div>
  );
};

export default defaultStarRenderer;
