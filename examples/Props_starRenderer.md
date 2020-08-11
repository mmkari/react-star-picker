The `StarPicker` component renders a button (`StarPickerButton`) for each star, or half star, element. It is the `starRenderer` function that then renders the content inside these individual `StarPickerButton`s. It gets called with the following props:

```jsx static
{
  /** the zero based index of the star being rendered */
  index: number;
  /** index of the star matching the current rating  */
  selectedIndex: number;
  /** index of the star currently hovered on */
  hoverIndex: number | null;
}
```

You can provide `StarPicker` with your own custom star-renderer (<a href="#/Examples/Custom%20Renderer">see examples here</a>). If you don't, the default star-renderer component styles the stars based on the values of the `index`, `selectedIndex` and `hoverIndex` values accordingly:

<style>
    .DefaultStarRendererExample .DefaultStarComponent {
        font-size: 34px;
    }
</style>

```jsx noeditor
import { defaultStarRenderer } from 'react-star-picker';

<div className="DefaultStarRendererExample">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: 1,
      hoverIndex: null,
      size: 34,
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
