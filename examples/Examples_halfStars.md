The input is disabled with `disabled={true}`:

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
        size={50}
        defaultStarRendererProps={{
          colorActive: 'green',
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
