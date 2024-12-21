import * as React from 'react';
import StarPicker from 'react-star-picker';

const faces = ['🤬', '😖', '😠', '🙄', '😐', '🤨', '😁', '🥳', '🤩', '🦄'];

const faceRenderer = ({ index, selectedIndex }) => {
  return (
    <span className={index === selectedIndex ? 'lastOfSelection' : ''}>
      {faces[index % faces.length]}
    </span>
  );
};

export const BluePicker = () => {
  const [rating, setRating] = React.useState<number | null>(null);

  return (
    <StarPicker //
      className="faceTheme"
      value={rating}
      onChange={setRating}
      starRenderer={faceRenderer}
      starCount={10}
    />
  );
};

export default BluePicker;
