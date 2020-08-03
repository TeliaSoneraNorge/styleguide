import * as React from 'react';

declare type ContentRatingFeedbackState = 'initial' | 'receipt-positive' | 'negative-feedback' | 'receipt-negative';

declare interface ContentRatingProps {
  feedbackState?: ContentRatingFeedbackState;
  positiveFeedbackClick?: (...args: any[]) => any;
  negativeFeedbackClick?: (...args: any[]) => any;
  negativeFeedbackSubmitTex?: (...args: any[]) => any;
}

export default class ContentRating extends React.Component<ContentRatingProps, any> {
  render(): JSX.Element;
}
