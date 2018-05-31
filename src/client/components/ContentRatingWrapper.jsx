import React from 'react';
import { ContentRating } from '../../../component-lib/src/index';

function postFeedbackToSlack(feedbackState, feedbackText = ''){
    fetch(`${window.location.origin}/api/feedback`, {
        method: 'POST',
        body: JSON.stringify({
            feedbackType: feedbackState,
            url: window.location.href,
            feedbackText: feedbackText
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export default class ContentRatingWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feedbackState: 'initial'
        };

        this.positiveFeedbackClick = this.positiveFeedbackClick.bind(this);
        this.negativeFeedbackClick = this.negativeFeedbackClick.bind(this);
        this.negativeFeedbackSubmitText = this.negativeFeedbackSubmitText.bind(this);
    }
    positiveFeedbackClick() {
        this.setState(
            { feedbackState: 'receipt-positive' },
            () => { postFeedbackToSlack(this.state.feedbackState); }
        );
    }
    negativeFeedbackClick() {
        this.setState(
            { feedbackState: 'negative-feedback' },
            () => { postFeedbackToSlack(this.state.feedbackState); }
        );
    }
    negativeFeedbackSubmitText(feedbackText) {
        this.setState(
            { feedbackState: 'receipt-negative' },
            () => { postFeedbackToSlack(this.state.feedbackState, feedbackText); }
        );
    }
    render() {
        return (
            <ContentRating
                feedbackState={this.state.feedbackState}
                positiveFeedbackClick={this.positiveFeedbackClick}
                negativeFeedbackClick={this.negativeFeedbackClick}
                negativeFeedbackSubmitText={this.negativeFeedbackSubmitText} />
        );
    }
}