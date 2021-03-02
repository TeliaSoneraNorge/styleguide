import React, { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { HeaderLabels } from './types';

type Props = {
  title: string;
  description: string;
  onCancel: () => void;
  rightContent?: (stuck: boolean) => React.ReactNode;

  labels?: HeaderLabels;
};

export const StepFlowHeader = (props: Props) => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [stickyHeader, setStickyHeader] = useState<boolean>(false);
  const breakpointSm = useBreakpoint('sm');

  useEffect(() => {
    const checkPosition = () => {
      if (window.pageYOffset > (headerRef.current?.offsetHeight ?? 380)) {
        setStickyHeader(true);
      } else {
        setStickyHeader(false);
      }
    };

    window.addEventListener('scroll', checkPosition);
    return () => {
      window.removeEventListener('scroll', checkPosition);
    };
  });

  return (
    <div className="telia-step-flow__header">
      <div className={cn('telia-step-flow__header__top', { 'telia-step-flow__header__top--stuck': stickyHeader })}>
        <Button
          kind="secondary-text"
          icon="close"
          label={breakpointSm ? props.labels?.cancel ?? 'Avbryt' : ''}
          onClick={props.onCancel}
        />
        {stickyHeader && (
          <div className="telia-step-flow__header__top--stuck__content">
            <div className="self-center font-medium">{props.title}</div>
            {props.rightContent?.(stickyHeader)}
          </div>
        )}
      </div>
      <div className="telia-step-flow__header__content">
        <div>
          <h1 ref={headerRef}>{props.title}</h1>
          <div className="telia-step-flow__header__content__description">{props.description}</div>
        </div>
        {props.rightContent?.(stickyHeader)}
      </div>
    </div>
  );
};
