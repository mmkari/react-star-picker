<style>
    .DefaultStarComponent {
        font-size: 34px;
    }
</style>

The default selected style (index <= selectedIndex)

```jsx
import { defaultStarRenderer } from 'react-star-picker';

defaultStarRenderer({
  index: 1,
  selectedIndex: 1,
  hoverIndex: null,
  size: 34,
  defaultStarRendererProps: {},
});
```

The default unselected style (!selectedIndex || selectedIndex < index )

```jsx
import { defaultStarRenderer } from 'react-star-picker';

defaultStarRenderer({
  index: 1,
  selectedIndex: null,
  hoverIndex: null,
  size: 34,
  defaultStarRendererProps: {},
});
```

The default remove-selection style (hoverIndex < index <= selectedIndex )

```jsx
import { defaultStarRenderer } from 'react-star-picker';

defaultStarRenderer({
  index: 1,
  selectedIndex: 1,
  hoverIndex: 0,
  size: 34,
  defaultStarRendererProps: {},
});
```

The default add-selection style (selectedIndex < index <= hoverIndex)

```jsx
import { defaultStarRenderer } from 'react-star-picker';

defaultStarRenderer({
  index: 1,
  selectedIndex: null,
  hoverIndex: 1,
  size: 34,
  defaultStarRendererProps: {},
});
```
