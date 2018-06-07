import React from 'react';
import { TextArea } from '@telia/styleguide';

const DefaultTextArea = () => (
    <div>
        <TextArea
            placeholder="This is normal textarea..."></TextArea>
        <br /><br />
        <TextArea
            placeholder="This one is disabled..."
            disabled></TextArea>
        <br /><br />
        <TextArea
            placeholder="And this one is marked as error..."
            error></TextArea>
    </div>
);

export default DefaultTextArea;