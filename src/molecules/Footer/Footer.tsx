import React, { useState } from 'react';
import { FacebookIcon } from '../../atoms/Icon/icons';
import { TwitterIcon } from '../../atoms/Icon/icons';
import { VideoIcon } from '../../atoms/Icon/icons';
import { ArrowDownIcon } from '../../atoms/Icon/icons';
import { ArrowUpIcon } from '../../atoms/Icon/icons';
import img from '../../stories/sampleImages';

export interface CompanyInformation {
  url: string;
  address: Address;
  links: Link[];
  facebook: Link;
  twitter: Link;
  youtube: Link;
}

export interface SiteWideLinks {
  title: string;
  links: Link[];
}

interface Link {
  name: string;
  url: string;
  isPurple: boolean;
}

interface Address {
  companyName: string;
  officeType: string;
  street: string;
  city: string;
  postalCode: string;
}

export type FooterProps = {
  top: SiteWideLinks[];
  bottom: CompanyInformation;
};

const Footer = (props: FooterProps) => {
  const AccordionListContainer = (props: { top: SiteWideLinks[] }) => {
    let key = 0;
    return (
      <div className={'telia-footer__wrapper-top'}>
        <div className={'telia-footer__top-container'}>
          <div className={'telia-footer__accordion'}>
            {props.top.map((item) => (
              <AccordionItem key={key++} title={item.title} links={item.links} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  const AccordionItem = (siteWideLinks: SiteWideLinks) => {
    let key = 0;
    const [isActive, setIsActive] = useState(false);
    return (
      <div className="telia-footer__accordion-item">
        <div className="telia-footer__accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className={'telia-footer__accordion-header'}>
            <h3 className={'telia-footer__accordion-arrow'}>{siteWideLinks.title}</h3>
            <div className={'telia-footer__accordion-arrow telia-footer__right'}>
              {isActive ? <ArrowUpIcon style={{ height: '0.9rem' }} /> : <ArrowDownIcon style={{ height: '0.9rem' }} />}
            </div>
          </div>
        </div>
        {isActive && (
          <div className="telia-footer__accordion-content-mobile">
            {siteWideLinks.links.map((item) => (
              <Item key={key++} name={item.name} url={item.url} isPurple={item.isPurple} />
            ))}
          </div>
        )}
        <div className={'telia-footer__accordion-content-desktop'}>
          {siteWideLinks.links.map((item) => (
            <Item key={key++} name={item.name} url={item.url} isPurple={item.isPurple} />
          ))}
        </div>
      </div>
    );
  };

  const Item = (link: Link) => {
    let key = 0;
    return (
      <a className={'telia-footer__white' + setColor(link.isPurple)} key={key++} href={link.url}>
        <div>{link.name}</div>
      </a>
    );
  };

  const BottomGridContainer = (props: { bottom: CompanyInformation }) => {
    return (
      <div className={'telia-footer__wrapper-bottom'}>
        <div className={'telia-footer__bottom'}>
          <div className={'telia-footer__bottom-container'}>
            <Logo url={props.bottom.url} />
            <Address address={props.bottom.address} />
            <PrivacyLinks links={props.bottom.links} />
            <Facebook facebook={props.bottom.facebook} />
            <Twitter twitter={props.bottom.twitter} />
            <YouTube youtube={props.bottom.youtube} />
          </div>
        </div>
      </div>
    );
  };

  const Logo = (link: { url: string }) => {
    return (
      <a className={'telia-footer__logo'} href={link.url}>
        <img className={'telia-footer__img'} src={img.logo} />
      </a>
    );
  };

  const Address = (data: { address: Address }) => {
    return (
      <div className={'telia-footer__address'}>
        <div>{data.address.companyName}</div>
        <div>{data.address.officeType}</div>
        <div>{data.address.street}</div>
        <div>
          <span>{data.address.postalCode}</span>
          <span>{data.address.city}</span>
        </div>
      </div>
    );
  };

  const PrivacyLinks = (data: { links: Link[] }) => {
    let key = 0;
    return (
      <div className={'telia-footer__privacy-and-settings'}>
        {data.links.map((element) => {
          return <PrivacyAndCookies key={key++} name={element.name} url={element.url} isPurple={element.isPurple} />;
        })}
      </div>
    );
  };

  const PrivacyAndCookies = (link: Link) => {
    return (
      <a className={'telia-footer__white' + setColor(link.isPurple)} href={link.url}>
        {link.name}
      </a>
    );
  };

  const Facebook = (data: { facebook: Link }) => {
    return (
      <a
        className={'telia-footer__facebook telia-footer__white' + setColor(data.facebook.isPurple)}
        href={data.facebook.url}
      >
        <FacebookIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{data.facebook.name}</span>
      </a>
    );
  };

  const Twitter = (data: { twitter: Link }) => {
    return (
      <a
        className={'telia-footer__twitter telia-footer__white telia-footer__line' + setColor(data.twitter.isPurple)}
        href={data.twitter.url}
      >
        <TwitterIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{data.twitter.name}</span>
      </a>
    );
  };

  const YouTube = (data: { youtube: Link }) => {
    return (
      <a
        className={'telia-footer__youtube telia-footer__white telia-footer__line' + setColor(data.youtube.isPurple)}
        href={data.youtube.url}
      >
        <VideoIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{data.youtube.name}</span>
      </a>
    );
  };

  const setColor = (isPurple: boolean) => {
    if (isPurple) {
      return ' telia-footer__purple';
    }
    return '';
  };

  return (
    <footer className={'telia-footer__container'}>
      <AccordionListContainer top={props.top} />
      <BottomGridContainer bottom={props.bottom} />
    </footer>
  );
};

export default Footer;
