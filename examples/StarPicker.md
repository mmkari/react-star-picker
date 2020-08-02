The `StarPicker` component renders a number of buttons. By default, each button's content is rendered using the `defaultStarRenderer`. Alternatively, you can provide a custom `starRenderer` prop to get control over the button contents.

The following editable example covers the use of all available props:

```jsx a
import React from 'react';
import { ToggleButton } from './ExamplesHelpers';
import StarPicker from 'react-star-picker';
import Switch from 'react-switch-input';

const customRenderer = ({ index, selectedIndex, starRendererProps }) => {
  const selected = selectedIndex != null && index <= selectedIndex;
  // const { colorActive, colorInactive } = starRendererProps;
  const colors = ['yellow', 'orange', 'red', 'green', 'blue', 'black'];
  return (
    <div
      style={{
        color: selected ? colors[index] : 'gray',
        fontSize: 50 + index * 8,
      }}
    >
      {String.fromCharCode(9856 + index)}
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: null,
      useCustom: false,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleCustomRenderer = this.toggleCustomRenderer.bind(this);
  }
  onChange(value, name) {
    this.setState({ [name]: value });
  }
  toggleCustomRenderer() {
    this.setState((prevState) => ({ useCustom: !prevState.useCustom }));
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
          starRenderer={this.state.useCustom ? customRenderer : undefined}
        />

        <label>default</label>
        <Switch
          checked={this.state.useCustom}
          onChange={this.toggleCustomRenderer}
        />
        <label>custom</label>
      </div>
    );
  }
}

<ParentComponent />;
```
