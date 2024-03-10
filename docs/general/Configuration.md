The suggested way of using `react-star-picker` is to wrap `StarPicker` in a component that defines consistent default values:

```jsx
import React from 'react';
import StarPicker from 'react-star-picker';
import classnames from 'classnames';

const MyCustomStarRenderer = ({ index, selectedIndex, hoverIndex }) => {
  // style the "star" according to the index, selectedIndex, hoverIndex...
  return {...};   // return it here
};

const MyStarPicker = ({
  onChange,
  value,
  className,
  disabled,
  resettable = true,
  halfStars = true,
  name,
  starCount = 5,
  size = 42,
}) => {
  //
  return (
    <StarPicker
      className={classnames('MyStarPicker', className)}
      onChange={onChange}
      value={value}
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
