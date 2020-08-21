import React from 'react';
import { DisplayFunctionality } from '../../index';
import img from '../../stories/sampleImages'

export default {
  title: 'Component library/Molecules/DisplayFunctionality',
  component: DisplayFunctionality,
};

export const Default = () => {
  const imgs = [
    {
      img: img.screenshot1,
      imgAlt: 'Man and woman looking at tablet',
    },
    {
      img: img.screenshot2,
      imgAlt: 'People talking',
    },
  ];
  
  return (
    <DisplayFunctionality reverse={true} imgs={imgs} deviceImageUrl={img.laptop}>
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
  )
};



export const DisplayFunctionalityTablet = () => {
  const imgs = [
    {
      img: img.screenshot1,
      imgAlt: 'Man and woman looking at tablet',
    },
    {
      img: img.screenshot2,
      imgAlt: 'People talking',
    },
  ];

  return (
    <DisplayFunctionality
      reverse={true}
      imgs={imgs}
      device="tablet"
      deviceImageUrl={img.tablet}
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
  )
};



export const DisplayFunctionalityPhone = () => {
  const imgs = [
    {
      img: img.screenshot1,
      imgAlt: 'Man and woman looking at tablet',
    },
    {
      img: img.screenshot2,
      imgAlt: 'People talking',
    },
  ];
  
  return(
    <DisplayFunctionality
      reverse={true}
      imgs={imgs}
      device="phone"
      deviceImageUrl={img.phone}
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
  )
};



export const DisplayFunctionalityTv = () => {
  const imgs = [
    {
      img: img.screenshot1,
      imgAlt: 'Man and woman looking at tablet',
    },
    {
      img: img.screenshot2,
      imgAlt: 'People talking',
    },
  ];
  
  return (
    <DisplayFunctionality reverse={true} imgs={imgs} device="tv" deviceImageUrl={img.tv}>
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
  )
};
