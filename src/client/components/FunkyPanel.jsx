import React from 'react';

function getPanelClassNames(isSelected) {
    const classNames = ['funky-tabs__panel'];

    if (isSelected){
        classNames.push('funky-tabs__panel--open');
    }

    return classNames.join(' ');
}

const FunkyPanel = (props) => {
    const isSelected = (props.selectedTabIndex === props.tabPanelIndex);
    return (
        <div className={getPanelClassNames(isSelected)}
             id={"tab-panel-" + props.tabPanelIndex}
             role="tabpanel"
             aria-labelledby={"tab-" + props.tabPanelIndex}
             aria-expanded={isSelected}>
            {props.children}
        </div>
    );
}

export default FunkyPanel;