---
sidebar_position: 2
---

import {FacePicker, LargePicker,GreenPicker, RotatePicker, EnlargePicker, DollarPicker, CharacterPicker, BluePicker, CodeIconLink, LinkContainer, CenteredContainer} from '@site/src/components/HomepageFeatures';

<CenteredContainer>
<LinkContainer
to="/docs/examples#faces"
content={<FacePicker />}
/>

<LinkContainer
to="/docs/examples#large"
content={<LargePicker />}
/>

<LinkContainer
to="/docs/examples#green"
content={<GreenPicker />}
/>

<LinkContainer
to="/docs/examples#rotate"
content={<RotatePicker />}
/>
<LinkContainer
to="/docs/examples#enlarge"
content={<EnlargePicker />}
/>
<LinkContainer
to="/docs/examples#dollar"
content={<DollarPicker />}
/>

<LinkContainer
to="/docs/examples#character"
content={<CharacterPicker />}
/>

<LinkContainer
to="/docs/examples#blue"
content={<BluePicker />}
/>

</CenteredContainer>

import FaceExample from './examples/\_face.mdx';

import GreenExample from './examples/\_green.mdx';

import EnlargeExample from './examples/\_enlarge.mdx';

import RotateExample from './examples/\_rotate.mdx';

import DollarExample from './examples/\_dollar.mdx';

import CharacterExample from './examples/\_character.mdx';

import BlueExample from './examples/\_blue.mdx';

import LargeExample from './examples/\_large.mdx';

## Examples

### Emojis {#faces}

<FaceExample />

### Default Props {#large}

<LargeExample />

### Custom Colors {#green}

<GreenExample />

### Rotation {#rotate}

<RotateExample />

### Shadow {#enlarge}

<EnlargeExample />

### Custom Renderer with Animation {#dollar}

<DollarExample />

### Custom Renderer {#character}

<CharacterExample />

### Custom Renderer with Half-Star Precision {#blue}

<BlueExample />
