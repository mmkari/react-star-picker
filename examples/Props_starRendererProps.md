The optional `starRendererProps` may contain the following:

```jsx static
{
  colorActive: string; // CSS color string for selected stars
  colorInactive: string; // CSS color string for unselected stars
  charCodeSelected: number; // UTF-16 character code
  charCodeUnselected: number; // UTF-16 character code
  colorAdd: string | null; // CSS color string for hover over unselected stars
  colorRemove: string | null; // CSS color string during hover for previously selected stars
}
```

These props are used by the default star-renderer to alter the rendered UTF-16 "star" character or to change the color scheme.
