// @flow
import * as React from 'react';

type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorBlendFractionAdd?: ?number,
  colorBlendFractionRemove?: ?number,
|};

type DefaultRendererPropsWithDefaults = {|
  colorActive: string,
  colorInactive: string,
  charCodeSelected: number,
  charCodeUnselected: number,
  colorBlendFractionAdd: ?number,
  colorBlendFractionRemove: ?number,
|};

type GenericRendererProps = {|
  index: number,
  selectedIndex: number,
  hoverIndex: ?number,
  size: number,
|};

type DefaultStarComponentProps = {|
  className: string,
  ...GenericRendererProps,
  ...DefaultRendererPropsWithDefaults,
|};

type StarRendererProps = {|
  ...GenericRendererProps,
  defaultStarRendererProps: DefaultRendererProps,
|};

type StarRendererFunction = (StarRendererProps) => React.Node;

type SharedProps = {|
  defaultStarRendererProps: DefaultRendererProps,
  starRenderer: StarRendererFunction,
  halfStars: boolean,
  disabled: boolean,
  size: number,
|};

type StarPickerButtonProps = {|
  ...SharedProps,
  key: string,
  index: number,
  selectedIndex: number,
  hoverIndex: ?number,
  onClick: (index: number) => void,
  onHoverChange: (index: ?number) => void,
  className: string,
|};

type StarPickerProps = {|
  ...SharedProps,
  onChange: (index: ?number, name?: string) => void,
  value: ?number,
  name?: string,
  className?: string,
  numberStars: number,
  doubleTapResets: boolean,
|};

export type {
  StarRendererProps,
  DefaultRendererProps,
  DefaultRendererPropsWithDefaults,
  DefaultStarComponentProps,
  StarPickerButtonProps,
  StarPickerProps,
};
