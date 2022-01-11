import React, { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { HeaderLabels } from './types';
import throttle from 'lodash/throttle';

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  onCancel: () => void;
  rightContent?: (stuck: boolean) => React.ReactNode;

  labels?: HeaderLabels;
};

export const StepFlowHeader = (props: Props) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const breakpointSm = useBreakpoint('sm');
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);

  useEffect(() => {
    const checkPosition = throttle(() => {
      const shouldStick = (window.scrollY ?? 0) > (headerRef.current?.offsetHeight ?? 380);
      setStickyHeader(shouldStick);
    }, 100);

    window?.addEventListener('scroll', checkPosition);
    return () => {
      window?.removeEventListener('scroll', checkPosition);
    };
  }, []);

  return (
    <div className="telia-step-flow__header">
      <div className={cn('telia-step-flow__header__top')}>
        {stickyHeader && !breakpointSm && <div className="self-center font-medium">{props.title}</div>}
        <Button kind="secondary" icon="close" onClick={props.onCancel} size={breakpointSm ? 'default' : 'compact'} />
      </div>
      <div className="telia-step-flow__header__content">
        <div className="telia-step-flow__header__content__main">
          <h1 ref={headerRef}>{props.title}</h1>
          <div className="telia-step-flow__header__content__main__right">
            {breakpointSm && props.rightContent?.(stickyHeader)}
          </div>
        </div>
        <div>{!breakpointSm && props.rightContent?.(stickyHeader)}</div>
        <div className="telia-step-flow__header__content__description">{props.description}</div>
      </div>
    </div>
  );
};
