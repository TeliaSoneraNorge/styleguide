import React from 'react';
import Heading from '../../atoms/Heading/Heading';

function classNames(withMask, withContentOverlap) {
    const classNames = ['header'];
    if (withMask) {
        classNames.push(`header--with-mask`)
    }
    if (withContentOverlap) {
        classNames.push(`header--with-content-overlap`)
    }

    return classNames.join(' ');
}

const Header = ({ iconUrl, runningTitle, pageTitle, withMask, withContentOverlap, children }) =>
    <header className={classNames(withMask, withContentOverlap)}>
        <img className="header__icon" src={iconUrl} role="presentation" />
        <span className="header__subtitle ">{runningTitle}</span>
        <Heading level={1} text={pageTitle} />
        <section className="header__preamble">{children}</section>
    </header>;

export default Header;