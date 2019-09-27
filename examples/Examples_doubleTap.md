The StarPicker resets selections on double-tap when the prop value `doubleTapResets={true}` is supplied:

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
        size={50}
        doubleTapResets
        defaultStarRendererProps={{
          colorAdd: null,
          colorRemove: null,
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
