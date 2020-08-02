It's good to wrap the `StarPicker` component imported from `react-star-picker` in another component that defines consistent default values for it. You may also want to provide a custom `starRenderer` function for the `StarPicker` here (<a href="#/Props?id=section-starrenderer">see this section on how</a>):

```jsx static a
import React from 'react';
import StarPicker from 'react-star-picker';
import classnames from 'classnames';

const MyCustomStarRenderer = ({ index, selectedIndex, hoverIndex }) => {
  // style the "star" according to the given index, selectedIndex, hoverIndex...
  return {...};   // return it here
};

const MyStarPicker = ({
  onChange,
  value,
  className,
  disabled,
  doubleTapResets = true,
  halfStars = true,
  name,
  numberStars = 5,
  size = 42,
}) => {
  //
  return (
    <StarPicker
      onChange={onChange}
      value={value}
      className={classnames('MyStarPicker', className)}
      disabled={disabled}
      doubleTapResets={doubleTapResets}
      halfStars={halfStars}
      name={name}
      numberStars={numberStars}
      size={size}
      starRenderer={MyCustomStarRenderer}
    />
  );
};

export default MyStarPicker;
```
