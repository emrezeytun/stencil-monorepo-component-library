import * as React from 'react';
export const createReactComponent = (tagName) => {
    const displayName = tagName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    const ReactComponent = React.forwardRef((props, ref) => {
        // Convert React event props to DOM event listeners
        const { children, ...domProps } = props;
        // Handle custom events
        const eventProps = {};
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && key !== 'onClick' && key !== 'onChange') {
                const eventName = key.substring(2).toLowerCase();
                eventProps[`on${eventName}`] = props[key];
            }
        });
        return React.createElement(tagName, {
            ...domProps,
            ...eventProps,
            ref,
        }, children);
    });
    ReactComponent.displayName = displayName;
    return ReactComponent;
};
