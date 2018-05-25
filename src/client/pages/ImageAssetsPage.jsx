import _ from 'lodash';
import React from 'react';

import CodeSnippet from '../components/CodeSnippet';
import { getStaticData } from '../utils/staticDataUtil';
import { Heading, Header } from '../../../component-lib/src/index';

const icons = getStaticData('icons');
const pebbles = getStaticData('pebbles');

const ImageAsset = ({ imagePath, imageName }) =>
    <div className="sg-image-assets__asset">
        <img className="sg-image-assets__image" src={`${imagePath}/${imageName}`} />
        <div className="sg-image-assets__text">{imageName}</div>
    </div>;

const ImageAssetsPage = () =>
    <div>
        <Header pageTitle="Image Assets" />

        <div className="container container--small">
            <Heading level="2" text="Icons" />
            <div className="sg-image-assets">
                {_.map(icons, (icon) =>
                    <ImageAsset key={icon} imagePath="/public/icons" imageName={icon} />
                )}
            </div>
        </div>

        <div className="container container--small">
            <Heading level="2" text="Pebbles" />
            <div className="sg-image-assets">
                {_.map(pebbles, (pebble) =>
                    <ImageAsset key={pebble} imagePath="/public/pebbles" imageName={pebble} />
                )}
            </div>
        </div>
    </div>;

export default ImageAssetsPage;