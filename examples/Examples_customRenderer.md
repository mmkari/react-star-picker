```jsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
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
