import * as React from 'react';
import StarPicker from 'react-star-picker';

// Function to generate a random color in rgba format
function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // Red (0-255)
  const g = Math.floor(Math.random() * 256); // Green (0-255)
  const b = Math.floor(Math.random() * 256); // Blue (0-255)
  const a = (Math.random() * 0.6 + 0.4).toFixed(2); // Opacity between 0.4 and 1

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

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

  // Recalculate the ripple color whenever the rating changes
  const rippleColor = React.useMemo(() => {
    return getRandomColor();
  }, [rating]);

  return (
    <div style={{ '--ripple-color': rippleColor } as React.CSSProperties}>
      <StarPicker //
        className="faceTheme"
        value={rating}
        onChange={setRating}
        starRenderer={faceRenderer}
        starCount={10}
      />
    </div>
  );
};

export default BluePicker;
