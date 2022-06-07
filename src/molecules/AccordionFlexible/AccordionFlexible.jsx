import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../../atoms/Icon';
import { isNumber } from 'lodash';
import { Badge } from '../../atoms/Badge';

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

//Supports string or element, pass string to use a default Badge element, or pass in your own Element to be rendered
const RenderBadge = (badge) => {
  if (badge) {
    if (
      typeof badge.badge !== 'undefined' &&
      typeof badge.badge.status === 'string' &&
      typeof badge.badge.text === 'string'
    ) {
      return <Badge text={badge.badge.text} status={badge.badge.status} />;
    }
    return <>{badge.badge}</>;
  }
  return <></>;
};

//Supports string or element, pass string to use the internal Icon element, or pass in your own Element to be rendered
const RenderIcon = (icon) => {
  if (typeof icon !== 'undefined') {
    if (typeof icon.icon !== 'undefined' && typeof icon.icon === 'string') {
      return <Icon icon={icon.icon} />;
    }
    return <>{icon.icon}</>;
  }
  return <></>;
};

function RenderTitle({ text, className }) {
  if (text) {
    text = formatPrice(text);

    if (className) {
      return <span className={className}>{text}</span>;
    }
    return <>{text}</>;
  }
  return <></>;
}

function RenderIngress({ text, className }) {
  if (text) {
    text = formatPrice(text);

    if (className) {
      return <span className={className}>{text}</span>;
    }
    return <>{text}</>;
  }
  return <></>;
}

const RenderArrow = ({ isExpanded }) => {
  return (
    <Icon
      icon="arrow-down"
      className={cn('accordion-flexible__arrow', { 'accordion-flexible__arrow--expanded': isExpanded === true })}
    />
  );
};

const AccordionFlexible = ({
  id,

  titleIcon,
  titleIcon2,

  titleLeft,
  ingressLeft,

  previousTitleSuffixRight,
  previousTitleRight,
  titleRight,
  ingressRight,

  badge,

  expand,

  disclaimers,

  children,

  scrollToOnOpen = false,

  className,

  onOpened = () => {},
  onClosed = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(expand);
  const ref = useRef();

  const onClick = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      onOpened();
    } else {
      onClosed();
    }
  };

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section className={cn('accordion-flexible', className)}>
      <h3>
        <button
          ref={ref}
          id={id}
          onClick={() => onClick()}
          className={cn('accordion-flexible__header-container', {
            'accordion-flexible--expanded': isExpanded === true,
          })}
        >
          <RenderBadge badge={badge} />
          <div className={'accordion-flexible__header'}>
            <div className="accordion-flexible__header-row">
              <RenderIcon icon={titleIcon} />

              <RenderIcon icon={titleIcon2} />

              <div className="accordion-flexible__header-content-left">
                <RenderTitle text={titleLeft} className={'accordion-flexible__heading--left'} />
              </div>

              <div className="accordion-flexible__header-content-right">
                <RenderTitle text={titleRight} className={'accordion-flexible__heading--right'} />
                <RenderTitle text={previousTitleRight} className={'accordion-flexible__heading--right line-through'} />
                <RenderTitle text={previousTitleSuffixRight} className={'accordion-flexible__heading--right'} />
              </div>
              <RenderArrow isExpanded={isExpanded === true} />
            </div>

            <div className="accordion-flexible__header-row">
              <RenderIngress text={ingressLeft} className={'accordion-flexible__ingress-row-left'} />
              <RenderIngress text={ingressRight} className={'accordion-flexible__ingress-row-right'} />
            </div>
          </div>
        </button>
      </h3>

      <section
        className={cn('accordion-flexible__content', { 'accordion-flexible__content--expanded': isExpanded === true })}
      >
        {isExpanded && children && <>{children}</>}

        {isExpanded && disclaimers && <div className="subscription-accordion__disclaimers">{disclaimers}</div>}
      </section>
    </section>
  );
};

AccordionFlexible.propTypes = {
  id: PropTypes.string,

  titleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleIcon2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  titleLeft: PropTypes.string,
  ingressLeft: PropTypes.string,

  previousTitleSuffixRight: PropTypes.string,
  previousTitleRight: PropTypes.string,
  titleRight: PropTypes.string,
  ingressRight: PropTypes.string,

  badge: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),

  isExpanded: PropTypes.bool,

  disclaimers: PropTypes.element,

  children: PropTypes.any,

  scrollToOnOpen: PropTypes.bool,

  className: PropTypes.string,

  onOpened: PropTypes.func,

  onClosed: PropTypes.func,
};

export default AccordionFlexible;
