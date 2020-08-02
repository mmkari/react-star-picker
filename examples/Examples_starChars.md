You can change the character icons used by the default star-renderer with the `charCodeSelected` and `charCodeUnselected` props within <span style="color:red">`starRendererProps`</span>:

```jsx static
<StarPicker
  onChange={onChange}
  value={value}
  starRendererProps={{
    charCodeSelected: 10029,
    charCodeUnselected: 10029,
  }}
/>
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
