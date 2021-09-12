import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconLookup, IconDefinition, findIconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export interface LogoColumn {
  url: string | null;
  imageUrl: string | null;
}

export interface Link {
  name: string | null;
  url: string | null;
  color: string | null;
  iconUrl?: string | null;
}

export interface AddressColumn {
  companyName: string | null;
  officeType: string | null;
  street: string | null;
  city: string | null;
  postalCode: string | null;
}

export interface SocialLinkColumn {
  links: Link[] | null;
}

export interface LinkColumn {
  heading: string | null;
  links: Link[] | null;
}

export interface FooterRow {
  logoColumn: LogoColumn | null;
  linkColumns: LinkColumn[] | null;
  addressColumn: AddressColumn | null;
  socialLinkColumn: SocialLinkColumn | null;
}

export type FooterProps = {
  topRow: FooterRow | null;
  bottomRow: FooterRow | null;
};

const LinkColumnsRender = (data: { linkColumns: LinkColumn[]; isBottom: boolean }) => {
  let key = 0;
  return (
    <section className={'telia-footer__container telia-footer__accordion'}>
      {data.linkColumns.map((item) => (
        <ColumnItem key={key++} linkColumn={item} isBottom={data.isBottom} />
      ))}
    </section>
  );
};

const ColumnItem = (data: { linkColumn: LinkColumn; isBottom: boolean }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {!data.isBottom && (
        <button className="telia-footer__accordion-item" onClick={() => setIsActive(!isActive)}>
          <div className={'telia-footer__accordion-header-container'}>
            <h3 className={'telia-footer__accordion-heading'}>{data.linkColumn.heading}</h3>
            <div className={'telia-footer__accordion-chevron'}>
              {isActive ? <ArrowUpIcon style={{ height: '1rem' }} /> : <ArrowDownIcon style={{ height: '1rem' }} />}
            </div>
          </div>
          {isActive && (
            <div className="telia-footer__accordion-content-mobile">
              {data.linkColumn.links?.map((item) => (
                <Item key={item.name?.toString()} name={item.name} url={item.url} color={item.color} />
              ))}
            </div>
          )}
        </button>
      )}
      <div className={'telia-footer__accordion-content-desktop'}>
        {data.linkColumn.links?.map((item) => (
          <Item key={item.name?.toString()} name={item.name} url={item.url} color={item.color} />
        ))}
      </div>
      {data.isBottom && !data.linkColumn.heading && (
        <div className={'telia-footer__accordion-privacy-and-settings'}>
          {data.linkColumn.links?.map((item) => (
            <Item key={item.name?.toString()} name={item.name} url={item.url} color={item.color} />
          ))}
        </div>
      )}
    </div>
  );
};

const Item = (link: Link | null) => {
  return (
    <>
      {link && link.name && link.url && (
        <a className={'telia-footer__white' + ' ' + getColor(link.color)} key={link.name.toString()} href={link.url}>
          <div>{link.name}</div>
        </a>
      )}
    </>
  );
};

const AddressColumnRender = (data: AddressColumn) => {
  return (
    <div className={'telia-footer__address-to-use'}>
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
  let length = 0;
  if (data.links !== null) {
    length = data.links.length - 1;
  }
  let counter = 0;
  return (
    <>
      {data.links?.map((link) => {
        const sosialMedia = link?.name?.toLowerCase();
        const iconLookup: IconLookup = { prefix: 'fab', iconName: sosialMedia as IconName };
        const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
        return (
          <a
            className={'telia-footer__sosial' + ' ' + getColor(link.color)}
            key={link.name}
            href={link.url ? link.url : ''}
          >
            <FontAwesomeIcon icon={iconDefinition} size={'lg'} />
            <span className={'telia-footer__sosial-media-name'}>{link.name}</span>
            <span className={getVerticalLine(counter++, length)}></span>
          </a>
        );
      })}
    </>
  );
};

const getVerticalLine = (counter: number, length: number) => {
  if (counter >= 0 && counter < length) {
    return 'telia-footer__vertical-seperator-line';
  } else {
    return '';
  }
};

const Logo = (data: { logoColumn: LogoColumn | null }) => {
  return (
    <>
      {' '}
      {data.logoColumn && data.logoColumn.url && data.logoColumn.imageUrl && (
        <div>
          <a href={data.logoColumn.url}>
            <img src={data.logoColumn.imageUrl} />
          </a>
        </div>
      )}
    </>
  );
};

const setBackgroundColor = (footerRow: FooterRow | null) => {
  if (!footerRow?.addressColumn && !footerRow?.socialLinkColumn) {
    return 'telia-footer__purple';
  } else {
    return 'telia-footer__black';
  }
};

const getColor = (color: string | null) => {
  if (color) {
    return 'telia-footer' + '__' + color + '-font';
  }
  return '';
};

const getBottomRowClass = (footerRow: FooterRow | null) => {
  if (footerRow?.addressColumn) {
    return 'telia-footer__container';
  } else {
    return 'telia-footer__set-top-horizontal-line';
  }
};

const isBottomRow = (footerRow: FooterRow) => {
  if (footerRow.addressColumn !== null) {
    return true;
  } else {
    return false;
  }
};

const FooterRowRender = (footerRow: FooterRow | null) => {
  return (
    <section className={'telia-footer__wrapper' + ' ' + setBackgroundColor(footerRow)}>
      <div className={getBottomRowClass(footerRow)}>
        {footerRow?.addressColumn && footerRow.linkColumns && footerRow.socialLinkColumn && (
          <Logo logoColumn={footerRow.logoColumn} />
        )}

        {footerRow?.addressColumn && <AddressColumnRender {...footerRow.addressColumn} />}

        {footerRow?.linkColumns && (
          <LinkColumnsRender linkColumns={footerRow.linkColumns} isBottom={isBottomRow(footerRow)} />
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
        <footer className={'telia-footer'}>
          {props.topRow && <FooterRowRender {...props.topRow} />}
          {props.bottomRow && <FooterRowRender {...props.bottomRow} />}
        </footer>
      )}
    </>
  );
};

export default Footer;
