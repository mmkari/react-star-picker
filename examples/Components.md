The relevant components are:

- `StarPicker` renders a number of buttons. By default, the buttons' content is rendered using `defaultStarRenderer`.
- The `defaultStarRenderer` function defines default values for the optional `starRendererProps` props and passes them to the returned `DefaultStarComponent`.
- The `DefaultStarComponent` decorates its contained star icon depending on the received `selectedIndex` and `hoverIndex` values and other props
