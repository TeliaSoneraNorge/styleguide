import React, { useRef, useEffect, useState } from 'react';
import cn from 'classnames';

import { Badge, BadgeProps as BadgePropsType } from '../../atoms/Badge';
import { Icon, IconDefinition } from '../../atoms/Icon';
import { optimizeImageUrl } from './util';

type Icon = string | React.ReactNode;
export type Image = { url: string; alt: string };

type BadgeProps = {
  text: string;
  status: BadgePropsType['status'];
};

export interface AccordionFlexibleProps {
  id?: string;
  icons?: Icon | Icon[] | null;
  images?: Image | Image[] | null;
  title?: string;
  ingress?: string;
  titleRightLineThrough?: string;
  titleRight?: string;
  ingressRight?: string;
  badge?: React.ReactNode | BadgeProps;
  expand?: boolean;
  disclaimers?: any;
  children?: any;
  scrollToOnOpen?: boolean;
  className?: string;
  onOpening?: (...args: any[]) => any;
  onClosing?: (...args: any[]) => any;
}

const isBadgeObject = (badge: React.ReactNode | BadgeProps): badge is BadgeProps => {
  return (badge as BadgeProps).status !== undefined && (badge as BadgeProps).text !== undefined;
};

const RenderBadge = ({ badge }: { badge?: React.ReactNode | BadgeProps }) => {
  if (badge) {
    if (isBadgeObject(badge)) {
      return <Badge text={badge.text} status={badge.status} />;
    }
    return <>{badge}</>;
  }
  return <></>;
};

const RenderIcon = ({ icon }: { icon?: Icon }) => {
  if (icon) {
    if (typeof icon === 'string') {
      return <Icon icon={icon as IconDefinition} />;
    }
    return <>{icon}</>;
  }
  return <></>;
};

const RenderIcons = ({ icons }: { icons?: Icon[] }) => {
  if (!icons) {
    return <></>;
  }

  return (
    <>
      {icons.map((icon, i) => (
        <RenderIcon icon={icon} key={`accordion-flexible-rendericons-${i}`} />
      ))}
    </>
  );
};

const RenderImage = ({ image }: { image?: Image }) => {
  if (!image) {
    return null;
  }

  const optimizedUrl = optimizeImageUrl(image.url);

  return <img src={optimizedUrl} alt={image.alt} className="accordion-flexible__image" loading="lazy" />;
};

const RenderImages = ({ images }: { images?: Image[] }) => {
  if (!images) {
    return <></>;
  }

  return (
    <>
      {images.map((image, i) => (
        <RenderImage image={image} key={`accordion-flexible-renderimages-${i}`} />
      ))}
    </>
  );
};

const RenderTitle = ({ text, className }: { text?: string; className?: string }) => {
  if (text) {
    if (className) {
      return <h3 className={cn('accordion-flexible__heading', className)}>{text}</h3>;
    }
    return <>{text}</>;
  }
  return <></>;
};

const RenderIngress = ({ text, className }: { text?: string; className?: string }) => {
  if (text) {
    if (className) {
      return <span className={className}>{text}</span>;
    }
    return <>{text}</>;
  }
  return <></>;
};

const RenderArrow = ({ isExpanded }: { isExpanded?: boolean }) => {
  return (
    <div className={'accordion-flexible__arrow-container'}>
      <Icon
        icon="chevron-down"
        className={cn('accordion-flexible__arrow', { 'accordion-flexible__arrow--expanded': isExpanded === true })}
      />
    </div>
  );
};

const AccordionFlexible: React.FC<AccordionFlexibleProps> = ({
  id,
  icons,
  images,
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
  const [isExpanded, setIsExpanded] = useState<boolean | undefined>(expand);
  const ref = useRef<HTMLButtonElement>(null);

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
    <section
      className={cn('accordion-flexible', className, {
        'accordion-flexible--expanded': isExpanded,
      })}
    >
      <button
        ref={ref}
        id={id}
        aria-expanded={isExpanded}
        aria-controls={id ? `accordion-flexible-${id}` : ''}
        onClick={() => onClick()}
        className={cn('accordion-flexible__header-container', {
          'accordion-flexible__header-container--expanded': isExpanded,
        })}
      >
        <RenderBadge badge={badge} />
        <div
          className={cn('accordion-flexible__header', {
            'accordion-flexible__header--with-images': Array.isArray(images) ? !!images?.length : !!images,
          })}
        >
          <div className="accordion-flexible__header-row">
            {!!icons && Array.isArray(icons) ? <RenderIcons icons={icons} /> : <RenderIcon icon={icons} />}
            {!!images && (
              <div className="accordion-flexible__images-container">
                {Array.isArray(images) ? <RenderImages images={images} /> : <RenderImage image={images} />}
              </div>
            )}

            <div className="accordion-flexible__header-content-left">
              <RenderTitle text={title} className={'accordion-flexible__heading--left'} />
            </div>

            <div className="accordion-flexible__header-content-right">
              <RenderTitle text={titleRight} className={'accordion-flexible__heading--right'} />
              <RenderTitle text={titleRightLineThrough} className={'accordion-flexible__heading--right line-through'} />
            </div>
            <RenderArrow isExpanded={isExpanded} />
          </div>

          <div className="accordion-flexible__header-row">
            <RenderIngress text={ingress} className={'accordion-flexible__ingress-row--left'} />
            <RenderIngress text={ingressRight} className={'accordion-flexible__ingress-row--right'} />
          </div>
        </div>
      </button>

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

export default AccordionFlexible;
