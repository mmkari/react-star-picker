`StarPicker` takes in an optional `name` prop. This value is returned as the second parameter to the component's `onChange` callback:

```jsx static
<StarPicker onChange={onChange} value={values.rating} name="rating" />
```
