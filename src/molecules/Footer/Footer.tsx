import React, { useState } from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '../..';
import images from '../../stories/sampleImages';
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
  linkColumns: LinkColumn[] | null;
  addressColumn: AddressColumn | null;
  socialLinkColumn: SocialLinkColumn | null;
}

export type FooterProps = {
  topRow: FooterRow;
  bottomRow: FooterRow;
};

const LinkColumnsRender = (data: { linkColumn: LinkColumn[] }) => {
  let key = 0;
  return (
    <div className={'telia-footer__container telia-footer__accordion'}>
      {data.linkColumn.map((item) => (
        <ColumnItem key={key++} linkColumn={item} />
      ))}
    </div>
  );
};

const ColumnItem = (data: { linkColumn: LinkColumn }) => {
  let key = 0;
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="telia-footer__accordion-item">
      <div className="telia-footer__accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className={'telia-footer__accordion-header'}>
          <h3 className={'telia-footer__accordion-arrow'}>{data.linkColumn.heading}</h3>
          <div className={'telia-footer__accordion-arrow telia-footer__arrow-move-right'}>
            {isActive ? <ArrowUpIcon style={{ height: '0.9rem' }} /> : <ArrowDownIcon style={{ height: '0.9rem' }} />}
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
      <div className={'telia-footer__accordion-content-desktop'}>
        {data.linkColumn.links.map((item) => (
          <Item key={key++} name={item.name} url={item.url} color={item.color} />
        ))}
      </div>
    </div>
  );
};

const Item = (link: Link) => {
  let key = 0;
  return (
    <a className={'telia-footer__white' + setColor(link.color)} key={key++} href={link.url}>
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

const LinkColumnsBottomRender = (data: { linkColumn: LinkColumn[] }) => {
  let key = 0;
  return (
    <div>
      {data.linkColumn.map((item) => (
        <Column key={key++} links={item.links} />
      ))}
    </div>
  );
};

const Column = (data: { links: Link[] }) => {
  let key = 0;
  return (
    <>
      <ul className={'telia-footer__list-decoration'}>
        {data.links.map((link) => {
          return <Link key={key++} link={link} />;
        })}
      </ul>
    </>
  );
};

const Link = (data: { link: Link }) => {
  return (
    <li>
      <a className={'telia-footer__decoration' + ' ' + setColor(data.link.color)} href={data.link.url}>
        {data.link.name}
      </a>
    </li>
  );
};

const SocialMediaColumnRender = (data: { sosial: SocialLinkColumn }) => {
  return <SocialMediaLink links={data.sosial.links} />;
};

const SocialMediaLink = (data: { links: Link[] }) => {
  let key = 0;
  const lenght = data.links.length - 1;
  return (
    <>
      {data.links.map((link) => {
        return (
          <a className={'telia-footer__sosial' + ' ' + setColor(link.color)} key={key++} href={link.url}>
            <img src={link.iconUrl} />
            <span className={'telia-footer__sosial-media-name'}>{link.name}</span>
            <span className={setHorizontalLine(key, lenght)}></span>
          </a>
        );
      })}
    </>
  );
};

const setHorizontalLine = (key: number, length: number) => {
  if (key < length + 1) {
    return 'telia-footer__horizontal-seperator-line';
  } else {
    return '';
  }
};

const Logo = () => {
  return (
    <div>
      <a href={'https://telia.no'}>
        <img src={images.logo} />
      </a>
    </div>
  );
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
    return '';
  }
};

const FooterRowRender = (data: { footerRow: FooterRow }) => {
  return (
    <div className={'telia-footer__wrapper' + ' ' + setBackgroundColor(data.footerRow)}>
      <div className={isBottomRow(data.footerRow)}>
        {data.footerRow.addressColumn && data.footerRow.linkColumns && data.footerRow.socialLinkColumn && <Logo />}

        {data.footerRow.addressColumn && <AddressColumnRender {...data.footerRow.addressColumn} />}

        {data.footerRow.linkColumns &&
          (isBottomRow(data.footerRow) ? (
            <LinkColumnsBottomRender linkColumn={data.footerRow.linkColumns} />
          ) : (
            <LinkColumnsRender linkColumn={data.footerRow.linkColumns} />
          ))}

        {data.footerRow.socialLinkColumn && <SocialMediaColumnRender sosial={data.footerRow.socialLinkColumn} />}
      </div>
    </div>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <div className={'telia-footer'}>
      <FooterRowRender footerRow={props.topRow} />
      <FooterRowRender footerRow={props.bottomRow} />
    </div>
  );
};

export default Footer;
