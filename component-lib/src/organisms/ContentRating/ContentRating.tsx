import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    feedbackState?: 'initial' | 'receipt-positive' | 'negative-feedback' | 'receipt-negative';
    positiveFeedbackClick?: (...args: any[]) => any;
    negativeFeedbackClick?: (...args: any[]) => any;
    negativeFeedbackSubmitTex?: (...args: any[]) => any;
};

/**
 * Status: *delete from styleguide*
 * Category: FormElements
 */
export default class ContentRating extends React.Component<Props> {
  textAreaRef: any;

  render() {
    return (
      <section className="container container--small content-rating">
        {this.props.feedbackState === 'initial' ? (
          <div>
            <h3 className="heading heading--level-3 content-rating__heading">Var denne siden nyttig?</h3>

            <button className="button button--small" onClick={this.props.positiveFeedbackClick}>
              JA
            </button>
            <button className="button button--small" onClick={this.props.negativeFeedbackClick}>
              NEI
            </button>
          </div>
        ) : null}

        {this.props.feedbackState === 'receipt-positive' ? (
          <div>
            <h3 className="heading heading--level-3 content-rating__heading">Var denne siden nyttig?</h3>
            <SvgIcon className="content-rating__icon" iconName="ico_heart" color="black" />
            <p className="content-rating__text">
              Så bra!
              <br />
              Takk for din tilbakemelding.
            </p>
          </div>
        ) : null}

        {this.props.feedbackState === 'negative-feedback' ? (
          <div>
            <h3 className="heading heading--level-3 content-rating__heading">Å, nei!</h3>
            <textarea
              ref={textArea => {
                this.textAreaRef = textArea;
              }}
              className="textarea textarea--margin-bottom"
              placeholder="Hjelp oss, er du grei - hva kunne vi gjort bedre?"
            />
            {/* @ts-expect-error ts-migrate(2551) FIXME: Property 'negativeFeedbackSubmitText' does not exi... Remove this comment to see the full error message */}
            <button className="button" onClick={() => this.props.negativeFeedbackSubmitText(this.textAreaRef.value)}>
              Send
            </button>
          </div>
        ) : null}

        {this.props.feedbackState === 'receipt-negative' ? (
          <div>
            <h3 className="heading heading--level-3 content-rating__heading">Takk for at du hjelper oss!</h3>
          </div>
        ) : null}
      </section>
    );
  }
}
