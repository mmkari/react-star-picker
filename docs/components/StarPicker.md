# `<StarPicker />`

`StarPicker` is the default export of the `react-star-picker` module:

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

`StarPicker` accepts the following props:

```js
type StarPickerProps = {|
  starRenderer: StarRendererFunction,
  halfStars: boolean,
  disabled: boolean,
  size: number,
  onChange: (index: ?number, name?: string) => void,
  value: ?number,
  name?: string,
  className?: string,
  starCount: number,
  resettable: boolean,
|};
```

### Required Props

- `onChange`: function called with the selected value and the input name after a new pick
- `value`: current value of the input

### Optional Props

- `starRenderer`: [if provided, replaces the default star-renderer](https://github.com/mmkari/react-star-picker/blob/master/docs/components/StarRenderer.md#starrenderer)
- `halfStars`: whether to use half-star precision
- `disabled`: whether the input is disabled
- `size`: the size of the stars in px (used for font-size, button widths)
- `name`: input's name, supplied to the onChange function if provided
- `className`
- `starCount`: number of stars in the input
- `resettable`: When true, picking the existing rating clears it
