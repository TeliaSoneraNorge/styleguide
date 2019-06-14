import React from 'react';
import { DisplayFunctionality } from '@telia/styleguide';

const imgs = [
    require('assets/website-images/screenshot1-tv.png'),
    require('assets/website-images/screenshot2-tv.png')
];

const DefaultDisplayFunctionality = () => (
    <DisplayFunctionality reverse={true} imgs={imgs} device="tv" deviceImageUrl={require('assets/website-images/tv.png')}>
        <h3 className="heading heading--level-2">Bedrifter med behov for dokumentasjon</h3>
        <p className="paragraph">
            Mobilt Opptak fra Telia sørger for opptak og trygg lagring av samtaler og meldinger.
        </p>
        <p className="paragraph">
            Tjenesten er særlig egnet for bank og finans, men kan også benyttes av andre bedrifter med behov for dokumentasjon.
        </p>
        <br />
        <br />
        <br />
        <a className="button">Bestill nå</a>
    </DisplayFunctionality>
);

export default DefaultDisplayFunctionality;