import React, { useState } from 'react';
import { RadioButton, RadioButtonGroup, Heading, Paragraph, colors } from '../../index';
import img from '../../stories/sampleImages';

export default {
  component: RadioButtonGroup,
  title: 'Component library/Molecules/RadioButtonGroup',
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
    setValue(e.target.value);
  };

  return (
    <RadioButtonGroup
      list={list}
      selectedValue={value ? value : '1'}
      name="radiobutton-group-vertical"
      type="vertical"
      onChange={onClick}
    />
  );
};

export const HorizontalRadioButtonGroup = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  return (
    <RadioButtonGroup
      list={list}
      selectedValue={value ? value : '2'}
      name="radiobutton-group-horizontal"
      type="horizontal"
      onChange={onClick}
    />
  );
};

export const RichRadioButtonGroupWithChildren = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(Number(e.target.value));
  };

  return (
    <RadioButtonGroup type="vertical" onChange={onClick}>
      <RadioButton checked={value == 0} value="0" name="radiobutton-group-rich" onChange={onClick}>
        <div style={{ display: 'inline-block', width: '80%' }}>
          <Heading tag="h3" size="xs" text="Option 1" style={{ color: colors.black, margin: '0 0 .25rem' }} />
          <Paragraph>
            A longer description text here. Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan
            id imperdiet et, porttitor at sem.
          </Paragraph>
          <Paragraph kind="fineprint">A fineprint text here</Paragraph>
        </div>
        <img style={{ display: 'inline-block', float: 'right', width: '20%' }} src={img.zensCharger} />
      </RadioButton>

      <RadioButton checked={value == 1} value="1" name="radiobutton-group-rich" onChange={onClick}>
        <Heading tag="h3" size="xs" text="Option 2" style={{ color: colors.black, margin: '0 0 .25rem' }} />
        <Paragraph>
          Nulla quis lorem ut libero malesuada feugiat. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
        </Paragraph>
      </RadioButton>

      <RadioButton checked={value == 2} value="2" name="radiobutton-group-rich" onChange={onClick}>
        <Heading tag="h3" size="xs" text="Option 3" style={{ color: colors.black, margin: '0 0 .25rem' }} />
      </RadioButton>
    </RadioButtonGroup>
  );
};

export const RadioButtonGroupWithBorder = () => {
  const [value, setValue] = useState(0);

  const onClick = (e: React.BaseSyntheticEvent) => {
    setValue(e.target.value);
  };

  return <RadioButtonGroup list={list} selectedValue={value ? value : '2'} onChange={onClick} border />;
};
