```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
import dollarRenderer from './customRenderer_dollar';

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
        numberStars={4}
        starRenderer={dollarRenderer}
      />
    </div>
  );
};

<ParentComponent />;
```

The above example uses the following custom star renderer:

```js { "file": "../customRenderer_dollar.jsx", "static": "true" }
```
