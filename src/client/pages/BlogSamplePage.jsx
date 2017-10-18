import React from 'react';

import Header from '../../components/molecules/Header/Header';

const BlogSamplePage = () =>
    <div>
        <div className="full-width-image full-width-image--no-margin">
            <img className="full-width-image__image" src="https://placekitten.com/1600/600"/>
        </div>
        <Header
            pageTitle="Blog"
            withMask={false}
            withContentOverlap={false}>
            <p>
                On this page you can have a look at the template for a Blog Page
                and some of the components in the styleguide combined with each other.
            </p>
        </Header>
        <section className="article-meta-data">
            <div
                className="article-meta-data__wrapper container container--large container--no-padding container--no-margin">
                <span className="article-meta-data__date-author">
                    <span className="article-meta-data__date">15.june 2017</span>
                    <span className="article-meta-data__author">by: FirstName LastName</span>
                </span>
                <div className="tags">
                    <span className="tags__tag">Technology</span>&nbsp;
                    <span className="tags__tag">Music</span>&nbsp;
                    <span className="tags__tag">Streaming</span>
                </div>
                <img className="article-meta-data__share" src="/public/icons/ico_share.svg"/>
            </div>
        </section>
        <section className="container container--small container--extra-margin-bottom">

            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.
                Curabitur aliquet quam id dui posuere blandit.
                <blockquote className="quote quote--inline-right">
                    <p className="quote__text">
                        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                    </p>
                    <span className="quote__source">Lorem Ipsum</span>
                </blockquote>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula
                elementum sed sit amet dui.
            </p>

            <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                a. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula.</p>

            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                tincidunt. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

            <figure className="image image--inline-left">
                <img className="image__img" src="/public/website-images/woman-holding-ipad.jpg" alt="Woman looking at tablet"/>
                <figcaption className="image__caption">Woman looking at tablet</figcaption>
            </figure>

            <p>Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor
                eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
                arcu erat, accumsan id imperdiet et, porttitor at sem.</p>

            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>

            <figure className="image image--inline-right">
                <img className="image__img" src="/public/website-images/woman-mobile.jpg" alt="Woman looking at mobile"/>
                <figcaption className="image__caption">Woman looking at mobile</figcaption>
            </figure>

            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur
                aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <figure className="image">
                <img className="image__img" src="/public/website-images/kids-ipad.jpg" alt="Kids playing with tablet"/>
                <figcaption className="image__caption">
                    Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.
                </figcaption>
            </figure>

        </section>
        <section className="related-articles">
            <div className="container container--large container--no-padding container--extra-margin-bottom">
                <h2 className="heading heading--level-2 related-articles__heading">Related articles</h2>
                <hr className="related-articles__line"/>
                <ul className="related-articles__list">
                    <li className="related-articles__list-item">
                        <section className="related-article">
                            <img className="related-article__image" src="/public/website-images/boy-ipad.jpg"></img>
                            <div className="related-article__text">
                                <h4 className="heading heading--level-4 related-article__heading">This is the article's
                                    heading</h4>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li className="related-articles__list-item">
                        <section className="related-article">
                            <img className="related-article__image" src="/public/website-images/woman-mobile.jpg"></img>
                            <div className="related-article__text">
                                <h4 className="heading heading--level-4 related-article__heading">This is the article's
                                    heading</h4>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li className="related-articles__list-item">
                        <section className="related-article">
                            <img className="related-article__image" src="/public/website-images/kids-ipad.jpg"></img>
                            <div className="related-article__text">
                                <h4 className="heading heading--level-4 related-article__heading">This is the article's
                                    heading</h4>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </section>
                    </li>
                    <li className="related-articles__list-item">
                        <section className="related-article">
                            <img className="related-article__image" src="/public/website-images/woman-holding-ipad.jpg">
                            </img>
                            <div className="related-article__text">
                                <h4 className="heading heading--level-4 related-article__heading">This is the article's
                                    heading</h4>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </section>
                    </li>
                </ul>
            </div>
        </section>
    </div>;

export default BlogSamplePage;