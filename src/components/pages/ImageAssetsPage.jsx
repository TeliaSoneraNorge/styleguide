import _ from 'lodash';
import React from 'react';

import { getStaticData } from '../../utils/staticDataUtil';
import { Heading, Header, SvgIcon } from '../../../component-lib/src/index';

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
            
                <table>
                    <tbody>
                        {_.map(icons, (iconName) =>
                            <tr key={iconName}>
                                <td>{iconName}</td>
                                {_.map(['black', 'purple', 'grey', 'light-grey'], (color, i) =>
                                    <td key={i}>
                                        <SvgIcon style={{ width: '50px', height: '50px' }} key={`${iconName}_${color}`} iconName={iconName.replace('.svg', '')} color={color} />
                                    </td>
                                )}
                            </tr>
                        )}
                    </tbody>
                </table>
                
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