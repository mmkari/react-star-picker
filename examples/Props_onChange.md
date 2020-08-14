Changes in the `StarPicker` input are returned through the `onChange` callback. `onChange` receives the new numeric rating value as its first parameter and optionally a `name` value as a second parameter:

```jsx static
const ParentComponent = () => {
  const [values, setValues] = useState({ rating: null });

  const onChange = (value, name) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <div>
      <StarPicker onChange={onChange} value={values.rating} name="rating" />
    </div>
  );
};
```
