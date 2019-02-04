import React from 'react';
import { FeatureBoxes, FeatureBox, SvgIcon, Container } from '@telia/styleguide';

const FeatureBoxesDemo = () => (
    <Container size="large">
        <FeatureBoxes>
            <FeatureBox
                id="featurebox-1"
                iconSvg={<SvgIcon iconName="ico_desktop" color="purple" />}
                heading="selvbetjening"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-2"
                iconSvg={<SvgIcon iconName="ico_wifi" color="purple" />}
                heading="one number"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-3"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="personlig sentralbord"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-4"
                iconSvg={<SvgIcon iconName="ico_mobile_o" color="purple" />}
                heading="mobilaplikasjon"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-5"
                iconSvg={<SvgIcon iconName="ico_wifi" color="purple" />}
                heading="bedriftskatalog"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-6"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="integrasjoner"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-7"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="selvbetjening"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
        </FeatureBoxes>
    </Container>
);

export default FeatureBoxesDemo;