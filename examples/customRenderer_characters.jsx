import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';
import type { StarRendererProps } from '../src/types.ts';

const CustomCharacterStar = ({
  index,
  hoverIndex,
  selectedIndex,
  className, // provided by styled-component, need to attach to element
}): React.Node => {
  const selected = index <= selectedIndex;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;
  const isHovered = hoverIndex === index;

  // const colors = {
  //   active: '#ff3333',
  //   inactive: '#e4e4e4',
  //   add: '#e9c0c0',
  //   remove: '#ee9d9d',
  // };

  return (
    <div
      className={classnames(className, {
        isHovered,
        selected,
        addSelection: hoverActive && !selected && inHoverRange,
        removeSelection: hoverActive && selected && !inHoverRange,
      })}
    >
      {selected ? String.fromCharCode(10029) : String.fromCharCode(9733)}
    </div>
  );
};

const StyledCustomCharacterStar = styled(CustomCharacterStar)`
  transition: color 0.2s, transform 0.2s;
  color: #e4e4e4;

  // display: flex;
  // padding: 0;
  // margin: 0;
  // font-size: 1.2rem;

  &.selected {
    color: #ff3333;
  }
  &.addSelection {
    color: #e9c0c0;
  }
  &.removeSelection {
    color: #ee9d9d;
  }
  &.isHovered {
    transform: scale(1.2);
  }
`;

// export the actual render function
export default ({
  index,
  hoverIndex,
  selectedIndex,
}: StarRendererProps): React.Node => {
  return (
    <StyledCustomCharacterStar
      index={index}
      hoverIndex={hoverIndex}
      selectedIndex={selectedIndex}
    />
  );
};
