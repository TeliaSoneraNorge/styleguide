import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, IconLookup, IconDefinition, findIconDefinition, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export interface LogoColumn {
  url: string;
  imageUrl: string;
}

export interface Link {
  name: string;
  url: string;
  color: string;
  iconUrl?: string | undefined;
}

export interface AddressColumn {
  companyName: string | undefined;
  officeType: string | undefined;
  street: string | undefined | null;
  city: string | undefined | null;
  postalCode: string | undefined;
}

export interface SocialLinkColumn {
  links: Link[];
}

export interface LinkColumn {
  heading: string;
  links: Link[];
}

export interface FooterRow {
  logoColumn: LogoColumn | null;
  linkColumns: LinkColumn[];
  addressColumn: AddressColumn | null;
  socialLinkColumn: SocialLinkColumn | null;
}

export type FooterProps = {
  topRow: FooterRow;
  bottomRow: FooterRow;
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
              {data.linkColumn.links.map((item) => (
                <Item key={item.name.toString()} name={item.name} url={item.url} color={item.color} />
              ))}
            </div>
          )}
        </button>
      )}
      <div className={'telia-footer__accordion-content-desktop'}>
        {data.linkColumn.links.map((item) => (
          <Item key={item.name.toString()} name={item.name} url={item.url} color={item.color} />
        ))}
      </div>
      {data.isBottom && !data.linkColumn.heading && (
        <div className={'telia-footer__accordion-privacy-and-settings'}>
          {data.linkColumn.links.map((item) => (
            <Item key={item.name.toString()} name={item.name} url={item.url} color={item.color} />
          ))}
        </div>
      )}
    </div>
  );
};

const Item = (link: Link) => {
  return (
    <a className={'telia-footer__white' + ' ' + getColor(link.color)} key={link.name.toString()} href={link.url}>
      <div>{link.name}</div>
    </a>
  );
};

const AddressColumnRender = (data: AddressColumn) => {
  const postalCode = data.postalCode === null || data.postalCode === undefined ? '' : data.postalCode;
  const city = data.city === null || data.city === undefined ? '' : data.city;
  return (
    <div className={'telia-footer__address-to-use'}>
      <p>{data.companyName}</p>
      <p>{data.officeType}</p>
      <p>{data.street}</p>
      <p>{postalCode + ' ' + city}</p>
    </div>
  );
};

const SocialMediaColumnRender = (sosial: SocialLinkColumn) => {
  return <SocialMediaLink links={sosial.links} />;
};

const SocialMediaLink = (data: { links: Link[] }) => {
  const length = data.links.length - 1;
  let counter = 0;
  return (
    <>
      {data.links.map((link) => {
        let sosialMedia = link.name.toLowerCase();
        if (sosialMedia.endsWith('facebook')) {
          sosialMedia = sosialMedia + '-f';
        }
        const iconLookup: IconLookup = { prefix: 'fab', iconName: sosialMedia as IconName };
        const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
        return (
          <a className={'telia-footer__sosial' + ' ' + getColor(link.color)} key={link.name.toString()} href={link.url}>
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

const Logo = (data: { logoColumn: LogoColumn | any }) => {
  if (!data.logoColumn) {
    return <> </>;
  } else {
    return (
      <div>
        <a href={data.logoColumn.url}>
          <img src={data.logoColumn.imageUrl} />
        </a>
      </div>
    );
  }
};

const setBackgroundColor = (footerRow: FooterRow) => {
  if (!footerRow.addressColumn && !footerRow.socialLinkColumn) {
    return 'telia-footer__purple';
  } else {
    return 'telia-footer__black';
  }
};

const getColor = (color: string) => {
  if (color) {
    return 'telia-footer' + '__' + color + '-font';
  }
  return '';
};

const getBottomRowClass = (footerRow: FooterRow) => {
  if (footerRow.addressColumn) {
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

const FooterRowRender = (footerRow: FooterRow) => {
  return (
    <section className={'telia-footer__wrapper' + ' ' + setBackgroundColor(footerRow)}>
      <div className={getBottomRowClass(footerRow)}>
        {footerRow.addressColumn && footerRow.linkColumns && footerRow.socialLinkColumn && (
          <Logo logoColumn={footerRow.logoColumn} />
        )}

        {footerRow.addressColumn && <AddressColumnRender {...footerRow.addressColumn} />}

        {footerRow.linkColumns && (
          <LinkColumnsRender linkColumns={footerRow.linkColumns} isBottom={isBottomRow(footerRow)} />
        )}

        {footerRow.socialLinkColumn && <SocialMediaColumnRender {...footerRow.socialLinkColumn} />}
      </div>
    </section>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <footer className={'telia-footer'}>
      <FooterRowRender {...props.topRow} />
      <FooterRowRender {...props.bottomRow} />
    </footer>
  );
};

export default Footer;
