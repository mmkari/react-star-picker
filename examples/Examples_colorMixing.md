The default renderer mixes the `colorActive` and `colorInactive` colors to form the addition and removal highlighting. These colors can be overridden with `colorAdd` and `colorRemove` props as part of the <span style="color:red">`starRendererProps`</span>.

```jsx a
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';
import { HuePicker } from 'react-color';

import styled from 'styled-components';
import classnames from 'classnames';

const ColorButton = ({ className, onClick }) => {
  return <button className={className} onClick={onClick}></button>;
};

const ColorPaletteColor = styled(ColorButton)`
margin: 1em;
  padding: 1em;
  // width: ${({ width }) => width}%;
  // min-width: 180px;
  background: ${({ color }) => color || 'black'};
  width: 50px;
  height: 50px;
  corner-radius: 5px;
  border: 1px gray;
`;

const InputLabel = styled.label`
  width: 120px;
  display: inline-block;
`;

const ColorSelectorContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ColorSelector = ({ name, color, onChange }) => {
  const [selectActive, setSelectActive] = useState(true);

  const handleColorClick = () => {
    // setSelectActive((v) => !v);
  };

  return (
    <ColorSelectorContainer>
      <InputLabel>{name}</InputLabel>
      <ColorPaletteColor color={color} onClick={handleColorClick} />
      {selectActive && (
        <HuePicker onChange={onChange} color="#333" hex={color} />
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

  const onChangeColor = (attributeName) => (o) => {
    setColors((c) => ({ ...c, [attributeName]: o.hex }));
  };

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <ColorSelector
        name="colorActive"
        color={colors.colorActive}
        onChange={onChangeColor('colorActive')}
      />
      <ColorSelector
        name="colorInactive"
        color={colors.colorInactive}
        onChange={onChangeColor('colorInactive')}
      />
      <ColorSelector
        name="colorAdd"
        color={colors.colorAdd}
        onChange={onChangeColor('colorAdd')}
      />
      <ColorSelector
        name="colorRemove"
        color={colors.colorRemove}
        onChange={onChangeColor('colorRemove')}
      />
      <StarPicker
        onChange={onChange}
        value={rating}
        size={70}
        starRendererProps={colors}
      />
    </div>
  );
};

<ParentComponent />;
```
