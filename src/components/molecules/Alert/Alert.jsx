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
const Alert = ({ kind = "positive", bodyHtml, links = [] }) =>
    <div className={classNames(kind)}>
        <div className="alert__content">
            <div className="alert__icon-container">
                <img className="alert__icon" src="/public/icons/ico_info.svg" role="presentation" alt=""/>
            </div>
            <div className="alert__text-container">
                <div dangerouslySetInnerHTML={{__html: bodyHtml}} />
                {links.length > 0 ?
                    <ul className="list list--links list--black">
                        {_.map(links, (link, i) =>
                            <li key={i} className="list__item">
                                <a className="list__link" href={link.url} target="_self">{link.text}</a>
                            </li>
                        )}
                    </ul> : null}
            </div>
        </div>

    </div>;

export default Alert;
