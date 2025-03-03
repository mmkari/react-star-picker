<h1 align="center">react-star-picker</h1>
<div align="center">
  
A **highly customizable** star-rating component

[![npm version](https://img.shields.io/npm/v/react-star-picker.svg)](https://www.npmjs.com/package/react-star-picker)
[![npm license](https://img.shields.io/npm/l/react-star-picker.svg)](https://github.com/mmkari/react-star-picker/blob/master/LICENSE)

<img src="https://raw.githubusercontent.com/mmkari/react-star-picker/master/docs/images/star_picker_icon.svg" width=300 height=265 />
</div>

### Default features include

- supports half-star precision
- responsive hover highlighting
- custom number of stars
- value clearing option
- input disabling

[Read more in the docs.](https://mmkari.github.io/react-star-picker/)

### Support for custom star-renderer

Even more customizability is provided by the ability to use your own star-renderer. [Read more here.](https://mmkari.github.io/react-star-picker/docs/tutorial/props#starrenderer)

# Documentation

## Installation

```
npm i react-star-picker
```

## Usage

> **Note**
> To make this library SSR compatible, versions starting from 3.0.0 export an ES module instead of the previously exported UMD bundle. The major difference is that styles are no longer bundled with the component code and need to be imported separately from `react-star-picker/styles.css`.

```jsx
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
// vvv Starting from v3.0.0 we need to import the styles separately. This is best done in a wrapper component.
import 'react-star-picker/styles.css';
// ^^^

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

## Links to Docs

[Props](https://mmkari.github.io/react-star-picker/docs/tutorial/props)

[Configuration](https://mmkari.github.io/react-star-picker/docs/tutorial/customization)

[Styles](https://mmkari.github.io/react-star-picker/docs/tutorial/styling)

[Examples](https://mmkari.github.io/react-star-picker/docs/examples)
