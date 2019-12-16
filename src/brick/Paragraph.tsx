import React, { FunctionComponent, Fragment } from 'react';
import { Button } from 'semantic-ui-react';
import * as R from 'ramda';

import WallStore from '../module/WallStore';
import BrickHolder from '../module/BrickHolder';
import ContentEditable from '../module/ContentEditable';
import InlineToolbox from '../module/InlineToolbox';
import CommandTool from '../module/CommandTool';
import selectors from '../module/selectors';
import { actions } from '../module/store';
import { BrickProps } from '../module/types';

const fontSizeValue = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large'];

const Paragraph: FunctionComponent<BrickProps> = (props) => {
    const { focused, index } = props;
    const [state, dispatch] = WallStore.useContainer();
    const { id, type, meta, value } = selectors.getBrickData(state, props);
    const setFontSize = (size: number) => dispatch(actions.updateData({
        index,
        data: { id, type, meta: { fontSize: size }, value },
    }));

    let fontSize = R.prop('fontSize', meta) as number;
    if (fontSize === undefined) {
        fontSize = 2;
    }

    return (
        <BrickHolder
            {...props}
            options={(
                <Fragment>
                    <Button
                        basic
                        disabled={fontSize <= 0}
                        onClick={() => setFontSize(fontSize - 1)}
                    >
                        T-
                    </Button>
                    <Button
                        basic
                        disabled={fontSize >= 5}
                        onClick={() => setFontSize(fontSize + 1)}
                    >
                        T+
                    </Button>
                </Fragment>
            )}
        >
            <InlineToolbox
                tools={(
                    <Fragment>
                        <CommandTool icon="bold" cmd="bold" />
                        <CommandTool icon="italic" cmd="italic" />
                        <CommandTool icon="underline" cmd="underline" />
                        <CommandTool icon="strikethrough" cmd="strikethrough" />
                        <CommandTool icon="edit" cmd="hiliteColor" args="Yellow" />
                        {/* TODO: Link先URLを指定する方法の実装 */}
                        <CommandTool icon="linkify" cmd="createLink" args="http://www.google.com" />
                    </Fragment>
                )}
                toolsWidth={42 * 6 + 1}
            >
                <ContentEditable
                    editable={state.editable && focused}
                    html={value}
                    style={{ fontSize: fontSizeValue[fontSize] }}
                    onChange={(latest) => {
                        dispatch(actions.updateData({
                            index,
                            data: { id, type, meta: { fontSize }, value: latest },
                        }));
                    }}
                />
            </InlineToolbox>
        </BrickHolder>
    );
};

export default Paragraph;
