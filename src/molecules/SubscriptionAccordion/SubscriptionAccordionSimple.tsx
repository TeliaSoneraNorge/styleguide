import React, { useRef, useEffect } from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';
import { HeadingTag } from '../../atoms/Heading/Heading';

export interface SubscriptionAccordionSimpleProps {
  id?: string;
  isExpanded?: boolean;
  title: string;
  titleTag?: HeadingTag;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpen?: (...args: any[]) => any;
  children?: any;
}

const SubscriptionAccordionSimple = ({
  id,
  isExpanded,
  title,
  titleTag = 'h2',
  scrollToOnOpen = false,
  children,
  className,
  onOpen = () => {},
}: SubscriptionAccordionSimpleProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section ref={ref} id={id} className={cn('subscription-accordion-simple', className)}>
      <button
        className={cn('subscription-accordion-simple__header', {
          'subscription-accordion-simple__header--expanded': isExpanded,
        })}
        onClick={onOpen}
      >
        <Heading className="subscription-accordion-simple__heading" tag={titleTag} size="xs">
          {title}
        </Heading>
        <div className="subscription-accordion-simple__aside">
          <Icon
            icon="arrow-down"
            className={cn('subscription-accordion-simple__icon-arrow', {
              'subscription-accordion-simple__icon-arrow--isExpanded': isExpanded,
            })}
          />
        </div>
      </button>
      {isExpanded && children && <section className="subscription-accordion-simple__expanded-info">{children}</section>}
    </section>
  );
};

export default SubscriptionAccordionSimple;
