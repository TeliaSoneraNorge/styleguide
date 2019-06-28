import React from 'react';

import { AccordionList, Header } from '../../../component-lib/src/index';

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
        children: 'This is the body of the accordion',
      },
    ],
    isExpandedAccordionIndex: 1,
  },
];

const InformationArticleSample1 = () => (
  <div>
    <Header
      iconName="ico_info"
      runningTitle="Sample page"
      pageTitle="Information Article"
      withMask={false}
      withContentOverlap={false}
    >
      <p>
        On this page you can have a look at the template for an Information Article Page and some of the components in
        the styleguide combined with each other.
      </p>
    </Header>
    <div className="full-width-image full-width-image--with-mask full-width-image--with-content-overlap">
      <img className="full-width-image__image" src="https://placekitten.com/1600/600" />
    </div>
    <div className="container container--medium container--no-padding container--white-bg container--extra-padding-top container--overlapping-full-width-image">
      <div className="rich-text container container--small">
        <p className="paragraph">
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
      <div className="rich-text container container--medium">
        <div className="focus-box">
          <div className="focus-box__content-outer">
            <div className="container container--small container--no-margin focus-box__content-inner">
              <p className="paragraph">
                Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a
                pellentesque nec, egestas non nisi.
              </p>
              <button className="button">Click me</button>
            </div>
          </div>
        </div>
      </div>
      <div className="rich-text container container--small">
        {accordionListProps.map(props => (
          <AccordionList key={props.key} {...props} />
        ))}
      </div>
    </div>

    <div className="focus-box">
      <div className="focus-box__content-outer">
        <div className="container container--small container--no-margin focus-box__content-inner">
          <p className="paragraph">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi.
          </p>
          <button className="button" style={{ marginBottom: '1rem' }}>
            Click me
          </button>
          <p className="paragraph">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi.
          </p>
          <p className="paragraph">
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque
            nec, egestas non nisi.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default InformationArticleSample1;
