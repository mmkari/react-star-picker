You can change the rendered star character easily by providing a simple custom `starRenderer` to `StarPicker`:

```jsx static
<StarPicker
  onChange={onChange}
  value={value}
  starRenderer={characterRenderer}
/>
```

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

The above example uses the following `characterRenderer`:

```js { "file": "../customRenderer_characters.jsx", "static": "true" }
```
