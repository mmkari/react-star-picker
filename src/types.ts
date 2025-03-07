import * as React from 'react';

export type StarRendererProps = {
  /** the zero based index of the star being rendered */
  index: number;
  /** index of the star matching the current rating  */
  selectedIndex: number;
  /** index of the star currently hovered on */
  hoverIndex: number | null;
};

export type StarRendererFunction = (StarRendererProps) => React.ReactNode;

export type SharedProps = {
  /** if provided, replaces the default star-renderer */
  starRenderer: StarRendererFunction;
  /** whether to use half-star precision */
  halfStars: boolean;
  /** whether the input is disabled */
  disabled: boolean;
};

export type StarPickerButtonContentProps = StarRendererProps & {
  halfStars: boolean;
  starRenderer: StarRendererFunction;
};

export type StarPickerButtonProps = SharedProps &
  StarRendererProps & {
    key: string;
    onClick: (index: number) => void;
    onHoverChange: (index: number | null) => void;
  };

// eslint-disable-next-line no-undef
export type StarPickerProps = Partial<SharedProps> & {
  /** function called with the selected value (and the input name) after a new pick */
  onChange: (value: number | null, name?: string) => void;
  /** current value of the input */
  value: number | null;
  /** input's name, supplied to the onChange function if provided */
  name?: string;
  className?: string;
  /** number of stars in the input */
  starCount?: number;
  /** When true, selecting the existing rating clears the input */
  resettable?: boolean;
};
