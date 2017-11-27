import React from 'react';

export default class ContentFeedback extends React.Component {
    render() {
        return (
            <section className="container container--small content-feedback">
                <h3 className="heading heading--level-3 content-feedback__heading">Var denne siden nyttig?</h3>
                {this.props.feedbackState === "initial" ?
                    <div>
                        <button className="button button--small" onClick={this.props.positiveFeedbackClick}>JA</button>
                        <button className="button button--small" onClick={this.props.negativeFeedbackClick}>NEI</button>
                    </div> : null
                }

                {this.props.feedbackState === "receipt-positive" ?
                    <div>
                        <img className="content-feedback__icon" src="/public/icons/ico_heart.svg"/>
                        <p className="content-feedback__text">Så bra!<br/>Takk for din tilbakemelding</p>
                    </div> : null
                }

                {this.props.feedbackState === "negative-feedback" ?
                    <div>
                        <textarea ref="feedbackTextArea" className="text-area" placeholder="Hva kunne vært bedre?"></textarea>
                        <p className="paragraph--small-text">Tilbakemeldinger vil ikke bli besvart, men brukes til å forbedre nettsidene våre.</p>
                        <button className="button" onClick={() => this.props.negativeFeedbackSubmitText(this.refs.feedbackTextArea.value)}>Send</button>
                    </div> : null
                }

                {this.props.feedbackState === "receipt-negative" ?
                    <p>Auda, det var dumt...<br/>Takk for at du hjelper oss til å bli bedre!</p> : null
                }
            </section>
        );
    }
}