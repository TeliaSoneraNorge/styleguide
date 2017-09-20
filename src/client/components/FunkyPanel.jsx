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
            aria-labelledby={"tab-" + props.tabPanelIndex}>
            {props.children}
        </div>
    );
};

export default FunkyPanel;