import * as React from 'react';
import StarPicker from 'react-star-picker';

const simpleRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(9733);
  }
  return String.fromCharCode(9734);
};

export const BluePicker = () => {
  const [rating, setRating] = React.useState<number | null>(3.5);

  return (
    <StarPicker //
      className="blueTheme"
      value={rating}
      onChange={setRating}
      starRenderer={simpleRenderer}
      size={60}
      halfStars
    />
  );
};

export default BluePicker;
