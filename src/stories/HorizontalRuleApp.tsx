import React, { FC } from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
import { boolean } from '@storybook/addon-knobs';

import HorizontalRule from '../brick/HorizontalRule';
import printDispatch from './printDispatch';

const NewBrickApp: FC<{}> = () => (
    <Container text>
        <Segment basic>
            <Header size="huge">NewBrick</Header>
        </Segment>
        <Segment basic>
            <Header size="small">Focused</Header>
        </Segment>
        <HorizontalRule
            editable={boolean('Editable', true)}
            currentIndex={0}
            wallData={[]}
            refugedData={[]}
            index={0}
            dispatch={printDispatch}
        />
        <Segment basic>
            <Header size="small">Unfocused</Header>
        </Segment>
        <HorizontalRule
            editable={boolean('Editable', true)}
            currentIndex={0}
            wallData={[]}
            refugedData={[]}
            index={1}
            dispatch={printDispatch}
        />
    </Container>
);

export default NewBrickApp;
