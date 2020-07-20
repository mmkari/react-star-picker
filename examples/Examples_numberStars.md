The number of stars is controlled with the `numberStars` prop:

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
        numberStars={7}
        size={50}
      />
    </div>
  );
};

<ParentComponent />;
```
