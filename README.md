<h1 align="center">react-star-picker</h1>
<div align="center">
  
A **highly customizable** star-rating component

</div>

## ...
### default features
- supports half-star precision
- UTF-16 character icons
- responsive focus highlighting
- custom number of stars
- value clearing option
- disableable

### support for custom star-renderer
Even more customizability is provided by the ability to use your own star-renderer.

## Documentation
### Installation
### Configuration

## Component APIs

### StarPicker
`StarPicker` is the default export

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

Props:
```js
type StarPickerProps = {|
  defaultStarRendererProps: DefaultRendererProps,
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


- `defaultStarRendererProps`: props supported by the default star-renderer. Will be passed to a custom star-renderer as well
- `starRenderer`: if provided, replaces the default star-renderer
- `halfStars`: whether to use half-star precision
- `disabled`: whether the input is disabled
- `size`: the size of the "stars"
- `onChange`: function called with the selected value and the input name after a new pick
- `value`: current value of the input
- `name`: input's name, supplied to the onChange function if provided
- `className`
- `numberStars`
- `doubleTapResets`: When true, picking the existing rating clears it

### DefaultStarRenderer
### DefaultStarRendererStarComponent
