import * as React from 'react';
import StarPicker from 'react-star-picker';

const GreenPicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="greenStars"
      value={rating}
      onChange={setRating}
    />
  );
};

export default GreenPicker;
