import { action } from '@storybook/addon-actions';

import { BrickAction, BrickDispatch, WrappedDispatchFactory } from '../types';

const printDispath: WrappedDispatchFactory = (d: BrickDispatch) => (a: BrickAction) => {
    action(JSON.stringify(a))();
    d(a);
};

export default printDispath;
