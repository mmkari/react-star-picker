import * as React from 'react';
import StarPicker from 'react-star-picker';

export const RotatePicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="rotateStar"
      value={rating}
      onChange={setRating}
    />
  );
};

export default RotatePicker;
