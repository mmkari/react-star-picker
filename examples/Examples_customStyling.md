```jsx
import React from 'react';
import styled from 'styled-components';
import StarPicker from 'react-star-picker';

const StyledStarPicker = styled(StarPicker)`
  .DefaultStarComponent {
    transition: transform 0.2s ease-in-out, color 0.4s;
  }
  .DefaultStarComponent.selected {
    transform: scale(1.2);
  }
`;

initialState = { value: null };
<StyledStarPicker
  name="rating5"
  value={state.value}
  onChange={(value) => setState({ value })}
  doubleTapResets
  defaultStarRendererProps={{
    colorInactive: '#e4e4e4',
    colorBlendFractionAdd: null,
    colorBlendFractionRemove: null,
    charCodeUnselected: 9733,
  }}
/>;
```
