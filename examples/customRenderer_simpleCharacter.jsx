import * as React from 'react';
import type { StarRendererProps } from '../src/types.ts';

export default ({
  index,
  hoverIndex,
  selectedIndex,
}: StarRendererProps): React.Node => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(9733);
  }
  return String.fromCharCode(9734);
};
