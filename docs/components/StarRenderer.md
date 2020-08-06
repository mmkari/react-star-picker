# `starRenderer()`

`<StarPicker />` accepts a `starRenderer` prop which, if given, overrides the default star-renderer ([`defaultStarRenderer.jsx`](/src/defaultStarRenderer.jsx)).

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

To provide additional props to a custom star-renderer, e.g. here `myCustomRenderer`, use an adapter function like this:

```jsx
<StarPicker
  value={value}
  onChange={onChange}
  starRenderer={({ index, selectedIndex, hoverIndex }) => {
    return myCustomRenderer({ index, selectedIndex, hoverIndex, myCustomProp });
  }}
/>
```
