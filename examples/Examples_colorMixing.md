The default renderer mixes the `colorActive` and `colorInactive` colors to form the addition and removal highlighting. The `colorAdd` and `colorRemove` can however be given as well.

```jsx
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarPicker
        onChange={onChange}
        value={rating}
        halfStars
        size={70}
        defaultStarRendererProps={{
          colorActive: '#ff9a00',
          colorInactive: '#b5c7c7',
          colorAdd: 'green',
          colorRemove: 'red',
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
