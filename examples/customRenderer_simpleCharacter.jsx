import * as React from 'react';

export default ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(9733);
  }
  return String.fromCharCode(9734);
};
