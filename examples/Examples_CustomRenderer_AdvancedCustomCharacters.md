```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
import customCharacterRenderer from './customRenderer_characters';

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
        starRenderer={customCharacterRenderer}
      />
    </div>
  );
};

<ParentComponent />;
```

The above example uses the following custom star renderer:

```js { "file": "../customRenderer_characters.jsx", "static": "true" }
```
