import * as React from 'react';

type DefaultRendererProps = {
  colorActive?: string;
  colorInactive?: string;
  charCodeSelected?: number;
  charCodeUnselected?: number;
  colorAdd?: string | null;
  colorRemove?: string | null;
};

type DefaultRendererPropsWithDefaults = {
  colorActive: string;
  colorInactive: string;
  charCodeSelected: number;
  charCodeUnselected: number;
  colorAdd: string | null;
  colorRemove: string | null;
};

type GenericRendererProps = {
  /** the zero based index of the star being rendered */
  index: number;
  /** index of the star matching the current rating  */
  selectedIndex: number;
  /** index of the star currently hovered on */
  hoverIndex: number | null;
};

type DefaultStarComponentProps = GenericRendererProps &
  DefaultRendererPropsWithDefaults & {
    className: string;
  };

type StarRendererProps = GenericRendererProps & {
  starRendererProps: DefaultRendererProps;
};

type StarRendererFunction = (StarRendererProps) => React.ReactNode;

type SharedProps = {
  /** props supported by the default star-renderer. Will be passed to a custom star-renderer as well */
  starRendererProps: DefaultRendererProps;
  /** if provided, replaces the default star-renderer */
  starRenderer: StarRendererFunction;
  /** whether to use half-star precision */
  halfStars: boolean;
  /** whether the input is disabled */
  disabled: boolean;
  /** the size of the stars in px (used for font-size, button widths) */
  size: number;
};

type StarPickerButtonProps = SharedProps & {
  key: string;
  index: number;
  selectedIndex: number;
  hoverIndex: number | null;
  onClick: (index: number) => void;
  onHoverChange: (index: number | null) => void;
  className: string;
};

type StarPickerProps = SharedProps & {
  /** function called with the selected value (and the input name) after a new pick */
  onChange: (index: number | null, name?: string) => void;
  /** current value of the input */
  value: number | null;
  /** input's name, supplied to the onChange function if provided */
  name?: string;
  className?: string;
  /** number of stars in the input */
  numberStars: number;
  /** When true, selecting the existing rating clears the input */
  doubleTapResets: boolean;
};

export type {
  StarRendererProps,
  DefaultRendererProps,
  DefaultRendererPropsWithDefaults,
  DefaultStarComponentProps,
  StarPickerButtonProps,
  StarPickerProps,
};
