```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
import customCharacterRenderer from './customRenderer_simpleCharacter';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarPicker
        className="blueTheme"
        value={rating}
        onChange={onChange}
        size={50}
        starRenderer={customCharacterRenderer}
      />
    </div>
  );
};
<ParentComponent />;
```

The above example uses the following custom star renderer:

```js { "file": "../customRenderer_simpleCharacter.jsx", "static": "true" }
```

...and the following styles:

```css { "file": "../Examples_stylingWithButtons.css", "static": "true" }
```
