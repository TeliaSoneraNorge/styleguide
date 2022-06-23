import React from 'react';
import cn from 'classnames';
import Heading from '../../atoms/Heading/Heading';
import Paragraph from '../../atoms/Paragraph';

interface Props {
  border?: boolean;
}

interface InfoModalHeaderProps {
  headerText?: string;
  ingress?: string;
  backgroundColor?: string;
}

export const ModalHeader: React.FC<Props> = (props) => {
  return (
    <div className={cn('telia-modal__header', { 'telia-modal__header--border': props.border })}>{props.children}</div>
  );
};

export const InfoModalHeader: React.FC<InfoModalHeaderProps> = (props) => {
  return (
    <div style={{ backgroundColor: props.backgroundColor || '#30004B' }} className="telia-info-modal__header">
      <Heading>{props.headerText}</Heading>
      {props.ingress && <Paragraph>{props.ingress}</Paragraph>}
    </div>
  );
};
