import React from 'react';

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
                                <a className="related-article" href={relatedArticle.link}>
                                    <img className="related-article__image" src={relatedArticle.imageSrc}/>
                                    <div className="related-article__text">
                                        <h3 className="heading heading--level-3 related-article__heading">{relatedArticle.heading}</h3>
                                        <div className="tags tags--dark-grey">
                                            {relatedArticle.tags.map((tag, i) =>
                                                <span className="tags__tag" key={i}> {tag}</span>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        )}
                    </ul>
                    <button className={`related-articles__show-more-articles${this.state.isShowingAllArticles ? ' related-articles__show-more-articles--expanded' : ''}`}
                        aria-expanded={this.state.isShowingAllArticles}
                        aria-controls={this.props.id}
                        onClick={this.toggleShowMoreArticles}>{this.state.isShowingAllArticles ? "Show less" : "Show more"}
                    </button>
                </div>
            </section>
        );
    }
}

export default RelatedArticles;