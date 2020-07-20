The default star-renderer can be replaced with a custom `starRenderer`:

```jsx a
import React from 'react';
import StarPicker from 'react-star-picker';
import dollarRenderer from './customRenderer_dollar';

initialState = { value: null };
<StarPicker
  onChange={(value) => setState({ value })}
  value={state.value}
  numberStars={4}
  starRenderer={dollarRenderer}
/>;
```

The above example imports the following custom `dollarRenderer`:

```js { "file": "../customRenderer_dollar.jsx", "static": "true" }
```
