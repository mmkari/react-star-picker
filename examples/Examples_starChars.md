The character icons used by the default star-renderer can be controlled with the `charCodeSelected` and `charCodeUnselected` as part of the <span style="color:red">`starRendererProps`</span>:

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
        starRendererProps={{
          charCodeSelected: 10029,
          charCodeUnselected: 10029,
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
