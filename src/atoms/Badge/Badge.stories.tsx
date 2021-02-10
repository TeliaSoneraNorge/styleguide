import React from 'react';
import { Badge } from './Badge';
import { colors } from '../../utils/colors';

export default {
  title: 'Component library/Atoms/Badge',
  component: Badge,
};

export const Default = () => {
  return (
    <div>
      <h3>States</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', paddingRight: '2rem' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge />
            <Badge status="ok" />
            <Badge status="caution" />
            <Badge status="warning" />
          </div>
          <div>
            <Badge kind="active" />
            <Badge kind="active" status="ok" />
            <Badge kind="active" status="caution" />
            <Badge kind="active" status="warning" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge size="compact" />
            <Badge status="ok" size="compact" />
            <Badge status="caution" size="compact" />
            <Badge status="warning" size="compact" />
          </div>
          <div>
            <Badge kind="active" size="compact" />
            <Badge kind="active" status="ok" size="compact" />
            <Badge kind="active" status="caution" size="compact" />
            <Badge kind="active" status="warning" size="compact" />
          </div>
        </div>
      </div>

      <h3>States</h3>
      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', paddingRight: '2rem' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge text="1" />
            <Badge text="1" status="ok" />
            <Badge text="100" status="caution" />
            <Badge text="100" status="warning" />
          </div>
          <div>
            <Badge text="1" kind="active" />
            <Badge text="1" kind="active" status="ok" />
            <Badge text="1" kind="active" status="caution" />
            <Badge text="1" kind="active" status="warning" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge size="compact" />
            <Badge status="ok" size="compact" />
            <Badge status="caution" size="compact" />
            <Badge status="warning" size="compact" />
          </div>
          <div>
            <Badge kind="active" size="compact" />
            <Badge kind="active" status="ok" size="compact" />
            <Badge kind="active" status="caution" size="compact" />
            <Badge kind="active" status="warning" size="compact" />
          </div>
        </div>
      </div>

      <h3>Custom colors</h3>

      <div style={{ display: 'flex' }}>
        <div style={{ display: 'flex', paddingRight: '2rem' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge color={colors.blue500} />
            <Badge color={colors.blackPurple} />
            <Badge color={colors.darkGrey} />
            <Badge color="#f5429b" />
          </div>
          <div>
            <Badge kind="active" color={colors.blue500} borderColor={colors.blue200} />
            <Badge kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
            <Badge kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
            <Badge kind="active" color="#f5429b" borderColor="#f2bbd6" />
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '1rem' }}>
            <Badge size="compact" color={colors.blue500} />
            <Badge size="compact" color={colors.blackPurple} />
            <Badge size="compact" color={colors.darkGrey} />
            <Badge size="compact" color="#f5429b" />
          </div>
          <div>
            <Badge size="compact" kind="active" color={colors.blue500} borderColor={colors.blue200} />
            <Badge size="compact" kind="active" color={colors.blackPurple} borderColor={colors.grey300} />
            <Badge size="compact" kind="active" color={colors.darkGrey} borderColor={colors.grey200} />
            <Badge size="compact" kind="active" color="#f5429b" borderColor="#f2bbd6" />
          </div>
        </div>
      </div>
    </div>
  );
};
