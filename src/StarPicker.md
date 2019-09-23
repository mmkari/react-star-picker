The `react-star-picker` component is a highly customizable star-rating component.

With the default props, the component has the following form:

```jsx
import React, { useState } from 'react';
import StarPicker from 'react-star-picker';

const ParentComponent = () => {
  const [rating, setRating] = useState(null);

  const onChange = (value) => {
    setRating(value);
  };

  return (
    <div>
      <StarPicker onChange={onChange} value={rating} />
    </div>
  );
};

// class ParentComponent extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       rating: null,
//     };
//     this.onChange = this.onChange.bind(this);
//   }
//   onChange(value, name) {
//     this.setState({ [name]: value });
//   }
//   render() {
//     return (
//       <div>
//         <StarPicker
//           name="rating"
//           onChange={this.onChange}
//           value={this.state.rating}
//         />
//       </div>
//     );
//   }
// }

<ParentComponent />;
```

<!-- initialState = { value: null };
<StarPicker onChange={(value) => setState({ value })} value={state.value} />; -->
