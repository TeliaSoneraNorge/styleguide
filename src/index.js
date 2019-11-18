// import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import objectFitImages from 'object-fit-images';
import svg4everybody from 'svg4everybody';

import App from './components/App';
import { getIEVersion } from './utils/browserUtil';

if (getIEVersion()) {
    require('picturefill');
}

ReactDOM.render(<App />, document.getElementById('root'));

svg4everybody(); // SVG sprites in IE10-11 
objectFitImages();
