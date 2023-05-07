import * as React from 'react';
import StarPicker from 'react-star-picker';

export const EnlargePicker = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <StarPicker //
      className="enlargeStar"
      value={rating}
      onChange={setRating}
    />
  );
};

export default EnlargePicker;
