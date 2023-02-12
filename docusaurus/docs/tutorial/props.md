---
sidebar_position: 3
---

import { PropTable } from '@site/src/components/PropTable';

# Props

## StarPicker

<PropTable name="StarPicker" />

## StarRenderer

The `StarPicker` component renders a button (`StarPickerButton`) for each star, or half star, element. It is the `starRenderer` function that then renders the content inside these individual `StarPickerButton`s. It gets called with the following parameters:

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

<PropTable name="defaultStarRenderer" />

import { defaultStarRenderer } from 'react-star-picker';

<div className="DefaultStarRendererExample">
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ fontSize: "34px" }}>{defaultStarRenderer({
      index: 1,
      selectedIndex: null,
      hoverIndex: null,
      size: 34,
    })}
    </span>
    
    <span style={{ padding: '0 2em', color: 'red' }}>{'unselected'}</span>
  </div>

  <div style={{ display: 'flex', alignItems: 'center' }}>
    {defaultStarRenderer({
      index: 1,
      selectedIndex: 1,
      hoverIndex: null,
      size: 34,
    })}
    <span style={{ padding: '0 2em', color: 'red' }}>{'selected'}</span>

(index ≤ selectedIndex)

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
</div>
