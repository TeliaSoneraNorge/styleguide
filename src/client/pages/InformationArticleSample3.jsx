import React from 'react';

import Header from '../../components/molecules/Header/Header';

const InformationArticleSample3 = () =>
    <div>
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="full-width-image full-width-image--with-mask full-width-image--with-content-overlap">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
        </div>
        <div className="container container--medium container--no-padding container--extra-margin-bottom container--white-bg">
            <div className="container container--small">
                <p>
                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta. Sed porttitor lectus nibh. Sed porttitor lectus nibh.
                </p>
            </div>
            <div className="container container--small">
                <ul className="step-by-step">
                    <li className="step-by-step__step">
                        <div className="step-by-step__circle">
                            <img className="step-by-step__icon" src="/public/icons/ico_buy_purple.svg" alt=""/>
                        </div>
                        <div className="step-by-step__text">
                            <span className="step-by-step__heading">Heading</span>
                            <span className="step-by-step__description">This is a short descriptive text. This is a short descriptive text. This is a short descriptive text. This is a short descriptive text. </span>
                        </div>
                    </li>
                    <li className="step-by-step__step">
                        <div className="step-by-step__circle step-by-step__circle--no-border">
                            <img className="step-by-step__image" src="/public/website-images/boy-ipad.jpg" alt=""/>
                        </div>
                        <div className="step-by-step__text">
                            <span className="step-by-step__heading">Heading</span>
                            <span className="step-by-step__description">This is a short descriptive text</span>
                        </div>
                    </li>
                    <li className="step-by-step__step">
                        <div className="step-by-step__circle">
                            <img className="step-by-step__icon" src="/public/icons/ico_buy_purple.svg" alt=""/>
                        </div>
                        <div className="step-by-step__text">
                            <span className="step-by-step__heading">Heading</span>
                            <span className="step-by-step__description">This is a short descriptive text</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>;

export default InformationArticleSample3;