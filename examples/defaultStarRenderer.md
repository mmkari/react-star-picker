The default star-renderer, `defaultStarRenderer`, styles characters based on the values of the `index`, `selectedIndex` and `hoverIndex` values:

<style>
    .DefaultStarComponent {
        font-size: 34px;
    }
</style>

```jsx
import { defaultStarRenderer } from 'react-star-picker';

<div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: 1,
      hoverIndex: null,
      size: 34,
      starRendererProps: {},
    })}
    <span style={{ padding: '0 2em', color: 'red' }}>{'selected'}</span>

    <span
      style={{
        fontFamily: 'Consolas,"Liberation Mono",Menlo,monospace',
        fontSize: '14px',
      }}
    >
      {'(index ≤ selectedIndex)'}
    </span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: null,
      hoverIndex: null,
      size: 34,
      starRendererProps: {},
    })}
    <span style={{ padding: '0 2em', color: 'red' }}>{'unselected'}</span>

    <span
      style={{
        fontFamily: 'Consolas,"Liberation Mono",Menlo,monospace',
        fontSize: '14px',
      }}
    >
      {'(!selectedIndex || selectedIndex < index)'}
    </span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: 1,
      hoverIndex: 0,
      size: 34,
      starRendererProps: {},
    })}
    <span style={{ padding: '0 2em', color: 'red' }}>{'remove'}</span>

    <span
      style={{
        fontFamily: 'Consolas,"Liberation Mono",Menlo,monospace',
        fontSize: '14px',
      }}
    >
      {'(hoverIndex < index ≤ selectedIndex)'}
    </span>
  </div>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: null,
      hoverIndex: 1,
      size: 34,
      starRendererProps: {},
    })}
    <span style={{ padding: '0 2em', color: 'red' }}>{'add'}</span>

    <span
      style={{
        fontFamily: 'Consolas,"Liberation Mono",Menlo,monospace',
        fontSize: '14px',
      }}
    >
      {'(selectedIndex < index ≤ hoverIndex)'}
    </span>
  </div>
</div>;
```
