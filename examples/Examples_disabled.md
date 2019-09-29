Disabling is controlled with the `disabled` prop:

```jsx
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const onChange = (value) => {
    setRating(value);
  };
  const toggleDisabling = () => {
    setDisabled(!disabled);
  };

  return (
    <div style={{ display: 'flex', 'align-items': 'center' }}>
      <StarPicker
        onChange={onChange}
        value={rating}
        disabled={disabled}
        size={70}
        starRendererProps={{
          colorActive: '#ff3333',
          charCodeSelected: 10022,
          charCodeUnselected: 10023,
        }}
      />
      <button
        onClick={toggleDisabling}
        style={{ height: '100%', marginLeft: '2em' }}
      >
        {disabled ? 'Disabled' : 'Enabled'}
      </button>
    </div>
  );
};

<ParentComponent />;
```
