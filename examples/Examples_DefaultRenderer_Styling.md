Here's an example on overriding the default renderer's styles:

```css { "file": "../Examples_overrides.css", "static": "true" }
```

The example below uses the `enlargeStar` class which has a style defined in the above CSS definitions:

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
        className="enlargeStar"
        value={rating}
        onChange={onChange}
        size={50}
      />
    </div>
  );
};
<ParentComponent />;
```

The following example uses the second, `rotateStar`, class:

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
        className="rotateStar"
        value={rating}
        onChange={onChange}
        size={50}
      />
    </div>
  );
};
<ParentComponent />;
```

The following example uses the third, `greenStars`, class:

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
        className="greenStars"
        value={rating}
        onChange={onChange}
        size={50}
      />
    </div>
  );
};
<ParentComponent />;
```
