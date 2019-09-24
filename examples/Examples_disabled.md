To use half-star precision, simply pass the `halfStar={true}` prop to the `StarPicker`:

```jsx
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onChange = (value) => {
    setRating(value);
  };
  const toggleDisabling = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <StarPicker
        onChange={onChange}
        value={rating}
        disabled={disabled}
        size={70}
        defaultStarRendererProps={{
          colorActive: '#ff3333',
          colorBlendFractionRemove: 0.5,
          charCodeSelected: 10022,
          charCodeUnselected: 10023,
        }}
      />
      <button onClick={toggleDisabling}>Toggle disabling</button>
    </div>
  );
};

<ParentComponent />;
```
