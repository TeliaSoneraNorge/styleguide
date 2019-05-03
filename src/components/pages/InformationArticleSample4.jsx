import React from 'react';

import { AccordionList, Header } from '../../../component-lib/src/index';

const accordionListProps = [
    {
        'key': 'accordion-list-1',
        'accordionItems': [
            {
                'id': 'example-1',
                'title': 'A closed accordion heading',
                'children': 'This is the body of the accordion'
            },
            {
                'id': 'example-2',
                'title': 'An open accordion heading',
                'children': 'This is the body of the accordion'
            }
        ],
        'isExpandedAccordionIndex': 1
    }
];

const InformationArticleSample4 = () =>
    <div className="page-pebbles">
        <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
            <p>
                On this page you can have a look at a template for an Information Article Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <div className="container container--medium container--no-padding-top container--extra-margin-bottom container--extra-padding-top">
            <div className="rich-text container container--small">
                <h2 className="heading heading--level-2">Heading 2</h2>
                <p className="paragraph">
                    Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit.
                    Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget
                    felis porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                    tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                </p>
                {accordionListProps.map((props) =>
                    <AccordionList key={props.key} {...props} />)}
                <table className="full-width-table">
                    <caption>
                        <h3 className="heading heading--level-3">Table Heading</h3>
                    </caption>
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
                    </tbody>
                </table>
            </div>
        </div>
    </div>;

export default InformationArticleSample4;