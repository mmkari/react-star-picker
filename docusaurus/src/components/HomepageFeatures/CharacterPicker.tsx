import * as React from 'react';
import StarPicker from 'react-star-picker';

const customCharacterRenderer = ({ index, selectedIndex }) => {
  const selected = index <= selectedIndex;

  return selected ? String.fromCharCode(10029) : String.fromCharCode(9733);
};

export const CustomPicker = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <StarPicker //
      className="customCharacter"
      value={rating}
      onChange={setRating}
      starRenderer={customCharacterRenderer}
      size={50}
    />
  );
};

export default CustomPicker;
