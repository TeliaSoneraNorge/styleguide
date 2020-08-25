import React from 'react';
import classnames from 'classnames';

import RelatedArticle from '../RelatedArticle/RelatedArticle';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type OwnProps = {
    headingLink: string;
    heading: string;
    id: string;
    relatedArticles?: {
        link: string;
        imageSrc: string;
        heading: string;
        tags: string[];
    }[];
};

type State = any;

type Props = OwnProps & typeof RelatedArticles.defaultProps;

/**
 * Status: *finished*.
 * Category: Misc
 */
export default class RelatedArticles extends React.Component<Props, State> {
  static defaultProps = {
    relatedArticles: [],
  };
  state = {
    isShowingAllArticles: false,
  };
  toggleShowMoreArticles = (e: any) => {
    e.preventDefault();

    this.setState({ isShowingAllArticles: !this.state.isShowingAllArticles });
  };

  render() {
    // TODO: Replace `<a className="related-articles__link heading-link"` with HeadingLink?
    return (
      <section className="related-articles">
        <div className="container container--large container--no-padding">
          <a className="related-articles__link heading-link" href={this.props.headingLink}>
            <h2 className="related-articles__heading heading-link--focus-area heading heading--level-2">
              {this.props.heading}
            </h2>
            <hr className="horizontal-rule horizontal-rule--short horizontal-rule--left" />
          </a>
          <ul
            id={this.props.id}
            className={classnames('related-articles__list', {
              'related-articles__list--expanded': this.state.isShowingAllArticles,
            })}
          >
            {this.props.relatedArticles.map(relatedArticle => (
              <li className="related-articles__list-item" key={relatedArticle.heading}>
                <RelatedArticle
                  // @ts-expect-error ts-migrate(2322) FIXME: Property 'href' does not exist on type 'IntrinsicA... Remove this comment to see the full error message
                  href={relatedArticle.link}
                  imgSrc={relatedArticle.imageSrc}
                  heading={relatedArticle.heading}
                  tags={relatedArticle.tags}
                />
              </li>
            ))}
          </ul>
          <button
            className={classnames('related-articles__show-more-articles', {
              'related-articles__show-more-articles--expanded': this.state.isShowingAllArticles,
            })}
            aria-expanded={this.state.isShowingAllArticles}
            aria-controls={this.props.id}
            onClick={this.toggleShowMoreArticles}
          >
            {this.state.isShowingAllArticles ? 'Show less' : 'Show more'}
            <SvgIcon
              className="related-articles__show-more-articles-icon"
              iconName={this.state.isShowingAllArticles ? 'ico_minus' : 'ico_add'}
              color="purple"
            />
          </button>
        </div>
      </section>
    );
  }
}
