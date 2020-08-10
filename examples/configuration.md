Configure `StarPicker` by wrapping it in another component that defines its default values. This is a good place to write your custom `starRenderer` function as well (<a href="#/Props?id=section-starrenderer">see this section for details</a>):

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
