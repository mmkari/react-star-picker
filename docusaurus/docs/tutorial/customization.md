---
sidebar_position: 5
---

import Link from '@docusaurus/Link';

# Customization

Configure `StarPicker` by wrapping it in another component that defines its default values. This is a good place to write your custom `starRenderer` function as well (<Link to="/docs/tutorial/props#starrenderer">see this section for details</Link>):

```jsx static a
import React from 'react';
import StarPicker from 'react-star-picker';

// vvv Starting from v3.0.0 we need to import the styles separately.
import 'react-star-picker/styles.css';
// ^^^

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
  starCount = 5,
  disabled = false,
  halfStars = true,
  resettable = true,
}) => {
  //
  return (
    <StarPicker
      value={value}
      onChange={onChange}
      name={name}
      className={classnames('MyStarPicker', className)}
      starCount={starCount}
      disabled={disabled}
      halfStars={halfStars}
      resettable={resettable}
      starRenderer={MyCustomStarRenderer}
    />
  );
};

export default MyStarPicker;
```
