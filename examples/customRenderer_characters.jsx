import * as React from 'react';

// Define the "star" component that returns the wanted character icon based on the state of selection
const CustomCharacterStar = ({ index, selectedIndex }) => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(10029);
  }
  return String.fromCharCode(9733);
};

// Export an actual render function that simply returns the custom star component
export default ({ index, hoverIndex, selectedIndex }) => {
  return (
    <CustomCharacterStar
      index={index}
      hoverIndex={hoverIndex}
      selectedIndex={selectedIndex}
    />
  );
};
