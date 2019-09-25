```js
type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorBlendFractionAdd?: ?number,
  colorBlendFractionRemove?: ?number,
  colorTransitionDuration?: number,
|};
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
- `size`:
- `defaultStarRendererProps`

The `defaultStarRendererProps` are:

- `colorActive`: color of an active star
- `colorInactive`: color of an inactive star
- `charCodeSelected`: UTF-16 character code for selected star
- `charCodeUnselected`: UTF-16 character code for unselected star
- `colorBlendFractionAdd`: fraction of `colorActive` in the base color of `colorInactive` when hovered
- `colorBlendFractionRemove`: fraction of `colorInactive` in the base color of `colorActive` when hovered
- `colorTransitionDuration`: time taken to transition between colors
