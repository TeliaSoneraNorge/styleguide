import React from 'react';
import { DisplayFunctionality } from '@telia/styleguide';

const imgs = [
  {
    img: require('assets/website-images/screenshot1.png'),
    imgAlt: 'Man and woman looking at tablet',
  },
  {
    img: require('assets/website-images/screenshot2.png'),
    imgAlt: 'People talking',
  },
];

const DefaultDisplayFunctionality = () => (
  <DisplayFunctionality
    reverse={true}
    imgs={imgs}
    device="phone"
    deviceImageUrl={require('assets/website-images/phone.png')}
  >
    <h3 className="heading heading--level-2">Bedrifter med behov for dokumentasjon</h3>
    <p className="paragraph">Mobilt Opptak fra Telia sørger for opptak og trygg lagring av samtaler og meldinger.</p>
    <p className="paragraph">
      Tjenesten er særlig egnet for bank og finans, men kan også benyttes av andre bedrifter med behov for
      dokumentasjon.
    </p>
    <br />
    <br />
    <br />
    <a className="button">Bestill nå</a>
  </DisplayFunctionality>
);

export default DefaultDisplayFunctionality;
