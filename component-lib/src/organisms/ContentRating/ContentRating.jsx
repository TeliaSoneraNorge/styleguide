import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

export default class ContentRating extends Component {
    static propTypes = {
        feedbackState: PropTypes.oneOf(['initial', 'receipt-positive', 'negative-feedback', 'receipt-negative']),
        positiveFeedbackClick: PropTypes.func,
        negativeFeedbackClick: PropTypes.func,
        negativeFeedbackSubmitTex: PropTypes.func,
    };

    render() {
        return (
            <section className="container container--small content-rating">
                {this.props.feedbackState === 'initial' ?
                    <div>
                        <h3 className="heading heading--level-3 content-rating__heading">Var denne siden nyttig?</h3>

                        <button className="button button--small" onClick={this.props.positiveFeedbackClick}>JA</button>
                        <button className="button button--small" onClick={this.props.negativeFeedbackClick}>NEI</button>
                    </div> : null
                }

                {this.props.feedbackState === 'receipt-positive' ?
                    <div>
                        <h3 className="heading heading--level-3 content-rating__heading">Var denne siden nyttig?</h3>
                        <SvgIcon className="content-rating__icon" iconName="ico_heart" color="black" />
                        <p className="content-rating__text">Så bra!<br />Takk for din tilbakemelding.</p>
                    </div> : null
                }

                {this.props.feedbackState === 'negative-feedback' ?
                    <div>
                        <h3 className="heading heading--level-3 content-rating__heading">Å, nei!</h3>
                        <textarea
                            ref={(textArea) => { this.textAreaRef = textArea; }}
                            className="textarea textarea--margin-bottom"
                            placeholder="Hjelp oss, er du grei - hva kunne vi gjort bedre?" />
                        <button className="button" onClick={() => this.props.negativeFeedbackSubmitText(this.textAreaRef.value)}>Send</button>
                    </div> : null
                }

                {this.props.feedbackState === 'receipt-negative' ?
                    <div>
                        <h3 className="heading heading--level-3 content-rating__heading">Takk for at du hjelper oss!</h3>
                    </div> : null
                }
            </section>
        );
    }
}