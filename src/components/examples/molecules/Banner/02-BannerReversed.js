import React from 'react';
import { Banner, Container } from '@telia/styleguide';

const DefaultBanner = () => (
    <Container size="full" className="banner--background-grey">
        <Container size="large">
            <Banner img="/public/website-images/screenshot1.png" reverse={true}>
                <h2 className="heading-2">– Vi står ikke bare og prater om digitalisering</h2>
                <p className="paragraph">
                    I Åseral i Vest-Agder jobber i disse dager Implenia Norge 
                    med å bygge ut nesten 10 kilometer med tunneler for Agder 
                    Energi. Fordi det er snakk om overføringstuneller for 
                    vann i forbindelse med strømproduksjon, vil det ikke 
                    være et sted hvor mennesker skal oppholde seg når 
                    det er ferdig bygget. Derfor er det heller ingen 
                    grunn til å bruke store summer på montering av 
                    permanente basestasjoner.
                </p>
            </Banner>
        </Container>
    </Container>
);

export default DefaultBanner;