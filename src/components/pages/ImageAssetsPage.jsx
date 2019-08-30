import _ from 'lodash';
import React from 'react';

import { getStaticData } from '../../utils/staticDataUtil';
import { Heading, Header, SvgIcon } from '../../../component-lib/src/index';

const icons = getStaticData('icons');
const pebbles = getStaticData('pebbles');

const ImageAssetsPage = () =>
    <div>
        <Header pageTitle="Image Assets" />

        <div className="container container--small">
            <Heading level="2" text="Icons" />
            <Heading level="3" text="CSS icons color classes" style={ { marginBottom: '1rem' } } />
            <div className="sg-image-assets">
                {_.map(['purple', 'black', 'dark-grey', 'grey', 'light-grey','white', 'green'], (color) =>
                    <div key={color} className="sg-image-assets__asset">
                        <SvgIcon className={'sg-image-assets__image'}  iconName={'step-by-step-pebble'} color={color} />
                        <div className="sg-image-assets__text">.svg-icon--{color}</div>
                    </div>
                )}
            </div>
            <Heading level="3" text="Icon names" style={ { marginBottom: '1rem' } } />
            <div className="sg-image-assets">
                {_.map(icons, (iconName) =>
                    <div key={iconName} className="sg-image-assets__asset">
                        <SvgIcon className={'sg-image-assets__image'}  iconName={iconName.replace('.svg', '')} color={'purple'} />
                        <div className="sg-image-assets__text">{iconName.replace('.svg', '')}</div>
                    </div>
                )}
            </div>
        </div>

        <div className="container container--small">
            <Heading level="2" text="Pebbles" />
            <div className="sg-image-assets">
                {_.map(pebbles, (pebble) =>
                    <div key={pebble} className="sg-image-assets__asset">
                        <img className="sg-image-assets__image" src={pebble} alt={pebble}/>
                        <div className="sg-image-assets__text">{pebble}</div>
                    </div>
                )}
            </div>
        </div>
    </div>;

export default ImageAssetsPage;