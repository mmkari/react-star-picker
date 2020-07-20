The default styles are easily overridden with external CSS.

```css { "file": "../Examples_overrides.css", "static": "true" }
```

The example below uses the `enlargeStar` class which has a style defined in the above CSS definitions.

```jsx a
import React from 'react';
import StarPicker from 'react-star-picker';

initialState = { value: null };
<StarPicker
  className="enlargeStar"
  value={state.value}
  onChange={(value) => setState({ value })}
  doubleTapResets
  starRendererProps={{
    colorAdd: null,
    colorRemove: null,
  }}
/>;
```
