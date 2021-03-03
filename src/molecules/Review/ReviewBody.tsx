import React from 'react';
import { Paragraph, Button } from '../../index';
interface ReviewBodyProps {
  text: string;
  votesUp: number;
  votesDown: number;
  onClick?: React.MouseEventHandler;
}

export const ReviewBody: React.FC<ReviewBodyProps> = ({ text, votesUp, votesDown, onClick }) => (
  <div className="telia-review-body">
    <div className="telia-review-body__wrapper">
      <Paragraph>{text}</Paragraph>
      <div className="telia-review-body__likes">
        <div className="telia-review-body__like">
          <Button onClick={onClick} kind="link" className="telia-review-body__like--up" icon="like" />
          <span>{votesUp}</span>
        </div>
        {votesDown > 0 && (
          <div className="telia-review-body__like">
            <Button onClick={onClick} kind="link" className="telia-review-body__like--down" icon="like" />
            <span>{votesDown}</span>
          </div>
        )}
      </div>
    </div>
  </div>
);
