import * as React from 'react';
import classnames from 'classnames';

import defaultStarRenderer from './defaultStarRenderer';
import StarPickerButton from './StarPickerButton';

import type { DefaultRendererProps,GenericRendererProps, StarRendererProps ,StarRendererFunction, SharedProps, StarPickerProps} from './types';


const valueToIndex = (value: number | null, halfStars: boolean): number => {
  if (!value) return -1;
  return halfStars ? value * 2 - 1 : value - 1;
};
const indexToValue = (index: number, halfStars: boolean): number => {
  return halfStars ? (index + 1) / 2.0 : index + 1;
};

const formatValue = (
  index: number,
  previousValue: number | null,
  halfStars: boolean,
  doubleTapResets: boolean
): number | null => {
  const newValue = indexToValue(index, halfStars);
  if (doubleTapResets && newValue === previousValue) {
    return null;
  }
  return newValue;
};

type State = {
  hoverIndex: number | null,
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
    starRendererProps: Object.freeze({}), // frozen object for correct type checking
  };

  updateValue = (index: number): void => {
    const { onChange, value, halfStars, doubleTapResets, name } = this.props;

    if (onChange) {
      onChange(formatValue(index, value, halfStars, doubleTapResets), name);
    }
  };

  onHoverChange = (index: number | null): void => {
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
