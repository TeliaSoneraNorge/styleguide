import React, { useState, useEffect } from 'react';
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

const RenderColumns = (model: { links: LinkColumn[] | null; isBottom: boolean }) => {
  return (
    <>
      {model.links?.map((item) => (
        <RenderColumn key={item.heading} links={item} />
      ))}
    </>
  );
};

const removeLine = (style: string, isBottom: boolean) => {
  return isBottom ? style + ' telia-footer__remove-line' : style + '';
};

const buildColumnBottomRow = (links: LinkColumn | null) => {
  return (
    <div className={'telia-footer__nav-column-bottom'}>
      {links?.links?.map((item) => (
        <Item key={item.name} link={item} isBottom={links.heading ? false : true} />
      ))}
    </div>
  );
};

const buildColumnsTopRow = (links: LinkColumn | null) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={'telia-footer__nav-column-top'}>
      <button className={'telia-footer__accordion'} onClick={() => setIsActive(!isActive)}>
        <div className={'telia-footer__header'}>
          {links?.heading && <Heading heading={links?.heading} />}
          <div className={'telia-footer__arrow'}>
            {isActive ? <ArrowUpIcon style={{ height: '1em' }} /> : <ArrowDownIcon style={{ height: '1em' }} />}
          </div>
        </div>
        <div className={'telia-footer__small-screen'}>
          {isActive &&
            links?.links?.map((item) => <Item key={item.name} link={item} isBottom={links.heading ? false : true} />)}
        </div>
        <div className={'telia-footer__desktop'}>
          {links?.links?.map((item) => (
            <Item key={item.name} link={item} isBottom={links.heading ? false : true} />
          ))}
        </div>
      </button>
    </div>
  );
};

const RenderColumn = (model: { links: LinkColumn | null }) => {
  if (!model.links?.heading) {
    return buildColumnBottomRow(model.links);
  }
  return buildColumnsTopRow(model.links);
};

const Heading = (data: { heading: string | null }) => {
  return (
    <>{data.heading && <h3 className={'telia-footer__white telia-footer__remove-margin-top'}>{data.heading}</h3>}</>
  );
};

const Item = (data: { link: Link; isBottom: boolean }) => {
  return (
    <>
      {data.link.name && data.link.url && (
        <a
          className={getElementColor(
            data.isBottom ? 'telia-footer__a-tag-bottom' : 'telia-footer__a-tag',
            data.link.color
          )}
          href={data.link.url}
        >
          {data.link.name}
        </a>
      )}
    </>
  );
};

const Logo = (data: { logo: LogoColumn | null }) => {
  return (
    <>
      {' '}
      {data.logo && data.logo.url && data.logo.imageUrl && (
        <div className={removeLine('telia-footer__nav-column-bottom', data !== null)}>
          <a href={data.logo.url} className={'telia-footer__logo'}>
            <img src={data.logo.imageUrl} />
          </a>
        </div>
      )}
    </>
  );
};

const AddressColumnRender = (data: AddressColumn) => {
  return (
    <div className={removeLine('telia-footer__nav-column-bottom telia-footer__white', data !== null)}>
      {data.companyName && <p className={'telia-footer__remove-margin'}>{data.companyName}</p>}

      {data.officeType && <p className={'telia-footer__remove-margin'}>{data.officeType}</p>}

      {data.street && <p className={'telia-footer__remove-margin'}>{data.street}</p>}

      {data.postalCode && data.city && (
        <p className={'telia-footer__remove-margin'}>{data.postalCode + ' ' + data.city}</p>
      )}
    </div>
  );
};

const SocialMediaColumnRender = (sosial: SocialLinkColumn | null) => {
  let counter = 0;
  return <>{sosial?.links && <SocialMediaLink key={counter++} links={sosial?.links} />}</>;
};

const SocialMediaLink = (data: { links: Link[] | null }) => {
  return (
    <ul className={removeLine('telia-footer__nav-column-bottom', data !== null)}>
      {data.links?.map((link) => {
        const sosialMedia = link?.name?.toLowerCase();
        const iconLookup: IconLookup = { prefix: 'fab', iconName: sosialMedia as IconName };
        const iconDefinition: IconDefinition = findIconDefinition(iconLookup);
        return (
          <li className={'telia-footer__sosial-media'} key={link.name}>
            {link.name && link.url && (
              <a className={getElementColor('', link.color)} href={link.url}>
                <FontAwesomeIcon icon={iconDefinition} className={'telia-footer__grow-icon'} />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
};

const getElementColor = (style: string, color: string | null) => {
  const linkColor = 'telia-footer__' + (color ? color : 'white');
  return style ? style + ' ' + linkColor : '' + linkColor;
};

const FooterRowRender = (footerRow: FooterRow | null) => {
  return (
    <section className={getElementColor('', footerRow?.logoColumn ? 'deep-purple' : 'purple')}>
      <div className={'telia-footer__container'}>
        {footerRow?.logoColumn && <Logo logo={footerRow?.logoColumn} />}
        {footerRow?.addressColumn && <AddressColumnRender {...footerRow?.addressColumn} />}
        {footerRow?.linkColumns && (
          <RenderColumns links={footerRow?.linkColumns} isBottom={footerRow.logoColumn ? true : false} />
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
        <footer>
          {props.topRow && <FooterRowRender {...props.topRow} />}
          {props.bottomRow && <FooterRowRender {...props.bottomRow} />}
        </footer>
      )}
    </>
  );
};

export default Footer;
