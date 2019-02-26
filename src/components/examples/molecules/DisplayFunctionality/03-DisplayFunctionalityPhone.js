import React from 'react';
import { DisplayFunctionality, Container } from '@telia/styleguide';

const imgs = [
    '/public/website-images/screenshot1-phone.png',
    '/public/website-images/screenshot2-phone.png'
];

const DefaultDisplayFunctionality = () => (
    <DisplayFunctionality reverse={true} imgs={imgs} device="phone" deviceImageUrl="/public/website-images/phone.png">
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