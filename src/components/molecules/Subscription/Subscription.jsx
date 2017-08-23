import React from 'react';

const Subscription = ({ name, dataAmount, dataUnit, expanded }) =>
    <div className="subscription">
        <div className="subscription__name">{name}</div>
        <div className="subscription__data-amount">{dataAmount}</div>
        <div className="subscription__data-unit">{dataUnit}</div>
        {expanded ?
            <div>
                Show this if the component is expanded
            </div> : null}
    </div>;

export default Subscription;