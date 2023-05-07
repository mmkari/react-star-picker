---
sidebar_position: 5
---

import Link from '@docusaurus/Link';

# Customization

Configure `StarPicker` by wrapping it in another component that defines its default values. This is a good place to write your custom `starRenderer` function as well (<Link to="/docs/tutorial/props#starrenderer">see this section for details</Link>):

```jsx static a
import React from 'react';
import StarPicker from 'react-star-picker';
import classnames from 'classnames';

const MyCustomStarRenderer = ({ index, selectedIndex, hoverIndex }) => {
  // style the "star" according to the given index, selectedIndex, hoverIndex...
  return {...};   // return it here
};

const MyStarPicker = ({
  value,
  onChange,
  name,
  className,
  size = 42,
  numberStars = 5,
  disabled = false,
  halfStars = true,
  doubleTapResets = true,
}) => {
  //
  return (
    <StarPicker
      value={value}
      onChange={onChange}
      name={name}
      className={classnames('MyStarPicker', className)}
      size={size}
      numberStars={numberStars}
      disabled={disabled}
      halfStars={halfStars}
      doubleTapResets={doubleTapResets}
      starRenderer={MyCustomStarRenderer}
    />
  );
};

export default MyStarPicker;
```
