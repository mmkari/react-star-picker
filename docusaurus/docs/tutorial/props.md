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
