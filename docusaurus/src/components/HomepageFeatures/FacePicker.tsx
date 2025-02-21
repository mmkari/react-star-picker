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

// Function to generate a random rotation between -10deg and +10deg
function getRandomRotation() {
  const rotation = Math.floor(Math.random() * 21) - 10; // Random value between -10 and +10
  return `${rotation}deg`;
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

  // Recalculate the ripple color and button rotation whenever the rating changes
  const rippleColor = React.useMemo(() => {
    return getRandomColor();
  }, [rating]);
  const rotation = React.useMemo(() => {
    return getRandomRotation();
  }, [rating]);

  return (
    <div
      style={
        {
          '--ripple-color': rippleColor,
          '--rotation': rotation, // Pass the random rotation as a CSS variable
        } as React.CSSProperties
      }
    >
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
