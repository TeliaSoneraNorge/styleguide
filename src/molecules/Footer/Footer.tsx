import React, { useState } from 'react';
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
  topRow: FooterRow; //Could have an array, for all rows, except last, they have "purple background"
  bottomRow: FooterRow; //while last row in the array, gets that "dark background"... but... What the hell...
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

const LinkColumnsRender = (data: { linkColumn: LinkColumn[] }) => {
  let key = 0;
  return (
    <>
      {data.linkColumn.map((item) => {
        return (
          <div key={key++}>
            <h4 className={'telia-footer__heading' + ' ' + isHeading(item.heading)}>{item.heading}</h4>
            <Column links={item.links} />
          </div>
        );
      })}
    </>
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
  return (
    <>
      {data.links.map((link) => {
        return (
          <a className={'telia-footer__sosial' + ' ' + setColor(link.color)} key={key++} href={link.url}>
            <img src={link.iconUrl} />
            {link.name}
          </a>
        );
      })}
    </>
  );
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

const isHeading = (heading: string) => {
  if (!heading) {
    return 'telia-footer__remove-padding';
  } else {
    return '';
  }
};

const FooterRowRender = (data: { footerRow: FooterRow }) => {
  return (
    <div className={'telia-footer__wrapper' + ' ' + setBackgroundColor(data.footerRow)}>
      <div className={'telia-footer__container'}>
        {data.footerRow.addressColumn && data.footerRow.linkColumns && data.footerRow.socialLinkColumn && <Logo />}

        {data.footerRow.addressColumn && <AddressColumnRender {...data.footerRow.addressColumn} />}

        {data.footerRow.linkColumns && <LinkColumnsRender linkColumn={data.footerRow.linkColumns} />}

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
