import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../../atoms/Icon';
import { isNumber } from 'lodash';

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

//Supports string or element, pass string to use a default Badge element, or pass in your own Element to be rendered
const RenderBadge = (badge) => {
  if (badge) {
    if (typeof badge === 'string') {
      return <>{badge}</>;
    }
    return <></>;
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
    if (text.includes('.') || text.includes(',') || isNumber(text)) {
      text = formatPrice(text);
    }

    if (className) {
      return <h2 className={className}>{text}</h2>;
    }
    return <h2>{text}</h2>;
  }
  return <h1>Hello world</h1>;
}

function RenderIngress({ text, className }) {
  if (text) {
    if (className) {
      return <h2 className={className}>{text}</h2>;
    }
    return <h2>{text}</h2>;
  }
  return <></>;
}

const RenderArrow = (isExpanded) => {
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
    console.log(isExpanded);
    setIsExpanded(!isExpanded);
    console.log(isExpanded);
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
      <button
        ref={ref}
        id={id}
        onClick={() => onClick()}
        className={cn('accordion-flexible__header-container', { 'accordion-flexible--expanded': isExpanded })}
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
            </div>
          </div>

          <div className="accordion-flexible__header-row">
            <RenderIngress text={ingressLeft} className={'accordion-flexible__ingress-row-left'} />
            <RenderIngress text={ingressRight} className={'accordion-flexible__ingress-row-right'} />
          </div>
          <RenderArrow isExpanded={isExpanded} />
        </div>
      </button>
      <section className="accordion-flexible__content">
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

  previousTitleRight: PropTypes.string,
  titleRight: PropTypes.string,
  ingressRight: PropTypes.string,

  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  isExpanded: PropTypes.bool,

  disclaimers: PropTypes.element,

  children: PropTypes.any,

  scrollToOnOpen: PropTypes.bool,

  className: PropTypes.string,

  onOpened: PropTypes.func,

  onClosed: PropTypes.func,
};

export default AccordionFlexible;
