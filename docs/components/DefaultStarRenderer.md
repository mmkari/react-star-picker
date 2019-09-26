# `starRenderer()`

`<StarPicker />` accepts a star-renderer prop (`starRenderer`) which, if given, overrides the default star-renderer (see [`defaultStarRenderer.jsx`](/src/defaultStarRenderer.jsx));

## general starRenderer Props

The `starRenderer` render function gets the following props from `<StarPicker />`:

```js
type StarRendererProps = {|
  index: number,
  selectedIndex: number,
  hoverIndex: ?number,
  size: number,
  defaultStarRendererProps: DefaultRendererProps,
|};
```

- `index`: the zero based index of this star
- `selectedIndex`: index of the star matching the current rating
- `hoverIndex`: index of the star currently hovered on
- `size`: used for font-size, button size, etc.
- `defaultStarRendererProps`: optional formatting props (explained separately below)

The `defaultStarRendererProps` prop contains optional styling props that are explained below.

## Optional Props in defaultStarRendererProps

```js
type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorBlendFractionAdd?: ?number,
  colorBlendFractionRemove?: ?number,
|};
```

The props in `defaultStarRendererProps` are:

- `colorActive`: color of an active star
- `colorInactive`: color of an inactive star
- `charCodeSelected`: UTF-16 character code for selected star
- `charCodeUnselected`: UTF-16 character code for unselected star
- `colorBlendFractionAdd`: fraction of `colorActive` in the base color of `colorInactive` when hovered
- `colorBlendFractionRemove`: fraction of `colorInactive` in the base color of `colorActive` when hovered
