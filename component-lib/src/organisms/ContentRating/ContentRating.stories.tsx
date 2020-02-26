import React from 'react';
import ContentRating from './ContentRating';

export default {
  title: 'Component library|Organisms/ContentRating',
  component: ContentRating,
};

export const Default = () => <ContentRating feedbackState="initial" />;

export const JAContentFeedback = () => <ContentRating feedbackState="receipt-positive" />;

export const NEIContentFeedback = () => <ContentRating feedbackState="negative-feedback" />;

export const ReceiptOnNEIContentFeedback = () => <ContentRating feedbackState="receipt-negative" />;