# `starRenderer()`

`<StarPicker />` accepts a `starRenderer` prop which, if given, overrides the default star-renderer ([`defaultStarRenderer.jsx`](/src/defaultStarRenderer.jsx)).

## general starRenderer Props

The `starRenderer` render function gets the following props from `<StarPicker />`:

```js
type StarRendererProps = {|
  index: number,
  selectedIndex: number,
  hoverIndex: ?number,
  starRendererProps: DefaultRendererProps,
|};
```

- `index`: the zero based index of the star being rendered
- `selectedIndex`: index of the star matching the current rating
- `hoverIndex`: index of the star currently hovered on
- `starRendererProps`: optional formatting props (explained separately below)

## Optional Props in starRendererProps

```js
type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorAdd?: ?string,
  colorRemove?: ?string,
|};
```

The props in `starRendererProps` are:

- `colorActive`: color of an active star
- `colorInactive`: color of an inactive star
- `charCodeSelected`: UTF-16 character code for selected star
- `charCodeUnselected`: UTF-16 character code for unselected star
- `colorAdd`: color shown on hover for inactive stars about to turn active
- `colorRemove`: color shown on hover for active stars about to turn inactive
