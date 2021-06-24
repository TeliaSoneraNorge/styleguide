import React, { useState } from 'react';
import { FacebookIcon } from '../../atoms/Icon/icons';
import { TwitterIcon } from '../../atoms/Icon/icons';
import { VideoIcon } from '../../atoms/Icon/icons';
import { ArrowDownIcon } from '../../atoms/Icon/icons';
import { ArrowUpIcon } from '../../atoms/Icon/icons';
import img from '../../stories/sampleImages';

export interface IFooterBottomDataStruct {
  url: string;
  address: IAddress;
  links: ILink[];
  facebook: ILink;
  twitter: ILink;
  youtube: ILink;
}

export interface ILinkList {
  title: string;
  links: ILink[];
}

interface ILink {
  name: string;
  url: string;
  color: boolean;
}

interface IAddress {
  companyName: string;
  office: string;
  street: string;
  city: string;
  postalCode: string;
}

export type FooterProps = {
  /**
   * Array of LinkList objects
   */
  top: ILinkList[];
  /**
   * Containing data for ...
   */
  bottom: IFooterBottomDataStruct | any;
};

const Footer = (props: FooterProps) => {
  const AccordionListContainer = (props: { top: ILinkList[] }) => {
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

  const AccordionItem = (props: { title: string; links: ILink[] }) => {
    let key = 0;
    const [isActive, setIsActive] = useState(false);
    return (
      <div className="telia-footer__accordion-item">
        <div className="telia-footer__accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className={'telia-footer__accordion-header'}>
            <h3 className={'telia-footer__accordion-arrow'}>{props.title}</h3>
            <div className={'telia-footer__accordion-arrow telia-footer__right'}>
              {isActive ? <ArrowUpIcon style={{ height: '0.9rem' }} /> : <ArrowDownIcon style={{ height: '0.9rem' }} />}
            </div>
          </div>
        </div>
        {isActive && (
          <div className="telia-footer__accordion-content-mobile">
            {props.links.map((item) => (
              <Item key={key++} name={item.name} url={item.url} color={item.color} />
            ))}
          </div>
        )}
        <div className={'telia-footer__accordion-content-desktop'}>
          {props.links.map((item) => (
            <Item key={key++} name={item.name} url={item.url} color={item.color} />
          ))}
        </div>
      </div>
    );
  };

  const Item = (props: { name: string; url: string; color: boolean }) => {
    let key = 0;
    return (
      <a className={'telia-footer__white' + setColor(props.color)} key={key++} href={props.url}>
        <div>{props.name}</div>
      </a>
    );
  };

  const BottomRow = (props: { bottom: IFooterBottomDataStruct }) => {
    return (
      <div className={'telia-footer__wrapper-bottom'}>
        <div className={'telia-footer__bottom'}>
          <BottomGridContainer
            url={props.bottom.url}
            address={props.bottom.address}
            links={props.bottom.links}
            facebook={props.bottom.facebook}
            twitter={props.bottom.twitter}
            youtube={props.bottom.youtube}
          />
        </div>
      </div>
    );
  };

  const BottomGridContainer = (props: {
    url: string;
    address: IAddress;
    links: ILink[];
    facebook: ILink;
    twitter: ILink;
    youtube: ILink;
  }) => {
    return (
      <div className={'telia-footer__bottom-container'}>
        <Logo link={props.url} />
        <Address address={props.address} />
        <PrivacyLinks links={props.links} />
        <Facebook facebook={props.facebook} />
        <Twitter twitter={props.twitter} />
        <YouTube youtube={props.youtube} />
      </div>
    );
  };

  const Logo = (props: { link: string }) => {
    return (
      <a className={'telia-footer__logo'} href={props.link}>
        <img className={'telia-footer__img'} src={img.logo} />
      </a>
    );
  };

  const Address = (props: { address: IAddress }) => {
    return (
      <div className={'telia-footer__address'}>
        <div>{props.address.companyName}</div>
        <div>{props.address.office}</div>
        <div>{props.address.street}</div>
        <div>
          <span>{props.address.postalCode}</span>
          <span>{props.address.city}</span>
        </div>
      </div>
    );
  };

  const PrivacyLinks = (props: { links: ILink[] }) => {
    let key = 0;
    return (
      <div className={'telia-footer__privacy-and-settings'}>
        {props.links.map((element) => {
          return <PrivacyAndCookies key={key++} name={element.name} url={element.url} color={element.color} />;
        })}
      </div>
    );
  };

  const PrivacyAndCookies = (props: { color: boolean; url: string; name: string }) => {
    return (
      <a className={'telia-footer__white' + setColor(props.color)} href={props.url}>
        {props.name}
      </a>
    );
  };

  const Facebook = (props: { facebook: { color: boolean; url: string; name: string } }) => {
    return (
      <a
        className={'telia-footer__facebook telia-footer__white' + setColor(props.facebook.color)}
        href={props.facebook.url}
      >
        <FacebookIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{props.facebook.name}</span>
      </a>
    );
  };

  const Twitter = (props: { twitter: { color: boolean; url: string; name: string } }) => {
    return (
      <a
        className={'telia-footer__twitter telia-footer__white telia-footer__line' + setColor(props.twitter.color)}
        href={props.twitter.url}
      >
        <TwitterIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{props.twitter.name}</span>
      </a>
    );
  };

  const YouTube = (props: { youtube: { color: boolean; url: string; name: string } }) => {
    return (
      <a
        className={'telia-footer__youtube telia-footer__white telia-footer__line' + setColor(props.youtube.color)}
        href={props.youtube.url}
      >
        <VideoIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__sosial-media-text'}>{props.youtube.name}</span>
      </a>
    );
  };

  const setColor = (color: boolean) => {
    if (color) {
      return ' telia-footer__purple';
    }
    return '';
  };

  return (
    <footer className={'telia-footer__container'}>
      <AccordionListContainer top={props.top} />
      <BottomRow bottom={props.bottom} />
    </footer>
  );
};

export default Footer;
