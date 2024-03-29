import React from 'react';

import { AccordionList, Header } from '../../index';

const accordionListProps = [
  {
    key: 'accordion-list-1',
    accordionItems: [
      {
        id: 'example-1',
        title: 'A closed accordion heading',
        children: 'This is the body of the accordion',
      },
      {
        id: 'example-2',
        title: 'An open accordion heading',
        children: (
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
            </tbody>
          </table>
        ),
      },
    ],
    isExpandedAccordionIndex: 1,
  },
];

export const InformationArticleSample2 = () => (
  <div>
    <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
      <p>
        On this page you can have a look at a template for an Information Article Page and some of the components in the
        styleguide combined with each other.
      </p>
    </Header>
    <div className="container container--medium container--no-padding container--white-bg container--extra-padding-top container--overlapping-full-width-image">
      <div className="rich-text container container--small">
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
          Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
        <p className="paragraph">
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Donec
          sollicitudin molestie malesuada.
        </p>
        <ul className="list list--links">
          <li className="list__item">
            <a className="list__link" href="#">
              First link in list
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Second link in list
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="#">
              Third link in list
            </a>
          </li>
        </ul>
        {accordionListProps.map((props) => (
          <AccordionList key={props.key} {...props} />
        ))}
        <h3 className="heading heading--level-3">Heading</h3>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
      </div>
    </div>
  </div>
);
