import * as React from 'react';
import StarPicker from 'react-star-picker';

const starRenderer = ({ index, selectedIndex }) => {
  const selected = index <= selectedIndex;

  if (selected) {
    return String.fromCharCode(10022);
  }
  return String.fromCharCode(10023);
};

const GreenPicker = () => {
  const [rating, setRating] = React.useState<number | null>(2);

  return (
    <StarPicker //
      className="greenStars"
      value={rating}
      onChange={setRating}
      starRenderer={starRenderer}
      starCount={3}
    />
  );
};

export default GreenPicker;
