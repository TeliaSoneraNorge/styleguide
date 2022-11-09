import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Badge } from '../../atoms/Badge';
import { Icon } from '../../atoms/Icon';

const RenderBadge = ({ badge }) => {
  if (badge) {
    if (typeof badge.status === 'string' && typeof badge.text === 'string') {
      return <Badge text={badge.text} status={badge.status} />;
    }
    return <>{badge}</>;
  }
  return <></>;
};

const RenderIcon = ({ icon }) => {
  if (icon) {
    if (typeof icon === 'string') {
      return <Icon icon={icon} />;
    }
    return <>{icon}</>;
  }
  return <></>;
};

const RenderIcons = ({ icons }) => {
  if (icons) {
    if (Array.isArray(icons)) {
      return Object.entries(icons).map(([i, val]) => (
        <RenderIcon icon={val} key={'accordion-flexible-rendericons' + i} />
      ));
    } else {
      return <RenderIcon icon={icons} />;
    }
  }
  return <></>;
};

const RenderTitle = ({ text, className }) => {
  if (text) {
    if (className) {
      return <span className={className}>{text}</span>;
    }
    return <>{text}</>;
  }
  return <></>;
};

const RenderIngress = ({ text, className }) => {
  if (text) {
    if (className) {
      return <span className={className}>{text}</span>;
    }
    return <>{text}</>;
  }
  return <></>;
};

const RenderArrow = ({ isExpanded }) => {
  return (
    <div className={'accordion-flexible__arrow-container'}>
      <Icon
        icon="chevron-down"
        className={cn('accordion-flexible__arrow', { 'accordion-flexible__arrow--expanded': isExpanded === true })}
      />
    </div>
  );
};

const AccordionFlexible = ({
  id,

  icons,

  title,
  ingress,

  titleRightLineThrough,
  titleRight,
  ingressRight,

  badge,

  expand,

  disclaimers,

  children,

  scrollToOnOpen = false,

  className,

  onOpening = () => {},
  onClosing = () => {},
}) => {
  const [isExpanded, setIsExpanded] = useState(expand);
  const ref = useRef();

  const onClick = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded) {
      onOpening();
    } else {
      onClosing();
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
          aria-expanded={isExpanded}
          aria-controls={id ? `accordion-flexible-${id}` : ''}
          onClick={() => onClick()}
          className={cn('accordion-flexible__header-container', {
            'accordion-flexible--expanded': isExpanded,
          })}
        >
          <RenderBadge badge={badge} />
          <div className={'accordion-flexible__header'}>
            <div className="accordion-flexible__header-row">
              <RenderIcons icons={icons} />

              <div className="accordion-flexible__header-content-left">
                <RenderTitle text={title} className={'accordion-flexible__heading--left'} />
              </div>

              <div className="accordion-flexible__header-content-right">
                <RenderTitle text={titleRight} className={'accordion-flexible__heading--right'} />
                <RenderTitle
                  text={titleRightLineThrough}
                  className={'accordion-flexible__heading--right line-through'}
                />
              </div>
              <RenderArrow isExpanded={isExpanded} />
            </div>

            <div className="accordion-flexible__header-row">
              <RenderIngress text={ingress} className={'accordion-flexible__ingress-row--left'} />
              <RenderIngress text={ingressRight} className={'accordion-flexible__ingress-row--right'} />
            </div>
          </div>
        </button>
      </h3>

      {isExpanded && (
        <section
          className={cn('accordion-flexible__content', {
            'accordion-flexible__content--expanded': isExpanded === true,
          })}
        >
          {isExpanded && children && <>{children}</>}

          {isExpanded && disclaimers && <div className="accordion-flexible__disclaimers">{disclaimers}</div>}
        </section>
      )}
    </section>
  );
};

AccordionFlexible.propTypes = {
  id: PropTypes.string,

  icons: PropTypes.any,

  title: PropTypes.string,
  ingress: PropTypes.string,

  titleRightLineThrough: PropTypes.string,
  titleRight: PropTypes.string,
  ingressRight: PropTypes.string,

  badge: PropTypes.oneOfType([PropTypes.object, PropTypes.element]),

  expand: PropTypes.bool,

  disclaimers: PropTypes.element,

  children: PropTypes.any,

  scrollToOnOpen: PropTypes.bool,

  className: PropTypes.string,

  onOpening: PropTypes.func,

  onClosing: PropTypes.func,
};

export default AccordionFlexible;
