import * as React from 'react';
import classnames from 'classnames';

import './defaultStarRenderer.css';

import { StarRendererProps } from './types';

const defaultStarRenderer = ({
  index,
  selectedIndex,
  hoverIndex,
  starRendererProps,
}: StarRendererProps): React.ReactNode => {
  const selected = index <= selectedIndex;
  const nextSelection = hoverIndex != null && index <= hoverIndex;
  const hasHover = hoverIndex != null;

  return (
    <div
      className={classnames('DefaultStarComponent', {
        selected,
        newSelection: hasHover && nextSelection && !selected,
        lostSelection: hasHover && selected && !nextSelection,
      })}
    >
      {String.fromCharCode(9733)}
    </div>
  );
};

export default defaultStarRenderer;
