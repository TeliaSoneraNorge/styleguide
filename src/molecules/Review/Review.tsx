import React from 'react';
export interface ReviewProps {
  children?: React.ReactNode;
}

export const Review: React.FC<ReviewProps> = ({ children }) => <div className="telia-review">{children}</div>;
