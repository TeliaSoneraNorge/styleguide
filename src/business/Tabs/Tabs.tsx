import * as React from 'react';
import cs from 'classnames';
import { TabProps } from './Tab';

type Props = {
  onClick: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  outlined?: boolean;
  centered?: boolean;
  currentValue?: string;
  color?: 'purple' | 'black';
};

export const Tabs: React.FC<Props> = (props) => {
  return (
    <div
      className={cs(
        'Business-Tabs',
        props.fullWidth ? 'Business-Tabs--fullwidth' : undefined,
        props.outlined ? 'Business-Tabs--outlined' : 'Business-Tabs--underlined',
        props.centered ? 'Business-Tabs--centered' : undefined,
        props.color === 'black' ? 'Business-Tabs--black' : undefined,
        props.className
      )}
    >
      <ul>
        {React.Children.map(props.children, (ch) => {
          if (React.isValidElement<TabProps>(ch)) {
            const active =
              'path' in ch.props ? ch.props.path === props.currentValue : ch.props.value === props.currentValue;
            return React.cloneElement(ch, {
              active: active,
              onClick: props.onClick,
            });
          }
          return null;
        })}
      </ul>
    </div>
  );
};
