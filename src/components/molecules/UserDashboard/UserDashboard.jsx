import classNames from 'classnames';
import React from 'react';

import ProgressBar from '../../atoms/ProgressBar/ProgressBar';

/**
 * Status: *in progress*.
 *
 * A small dashboard to be placed on top of the start page for the logged in user
 * to view a summary of data usage and to be able to navigate quickly to the Invoice page
 * and "Min side".
 *
 **/
const UserDashboard  = (
    {minsideLink, name, usageLink, dataAmountLeftText, usageInfoText, isPrepaid,
        isDataBoost, dataAmountLeft, totalDataAmount,
        invoiceLink, unpaidOverdueInvoices, buyMoreDataLink}) =>
    <section className={classNames("user-dashboard", { "user-dashboard--no-progress-bar" : isPrepaid || isDataBoost }, "container container--large container--no-padding container--no-margin")}>
        <div className="user-dashboard__container">
            <h2 className="user-dashboard__name heading heading--level-2">
                <a className="user-dashboard__name-link link" href={minsideLink}>{name}</a>
            </h2>
            <a className="user-dashboard__data-usage-link link" href={usageLink}>
                <span className="user-dashboard__data-amount-left">{dataAmountLeftText} </span>
                <span className="user-dashboard__data-amount-info">{usageInfoText}</span>
                {!isPrepaid && !isDataBoost &&
                <ProgressBar value={dataAmountLeft} min={0} max={totalDataAmount}/>}
            </a>
        </div>
        <ul className="user-dashboard__links list list--links">
            <li className="user-dashboard__link list__item">
                <a className="list__link" href={invoiceLink} target="_self">Faktura</a>
                {unpaidOverdueInvoices &&
                <span className="user-dashboard__unpaid-invoices">{unpaidOverdueInvoices}</span>}
            </li>
            <li className="user-dashboard__link list__item">
                <a className="list__link" href={minsideLink} target="_self">Mer fra min side</a>
            </li>
            {buyMoreDataLink &&
            <li className="user-dashboard__link list__item">
                <a className="list__link" href={buyMoreDataLink} target="_self">Kjøp mer data</a>
            </li>}
        </ul>
    </section>;

export default UserDashboard;