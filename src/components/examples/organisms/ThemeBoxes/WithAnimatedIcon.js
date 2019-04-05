import React from 'react';
import { ThemeBoxes, ThemeBox, IconAnimated } from '@telia/styleguide';

const TwoClosedBoxes = () => (
    <ThemeBoxes>
        <ThemeBox
            id="themebox-1"
            isExpanded={false}
            iconAnimated={<IconAnimated json={require('../../../../assets/animations/Music_freedom.json')} />}
            heading="Themebox" />
        <ThemeBox
            id="themebox-2"
            isExpanded={false}
            iconAnimated={<IconAnimated json={require('../../../../assets/animations/Music_freedom.json')} />}
            heading="Heading" >
                <p className="theme-box__preamble paragraph">Du betaler ingenting i dag, men får en fast månedspris over 24 måneder.</p>
                <p>Prisen inkluderer skjermforsikring og mulighet til å bytte til ny mobil etter 12 måneder. I tillegg kommer månedsprisen på et valgfritt Telia-abonnement uten binding.</p>
                <div>
                    <a href="https://www.telia.no/mobiltelefoner/" className="button button--primary" target="_self">SVITSJ nå</a>
                </div>
            </ThemeBox>
    </ThemeBoxes>
);

export default TwoClosedBoxes;