import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconLookup, IconDefinition, findIconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useMediaQuery } from 'react-responsive';

library.add(fab);

export interface LogoColumn {
  url: string | null;
  imageUrl: string | null;
  imageAltText: string | null;
}

export interface Link {
  name: string | null;
  url: string | null;
  color?: string | null;
  iconUrl?: string | null;
}

export interface AddressColumn {
  companyName: string | null;
  officeType?: string | null;
  street: string | null;
  city: string | null;
  postalCode: string | null;
}

export interface SocialLinkColumn {
  links: Link[] | null;
}

export interface LinkColumn {
  heading?: string | null;
  links: Link[] | null;
}

export interface FooterRow {
  logoColumn?: LogoColumn | null;
  linkColumns: LinkColumn[] | null;
  addressColumn?: AddressColumn | null;
  socialLinkColumn?: SocialLinkColumn | null;
}

export type FooterProps = {
  topRow?: FooterRow | null;
  bottomRow: FooterRow | null;
};

const LinkColumnsRender = (model: { links: LinkColumn[] | null; isBottom: boolean }) => {
  return (
    <>
      {model.links?.map((item, index) => {
        return <ColumnRender key={index} links={item} />;
      })}
    </>
  );
};

const buildColumnsTopRow = (links: LinkColumn | null) => {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 54em)` });

  return (
    <div className={'telia-footer__nav-column-top'}>
      {links && (
        <button
          className={'telia-footer__accordion'}
          disabled={!isMobile}
          onClick={() => setIsActive(!isActive)}
          aria-label={links?.heading ? links.heading : ' '}
        >
          <div className={'telia-footer__accordion-heading'}>
            {links?.heading && <Heading heading={links?.heading} aria-label={links.heading} />}
            <div className={'telia-footer__accordian-chevron'}>
              {isActive ? <ArrowUpIcon style={{ height: '1em' }} /> : <ArrowDownIcon style={{ height: '1em' }} />}
            </div>
          </div>
          <div className={'telia-footer__accordion-small-screen'}>
            {isActive &&
              links?.links?.map((item, index) => {
                return <LinkItem key={index} link={item} isBottom={links.heading ? false : true} />;
              })}
          </div>
          <div className={'telia-footer__accordion-desktop'}>
            {links?.links?.map((item, index) => {
              return <LinkItem key={index} link={item} isBottom={links.heading ? false : true} />;
            })}
          </div>
        </button>
      )}
    </div>
  );
};

const buildColumnBottomRow = (links: LinkColumn | null) => {
  return (
    <div className={'telia-footer__nav-column-bottom'}>
      {links?.links?.map((item, index) => {
        return <LinkItem key={index} link={item} isBottom={links.heading ? false : true} />;
      })}
    </div>
  );
};

const ColumnRender = (model: { links: LinkColumn | null }) => {
  if (!model.links?.heading) {
    return buildColumnBottomRow(model.links);
  }
  return buildColumnsTopRow(model.links);
};

const Heading = (data: { heading: string | null }) => {
  return <>{data.heading && <h3 className={'telia-footer__heading'}>{data.heading}</h3>}</>;
};

const LinkItem = (data: { link: Link; isBottom: boolean }) => {
  return (
    <>
      {data.link.name && data.link.url && (
        <a
          className={getElementColor(
            data.isBottom ? 'telia-footer__nav-column-link-bottom' : 'telia-footer__nav-column-link-top',
            data.link.color
          )}
          href={data.link.url}
          onClick={(e) => {
            e.stopPropagation();
            return true;
          }}
        >
          {data.link.name}
        </a>
      )}
    </>
  );
};

const LogoColumnRender = (data: { logo: LogoColumn | null }) => {
  return (
    <>
      {data.logo && data.logo.url && data.logo.imageUrl && (
        <div className={'telia-footer__nav-column-bottom'}>
          <a href={data.logo.url} className={'telia-footer__logo'}>
            <img src={data.logo.imageUrl} alt={data.logo.imageAltText ? data.logo.imageAltText : ''} />
          </a>
        </div>
      )}
    </>
  );
};

const AddressColumnRender = (data: AddressColumn) => {
  return (
    <div className={'telia-footer__nav-column-bottom'}>
      {data.companyName && <p>{data.companyName}</p>}

      {data.officeType && <p>{data.officeType}</p>}

      {data.street && <p>{data.street}</p>}

      {data.postalCode && data.city && <p>{data.postalCode + ' ' + data.city}</p>}
    </div>
  );
};

const SocialMediaColumnRender = (sosial: SocialLinkColumn | null) => {
  return <>{sosial?.links && <SocialMediaLink links={sosial?.links} />}</>;
};

const SocialMediaLink = (data: { links: Link[] | null }) => {
  return (
    <>
      {data.links && (
        <ul className={'telia-footer__nav-column-bottom'}>
          {data.links?.map((link, index) => {
            if (link !== null) {
              const sosialMedia = link?.name !== '' ? link?.name?.toLowerCase() : '';
              if (sosialMedia !== '') {
                const iconLookup: IconLookup = {
                  prefix: 'fab',
                  iconName: sosialMedia as IconName,
                };
                const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
                return (
                  <li className={'telia-footer__sosial-media-row'} key={index}>
                    {link.name && link.url && (
                      <a
                        className={getElementColor('', link?.color && link.color)}
                        href={link.url}
                        aria-label={link.name}
                      >
                        <FontAwesomeIcon icon={iconDefinition} className={'telia-footer__social-media-icon'} />
                      </a>
                    )}
                  </li>
                );
              }
            }
          })}
        </ul>
      )}
    </>
  );
};

const getElementColor = (style: string, color: string | null | undefined) => {
  const linkColor = 'telia-footer__' + (color ? color : 'white');
  return style ? style + ' ' + linkColor : '' + linkColor;
};

const FooterRowRender = (footerRow: FooterRow | null) => {
  return (
    <section className={getElementColor('', footerRow?.logoColumn ? 'deep-purple' : 'purple')}>
      <div className={'telia-footer__container'}>
        {footerRow?.logoColumn && <LogoColumnRender logo={footerRow?.logoColumn} />}

        {footerRow?.addressColumn && <AddressColumnRender {...footerRow?.addressColumn} />}

        {footerRow?.linkColumns && (
          <LinkColumnsRender links={footerRow?.linkColumns} isBottom={footerRow.logoColumn ? true : false} />
        )}

        {footerRow?.socialLinkColumn && <SocialMediaColumnRender {...footerRow.socialLinkColumn} />}
      </div>
    </section>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <>
      {props && (
        <footer>
          {props.topRow && <FooterRowRender {...props.topRow} />}
          {props.bottomRow && <FooterRowRender {...props.bottomRow} />}
        </footer>
      )}
    </>
  );
};

export default Footer;
