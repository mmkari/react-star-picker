import * as React from 'react';
import StarPicker from 'react-star-picker';

const dollarRenderer = ({ index, hoverIndex, selectedIndex }) => {
  const selected = index <= selectedIndex;
  const inHoverRange = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;

  const colored = (selected && !hoverActive) || (inHoverRange && hoverActive);
  const color = colored ? '#1ca363' : 'grey';
  const colorOutline = colored ? 'green' : 'grey';
  return (
    <div className="dollarContainer">
      <svg
        width="1em"
        height="1em"
        style={{ padding: 5, width: '70%' }}
        viewBox="0 0 15 22"
      >
        <path
          d="M 5.7672275,0.10454656 5.7687798,1.8432524 C 3.1530349,2.1696584 0.85511786,3.5105694 0.63651923,5.9335327 0.51636012,10.566614 10.734409,11.654347 10.934687,15.030807 10.864893,17.460972 4.2894804,17.706665 3.2163668,14.995092 L 0.02261549,15.720285 C 0.77014071,18.029563 3.1584552,19.322457 5.7677453,19.684782 L 5.7687798,21.539435 8.6509212,21.539953 8.6504035,19.710663 C 11.644631,19.349577 14.241035,17.773814 14.225752,15.097063 14.229088,9.1564354 4.1341996,9.133676 3.9524306,6.0044467 3.9494677,3.7582878 10.035145,3.326126 10.629806,6.0577627 L 13.68535,5.4536939 C 13.196125,3.4596776 11.059157,2.2534069 8.6509212,1.8856981 L 8.6504035,0.10506428 Z"
          stroke={colorOutline}
          fill={selected ? color : 'none'}
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
};

export const DollarPicker = () => {
  const [rating, setRating] = React.useState<number | null>(3);

  return (
    <StarPicker //
      value={rating}
      onChange={setRating}
      starRenderer={dollarRenderer}
      size={50}
      numberStars={4}
    />
  );
};

export default DollarPicker;
