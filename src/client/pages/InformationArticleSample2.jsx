import React from 'react';

import Header from '../../components/molecules/Header/Header';

const InformationArticleSample2 = () =>
    <div>
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <ul className="fact-boxes">
            <li className="fact-box">
                <span className="fact-box__title">A small title</span>
                <span className="fact-box__number">45 609</span>
                <span className="fact-box__unit">Unit</span>
                <span className="fact-box__text">a short descriptive text</span>
            </li>
            <li className="fact-box">
                <span className="fact-box__title">A small title</span>
                <span className="fact-box__number">45 609</span>
                <span className="fact-box__unit">Unit</span>
                <span className="fact-box__text">a short descriptive text</span>
            </li>
            <li className="fact-box">
                <span className="fact-box__title">A small title</span>
                <span className="fact-box__number">45 609</span>
                <span className="fact-box__unit">Unit</span>
                <span className="fact-box__text">a short descriptive text</span>
            </li>
            <li className="fact-box">
                <span className="fact-box__title">A small title</span>
                <span className="fact-box__number">45 609</span>
                <span className="fact-box__unit">Unit</span>
                <span className="fact-box__text">a short descriptive text</span>
            </li>
            <li className="fact-box">
                <span className="fact-box__title">A small title</span>
                <span className="fact-box__number">45 609</span>
                <span className="fact-box__unit">Unit</span>
                <span className="fact-box__text">a short descriptive text</span>
            </li>
        </ul>
        <div className="container container--small container--extra-margin-bottom">
            <p>
                Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum
                id enim. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
            <p>
                Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.
                Donec sollicitudin molestie malesuada.
            </p>
            <ul className="list list--links">
                <li className="list__item">
                    <a className="list__link" href="#">First link in list</a>
                </li>
                <li className="list__item">
                    <a className="list__link" href="#">Second link in list</a>
                </li>
                <li className="list__item">
                    <a className="list__link" href="#">Third link in list</a>
                </li>
            </ul>
            <section className="accordion">
                <h3 className="accordion__header">
                    <button className="accordion__header-button" aria-expanded="true" aria-controls="accordion-multiple-example-1">
                        A closed accordion heading
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
            <h3>Heading</h3>
            <p>
                Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
        </div>
    </div>;

export default InformationArticleSample2;