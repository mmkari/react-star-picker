---
sidebar_position: 3
---

import { PropTable } from '@site/src/components/PropTable';

# Props

## StarPicker

`react-star-picker` accepts the following props:

<PropTable name="StarPicker" />

The `starRenderer` prop is an optional prop for a custom star renderer. It can be used to further customize the content of each star button.

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

:::note

`starRenderer` is an optional prop useful for changing the rendered star icon. For simply changing the styles of the default star, see [this section on styling](styling).

:::

<!-- <PropTable name="defaultStarRenderer" /> -->
