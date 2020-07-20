Half-star precision is turned on with `halfStars={true}`:

```jsx a
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
        starRendererProps={{
          colorActive: 'green',
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
