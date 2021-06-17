import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FacebookIcon } from '../../atoms/Icon/icons';
import { TwitterIcon } from '../../atoms/Icon/icons';
import { VideoIcon } from '../../atoms/Icon/icons';
import { ArrowDownIcon } from '../../atoms/Icon/icons';
import { ArrowUpIcon } from '../../atoms/Icon/icons';

const Footer = (props) => {
  const TopRow = (props) => {
    // let key = 0;
    return (
      <div className={'telia-footer__wrapper-top'}>
        <div className={'telia-footer__top'}>
          <div className={'telia-footer__top-container'}>
            <TopGridContainer data={props.top} />
          </div>
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
    let key = 0;
    return (
      <>
        {props.data.map((child) => {
          return <ServiceLinks key={key++} title={child.title} links={child.links} />;
        })}
        <AccordionList data={props.data} />
      </>
    );
  };

  const BottomGridContainer = (props) => {
    return (
      <div className={'telia-footer__bottom-container'}>
        {/* <div className={'telia-footer__bottom-logo-container'}> */}
        <Logo logo={props.data.logo} />
        {/* </div>     */}
        <div className={'telia-footer__row'}>
          <Address address={props.data.address} />
          <PrivacyLinks links={props.data.links} />
          <SosialMediaLinks sosials={props.data.sosials} />
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

  const SosialMediaLinks = (props) => {
    let key = 0;
    return (
      <div className={'telia-footer__sosial-media'}>
        {props.sosials.map((child) => {
          return <SosialMediaLink key={key++} image={child.image} name={child.name} color={child.color} />;
        })}
      </div>
    );
  };

  const AccordionList = (props) => {
    let key = 0;
    console.log(props);
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
            <div className={'telia-footer__accordion-arrow'}>
              {isActive ? <ArrowUpIcon style={{ height: '0.9rem' }} /> : <ArrowDownIcon style={{ height: '0.9rem' }} />}
            </div>
          </div>
        </div>
        {isActive && (
          <div className="telia-footer__accordion-content">
            <Item links={props.links} />
          </div>
        )}
      </div>
    );
  };

  const Item = (props) => {
    let key = 0;
    return props.links.map(({ name, url }) => (
      <a key={key++} href={url}>
        <div>{name}</div>
      </a>
    ));
  };

  const ServiceLinks = (props) => {
    let key = 0;
    return (
      <ul className={'telia-footer__list'}>
        <Title title={props.title} />

        {props.links.map((child) => {
          return <ServiceLink key={key++} name={child.name} url={child.url} color={child.color} />;
        })}
      </ul>
    );
  };

  const ServiceLink = (props) => {
    return (
      <li>
        <a className={setColor(props.color)} href={props.url}>
          {props.name}
        </a>
      </li>
    );
  };

  const PrivacyAndCookies = (props) => {
    return (
      <a className={setColor(props.color)} href={props.url}>
        {props.name}
      </a>
    );
  };

  const Title = (props) => {
    return <h3>{props.title}</h3>;
  };

  const Logo = (props) => {
    return (
      <div className={'telia-footer__bottom-logo-container'}>
        <a href={props.link}>
          <img className={'telia-footer__img'} src={props.logo} />
        </a>
      </div>
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

  const SosialMediaLink = (props) => {
    return (
      <div className={'telia-footer__span'}>
        <span className={'telia-footer__span' + setColor(props.color)}>
          {props.name === 'Facebook' && <FacebookIcon style={{ height: '0.9rem' }} />}
          {props.name === 'Twitter' && <TwitterIcon style={{ height: '0.9rem' }} />}
          {props.name === 'YouTube' && <VideoIcon style={{ height: '0.9rem' }} />}
          <a className={setColor(props.color)} href={props.link}>
            {props.name}
          </a>
        </span>
      </div>
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
    <footer>
      <TopRow top={props.data.top} />
      <BottomRow bottom={props.data.bottom} />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
