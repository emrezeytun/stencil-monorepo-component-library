import React from 'react';
import { createReactComponent } from './react-component-lib';
import { HelloWorld as HelloWorldElement } from '../../dist/components/hello-world';

export const HelloWorld = createReactComponent<{}, HTMLElement>('hello-world', HelloWorldElement);
