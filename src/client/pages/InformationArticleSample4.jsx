import React from 'react';

import Header from '../../components/molecules/Header/Header';

const InformationArticleSample4 = () =>
    <div className="page-pebbles">
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="container container--small container--no-padding-top container--extra-margin-bottom">

            <table className="full-width-table">
                <thead className="full-width-table__header">
                    <tr className="full-width-table__row">
                        <th className="full-width-table__cell">Column 1</th>
                        <th className="full-width-table__cell">Column 2</th>
                        <th className="full-width-table__cell">Column 3</th>
                    </tr>
                </thead>
                <tbody className="full-width-table__body">
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">Nulla quis lorem ut libero malesuada feugiat</td>
                        <td className="full-width-table__cell">Lorem</td>
                        <td className="full-width-table__cell">Ipsum</td>
                    </tr>
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">Lorem ipsum dolor sit amet</td>
                        <td className="full-width-table__cell">Consectetur</td>
                        <td className="full-width-table__cell">Elit</td>
                    </tr>
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">Donec rutrum congue leo</td>
                        <td className="full-width-table__cell">Eget</td>
                        <td className="full-width-table__cell">Malesuada</td>
                    </tr>
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">Nulla quis lorem ut libero malesuada feugiat</td>
                        <td className="full-width-table__cell">Lorem</td>
                        <td className="full-width-table__cell">Ipsum</td>
                    </tr>
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">
                            <a href="" className="link">Lorem ipsum dolor sit amet</a>
                        </td>
                        <td className="full-width-table__cell">Consectetur</td>
                        <td className="full-width-table__cell">Elit</td>
                    </tr>
                    <tr className="full-width-table__row">
                        <td className="full-width-table__cell">
                            <a href="" className="link">Donec rutrum congue leo</a>
                        </td>
                        <td className="full-width-table__cell">Eget</td>
                        <td className="full-width-table__cell">Malesuada</td>
                    </tr>
                </tbody>
            </table>

            <h3 className="heading heading--level-3">Heading</h3>
            <p>
                Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
            </p>

        </div>
    </div>;

export default InformationArticleSample4;