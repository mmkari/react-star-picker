import * as React from 'react';
import { StarRendererProps, StarPickerProps } from './types';
declare type State = {
    hoverIndex: number | null;
};
declare class StarPicker extends React.Component<StarPickerProps, State> {
    state: {
        hoverIndex: null;
    };
    static defaultProps: {
        name: undefined;
        className: undefined;
        numberStars: number;
        size: number;
        disabled: boolean;
        halfStars: boolean;
        doubleTapResets: boolean;
        starRenderer: ({ index, selectedIndex, hoverIndex, starRendererProps, }: StarRendererProps) => React.ReactNode;
        starRendererProps: Readonly<{}>;
    };
    updateValue: (index: number) => void;
    onHoverChange: (index: number | null) => void;
    render(): JSX.Element;
}
export default StarPicker;
//# sourceMappingURL=StarPicker.d.ts.map