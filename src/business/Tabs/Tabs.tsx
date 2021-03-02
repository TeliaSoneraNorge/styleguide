import * as React from 'react';
import cn from 'classnames';
import { TabProps } from './Tab';

type Props = {
  onClick: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
  centered?: boolean;
  currentValue?: string;
  color?: 'purple' | 'black';
  compact?: boolean;
} & ({ outlined: true; narrow?: false } | { outlined?: false; narrow?: boolean });

export const Tabs: React.FC<Props> = (props) => {
  return (
    <div
      className={cn(
        'telia-tabs',
        {
          'telia-tabs__outlined': props.outlined,
          'telia-tabs__fullwidth': props.fullWidth,
          'telia-tabs__narrow': props.narrow,
          'telia-tabs__centered': props.centered,
          'telia-tabs__black': props.color === 'black',
          'telia-tabs__compact': props.compact,
        },
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
              className: cn('telia-tabs__tab', ch.props.className),
            });
          }
          return null;
        })}
      </ul>
    </div>
  );
};
