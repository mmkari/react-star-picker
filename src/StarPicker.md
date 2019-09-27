The `StarPicker` component supports the following props:

```jsx
import React from 'react';
import StarPicker from 'react-star-picker';

const customRenderer = ({ index, selectedIndex, defaultStarRendererProps }) => {
  const selected = selectedIndex != null && index <= selectedIndex;
  const { colorActive, colorInactive } = defaultStarRendererProps;
  return (
    <div style={{ color: selected ? colorActive : colorInactive }}>
      {selected ? 'A' : 'Z'}
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
          numberStars={4}
          size={70}
          defaultStarRendererProps={{
            colorActive: '#fc0606',
            colorInactive: '#812020',
            charCodeSelected: 9820,
            charCodeUnselected: 9814,
          }}
          starRenderer={this.state.useDefault ? undefined : customRenderer}
        />

        <button onClick={this.toggleDefaultRenderer} style={{ height: '100%' }}>
          {this.state.useDefault ? 'Default renderer' : 'Custom renderer'}
        </button>
      </div>
    );
  }
}

<ParentComponent />;
```

The `defaultStarRendererProps`, which facilitate the easy customization of some of the color and character properties of the default renderer, are also passed on to a custom star-renderer if one is provided.
