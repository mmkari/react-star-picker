import * as React from 'react';
import classnames from 'classnames';
import defaultStarRenderer from './defaultStarRenderer';
import StarPickerButton from './StarPickerButton';
const valueToIndex = (value, halfStars) => {
    if (!value)
        return -1;
    return halfStars ? value * 2 - 1 : value - 1;
};
const indexToValue = (index, halfStars) => {
    return halfStars ? (index + 1) / 2.0 : index + 1;
};
const formatValue = (index, previousValue, halfStars, doubleTapResets) => {
    const newValue = indexToValue(index, halfStars);
    if (doubleTapResets && newValue === previousValue) {
        return null;
    }
    return newValue;
};
class StarPicker extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            hoverIndex: null,
        };
        this.updateValue = (index) => {
            const { onChange, value, halfStars, doubleTapResets, name } = this.props;
            if (onChange) {
                onChange(formatValue(index, value, halfStars, doubleTapResets), name);
            }
        };
        this.onHoverChange = (index) => {
            this.setState({ hoverIndex: index });
        };
    }
    render() {
        const { value, className, numberStars, size, disabled, halfStars, starRenderer, starRendererProps, } = this.props;
        const { hoverIndex } = this.state;
        const selectedIndex = valueToIndex(value, halfStars);
        const numberButtons = halfStars ? 2 * numberStars : numberStars;
        return (React.createElement("div", { className: classnames('StarPicker', className) }, [...Array(numberButtons).keys()].map((i) => (React.createElement(StarPickerButton, { key: `star-${i}`, index: i, selectedIndex: selectedIndex, hoverIndex: hoverIndex, onClick: this.updateValue, onHoverChange: this.onHoverChange, starRenderer: starRenderer, starRendererProps: starRendererProps, halfStars: halfStars, disabled: disabled, size: size })))));
    }
}
StarPicker.defaultProps = {
    name: undefined,
    className: undefined,
    numberStars: 5,
    size: 34,
    disabled: false,
    halfStars: false,
    doubleTapResets: false,
    starRenderer: defaultStarRenderer,
    starRendererProps: Object.freeze({}),
};
export default StarPicker;
//# sourceMappingURL=StarPicker.js.map