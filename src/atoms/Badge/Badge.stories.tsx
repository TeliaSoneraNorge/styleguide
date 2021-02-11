import React from 'react';
import { Badge } from './Badge';
import { colors } from '../../utils/colors';
import { withDesign } from 'storybook-addon-designs';
import { Icon } from '../Icon';
import { Button } from '../../business';

export default {
  title: 'Component library/Atoms/Badge',
  component: Badge,
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Status</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge />
        <Badge status="ok" />
        <Badge status="caution" />
        <Badge status="warning" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="active" />
        <Badge kind="active" status="ok" />
        <Badge kind="active" status="caution" />
        <Badge kind="active" status="warning" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="active" status="warning" />
      </div>
      <div style={{ paddingBottom: '2rem' }}>
        <code>size='compact'</code>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" />
        <Badge status="ok" size="compact" />
        <Badge status="caution" size="compact" />
        <Badge status="warning" size="compact" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="active" size="compact" />
        <Badge kind="active" status="ok" size="compact" />
        <Badge kind="active" status="caution" size="compact" />
        <Badge kind="active" status="warning" size="compact" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="active" status="warning" size="compact" />
      </div>
      <h3>With text</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="1" />
        <Badge text="1" status="ok" />
        <Badge text="100" status="caution" />
        <Badge text="100" status="warning" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="1" kind="active" />
        <Badge text="1" kind="active" status="ok" />
        <Badge text="1" kind="active" status="caution" />
        <Badge text="1" kind="active" status="warning" />
      </div>

      <h3>Custom colors</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge color={colors.blue500} />
        <Badge color={colors.blackPurple} />
        <Badge color={colors.darkGrey} />
        <Badge color="#f5429b" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="active" color={colors.blue500} borderColor={colors.blue200} />
        <Badge kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
        <Badge kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
        <Badge kind="active" color="#f5429b" borderColor="#f2bbd6" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" color={colors.blue500} />
        <Badge size="compact" color={colors.blackPurple} />
        <Badge size="compact" color={colors.darkGrey} />
        <Badge size="compact" color="#f5429b" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" kind="active" color={colors.blue500} borderColor={colors.blue200} />
        <Badge size="compact" kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
        <Badge size="compact" kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
        <Badge size="compact" kind="active" color="#f5429b" borderColor="#f2bbd6" />
      </div>
    </div>
  );
};

export const PositionedBadges = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Badges with absolute position</h3>
      <div style={{ paddingBottom: '1rem' }}>
        Wrapping a component in a <code>Badge</code> will position the badge on the child
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge text="1">
          <Icon icon="email" />
        </Badge>
        <Badge position="top-left" text="1">
          <Icon icon="email" />
        </Badge>
        <Badge position="bottom-right" text="1">
          <Icon icon="email" />
        </Badge>
        <Badge position="bottom-left" text="1">
          <Icon icon="email" />
        </Badge>
      </div>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
          <Badge kind="active" text="1">
            <Icon icon="email" />
          </Badge>
          <Badge kind="active" position="top-left" text="1">
            <Icon icon="email" />
          </Badge>
          <Badge kind="active" position="bottom-right" text="1">
            <Icon icon="email" />
          </Badge>
          <Badge kind="active" position="bottom-left" text="1">
            <Icon icon="email" />
          </Badge>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge size="compact">
          <Icon icon="email" />
        </Badge>
        <Badge size="compact" position="top-left">
          <Icon icon="email" />
        </Badge>
        <Badge size="compact" position="bottom-right">
          <Icon icon="email" />
        </Badge>
        <Badge size="compact" position="bottom-left">
          <Icon icon="email" />
        </Badge>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="active" size="compact">
          <Icon icon="email" />
        </Badge>
        <Badge kind="active" size="compact" position="top-left">
          <Icon icon="email" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-right">
          <Icon icon="email" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-left">
          <Icon icon="email" />
        </Badge>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="active" size="compact">
          Text
        </Badge>
        <Badge kind="active" size="compact" position="top-left">
          Text
        </Badge>
        <Badge kind="active" size="compact" position="bottom-right">
          Text
        </Badge>
        <Badge kind="active" size="compact" position="bottom-left">
          Text
        </Badge>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="active" size="compact">
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="top-left">
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-right">
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-left">
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
      </div>

      <h4>Custom position</h4>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="active" size="compact" style={{ transform: 'translate(25%, 10%)' }}>
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="top-left" style={{ transform: 'translate(-25%, 10%)' }}>
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-right" style={{ transform: 'translate(25%, -10%)' }}>
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
        <Badge kind="active" size="compact" position="bottom-left" style={{ transform: 'translate(-25%, -10%)' }}>
          <Button label="Button" kind="secondary" size="compact" />
        </Badge>
      </div>
    </div>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/bc6t8nX2JAsUXctf5FRayU/Badges?node-id=129%3A102',
  },
};
