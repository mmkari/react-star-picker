import * as React from 'react';
import { StarRendererProps } from './types';
export declare const mixColorAdd: (active: any, inactive: any) => string;
export declare const mixColorRemove: (active: any, inactive: any) => string;
export declare const defaultColors: {
    colorActive: string;
    colorInactive: string;
    colorAdd: string;
    colorRemove: string;
};
declare const defaultStarRenderer: ({ index, selectedIndex, hoverIndex, starRendererProps, }: StarRendererProps) => React.ReactNode;
export default defaultStarRenderer;
