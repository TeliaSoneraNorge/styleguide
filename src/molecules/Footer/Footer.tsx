import React, { useState } from 'react';

export interface Link {
  name: string;
  url: string;
  color: string;
  iconUrl: string | undefined;
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
  TopRow: FooterRow; //Could have an array, for all rows, except last, they have "purple background"
  BottomRow: FooterRow; //while last row in the array, gets that "dark background"... but... What the hell...
};

const AddressColumnRender = (data: AddressColumn) => {
  return <p>Address...{data.city + ' ' + data.companyName}</p>;
};

const LinkColumnsRender = (data: LinkColumn[]) => {
  return <p>Links...</p>;
};

const SocialMediaColumnRender = (data: SocialLinkColumn) => {
  return <p>Social links...</p>;
};

const FooterRowRender = (data: FooterRow) => {
  return (
    <div className="telia-footer__row">
      {data.addressColumn && <AddressColumnRender {...data.addressColumn} />}

      {data.linkColumns && <LinkColumnsRender {...data.linkColumns} />}

      {data.socialLinkColumn && <SocialMediaColumnRender {...data.socialLinkColumn} />}
    </div>
  );
};

export const Footer = (props: FooterProps) => {
  return (
    <div className="telia-footer__container">
      <FooterRowRender {...props.TopRow} />
      <FooterRowRender {...props.BottomRow} />
    </div>
  );
};

export default Footer;
