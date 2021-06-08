import React from 'react';
import PropTypes from 'prop-types';
import { FacebookIcon } from '../../atoms/Icon/icons';
import { TwitterIcon } from '../../atoms/Icon/icons';
import { VideoIcon } from '../../atoms/Icon/icons';

const Footer = (props) => {
  const TopRow = (props) => {
    let key = 0;
    return (
      <div className={'telia-footer__box-top'}>
        <div className={'telia-footer__container'}>
          <TopGridContainer data={props.top} />
        </div>
      </div>
    );
  };

  const BottomRow = (props) => {
    return (
      <div className={'telia-footer__box-bottom'}>
        <div className={'telia-footer__container'}>{<BottomGridContainer data={props.bottom} />}</div>
      </div>
    );
  };

  const TopGridContainer = (props) => {
    let key = 0;
    return (
      <div className={'telia-footer__grid-top-container'}>
        {props.data.map((child) => {
          return <ServiceLinks key={key++} title={child.title} links={child.links} />;
        })}
      </div>
    );
  };

  const BottomGridContainer = (props) => {
    return (
      <div className={'telia-footer__grid-bottom-container'}>
        <Logo logo={props.data.logo} />
        <div className={'telia-footer__inline'}>
          <Address address={props.data.address} />
          <PrivacyLinks links={props.data.links} />
        </div>
        <SosialMediaLinks sosials={props.data.sosials} />
      </div>
    );
  };

  const PrivacyLinks = (props) => {
    let key = 0;
    return (
      <div className="telia-footer__inline-address">
        <ul className={'telia-footer__list'}>
          {props.links.map((element) => {
            return <ServiceLink key={key++} name={element.name} url={element.url} color={element.color} />;
          })}
        </ul>
      </div>
    );
  };

  const SosialMediaLinks = (props) => {
    let key = 0;
    return (
      <ul className={'telia-footer__list'}>
        {props.sosials.map((child) => {
          return <SosialMediaLink key={key++} image={child.image} name={child.name} color={child.color} />;
        })}
      </ul>
    );
  };

  const ServiceLinks = (props) => {
    let key = 0;
    return (
      <ul className={'telia-footer__text-container telia-footer__list'}>
        <Title title={props.title} />
        {props.links.map((child) => {
          return <ServiceLink key={key++} name={child.name} url={child.url} color={child.color} />;
        })}
      </ul>
    );
  };

  const ServiceLink = (props) => {
    return (
      <li className={'telia-footer__list-item'}>
        <a className={'telia-footer__list-item-link'} href={props.url}>
          {props.name}
        </a>
      </li>
    );
  };

  const Title = (props) => {
    return (
      <li>
        <h4 className={'telia-footer__header'}>{props.title}</h4>
      </li>
    );
  };

  const Logo = (props) => {
    return (
      <div className={'telia-footer__header'}>
        <a href={props.link}>
          <img src={props.logo} />
        </a>
      </div>
    );
  };

  const Address = (props) => {
    return (
      <div className={'telia-footer__inline-address'}>
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

  const SosialMediaLink = (props) => {
    return (
      <li className={'telia-footer__inline'}>
        {props.name === 'Facebook' && <FacebookIcon style={{ height: '0.9rem' }} />}
        {props.name === 'Twitter' && <TwitterIcon style={{ height: '0.9rem' }} />}
        {props.name === 'YouTube' && <VideoIcon style={{ height: '0.9rem' }} />}
        <a href={props.link}>
          <img src={props.image}></img>
          <span>{props.name}</span>
        </a>
      </li>
    );
  };

  const setColor = (color) => {
    let style = '';
    if (color !== undefined && color !== '') {
      style = 'telia-footer__purple';
    }
    return style;
  };

  return (
    <footer>
      <TopRow top={props.data.top} />
      <BottomRow bottom={props.data.bottom} />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
