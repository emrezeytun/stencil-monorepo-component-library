import * as React from 'react';
export declare const createReactComponent: <PropType, ElementType>(tagName: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<PropType & React.HTMLAttributes<ElementType>> & React.RefAttributes<ElementType>>;
