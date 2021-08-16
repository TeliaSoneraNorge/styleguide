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
  street: string | undefined;
  city: string | undefined;
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
    <div className={'telia-footer__container telia-footer__accordion'}>
      {data.linkColumns.map((item) => (
        <ColumnItem key={key++} linkColumn={item} isBottom={data.isBottom} />
      ))}
    </div>
  );
};

const ColumnItem = (data: { linkColumn: LinkColumn; isBottom: boolean }) => {
  let key = 0;
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {!data.isBottom && (
        <div className="telia-footer__accordion-item">
          <div className="telia-footer__accordion-title" onClick={() => setIsActive(!isActive)}>
            <div className={'telia-footer__accordion-header'}>
              <h3 className={'telia-footer__accordion-arrow'}>{data.linkColumn.heading}</h3>
              <div className={'telia-footer__accordion-arrow telia-footer__arrow-move-right'}>
                {isActive ? (
                  <ArrowUpIcon style={{ height: '0.9rem' }} />
                ) : (
                  <ArrowDownIcon style={{ height: '0.9rem' }} />
                )}
              </div>
            </div>
          </div>
          {isActive && (
            <div className="telia-footer__accordion-content-mobile">
              {data.linkColumn.links.map((item) => (
                <Item key={key++} name={item.name} url={item.url} color={item.color} />
              ))}
            </div>
          )}
        </div>
      )}
      <div className={'telia-footer__accordion-content-desktop'}>
        {data.linkColumn.links.map((item) => (
          <Item key={key++} name={item.name} url={item.url} color={item.color} />
        ))}
      </div>
      {data.isBottom && !data.linkColumn.heading && (
        <div className={'telia-footer__accordion-privacy-and-settings'}>
          {data.linkColumn.links.map((item) => (
            <Item key={key++} name={item.name} url={item.url} color={item.color} />
          ))}
        </div>
      )}
    </div>
  );
};

const Item = (link: Link) => {
  let key = 0;
  return (
    <a className={'telia-footer__white' + ' ' + setColor(link.color)} key={key++} href={link.url}>
      <div>{link.name}</div>
    </a>
  );
};

const AddressColumnRender = (data: AddressColumn) => {
  return (
    <div className={'telia-footer__address-to-use'}>
      <p>{data.companyName}</p>
      <p>{data.officeType}</p>
      <p>{data.street}</p>
      <p>{data.postalCode + ' ' + data.city}</p>
    </div>
  );
};

const Link = (link: Link) => {
  return (
    <li>
      <a className={'telia-footer__decoration' + ' ' + setColor(link.color)} href={link.url}>
        {link.name}
      </a>
    </li>
  );
};

const SocialMediaColumnRender = (sosial: SocialLinkColumn) => {
  return <SocialMediaLink links={sosial.links} />;
};

const SocialMediaLink = (data: { links: Link[] }) => {
  let key = 0;
  const lenght = data.links.length - 1;
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
          <a className={'telia-footer__sosial' + ' ' + setColor(link.color)} key={key++} href={link.url}>
            <FontAwesomeIcon icon={iconDefinition} size={'lg'} />
            <span className={'telia-footer__sosial-media-name'}>{link.name}</span>
            <span className={setVerticalLine(key, lenght)}></span>
          </a>
        );
      })}
    </>
  );
};

const setVerticalLine = (key: number, length: number) => {
  if (key < length + 1) {
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

const setColor = (color: string) => {
  if (color) {
    return 'telia-footer' + '__' + color + '-font';
  }
  return '';
};

const isBottomRow = (footerRow: FooterRow) => {
  if (footerRow.addressColumn) {
    return 'telia-footer__container';
  } else {
    return 'telia-footer__set-top-horizontal-line';
  }
};

const isBottom = (footerRow: FooterRow) => {
  if (footerRow.addressColumn !== null) {
    return true;
  } else {
    return false;
  }
};

const FooterRowRender = (footerRow: FooterRow) => {
  return (
    <div className={'telia-footer__wrapper' + ' ' + setBackgroundColor(footerRow)}>
      <div className={isBottomRow(footerRow)}>
        {footerRow.addressColumn && footerRow.linkColumns && footerRow.socialLinkColumn && (
          <Logo logoColumn={footerRow.logoColumn} />
        )}

        {footerRow.addressColumn && <AddressColumnRender {...footerRow.addressColumn} />}

        {footerRow.linkColumns && (
          <LinkColumnsRender linkColumns={footerRow.linkColumns} isBottom={isBottom(footerRow)} />
        )}

        {footerRow.socialLinkColumn && <SocialMediaColumnRender {...footerRow.socialLinkColumn} />}
      </div>
    </div>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <div className={'telia-footer'}>
      <FooterRowRender {...props.topRow} />
      <FooterRowRender {...props.bottomRow} />
    </div>
  );
};

export default Footer;
