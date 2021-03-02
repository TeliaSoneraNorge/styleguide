import React from 'react';
import { AvatarProps } from './Avatar';

type AvatarElement = React.ReactElement<AvatarProps>;

type Props = {
  /**
   * Specifies which avatar should be on top (in front). 'left' means that first avatar in the list is on top.
   * @default 'left'
   */
  stack?: 'right' | 'left';
  /**
   * Avatars in cluster .
   */
  children: AvatarElement | Array<AvatarElement>;
};

export const AvatarCluster = (props: Props) => {
  const { stack = 'left', children } = props;

  return (
    <div className="telia-avatar--cluster">
      {React.Children.map(children, (child, index) => {
        const zIndex = stack === 'left' ? React.Children.count(children) - index : index;
        return React.cloneElement(child, { style: { zIndex: zIndex }, ...child.props, key: index });
      })}
    </div>
  );
};
