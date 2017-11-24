import React from 'react';

export default class ContentFeedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbackState: this.props.feedbackState
        };

        this.positiveFeedbackClick = this.positiveFeedbackClick.bind(this);
        this.negativeFeedbackClick = this.negativeFeedbackClick.bind(this);
        this.negativeFeedbackSubmitText = this.negativeFeedbackSubmitText.bind(this);

    }
    positiveFeedbackClick(){
        this.setState({ feedbackState: "receipt-positive" });
    }
    negativeFeedbackClick(){
        this.setState({ feedbackState: "negative-feedback" });
    }
    negativeFeedbackSubmitText(){
        this.setState({ feedbackState: "receipt-negative" });
    }
    render() {
        return (
            <section className="container container--small content-feedback">
                <h3 className="heading heading--level-3 content-feedback__heading">Var denne siden nyttig?</h3>
                {this.state.feedbackState === "initial" ?
                    <div>
                        <button className="content-feedback__button" onClick={this.positiveFeedbackClick}>JA</button>
                        <button className="content-feedback__button" onClick={this.negativeFeedbackClick}>NEI</button>
                    </div> : null
                }

                {this.state.feedbackState === "receipt-positive" ?
                    <div>
                        <img className="content-feedback__icon" src="/public/icons/ico_heart.svg"/>
                        <p className="content-feedback__text">Så bra!<br/>Takk for din tilbakemelding</p>
                    </div> : null
                }

                {this.state.feedbackState === "negative-feedback" ?
                    <div>
                        <textarea className="text-area" placeholder="Hva kunne vært bedre?"></textarea>
                        <p className="paragraph--small-text">Tilbakemeldinger vil ikke bli besvart, men brukes til å forbedre nettsidene våre.</p>
                        <button className="button" onClick={this.negativeFeedbackSubmitText}>Send</button>
                    </div> : null
                }

                {this.state.feedbackState === "receipt-negative" ?
                    <p>Auda, det var dumt...<br/>Takk for at du hjelper oss til å bli bedre!</p> : null
                }
            </section>
        );
    }
}