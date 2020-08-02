`react-star-picker` supports resetting with `doubleTapResets={true}` prop:

```jsx static
<StarPicker onChange={onChange} value={value} doubleTapResets />
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
      <StarPicker
        onChange={onChange}
        value={rating}
        size={50}
        doubleTapResets
      />
    </div>
  );
};

<ParentComponent />;
```
