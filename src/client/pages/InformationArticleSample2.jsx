import React from 'react';

import Accordion from '../../components/molecules/Accordion/Accordion';
import Header from '../../components/molecules/Header/Header';

const InformationArticleSample2 = () =>
    <div>
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <ul className="number-boxes">
            <li className="number-box">
                <span className="number-box__title">A small title</span>
                <span className="number-box__number">45 609</span>
                <span className="number-box__unit">Unit</span>
                <span className="number-box__text">a short descriptive text</span>
            </li>
            <li className="number-box">
                <span className="number-box__title">A small title</span>
                <span className="number-box__number">45 609</span>
                <span className="number-box__unit">Unit</span>
                <span className="number-box__text">a short descriptive text</span>
            </li>
            <li className="number-box">
                <span className="number-box__title">A small title</span>
                <span className="number-box__number">45 609</span>
                <span className="number-box__unit">Unit</span>
                <span className="number-box__text">a short descriptive text</span>
            </li>
            <li className="number-box">
                <span className="number-box__title">A small title</span>
                <span className="number-box__number">45 609</span>
                <span className="number-box__unit">Unit</span>
                <span className="number-box__text">a short descriptive text</span>
            </li>
            <li className="number-box">
                <span className="number-box__title">A small title</span>
                <span className="number-box__number">45 609</span>
                <span className="number-box__unit">Unit</span>
                <span className="number-box__text">a short descriptive text</span>
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
            <Accordion
                id="1"
                title="A closed accordion heading"
                isExpanded={false}>
                <p>This is the body of the accordion.</p>
            </Accordion>
            <Accordion
                id="2"
                title="An open accordion heading"
                isExpanded={true}>
                <p>This is the body of the accordion.</p>
            </Accordion>
            <h3 className="heading heading--level-3">Heading</h3>
            <p>
                Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>
        </div>
    </div>;

export default InformationArticleSample2;