# `starRenderer()`

`<StarPicker />` accepts a `starRenderer` prop which, if given, overrides the default star-renderer ([`defaultStarRenderer.tsx`](/src/defaultStarRenderer.tsx)).

## starRenderer Props

The `starRenderer` render function gets the following props from `<StarPicker />`:

```js
type StarRendererProps = {|
  index: number,
  selectedIndex: number,
  hoverIndex: ?number,
|};
```

- `index`: the zero based index of the star being rendered
- `selectedIndex`: index of the star matching the current rating
- `hoverIndex`: index of the star currently hovered on

Use these to control the content and styling of the returned "star" icons.
