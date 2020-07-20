The default renderer mixes the `colorActive` and `colorInactive` colors to form the addition and removal highlighting. These defaultly mixed colors can be overridden with explicitly passed `colorAdd` and `colorRemove` props as part of the <span style="color:red">`starRendererProps`</span>.

```jsx a
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
        halfStars
        size={70}
        starRendererProps={{
          colorActive: '#ff9a00',
          colorInactive: '#b5c7c7',
          colorAdd: 'green',
          colorRemove: 'red',
        }}
      />
    </div>
  );
};

<ParentComponent />;
```
