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
        <Badge status="communication" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge text="1" />
        <Badge text="1" status="ok" />
        <Badge text="100" status="caution" />
        <Badge text="100" status="warning" />
        <Badge text="100" status="communication" />
      </div>

      <div style={{ paddingBottom: '1rem' }}>
        <code>size='compact'</code>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" />
        <Badge status="ok" size="compact" />
        <Badge status="caution" size="compact" />
        <Badge status="warning" size="compact" />
        <Badge status="communication" size="compact" />
      </div>

      <h3>Custom colors</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge color={colors.blackPurple} />
        <Badge color={colors.darkGrey} />
        <Badge color="#f5429b" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="100" color={colors.blackPurple} />
        <Badge text="100" color={colors.darkGrey} />
        <Badge text="100" color="#f5429b" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" color={colors.blackPurple} />
        <Badge size="compact" color={colors.darkGrey} />
        <Badge size="compact" color="#f5429b" />
      </div>
    </div>
  );
};

export const Active = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Status</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="active" />
        <Badge kind="active" status="ok" />
        <Badge kind="active" status="caution" />
        <Badge kind="active" status="warning" />
        <Badge kind="active" status="communication" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="1" kind="active" />
        <Badge text="1" kind="active" status="ok" />
        <Badge text="100" kind="active" status="caution" />
        <Badge text="100" kind="active" status="warning" />
        <Badge text="100" kind="active" status="communication" />
      </div>
      <div style={{ paddingBottom: '1rem' }}>
        <code>size='compact'</code>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="active" size="compact" />
        <Badge kind="active" status="ok" size="compact" />
        <Badge kind="active" status="caution" size="compact" />
        <Badge kind="active" status="warning" size="compact" />
        <Badge kind="active" status="communication" size="compact" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="active" status="warning" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="active" status="warning" size="compact" />
      </div>

      <h3>Custom colors</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
        <Badge kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
        <Badge kind="active" color="#f5429b" borderColor="#f2bbd6" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="100" kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
        <Badge text="100" kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
        <Badge text="100" kind="active" color="#f5429b" borderColor="#f2bbd6" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
        <Badge size="compact" kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
        <Badge size="compact" kind="active" color="#f5429b" borderColor="#f2bbd6" />
      </div>
    </div>
  );
};
export const Outlined = () => {
  return (
    <div style={{ width: '50%' }}>
      <h3>Status</h3>

      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="outlined" />
        <Badge kind="outlined" status="ok" />
        <Badge kind="outlined" status="caution" />
        <Badge kind="outlined" status="warning" />
        <Badge kind="outlined" status="communication" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="1" kind="outlined" />
        <Badge text="1" kind="outlined" status="ok" />
        <Badge text="100" kind="outlined" status="caution" />
        <Badge text="100" kind="outlined" status="warning" />
        <Badge text="100" kind="outlined" status="communication" />
      </div>
      <div style={{ paddingBottom: '1rem' }}>
        <code>size='compact'</code>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '2rem' }}>
        <Badge kind="outlined" size="compact" />
        <Badge kind="outlined" status="ok" size="compact" />
        <Badge kind="outlined" status="caution" size="compact" />
        <Badge kind="outlined" status="warning" size="compact" />
        <Badge kind="outlined" status="communication" size="compact" />
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="outlined" status="warning" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '2rem' }}>
        <div style={{ paddingRight: '0.5rem' }}>Pay attention to this information</div>
        <Badge kind="outlined" status="warning" size="compact" />
      </div>

      <h3>Custom colors</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge kind="outlined" borderColor={colors.blackPurple} />
        <Badge kind="outlined" borderColor={colors.darkGrey} />
        <Badge kind="outlined" borderColor="#f5429b" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge text="100" kind="outlined" borderColor={colors.blackPurple} />
        <Badge text="100" kind="outlined" borderColor={colors.darkGrey} />
        <Badge text="100" kind="outlined" borderColor="#f5429b" />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', paddingBottom: '1rem' }}>
        <Badge size="compact" kind="outlined" borderColor={colors.blackPurple} />
        <Badge size="compact" kind="outlined" borderColor={colors.darkGrey} />
        <Badge size="compact" kind="outlined" borderColor="#f5429b" />
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
