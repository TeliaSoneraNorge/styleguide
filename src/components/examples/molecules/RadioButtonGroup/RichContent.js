import React, { useState } from 'react';
import { RadioButton, RadioButtonGroup, Heading, Paragraph } from '@telia/styleguide';

const RichRadioButtonGroupList = () => {
  const [value, setValue] = useState(0);

  const onClick = e => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonGroup type="vertical" onChange={onClick}>
      <RadioButton checked={value == 0} value="0" name="radiobutton-group-rich" onChange={onClick}>
        <div style={{ display: 'inline-block', width: '80%' }}>
          <Heading level="3" text="Option 1" />
          <Paragraph>
            A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem.
          </Paragraph>
          <Paragraph kind="fineprint">A fineprint text here</Paragraph>
        </div>
        <img
          style={{ display: 'inline-block', float: 'right', width: '20%' }}
          src={require('assets/website-images/zens-charger.png')}
        />
      </RadioButton>

      <RadioButton checked={value == 1} value="1" name="radiobutton-group-rich" onChange={onClick}>
        <Heading level="3" text="Option 2" />
        <Paragraph>
          Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </Paragraph>
      </RadioButton>

      <RadioButton checked={value == 2} value="2" name="radiobutton-group-rich" onChange={onClick}>
        <Heading level="3" text="Option 3" />
      </RadioButton>
    </RadioButtonGroup>
  );
};

export default RichRadioButtonGroupList;
