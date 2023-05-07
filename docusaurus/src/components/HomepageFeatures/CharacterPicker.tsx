import * as React from 'react';
import StarPicker from 'react-star-picker';
import classnames from 'classnames';

const customCharacterRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;
  const isHovered = hoverIndex === index;

  return (
    <div
      className={classnames('CustomCharacterStar', {
        isHovered,
        selected,
        addSelection: hoverActive && !selected && inHoverRange,
        removeSelection: hoverActive && selected && !inHoverRange,
      })}
    >
      {selected ? String.fromCharCode(10029) : String.fromCharCode(9733)}
    </div>
  );
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
      // numberStars={4}
    />
  );
};

export default CustomPicker;
