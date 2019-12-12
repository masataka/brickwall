import React, { FunctionComponent } from 'react';

import WallStore from '../module/WallStore';
import BrickHolder from '../module/BrickHolder';
import { BrickProps } from '../module/types';

const BlockQuote: FunctionComponent<BrickProps> = (props) => {
    const [state] = WallStore.useContainer();
    return (
        <BrickHolder {...props}>
            <blockquote contentEditable={state.editable} style={{ outline: 'none' }} />
        </BrickHolder>
    );
};

export default BlockQuote;
