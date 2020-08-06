You can change the rendered star character easily by providing a simple custom `starRenderer` to `StarPicker`:

```jsx static
<StarPicker
  onChange={onChange}
  value={value}
  starRenderer={({ index, selectedIndex, hoverIndex }) => {
    const selected = index <= selectedIndex;
    const nextSelection = hoverIndex != null && index <= hoverIndex;
    const hoverActive = hoverIndex != null;

    const colors = {
      active: '#ff3333',
      inactive: '#e4e4e4',
      add: '#e9c0c0',
      remove: '#ee9d9d',
    };

    let resolvedColor = 'inactive';
    if (hoverActive && selected && !nextSelection) {
      resolvedColor = 'remove';
    } else if (hoverActive && !selected && nextSelection) {
      resolvedColor = 'add';
    } else if (selected) {
      resolvedColor = 'active';
    }

    return (
      <div
        style={{
          transition: 'color 0.2s',
          color: colors[resolvedColor],
        }}
      >
        {String.fromCharCode(10029)}
      </div>
    );
  }}
/>
```

```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const customRenderer = ({ index, selectedIndex, hoverIndex }) => {
  const selected = index <= selectedIndex;
  const nextSelection = hoverIndex != null && index <= hoverIndex;
  const hoverActive = hoverIndex != null;

  const colors = {
    active: '#ff3333',
    inactive: '#e4e4e4',
    add: '#e9c0c0',
    remove: '#ee9d9d',
  };

  let resolvedColor = 'inactive';
  if (hoverActive && selected && !nextSelection) {
    resolvedColor = 'remove';
  } else if (hoverActive && !selected && nextSelection) {
    resolvedColor = 'add';
  } else if (selected) {
    resolvedColor = 'active';
  }

  return (
    <div
      style={{
        transition: 'color 0.2s',
        color: colors[resolvedColor],
      }}
    >
      {String.fromCharCode(10029)}
    </div>
  );
};

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
        starRenderer={customRenderer}
      />
    </div>
  );
};

<ParentComponent />;
```
