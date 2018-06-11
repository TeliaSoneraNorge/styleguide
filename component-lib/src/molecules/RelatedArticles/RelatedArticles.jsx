import React from 'react';
import RelatedArticle from '../RelatedArticle/RelatedArticle';

/**
 * Status: *finished*.
 **/

class RelatedArticles extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowingAllArticles: false
        };

        this.toggleShowMoreArticles = this.toggleShowMoreArticles.bind(this);
    }

    toggleShowMoreArticles(e) {
        e.preventDefault();

        this.setState({ isShowingAllArticles: !this.state.isShowingAllArticles });
    }

    render() {
        // TODO: Replace `<a className="related-articles__link heading-link"` with HeadingLink after it's merged to master
        return (
            <section className="related-articles">
                <div className="container container--large container--no-padding">
                    <a className="related-articles__link heading-link" href={this.props.headingLink}>
                        <h2 className="related-articles__heading heading-link--focus-area heading heading--level-2">{this.props.heading}</h2>
                        <hr className="horizontal-rule horizontal-rule--short horizontal-rule--left" />
                    </a>
                    <ul className={`related-articles__list${this.state.isShowingAllArticles ? ' related-articles__list--expanded' : ''}`}
                        id={this.props.id}>
                        {this.props.relatedArticles.map((relatedArticle, i) =>
                            <li className="related-articles__list-item" key={i}>
                                <RelatedArticle
                                    href={relatedArticle.link}
                                    imgSrc={relatedArticle.imageSrc}
                                    heading={relatedArticle.heading}
                                    tags={relatedArticle.tags} />
                            </li>
                        )}
                    </ul>
                    <button
                        className={`related-articles__show-more-articles${this.state.isShowingAllArticles ? ' related-articles__show-more-articles--expanded' : ''}`}
                        aria-expanded={this.state.isShowingAllArticles}
                        aria-controls={this.props.id}
                        onClick={this.toggleShowMoreArticles}>{this.state.isShowingAllArticles ? 'Show less' : 'Show more'}
                    </button>
                </div>
            </section>
        );
    }
}

export default RelatedArticles;