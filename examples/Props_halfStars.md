Half-star precision is turned on with `halfStars={true}`:

```jsx static
<StarPicker onChange={onChange} value={value} halfStars />
```

```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarPicker onChange={onChange} value={rating} halfStars size={50} />
    </div>
  );
};

<ParentComponent />;
```
