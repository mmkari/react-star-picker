// @flow
import * as React from 'react';
import classnames from 'classnames';

import defaultStarRenderer from './defaultStarRenderer';
import StarPickerButton from './StarPickerButton';

// import type { StarPickerProps } from './types';
// import type { StarRendererFunction } from './types';

// NOTE: Flowtypes must be defined in the component's file for react-docgen to pick them up for styleguide
type DefaultRendererProps = {|
  colorActive?: string,
  colorInactive?: string,
  charCodeSelected?: number,
  charCodeUnselected?: number,
  colorAdd?: ?string,
  colorRemove?: ?string,
|};

type GenericRendererProps = {|
  /** the zero based index of this star */
  index: number,
  /** index of the star matching the current rating  */
  selectedIndex: number,
  /** index of the star currently hovered on */
  hoverIndex: ?number,
|};
type StarRendererProps = {|
  ...GenericRendererProps,
  starRendererProps: DefaultRendererProps,
|};

type StarRendererFunction = (StarRendererProps) => React.Node;

type SharedProps = {|
  /** props supported by the default star-renderer. Will be passed to a custom star-renderer as well */
  starRendererProps: DefaultRendererProps,
  /** if provided, replaces the default star-renderer */
  starRenderer: StarRendererFunction,
  /** whether to use half-star precision */
  halfStars: boolean,
  /** whether the input is disabled */
  disabled: boolean,
  /** the size of the "stars" */
  size: number,
|};
type StarPickerProps = {|
  ...SharedProps,
  /** function called with the selected value and the input name after a new pick */
  onChange: (index: ?number, name?: string) => void,
  /** current value of the input */
  value: ?number,
  /** input's name, supplied to the onChange function if provided */
  name?: string,
  className?: string,
  numberStars: number,
  /** When true, picking the existing rating clears it */
  doubleTapResets: boolean,
|};

const valueToIndex = (value?: ?number, halfStars: boolean): number => {
  if (!value) return -1;
  return halfStars ? value * 2 - 1 : value - 1;
};
const indexToValue = (index: number, halfStars: boolean): number => {
  return halfStars ? (index + 1) / 2.0 : index + 1;
};

const formatValue = (
  index: number,
  previousValue: ?number,
  halfStars: boolean,
  doubleTapResets: boolean
): ?number => {
  const newValue = indexToValue(index, halfStars);
  if (doubleTapResets && newValue === previousValue) {
    return null;
  }
  return newValue;
};

type State = {
  hoverIndex: ?number,
};
class StarPicker extends React.Component<StarPickerProps, State> {
  state = {
    hoverIndex: null,
  };

  static defaultProps = {
    name: undefined,
    className: undefined,
    numberStars: 5,
    size: 34, // in px, used for font-size and width stylings
    disabled: false,
    halfStars: false,
    doubleTapResets: false,
    starRenderer: defaultStarRenderer,
    starRendererProps: {},
  };

  updateValue = (index: number): void => {
    const { onChange, value, halfStars, doubleTapResets, name } = this.props;

    if (onChange) {
      onChange(formatValue(index, value, halfStars, doubleTapResets), name);
    }
  };

  onHoverChange = (index: ?number): void => {
    this.setState({ hoverIndex: index });
  };

  render() {
    const {
      value,
      className,
      numberStars,
      size,
      disabled,
      halfStars,
      starRenderer,
      starRendererProps,
    } = this.props;
    const { hoverIndex } = this.state;

    const selectedIndex = valueToIndex(value, halfStars);
    const numberButtons = halfStars ? 2 * numberStars : numberStars;

    return (
      <div className={classnames('StarPicker', className)}>
        {[...Array(numberButtons).keys()].map((i) => (
          <StarPickerButton
            key={`star-${i}`}
            index={i}
            selectedIndex={selectedIndex}
            hoverIndex={hoverIndex}
            onClick={this.updateValue}
            onHoverChange={this.onHoverChange}
            starRenderer={starRenderer}
            starRendererProps={starRendererProps}
            halfStars={halfStars}
            disabled={disabled}
            size={size}
          />
        ))}
      </div>
    );
  }
}

export default StarPicker;
