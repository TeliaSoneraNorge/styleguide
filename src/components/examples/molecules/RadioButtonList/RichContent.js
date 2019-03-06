import React from 'react';
import { RadioButtonList, RadioButtonWithLabel, Heading, Paragraph } from '@telia/styleguide';

const RichContentRadioButtonList = () => (
    <RadioButtonList type="vertical" hasRichContent>
        <RadioButtonWithLabel checked hasRichContent value="0" name="radiobutton-test-3">
            <div style={{ display: 'inline-block', width: '80%' }}>
                <Heading level="3" text="Option 1" />
                <Paragraph>A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
                <Paragraph kind="fineprint">A fineprint text here</Paragraph>
            </div>
            <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src={require('../../../../assets/website-images/zens-charger.png')} />
        </RadioButtonWithLabel>
        <RadioButtonWithLabel hasRichContent value="1" name="radiobutton-test-3">
            <Heading level="3" text="Option 2" />
            <Paragraph>Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</Paragraph>
        </RadioButtonWithLabel>
        <RadioButtonWithLabel hasRichContent value="2" name="radiobutton-test-3">
            <Heading level="3" text="Option 3" />
        </RadioButtonWithLabel>
    </RadioButtonList>
);

export default RichContentRadioButtonList;