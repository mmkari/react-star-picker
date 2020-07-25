The default renderer uses four colors: `colorActive`, `colorInactive`, `colorAdd`, and `colorRemove`. `colorAdd` and `colorRemove` are mixed from the `colorActive` and `colorRemove` colors unless provided. All these values can be set with <span style="color:red">`starRendererProps`</span>.

```jsx static
<StarPicker
  onChange={onChange}
  value={value}
  starRendererProps={{
    colorActive: '#ff9a00',
    colorInactive: '#b5c7c7',
    colorAdd: 'green',
    colorRemove: 'red',
  }}
/>
```

```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
import { HuePicker, MaterialPicker } from 'react-color';
import Switch from 'react-switch-input';
import {
  defaultColors,
  mixColorAdd,
  mixColorRemove,
} from '../src/defaultStarRenderer.tsx';

import styled from 'styled-components';
import classnames from 'classnames';

const MaterialPickerContainer = styled.div`
  .material-picker {
    width: auto !important;
    height: auto !important;
    display: flex;

    input {
      width: 80px;
    }

    .flexbox-fix {
      padding-top: 0 !important;

      div {
        flex: 0 0 0 !important;

        div {
          width: 25px;
        }
      }
    }
  }
  div div {
    box-shadow: none !important;
  }
`;

const StyledSwitch = styled(Switch)`
  margin: 0 2em 0 0;
`;

const ColorPaletteColor = styled.div`
  margin: 1em;
  padding: 1em;
  // width: ${({ width }) => width}%;
  // min-width: 180px;
  background: ${({ color }) => color || 'black'};
  width: 20px;
  height: 20px;
  corner-radius: 5px;
  border: 1px gray;
`;

const InputLabel = styled.label`
  width: 110px;
  display: inline-block;
`;

const ColorSelectorContainer = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
`;

const ColorSelector = ({ name, color, onChange, toggle, setToggle }) => {
  return (
    <ColorSelectorContainer>
      <ColorPaletteColor color={color} />
      <InputLabel>{name}</InputLabel>
      <StyledSwitch checked={toggle} onChange={setToggle} />

      {toggle && (
        <>
          <HuePicker onChange={onChange} color={color} hex={color} />
          <MaterialPickerContainer>
            <MaterialPicker onChange={onChange} color={color} hex={color} />
          </MaterialPickerContainer>
        </>
      )}
    </ColorSelectorContainer>
  );
};

const ParentComponent = () => {
  const [rating, setRating] = useState(null);
  const [colors, setColors] = useState({
    colorActive: '#ff9a00',
    colorInactive: '#b5c7c7',
    colorAdd: 'green',
    colorRemove: 'red',
  });
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const onChangeColor = (attributeName) => (o) => {
    setColors((c) => ({ ...c, [attributeName]: o.hex }));
  };

  const onChange = (value) => {
    setRating(value);
  };

  const resolvedColorActive = toggle1
    ? colors.colorActive
    : defaultColors.colorActive;
  const resolvedColorInactive = toggle2
    ? colors.colorInactive
    : defaultColors.colorInactive;
  const starRendererProps = {
    colorActive: resolvedColorActive,
    colorInactive: resolvedColorInactive,
    colorAdd: toggle3
      ? colors.colorAdd
      : mixColorAdd(resolvedColorActive, resolvedColorInactive),
    colorRemove: toggle4
      ? colors.colorRemove
      : mixColorRemove(resolvedColorActive, resolvedColorInactive),
  };

  return (
    <div>
      <ColorSelector
        name="colorActive"
        color={starRendererProps.colorActive}
        onChange={onChangeColor('colorActive')}
        toggle={toggle1}
        setToggle={setToggle1}
      />
      <ColorSelector
        name="colorInactive"
        color={starRendererProps.colorInactive}
        onChange={onChangeColor('colorInactive')}
        toggle={toggle2}
        setToggle={setToggle2}
      />
      <ColorSelector
        name="colorAdd"
        color={starRendererProps.colorAdd}
        onChange={onChangeColor('colorAdd')}
        toggle={toggle3}
        setToggle={setToggle3}
      />
      <ColorSelector
        name="colorRemove"
        color={starRendererProps.colorRemove}
        onChange={onChangeColor('colorRemove')}
        toggle={toggle4}
        setToggle={setToggle4}
      />
      <StarPicker
        onChange={onChange}
        value={rating}
        size={70}
        starRendererProps={starRendererProps}
      />
    </div>
  );
};

<ParentComponent />;
```
