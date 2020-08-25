import React from 'react';
import map from 'lodash/map';

type Props = {
    links?: {
        text: string;
        url: string;
    }[];
    specialLink?: {
        text: string;
        url: string;
    };
};

/**
 * Status: *finished*.
 * Category: PageElements
 *
 * The PageFooter is the main footer on the page, and should be included only once.
 * It contains a small number of important, side-wide links.
 */
const PageFooter = ({ links, specialLink }: Props) => (
  <footer className="page-footer">
    <div className="page-footer__content">
      <div className="page-footer__content-wrapper">
        <nav className="page-footer__main-nav">
          {map(links, (link, i) => (
            <a key={i} className="page-footer__link" href={link.url}>
              {link.text}
            </a>
          ))}
        </nav>
        <nav className="page-footer__special-nav">
          {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
          <a className="page-footer__special-link page-footer__link" href={specialLink.url}>
            {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
            {specialLink.text}
          </a>
        </nav>
      </div>
    </div>
  </footer>
);

export default PageFooter;
