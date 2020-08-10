Disabling is controlled with the `disabled` prop:

```jsx static
<StarPicker onChange={onChange} value={value} disabled={true} />
```

```jsx noeditor
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  return (
    <StarPicker onChange={undefined} value={3} disabled={true} size={50} />
  );
};

<ParentComponent />;
```
