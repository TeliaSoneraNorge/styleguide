import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Icon } from '../../atoms/Icon';
import { isNumber } from 'lodash';
import { any } from 'core-js/library/es6/promise';

const formatPrice = (price) => {
  if (typeof price === 'number') {
    return price % 1 === 0 ? price + ',-' : price + ' kr';
  }
  return price;
};

//Supports string or element, pass string to use a default Badge element, or pass in your own Element to be rendered
const renderBadge = (badge) => {
  if (badge) {
    if (typeof badge === 'string') {
      return <></>;
    }
    return { badge };
  }
  return <></>;
};

//Supports string or element, pass string to use the internal Icon element, or pass in your own Element to be rendered
const renderIcon = (icon) => {
  if (typeof icon !== 'undefined') {
    if (typeof icon === 'string') {
      return <Icon name={icon} />;
    }
    return { icon };
  }
  return <></>;
};

const renderHeading = (text, className) => {
  if (text) {
    if (text.includes('.') || text.includes(',') || isNumber(text)) {
      text = formatPrice(text);
    }

    if (className) {
      return <h2 className={className}>{text}</h2>;
    }
    return <h2>{text}</h2>;
  }
  return <></>;
};

const renderArrow = (isExpanded) => {
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

  title,

  titleMiddle,
  previousTitleRight,
  titleRight,

  badge,

  isExpanded,

  disclaimers,

  children,

  scrollToOnOpen = false,

  className,
  onOpen = () => {},
}) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current && isExpanded && scrollToOnOpen) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [isExpanded, scrollToOnOpen]);

  return (
    <section ref={ref} id={id} className={cn('accordion-flexible', className)}>
      <button
        onClick={onOpen}
        className={cn('accordion-flexible__header', { 'accordion-flexible__header--expanded': isExpanded })}
      >
        <div>
          <renderBadge badge={badge} />

          <renderIcon icon={titleIcon} />
          <renderIcon icon={titleIcon2} />

          <renderHeading text={title} className={'accordion-flexible__heading--left'} />

          <renderHeading text={titleMiddle} className={'accordion-flexible__heading--middle'} />

          <renderHeading text={previousTitleRight} className={'accordion-flexible__heading--right line-through'} />
          <renderHeading text={titleRight} className={'accordion-flexible__heading--right'} />

          <renderArrow isExpanded={isExpanded} />
        </div>
      </button>
      <section className="accordion-flexible__content">
        {isExpanded && children && { children }}

        {isExpanded && disclaimers && <div className="subscription-accordion__disclaimers">{disclaimers}</div>}
      </section>
    </section>
  );
};

AccordionFlexible.propTypes = {
  id: PropTypes.string,

  titleIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleIcon2: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  title: PropTypes.string,

  titleMiddle: PropTypes.string,
  previousTitleRight: PropTypes.string,
  titleRight: PropTypes.string,

  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),

  isExpanded: PropTypes.bool,

  disclaimers: PropTypes.element,

  children: PropTypes.element,

  scrollToOnOpen: PropTypes.bool,

  className: PropTypes.string,

  onOpen: PropTypes.func,
};

export default AccordionFlexible;
