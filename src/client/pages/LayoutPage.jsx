import React from 'react';
import { connect } from 'react-redux';

import Heading from '../../components/atoms/Heading/Heading';
import Header from '../../components/molecules/Header/Header';
import FocusBox from '../../components/molecules/FocusBox/FocusBox';

const containerStyles = {
    backgroundColor: "#990AE3",
    color: "#FFFFFF",
    paddingTop: "1rem"
};

const LayoutPage = ({ colors, variablesCss }) =>
    <div>
        <Header iconUrl="/public/ico_code-2.svg" pageTitle="Page Layout & Grid">
        <p className="paragraph">
                You will notice that this is at the top of the page and is full-width.
            </p>
        </Header>

        <div className="container container--main-wrapper">

            <div className="container container--small container--no-margin">
                <Heading level={2} text="No grid system!" />
                <p className="paragraph">
                    Since we are using BEM for our CSS naming-conventions, the only class names we see in
                    the HTML should be our BEM component classes. We do not wish to clutter up the HTML
                    markup with grid class names.
                </p>
                <p className="paragraph">
                    However, there are a set of CSS variables which can be used to achieve a fluid grid layout.
                    Each component should use these variables for its width, margins and in its media queries
                    to achieve a responsive layout.
                </p>
            </div>

            <div className="container container--small container--no-margin">
                <Heading level={2} text="Container widths" />
                <p className="paragraph">
                    There are three main container widths: small, medium and large.
                    Body text, such as this one, should be in a small container to
                    reduce line width and make reading easier.
                </p>
            </div>

            <div className="container container--small" style={containerStyles}>
                This is some content inside a className="container container--small" block.
            </div>

            <div className="container container--medium" style={containerStyles}>
                This is some content inside a className="container container--medium" block.
            </div>

            <div className="container container--large" style={containerStyles}>
                This is some content inside a className="container container--large" block.
            </div>

            <FocusBox>
                <p className="paragraph">
                    Sometimes there will be a block like this one, which is <em>medium-width</em>, but
                    its content will still be <em>small-width</em>.
                </p>
            </FocusBox>

        </div>

        <section className="bottom-component bottom-component--light-orange">
            <div className="bottom-component__wrapper container container--medium">
                <img className="bottom-component__icon" src="/public/icons/ico_wireless.svg" role="presentation" />
                <div className="bottom-component__text-content">
                    <h1 className="heading heading--level-2">Bottom Component</h1>
                    <div className="bottom-component__text">
                        This component should be on a page 0-1 times and always at the bottom.
                        It should live outside of layout containers and be full-width.
                    </div>

                    <ul className="list list--links">
                        <li className="list__item">
                            <a className="list__link" target="" href="#">This is a link in a list</a>
                        </li>
                        <li className="list__item">
                            <a className="list__link" target="" href="#">And another link</a>
                        </li>
                    </ul>
                </div>
                <img className="bottom-component__image" src="https://placekitten.com/378/253" alt="" title=""/>
            </div>
        </section>
    </div>;

const mapStateToProps = (state) => ({
    colors: state.colors,
    variablesCss: state.variablesCss
});

export default connect(mapStateToProps)(LayoutPage);