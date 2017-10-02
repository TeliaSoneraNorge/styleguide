import _ from 'lodash';
import React from 'react';

import Heading from '../../atoms/Heading/Heading';

function classNames(kind) {
    const classNames = ['alert'];
    classNames.push(`alert--${kind}`);
    return classNames.join(' ');
}

/**
 * Status: *finished*.
 */
const Alert = ({ kind = "positive", headingText, bodyHtml, links = [] }) =>
    <div className={classNames(kind)}>
        <img className="alert__icon" src="/public/icons/ico_info.svg" role="presentation" alt="" />
        <div className="alert__content">
            <Heading level={2} text={headingText} />
            <div dangerouslySetInnerHTML={{ __html: bodyHtml }}></div>
            {links.length > 0 ?
                <ul className="list list--links list--black">
                    {_.map(links, (link, i) =>
                        <li key={i} className="list__item">
                            <a className="list__link" href={link.url}>{link.text}</a>
                        </li>
                    )}
                </ul> : null}
        </div>
    </div>;

export default Alert;
