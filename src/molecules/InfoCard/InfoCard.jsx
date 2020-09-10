import React from 'react';
import Heading from '../../atoms/Heading';
import { Icon } from '../../atoms/Icon';

const InfoCard = ({ title, titleTag = 'h3', usps = [] }) => (
  <section className="info-card">
    <div className="info-card__title">
      <Heading tag={titleTag} size="xs" text={title} />
      <Icon className="info-card__title-icon" icon="info" />
    </div>
    <ul className="info-card__list">
      {usps.map((usp, i) => (
        <li className="info-card__item" key={`info-card__item--${i}`}>
          <Icon icon="check-mark-circle" className="info-card__icon" />
          {usp}
        </li>
      ))}
    </ul>
  </section>
);

export default InfoCard;
