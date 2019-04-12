import React from 'react';

/**
 *
 * Status: *Finished*.
 * Category: Graphs
 *
 * A component for displaying simple facts and statistics that can have either a small header (numbers in this case) or an icon.
 **/

const StatsDisplay = ({ children }) =>
    <div>
        <div className="stats-display">
            {children}
        </div>
        <div className="stats-display-border"></div>
    </div>;

export default StatsDisplay;