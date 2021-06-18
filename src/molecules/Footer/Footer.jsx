import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FacebookIcon } from '../../atoms/Icon/icons';
import { TwitterIcon } from '../../atoms/Icon/icons';
import { VideoIcon } from '../../atoms/Icon/icons';
import { ArrowDownIcon } from '../../atoms/Icon/icons';
import { ArrowUpIcon } from '../../atoms/Icon/icons';

const Footer = (props) => {
  const TopRow = (props) => {
    return (
      <div className={'telia-footer__wrapper-top'}>
        <div className={'telia-footer__top'}>
          <TopGridContainer data={props.top} />
        </div>
      </div>
    );
  };

  const BottomRow = (props) => {
    return (
      <div className={'telia-footer__wrapper-bottom'}>
        <div className={'telia-footer__bottom'}>
          <BottomGridContainer data={props.bottom} />
        </div>
      </div>
    );
  };

  const TopGridContainer = (props) => {
    return <AccordionList data={props.data} />;
  };

  const AccordionList = (props) => {
    let key = 0;
    return (
      <div className={'telia-footer__accordion'}>
        {props.data.map(({ title, links }) => (
          <AccordionItem key={key++} title={title} links={links} />
        ))}
      </div>
    );
  };

  const AccordionItem = (props) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <div className="telia-footer__accordion-item">
        <div className="telia-footer__accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className={'telia-footer__accordion-header'}>
            <h3 className={'telia-footer__accordion-arrow'}>{props.title}</h3>
            <div className={'telia-footer__accordion-arrow telia-footer__right'}>
              {isActive ? (
                <ArrowUpIcon style={{ height: '0.9rem', color: '#990ae3' }} />
              ) : (
                <ArrowDownIcon style={{ height: '0.9rem', color: '#990ae3' }} />
              )}
            </div>
          </div>
        </div>
        {isActive && (
          <div className="telia-footer__accordion-content-mobile">
            <Item links={props.links} />
          </div>
        )}
        <div className={'telia-footer__accordion-content-desktop'}>
          <Item links={props.links} />
        </div>
      </div>
    );
  };

  const Item = (props) => {
    let key = 0;
    return props.links.map(({ name, url, color }) => (
      <a className={setColor(color)} key={key++} href={url}>
        <div>{name}</div>
      </a>
    ));
  };

  const BottomGridContainer = (props) => {
    return (
      <div className={'telia-footer__bottom-container'}>
        <Logo logo={props.data.logo} />
        <Address address={props.data.address} />
        <PrivacyLinks links={props.data.links} />
        <Facebook facebook={props.data.facebook} />
        <Twitter twitter={props.data.twitter} />
        <YouTube youtube={props.data.youtube} />
      </div>
    );
  };

  const Logo = (props) => {
    return (
      <a className={'telia-footer__logo'} href={props.link}>
        <img className={'telia-footer__img'} src={props.logo} />
      </a>
    );
  };

  const Address = (props) => {
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

  const PrivacyLinks = (props) => {
    let key = 0;
    return (
      <div className={'telia-footer__privacy-and-settings'}>
        {props.links.map((element) => {
          return <PrivacyAndCookies key={key++} name={element.name} url={element.url} color={element.color} />;
        })}
      </div>
    );
  };

  const PrivacyAndCookies = (props) => {
    return (
      <a className={setColor(props.color)} href={props.url}>
        {props.name}
      </a>
    );
  };

  const Facebook = (props) => {
    return (
      <a className={'telia-footer__facebook' + setColor(props.facebook.color)} href={props.facebook.url}>
        <FacebookIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__text'}>{props.facebook.name}</span>
      </a>
    );
  };

  const Twitter = (props) => {
    return (
      <a
        className={'telia-footer__twitter telia-footer__line' + setColor(props.twitter.color)}
        href={props.twitter.url}
      >
        <TwitterIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__text'}>{props.twitter.name}</span>
      </a>
    );
  };

  const YouTube = (props) => {
    return (
      <a
        className={'telia-footer__youtube telia-footer__line' + setColor(props.youtube.color)}
        href={props.youtube.url}
      >
        <VideoIcon style={{ height: '0.9rem' }} />
        <span className={'telia-footer__text'}>{props.youtube.name}</span>
      </a>
    );
  };

  const setColor = (color) => {
    let style = '';
    if (color !== undefined && color !== '') {
      style = ' telia-footer__purple';
    }
    return style;
  };

  return (
    <footer className={'telia-footer__container'}>
      <TopRow top={props.data.top} />
      <BottomRow bottom={props.data.bottom} />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
