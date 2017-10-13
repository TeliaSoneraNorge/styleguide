import React from 'react';
import Heading from '../../atoms/Heading/Heading';

const ParallaxBlockTextBox = ({ header, paragraph }) =>
    
    <div className="parallax-block__text-box">
        <Heading level={2} text={header} />
        <p>{paragraph}</p>
    </div>;

export default ParallaxBlockTextBox;