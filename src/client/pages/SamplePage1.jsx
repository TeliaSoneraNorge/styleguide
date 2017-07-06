import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const SamplePage1 = ({ colors }) =>
    <div>
        <div className="content-wrapper">
            <Heading level={1} children="Telia Norge Styleguide" />
        </div>
        <div className="full-width-image">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
        </div>
        <div className="focus-box">
            <div className="focus-box__content-outer">
                <div className="focus-box__content-inner">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="button">Click me</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
        <div className="full-width-image full-width-image--with-mask">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
        </div>
        <div className="focus-box">
            <div className="focus-box__content-outer">
                <div className="focus-box__content-inner">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className="button">Click me</button>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    </div>;

export default SamplePage1;