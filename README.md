<h1 align="center">react-star-picker</h1>
<div align="center">
  
A **highly customizable** star-rating component

[![npm version](https://img.shields.io/npm/v/react-star-picker.svg)](https://www.npmjs.com/package/react-star-picker)
[![npm license](https://img.shields.io/npm/l/react-star-picker.svg)](https://github.com/mmkari/react-star-picker/blob/master/LICENSE)

</div>

### Default features include

- [supports half-star precision](https://mmkari.github.io/react-star-picker/#/Props/halfStars)
- [responsive hover highlighting](https://mmkari.github.io/react-star-picker/#/Props/starRenderer)
- [custom number of stars](https://mmkari.github.io/react-star-picker/#/Props/numberStars)
- [value clearing option](https://mmkari.github.io/react-star-picker/#/Props/doubleTapResets)
- [input disabling](https://mmkari.github.io/react-star-picker/#/Props/disabled)

### Support for custom star-renderer

Even more customizability is provided by the ability to use your own star-renderer. [See example in styleguide.](https://mmkari.github.io/react-star-picker/#/Examples/Custom%20Renderer)

# Documentation

## Installation

```
npm i react-star-picker
```

## Usage

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

## Styleguide

[Props](https://mmkari.github.io/react-star-picker/#/Props)

[Configuration](https://mmkari.github.io/react-star-picker/#/Documentation/Configuration)

[Styles](https://mmkari.github.io/react-star-picker/#/Documentation/Styles)

[Examples](https://mmkari.github.io/react-star-picker/#/Examples)

## Component APIs

- [`<StarPicker />`](/docs/components/StarPicker.md)
- [`starRenderer()`](/docs/components/StarRenderer.md)
