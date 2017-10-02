import React from 'react';

import Header from '../../components/molecules/Header/Header';

const InformationArticleSample1 = ({ colors }) =>
    <div>
        <Header
            iconUrl="./public/icons/ico_info.svg"
            runningTitle="Sample page"
            pageTitle="Information Article"
            withMask={false}
            withContentOverlap={false}>
            <p>
                On this page you can have a look at the template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="full-width-image full-width-image--with-mask full-width-image--with-content-overlap">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
        </div>
        <div className="container container--medium container--no-padding container--white-bg">
            <div className="container container--small">
                <p>
                    Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
                    nec, egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Curabitur arcu erat,
                    accumsan id imperdiet et, porttitor at sem. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet
                    quam vehicula elementum sed sit amet dui.
                </p>
                <ul className="list">
                    <li className="list__item">First item in list</li>
                    <li className="list__item">Second link in list</li>
                    <li className="list__item">Third link in list</li>
                </ul>
            </div>
            <div className="focus-box">
                <div className="focus-box__content-outer">
                    <div className="container container--small container--no-margin">
                        <p>
                            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
                            nec, egestas non nisi.
                        </p>
                        <button className="button">Click me</button>
                    </div>
                </div>
            </div>
            <div className="container container--small">
                <section className="accordion accordion--open">
                    <h3 className="accordion__header">
                        <button className="accordion__header-button" aria-expanded="true" aria-controls="accordion-multiple-example-1">
                            An open accordion heading
                        </button>
                    </h3>
                    <div className="accordion__panel" id="accordion-multiple-example-1">
                        This is the body of the accordion.
                    </div>
                </section>
                <section className="accordion">
                    <h3 className="accordion__header">
                        <button className="accordion__header-button" aria-expanded="false" aria-controls="accordion-multiple-example-2">
                            Another closed accordion heading
                        </button>
                    </h3>
                    <div className="accordion__panel" id="accordion-multiple-example-2">
                        This is the body of the accordion.
                    </div>
                </section>
            </div>
        </div>
        <section className="bottom-component bottom-component--light-orange">
            <div className="bottom-component__wrapper container container--medium">
                <img className="bottom-component__icon" src="/public/icons/ico_wireless.svg" role="presentation" />
                <div className="bottom-component__text-content">
                    <h1 className="bottom-component__heading">Bottom Component</h1>
                    <div className="bottom-component__text">
                        The intention of this component is to have a section on a page where the user could
                        read about related content of the main content on the page.
                        Such related information is relevant to put on the bottom of a page.
                        If the content in this section is used for tangentially related content, we recommend
                        to wrap the outer html section-element for this component in an aside-element.
                    </div>
                    <a className="button button--small button--action" href="">Button link</a>
                </div>
            </div>
        </section>
    </div>;

export default InformationArticleSample1;