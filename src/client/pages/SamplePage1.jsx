import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const SamplePage1 = ({ colors }) =>
    <div>
        <div className="content-wrapper">
            <Heading level={1} text="Telia Norge Styleguide" />
        </div>
        <div className="full-width-image">
            <img src="https://placekitten.com/1600/600" />
        </div>
    </div>;

export default SamplePage1;