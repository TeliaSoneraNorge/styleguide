import React from 'react';

import { AccordionList, Header, UniqueSellingPoints } from '../../index';

export default {
  title: 'Examples/Pages',
};

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
        children:
          'Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.',
      },
    ],
    isExpandedAccordionIndex: 1,
  },
];

export const InformationArticleSample5 = () => (
  <div>
    <Header pageTitle="Information Article" withMask={false} withContentOverlap={false}>
      <p>
        On this page you can have a look at a template for an Information Article Page and some of the components in the
        styleguide combined with each other.
      </p>
    </Header>
    <div className="container container--medium container--no-padding-top container--extra-margin-bottom container--extra-padding-top">
      <div className="rich-text container container--small">
        <ul className="list">
          <li className="list__item">List on top without a heading</li>
          <li className="list__item">Second link in list</li>
          <li className="list__item">Third link in list</li>
        </ul>
        <h2 className="heading heading--level-2">Heading 2</h2>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <h2 className="heading heading--level-2">Heading 2</h2>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <h3 className="heading heading--level-3">Heading 3</h3>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <h3 className="heading heading--level-3">Heading 3 with link beneath</h3>
        <p className="paragraph">
          <a className="link" href="#">
            Pellentesque in ipsum
          </a>{' '}
          id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit nisi, pretium ut lacinia
          in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus magna justo, lacinia
          eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.
        </p>
        <h4 className="heading heading--level-4">Heading 4</h4>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <ul className="list">
          <li className="list__item">List without a heading</li>
          <li className="list__item">Second link in list</li>
          <li className="list__item">Third link in list</li>
        </ul>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <h3 className="heading heading--level-3">Heading 3</h3>
        <ul className="list">
          <li className="list__item">List with a heading</li>
          <li className="list__item">Second link in list</li>
          <li className="list__item">Third link in list</li>
        </ul>
        {accordionListProps.map(props => (
          // @ts-expect-error ts-migrate(2783) FIXME: 'key' is specified more than once, so this usage w... Remove this comment to see the full error message
          <AccordionList key={props.key} {...props} />
        ))}
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
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat. Vivamus
          magna justo, lacinia eget consectetur sed, convallis at tellus. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim.
        </p>
        <p className="paragraph">
          Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Quisque velit
          nisi, pretium ut lacinia in, elementum id enim. Vivamus suscipit tortor eget felis porttitor volutpat.
        </p>
        <h2 className="heading heading--level-2">Heading 2 for accordions</h2>
        {accordionListProps.map(props => (
          // @ts-expect-error ts-migrate(2783) FIXME: 'key' is specified more than once, so this usage w... Remove this comment to see the full error message
          <AccordionList key={props.key} {...props} />
        ))}
        <h3 className="heading heading--level-3">Heading 3</h3>
        <UniqueSellingPoints>
          <UniqueSellingPoints.Item iconName="ico_buy" iconColor="purple">
            You can use this to point out key values of a product
          </UniqueSellingPoints.Item>
          <UniqueSellingPoints.Item iconName="ico_search" iconColor="black">
            It&#39;s recommended to use between 2-3 points
          </UniqueSellingPoints.Item>
        </UniqueSellingPoints>
      </div>
    </div>
  </div>
);