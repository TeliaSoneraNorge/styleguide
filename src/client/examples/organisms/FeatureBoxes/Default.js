import React from 'react';
import { FeatureBoxes, FeatureBox, SvgIcon, Container } from '@telia/styleguide';

const FeatureBoxesDemo = () => (
    <Container size="large">
        <FeatureBoxes>
            <FeatureBox
                id="featurebox-1"
                iconSvg={<SvgIcon iconName="ico_desktop" color="purple" />}
                heading="Selvbetjening"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-2"
                iconSvg={<SvgIcon iconName="ico_wifi" color="purple" />}
                heading="One number"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-3"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="Personlig sentralbord"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-4"
                iconSvg={<SvgIcon iconName="ico_mobile_o" color="purple" />}
                heading="Mobilaplikasjon"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-5"
                iconSvg={<SvgIcon iconName="ico_wifi" color="purple" />}
                heading="Bedriftskatalog"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-6"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="Integrasjoner"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
            <FeatureBox
                id="featurebox-7"
                iconSvg={<SvgIcon iconName="ico_headset" color="purple" />}
                heading="Selvbetjening"
                url="http://telia.no"
                text="Ønsker du å gi dine ansatte større frihet, og samtidig sikre .. " />
        </FeatureBoxes>
    </Container>
);

export default FeatureBoxesDemo;