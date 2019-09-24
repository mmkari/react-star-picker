The suggested way of using the `StarPicker` component is to wrap it in a wrapper component and define consistent default values for yourself.

```jsx static
import React from 'react';
import StarPicker from 'react-star-picker';
import classnames from 'classnames';

// const MyCustomStarRenderer = ({ index, selectedIndex, hoverIndex, size }) => {
//   // style the "star" according to the index, selectedIndex, hoverIndex...
//   return {...};   // return it here
// };

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
<MyStarPicker />;
```
