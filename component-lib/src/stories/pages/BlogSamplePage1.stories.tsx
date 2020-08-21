import React from 'react';

import { Header, RelatedArticles } from '../../index';

import img from '../sampleImages';

export default {
  title: 'Examples/Pages',
};

const RelatedArticlesProps = [
  {
    heading: 'Related articles',
    headingLink: '#',
    relatedArticles: [
      {
        link: '#',
        imageSrc: img.boyIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.womanMobile,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.kidsIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
      {
        link: '#',
        imageSrc: img.womanHoldingIpad,
        heading: "This is the article's heading",
        tags: ['Related', 'Article', 'Tag'],
      },
    ],
  },
];

export const BlogSamplePage1 = () => (
  <div>
    <figure className="full-width-image full-width-image--no-margin">
      <img className="full-width-image__image" src="https://placekitten.com/1800/550" alt="Kitten" />
      <figcaption className="caption caption--no-margin-bottom container container--no-padding container--no-margin container--large">
        Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in
        ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget
        malesuada.
      </figcaption>
    </figure>
    <Header pageTitle="Blog" withMask={false} withContentOverlap={false}>
      <p>
        On this page you can have a look at the template for a Blog Page and some of the components in the styleguide
        combined with each other.
      </p>
    </Header>
    <section className="article-meta-data">
      <div className="article-meta-data__wrapper container container--large container--no-margin">
        <span className="article-meta-data__date-author">
          <span className="article-meta-data__date">Published: 15.june 2017</span>
          <span className="article-meta-data__author">by FirstName LastName</span>
        </span>
        <div className="tags">
          <span className="tags__tag">Technology</span>&nbsp;
          <span className="tags__tag">Music</span>&nbsp;
          <span className="tags__tag">Streaming</span>
        </div>
        <div className="article-meta-data__share">
          <img className="article-meta-data__share-icon" src={img.icoShare} />
        </div>
      </div>
    </section>
    <section className="rich-text container container--small container--extra-margin-bottom">
      <p className="paragraph">
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.
        Curabitur aliquet quam id dui posuere blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
      </p>
      <blockquote className="quote quote--inline-right">
        <p className="quote__text">Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
        <span className="quote__source">Lorem Ipsum</span>
      </blockquote>
      <p className="paragraph">
        Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Donec
        sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
      </p>
      <p className="paragraph">
        Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
        Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Quisque velit nisi,
        pretium ut lacinia in, elementum id enim.
      </p>
      <figure className="image image--inline-left">
        <img className="image__img" src={img.womanHoldingIpad} alt="Woman looking at tablet" />
        <figcaption className="caption">Woman looking at tablet</figcaption>
      </figure>
      <p className="paragraph">
        Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor eget
        felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur arcu erat,
        accumsan id imperdiet et, porttitor at sem.
      </p>
      <p className="paragraph">
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus. Praesent sapien massa,
        convallis a pellentesque nec, egestas non nisi.
      </p>
      <figure className="image image--inline-right">
        <img className="image__img" src={img.womanMobile} alt="Woman looking at mobile" />
        <figcaption className="caption">Woman looking at mobile</figcaption>
      </figure>
      <p className="paragraph">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque,
        auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur aliquet quam id dui
        posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <figure className="image">
        <img className="image__img" src={img.kidsIpad} alt="Kids playing with tablet" />
        <figcaption className="caption">
          Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque
          in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget
          malesuada.
        </figcaption>
      </figure>

      <section className="fact-box">
        <img className="fact-box__icon" src={img.icoInfo} />
        <h3 className="fact-box__heading heading heading--level-3">Fact about Lorem Ipsum:</h3>
        <div className="fact-box__text">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit.
            Pellentesque in ipsum id orci porta dapibus.
          </p>
          <p className="paragraph">
            Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim.
          </p>
          <p className="paragraph">
            Donec sollicitudin molestie malesuada. Donec sollicitudin molestie malesuada. Donec rutrum congue leo eget
            malesuada.
          </p>
          <p className="paragraph">
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus suscipit tortor eget felis
            porttitor volutpat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
          </p>
        </div>
      </section>
    </section>
    {RelatedArticlesProps.map((props, i) => (
      <RelatedArticles id={`article-${i}`} key={props.heading} {...props} />
    ))}
  </div>
);
