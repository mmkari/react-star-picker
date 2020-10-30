import * as React from 'react';
import styled from 'styled-components';
import classnames from 'classnames';

// 1. define the "star" component that returns the wanted character icon and attaches classNames to it based on the state of selection
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

// 2. here we turn the star component into a styled star component and define styles for the attached classes
const StyledCustomCharacterStar = styled(CustomCharacterStar)`
  transition: color 0.2s, transform 0.2s;
  color: #e4e4e4;

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

// 3. export an actual render function that simply returns the styled star component
export default ({ index, hoverIndex, selectedIndex }): React.Node => {
  return (
    <StyledCustomCharacterStar
      index={index}
      hoverIndex={hoverIndex}
      selectedIndex={selectedIndex}
    />
  );
};
