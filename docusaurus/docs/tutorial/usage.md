---
sidebar_position: 2
---

import Link from '@docusaurus/Link';

# Usage

```jsx static a
import React from 'react';
import StarPicker from 'react-star-picker';

// vvv Necessary starting from v.3.0.0
import 'react-star-picker/styles.css';
// ^^^

const ParentComponent = () => {
  const [value, setValue] = React.useState(null);

  // ...

  return (
    <div>
      <StarPicker value={value} onChange={setValue} />
    </div>
  );
};
```

:::note

Starting from v3.0.0 we need to import the styles separately. This change was necessary to make the library SSR compatible.

:::
