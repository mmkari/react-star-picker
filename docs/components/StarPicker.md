# `<StarPicker />`

`StarPicker` is the default export:

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
      <StarPicker onChange={onChange} value={rating} />
    </div>
  );
};
```

## StarPicker Props

Props:

```js
type StarPickerProps = {|
  starRendererProps: DefaultRendererProps,
  starRenderer: StarRendererFunction,
  halfStars: boolean,
  disabled: boolean,
  size: number,
  onChange: (index: ?number, name?: string) => void,
  value: ?number,
  name?: string,
  className?: string,
  numberStars: number,
  doubleTapResets: boolean,
|};
```

### Required Props

- `onChange`: function called with the selected value and the input name after a new pick
- `value`: current value of the input

### Optional Props

- `starRendererProps`: props supported by the default star-renderer. Will be passed to a custom star-renderer as well
- `starRenderer`: if provided, replaces the default star-renderer
- `halfStars`: whether to use half-star precision
- `disabled`: whether the input is disabled
- `size`: the size of the "stars"
- `name`: input's name, supplied to the onChange function if provided
- `className`
- `numberStars`
- `doubleTapResets`: When true, picking the existing rating clears it
