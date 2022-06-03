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
    return <badge />;
  }
  return <></>;
};

//Supports string or element, pass string to use the internal Icon element, or pass in your own Element to be rendered
const RenderIcon = (icon) => {
  if (typeof icon !== 'undefined') {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return <icon />;
  }
  return <></>;
};

function RenderHeading({ text, className }) {
  console.log('render heading: ');
  console.log(text);
  console.log(className);
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

const RenderArrow = (isExpanded) => {
  return (
    <Icon
      icon="arrow-down"
      className={cn('accordion-flexible__arrow', { 'flexible__arrow--isExpanded': isExpanded })}
    />
  );
};

const AccordionFlexible = ({
  id,

  titleIcon,
  titleIcon2,

  titleLeft,

  titleMiddle,
  previousTitleRight,
  titleRight,

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
    if (ref.current && expand && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section ref={ref} id={id} className={cn('accordion-flexible', className)}>
      <button
        onClick={() => onClick()}
        className={cn('accordion-flexible__header', { 'accordion-flexible__header--expanded': isExpanded })}
      >
        <div>
          <h4>{titleLeft}</h4>
          <RenderBadge badge={badge} />

          <RenderIcon icon={titleIcon} />
          <RenderIcon icon={titleIcon2} />

          <RenderHeading text={titleLeft} className={'accordion-flexible__heading--left'} />

          <RenderHeading text={titleMiddle} className={'accordion-flexible__heading--middle'} />

          <RenderHeading text={previousTitleRight} className={'accordion-flexible__heading--right line-through'} />
          <RenderHeading text={titleRight} className={'accordion-flexible__heading--right'} />

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

  titleMiddle: PropTypes.string,
  previousTitleRight: PropTypes.string,
  titleRight: PropTypes.string,

  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  isExpanded: PropTypes.bool,

  disclaimers: PropTypes.element,

  children: PropTypes.element,

  scrollToOnOpen: PropTypes.bool,

  className: PropTypes.string,

  onOpened: PropTypes.func,

  onClosed: PropTypes.func,
};

export default AccordionFlexible;
