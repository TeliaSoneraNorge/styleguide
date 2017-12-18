import React from 'react';

import Header from '../../components/molecules/Header/Header';
import ProductPromoBox from '../../components/molecules/ProductPromoBox/ProductPromoBox';

const BlogSamplePage = () =>
    <div>
        <Header
            videoSrc="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula
                elementum sed sit amet dui.</p>

            <p>Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar
                a. Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
                ullamcorper sit amet ligula.</p>

            <div className="video">
                <div className="video__iframe-wrapper">
                    <iframe
                        src="https://www.youtube.com/embed/-yWZdilQQnk?rel=1&amp;controls=1&amp;showinfo=1&amp;autoplay=0"
                        className="video__iframe"
                        frameBorder="0"
                        allowFullScreen></iframe>
                </div>
                <div className="caption">Videotext here</div>
            </div>

            <p>Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan
                tincidunt. Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada.
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>

            <p>Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt. Vivamus suscipit tortor
                eget felis porttitor volutpat. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Curabitur
                arcu erat, accumsan id imperdiet et, porttitor at sem.</p>

            <ProductPromoBox
                id="blog-promo"
                productName="Sony Xperia XZ Premium"
                imagePath="http://via.placeholder.com/140x280"
                description="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem."
                monthlyPrice="329"
                totalPrice="7896"
                buttonText="Les mer">
            </ProductPromoBox>

            <p>Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat.
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus.
                Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.</p>

            <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Curabitur
                aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <ProductPromoBox
                id="blog-promo"
                productName="Sony Xperia XZ Premium"
                imagePath="http://via.placeholder.com/140x280"
                description="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
                monthlyPrice="329"
                totalPrice="7896"
                buttonText="Les mer"
                isShowingFeature={true}>
            </ProductPromoBox>

        </section>
        <section className="related-articles">
            <div className="container container--large container--no-padding container--extra-margin-bottom">
                <a class="related-articles__link heading-link" href="#">
                    <h2 class="related-articles__heading heading-link--focus-area heading heading--level-2">Related articles</h2>
                    <hr class="horizontal-rule horizontal-rule--short horizontal-rule--left" />
                </a>
                <ul className="related-articles__list">
                    <li className="related-articles__list-item">
                        <a className="related-article" href="#">
                            <img className="related-article__image" src="/public/website-images/boy-ipad.jpg"></img>
                            <div className="related-article__text">
                                <h3 className="heading heading--level-3 related-article__heading">This is the article's
                                    heading</h3>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="related-articles__list-item">
                        <a className="related-article" href="#">
                            <img className="related-article__image" src="/public/website-images/woman-mobile.jpg"></img>
                            <div className="related-article__text">
                                <h3 className="heading heading--level-3 related-article__heading">This is the article's
                                    heading</h3>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="related-articles__list-item">
                        <a className="related-article" href="#">
                            <img className="related-article__image" src="/public/website-images/kids-ipad.jpg"></img>
                            <div className="related-article__text">
                                <h3 className="heading heading--level-3 related-article__heading">This is the article's
                                    heading</h3>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li className="related-articles__list-item">
                        <a className="related-article" href="#">
                            <img className="related-article__image" src="/public/website-images/woman-holding-ipad.jpg">
                            </img>
                            <div className="related-article__text">
                                <h3 className="heading heading--level-3 related-article__heading">This is the article's
                                    heading</h3>
                                <div className="tags tags--dark-grey">
                                    <span className="tags__tag">Related</span>
                                    <span className="tags__tag">Article</span>
                                    <span className="tags__tag">Tag</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </div>;

export default BlogSamplePage;