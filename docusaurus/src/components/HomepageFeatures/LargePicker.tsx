import * as React from 'react';
import StarPicker from 'react-star-picker';

export const LargePicker = () => {
  const [rating, setRating] = React.useState<number | null>(4);

  return (
    <StarPicker //
      value={rating}
      onChange={setRating}
      size={50}
    />
  );
};

export default LargePicker;
