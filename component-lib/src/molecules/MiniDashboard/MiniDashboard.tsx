import React from 'react';

import ProgressBar from '../../atoms/ProgressBar/ProgressBar';
import map from 'lodash/map';

type MiniDashboardProps = {
    headingText?: string;
    children?: React.ReactNode;
    links?: {
        text?: string;
        href?: string;
        notifications?: number;
    }[];
};

/**
 * Status: *in progress*.
 * Category: Graphs
 *
 * A small dashboard to be placed on top of a page for the logged in user to view a snapshot
 * of Min Side info, and to be able to navigate quickly to the full Min Side page.
 *
 **/

const MiniDashboard = ({ headingText, children, links }: MiniDashboardProps) => (
  <section className="mini-dashboard container container--large container--no-padding container--no-margin">
    <div className="mini-dashboard__container">
      <h2 className="mini-dashboard__heading heading heading--level-2">{headingText}</h2>
      {children}
    </div>
    <ul className="mini-dashboard__links list list--links">
      {map(links, ({ text, href, notifications }, i) => (
        <li key={i} className="mini-dashboard__link list__item">
          <a className="list__link" href={href} target="_self">
            {text}
          </a>
          {notifications && <span className="mini-dashboard__link-notifications">{notifications}</span>}
        </li>
      ))}
    </ul>
  </section>
);

const StatWithLabelWidget = ({
  statisticText,
  statisticLabel,
  statisticHref,
  progressBarRemaining,
  progressBarTotal
}: any) => (
  <div>
    <a className="mini-dashboard__statistic-widget link" href={statisticHref}>
      <span className="mini-dashboard__statistic-text">{statisticText} </span>
      <span className="mini-dashboard__statistic-label">{statisticLabel}</span>
    </a>
    {progressBarRemaining && progressBarTotal && (
      <ProgressBar value={progressBarRemaining} min={0} max={progressBarTotal} />
    )}
  </div>
);
MiniDashboard.StatWithLabelWidget = StatWithLabelWidget;

const ExtraPromoLine = ({
  children
}: any) => <div className="mini-dashboard__extra-promo-line">{children}</div>;
MiniDashboard.ExtraPromoLine = ExtraPromoLine;

export default MiniDashboard;
