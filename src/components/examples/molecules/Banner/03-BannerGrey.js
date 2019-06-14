import React from 'react';
import { Banner, Container } from '@telia/styleguide';

const DefaultBanner = () => (
    <Container size="large">
        <Banner img={require('../../../../assets/website-images/screenshot1.png')} grey={true}>
            <h2 className="heading-2">– Vi står ikke bare og prater om digitalisering</h2>
            <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Banner>
    </Container>
);

export default DefaultBanner;