import React, { useState } from 'react';
import { RadioButtonList, RadioButtonWithLabel, Heading, Paragraph, colors } from '../../index';
import img from '../../stories/sampleImages';

export default {
  title: 'Component library|Molecules/RadioButtonList',
  component: RadioButtonList,
};

const list = [
  { label: 'I am checked', value: '0' },
  { label: 'I am not checked', value: '1' },
  {
    label: 'I have a very very very long content that can wrap on mobile devices and should be right aligned',
    value: '2',
  },
];

export const Default = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonList
      type="vertical"
      selectedIndex={value}
      onChange={onClick}
      name="radiobuttonlist-test-vertical"
      list={list}
    />
  );
};

export const HorizontalRadioButtonList = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonList
      type="horizontal"
      selectedIndex={value}
      onChange={onClick}
      name="radiobuttonlist-test-horizontal"
      list={list}
    />
  );
};

export const RichContentRadioButtonList = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonList type="vertical" hasRichContent onChange={onClick}>
      <RadioButtonWithLabel checked={value == 0} hasRichContent value="0" name="radiobutton-test-3" onChange={onClick}>
        <div style={{ display: 'inline-block', width: '80%' }}>
          <Heading tag="h3" size="xs" text="Option 1" style={{ color: colors.black, margin: '0 0 .25rem' }} />
          <Paragraph>
            A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem.
          </Paragraph>
          <Paragraph kind="fineprint">A fineprint text here</Paragraph>
        </div>
        <img
          style={{ display: 'inline-block', float: 'right', width: '20%' }}
          src={img.zensCharger}
        />
      </RadioButtonWithLabel>

      <RadioButtonWithLabel checked={value == 1} hasRichContent value="1" name="radiobutton-test-3" onChange={onClick}>
        <Heading tag="h3" size="xs" text="Option 2" style={{ color: colors.black, margin: '0 0 .25rem' }} />
        <Paragraph>
          Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </Paragraph>
      </RadioButtonWithLabel>

      <RadioButtonWithLabel checked={value == 2} hasRichContent value="2" name="radiobutton-test-3" onChange={onClick}>
        <Heading tag="h3" size="xs" text="Option 1" style={{ color: colors.black, margin: '0 0 .25rem' }} />
      </RadioButtonWithLabel>
    </RadioButtonList>
  );
};
