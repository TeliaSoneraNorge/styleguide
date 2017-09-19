import React from 'react';

import Header from '../../components/molecules/Header/Header';

const InformationArticleSample4 = () =>
    <div>
        <Header pageTitle="Information Article"
                withMask={false}
                withContentOverlap={false}>
            <p>On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.</p>
        </Header>
        <div className="main-content">
            <section className="body-text-container">
                <table className="table">
                    <thead className="table__header">
                    <tr className="table__row">
                        <th className="table__cell">Column 1</th>
                        <th className="table__cell">Column 2</th>
                        <th className="table__cell">Column 3</th>
                    </tr>
                    </thead>
                    <tbody className="table__body">
                    <tr className="table__row">
                        <td className="table__cell">Nulla quis lorem ut libero malesuada feugiat</td>
                        <td className="table__cell">Lorem</td>
                        <td className="table__cell">Ipsum</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Lorem ipsum dolor sit amet</td>
                        <td className="table__cell">Consectetur</td>
                        <td className="table__cell">Elit</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Donec rutrum congue leo</td>
                        <td className="table__cell">Eget</td>
                        <td className="table__cell">Malesuada</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Nulla quis lorem ut libero malesuada feugiat</td>
                        <td className="table__cell">Lorem</td>
                        <td className="table__cell">Ipsum</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Lorem ipsum dolor sit amet</td>
                        <td className="table__cell">Consectetur</td>
                        <td className="table__cell">Elit</td>
                    </tr>
                    <tr className="table__row">
                        <td className="table__cell">Donec rutrum congue leo</td>
                        <td className="table__cell">Eget</td>
                        <td className="table__cell">Malesuada</td>
                    </tr>
                    </tbody>
                </table>
                <h3>Heading</h3>
                <p>Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
            </section>
        </div>
    </div>;

export default InformationArticleSample4;