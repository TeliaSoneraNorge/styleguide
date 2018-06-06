import React from 'react';

/**
 * Status: *finished*.
 *
 * Use this component when you want to make the user aware of something, for instance:
 * - the chat to customer service is closed
 * - unpaid amount on invoice if date is past due date
 *
 * It's recommended to use this component with any heading component and only for short texts (for instance maximum five words).
 */
const AlertText = ({ children }) => (
    <h2 className="alert-text heading heading--level-2">{children}</h2>
);

export default AlertText;