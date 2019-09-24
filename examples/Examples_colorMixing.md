The default renderer mixes the `colorActive` and `colorInactive` colors to form the addition and removal highlighting. The mixing fractions can be customized with the `colorBlendFractionAdd` (fraction of colorActive in colorInactive) and `colorBlendFractionRemove` (fraction of colorInactive in colorActive).

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
          colorInactive: '#43aea6',
          colorBlendFractionAdd: 0.5,
          colorBlendFractionRemove: 0.3,
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
