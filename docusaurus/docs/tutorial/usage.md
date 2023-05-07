---
sidebar_position: 2
---

import Link from '@docusaurus/Link';

# Usage

The following sample shows a basic use case for `react-star-picker` with default values for optional props:

```jsx static a
import React from 'react';
import StarPicker from 'react-star-picker';

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
