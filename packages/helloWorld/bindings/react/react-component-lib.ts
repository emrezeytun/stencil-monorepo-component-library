import React from 'react';

export const createReactComponent = <PropType, ElementType>(
  tagName: string,
  ReactComponentContext?: any
) => {
  const displayName = tagName;

  const ReactComponent = React.forwardRef<ElementType, PropType & React.HTMLAttributes<ElementType>>(
    (props, ref) => {
      return React.createElement(tagName, {
        ...props,
        ref,
      });
    }
  );
  
  ReactComponent.displayName = displayName;

  return ReactComponent;
};
