The `StarPicker` component renders a number of buttons. By default, each button's content is rendered using the `defaultStarRenderer`. Alternatively, you can provide a custom `starRenderer` prop to get control over the button contents.

The following example covers the use of all available props. The used star-renderer function (custom or default) can be toggled from the button on the right and the values of each prop can also be changed directly in the source code of the interactive playground:

```jsx
import React from 'react';
import { ToggleButton } from './ExamplesHelpers';
import StarPicker from 'react-star-picker';

const customRenderer = ({ index, selectedIndex, starRendererProps }) => {
  const selected = selectedIndex != null && index <= selectedIndex;
  const { colorActive, colorInactive } = starRendererProps;
  return (
    <div style={{ color: selected ? colorActive : colorInactive }}>
      {String.fromCharCode(9856 + index)}
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      useDefault: false,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleDefaultRenderer = this.toggleDefaultRenderer.bind(this);
  }
  onChange(value, name) {
    this.setState({ [name]: value });
  }
  toggleDefaultRenderer() {
    this.setState((prevState) => ({ useDefault: !prevState.useDefault }));
  }
  render() {
    return (
      <div style={{ display: 'flex', 'align-items': 'center' }}>
        <StarPicker
          name="rating"
          onChange={this.onChange}
          value={this.state.rating}
          className={'CustomStarPicker'}
          disabled={false}
          doubleTapResets={true}
          halfStars={false}
          numberStars={6}
          size={70}
          starRendererProps={{
            colorActive: '#fc0606',
            colorInactive: '#812020',
            charCodeSelected: 9820,
            charCodeUnselected: 9814,
            colorAdd: undefined,
            colorRemove: undefined,
          }}
          starRenderer={this.state.useDefault ? undefined : customRenderer}
        />

        <ToggleButton
          label="Uses:"
          content={
            this.state.useDefault ? 'Default renderer' : 'Custom renderer'
          }
          onClick={this.toggleDefaultRenderer}
        />
      </div>
    );
  }
}

<ParentComponent />;
```
