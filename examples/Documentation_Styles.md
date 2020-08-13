A `StarPicker` component returns the following html structure by default:

```html
<div class="StarPicker">
  <button class="StarPickerButton">
    <div class="StarPickerButtonContent">
      <div class="DefaultStarRenderer">★</div>
    </div>
  </button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
</div>
```

In addition to the class names listed above for each element, each button is given the class names of:

- `selected` if the button is part of the current selection
- `addSelection` if not selected but is part of suggested selection during hover
- `removeSelection` if is selected but not part of suggested selection during hover

These additional class names may be useful when there's a need for simple customization of styles. However, when there's a greater need to control the content and styling of the rendered stars, consider providing `StarPicker` with <a href="#/Props/starRenderer">a custom star renderer</a>.
