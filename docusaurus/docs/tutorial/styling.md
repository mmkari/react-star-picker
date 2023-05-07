---
sidebar_position: 4
---

# Styling

A `StarPicker` component returns the following html structure by default:

```html
<div class="StarPicker">
  <button class="StarPickerButton">
    <div class="StarPickerButtonContent">
      <div class="DefaultStarComponent">★</div>
    </div>
  </button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
  <button class="StarPickerButton">...</button>
</div>
```

In addition to the class names listed above for each element, every "StarPickerButton" **button** and "DefaultStarComponent" **div** is given the class names of:

- `selected` if the button is part of the current selection
- `addSelection` if not selected but is part of suggested selection during hover
- `removeSelection` if is selected but not part of suggested selection during hover
- `isHovered` if the button is being hovered over

These additional class names may be useful when customizing styles for the different selection states. However, when there's a greater need to control the content and styling of the rendered stars, consider providing `StarPicker` with <a href="/docs/tutorial/customization">a custom star renderer</a>.
