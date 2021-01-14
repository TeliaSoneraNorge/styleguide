import React, { useRef, useEffect, useState } from 'react';
import cn from 'classnames';
import { Button } from '../Button';
import { useBreakpoint } from '../../utils/useBreakpoint';
import { HeaderLabels } from './types';

type Props = {
  title: string;
  description: string;
  onCancel: () => void;
  rightContent?: React.ReactNode;
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
      <div className={cn('telia-step-flow__header-top', { 'telia-step-flow__header-top--stuck': stickyHeader })}>
        <Button
          kind="secondary-text"
          icon="close"
          label={breakpointSm ? props.labels?.cancel ?? 'Avbryt' : ''}
          onClick={props.onCancel}
        />
        {stickyHeader && (
          <div className="flex w-full ml-4 justify-between items-center">
            <div className="self-center font-medium">{props.title}</div>
            {props.rightContent}
          </div>
        )}
      </div>
      <div className="telia-step-flow__header-content mt-14 px-6 pb-8 pt-2 md:px-12 md:py-8 md:pt-2 lg:px-52 lg:py-14 items-center justify-center lg:justify-between">
        <div className="lg:pb-0 items-center lg:items-start">
          <h1 ref={headerRef}>{props.title}</h1>
          <div className="text-grey700 text-center lg:text-left">{props.description}</div>
        </div>
        <div className="flex w-full lg:w-auto justify-center">{props.rightContent}</div>
      </div>
    </div>
  );
};
