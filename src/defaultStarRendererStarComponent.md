<style>
    .DefaultStarComponent {
        font-size: 34px;
    }
</style>

The default selected style (index <= selectedIndex)

```jsx
import { DefaultStarRendererStarComponent } from 'react-star-picker';

<DefaultStarRendererStarComponent
  index={1}
  selectedIndex={2}
  hoverIndex={2}
  colorActive={'#ffd204'}
  colorInactive={'#ffd204'}
  charCodeSelected={9733}
  charCodeUnselected={9733}
  colorBlendFractionAdd={0.5}
  colorBlendFractionRemove={0.2}
  colorTransitionDuration={3}
/>;
```
