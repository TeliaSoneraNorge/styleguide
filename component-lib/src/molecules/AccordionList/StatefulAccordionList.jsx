import React from 'react';
import PropTypes from 'prop-types';

import AccordionList from './AccordionList';

class StatefulAccordionList extends React.Component {
    static propTypes = {
        accordionItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            children: PropTypes.node.isRequired
        })).isRequired,
        isExpandedAccordionIndex: PropTypes.number.isRequired,
    };
    state = {
        isExpandedAccordionIndex: this.props.isExpandedAccordionIndex
    };
    accordions = {};
    toggleIsExpanded = (newIndex) => {
        if (newIndex === this.state.isExpandedAccordionIndex) {
            this.setState({ isExpandedAccordionIndex: -1 });
        } else {
            this.scrollToActiveAccordion(this.state.isExpandedAccordionIndex, newIndex);
            this.setState({ isExpandedAccordionIndex: newIndex });
        }
    };
    scrollToActiveAccordion = (previousExpandedAccordionIndex, currentExpandedAccordionIndex) => {
        setImmediate(() => {
            let openAccordionButtonHeight = 0;
            /*When an accordion further up on the page is already open, we subtract its button height
             so that the page scrolls to the top of the current open accordion*/
            if (previousExpandedAccordionIndex !== -1 &&
                previousExpandedAccordionIndex < currentExpandedAccordionIndex) {
                openAccordionButtonHeight = this.accordions[currentExpandedAccordionIndex].firstChild.offsetHeight;
            }

            window.scroll({
                top: this.accordions[currentExpandedAccordionIndex].offsetTop + this.accordions[currentExpandedAccordionIndex].offsetParent.offsetTop - openAccordionButtonHeight,
                left: 0,
                behavior: 'smooth'
            });
        });
    };
    setAccordionRef = (accordionItem, i) => {
        this.accordions[i] = accordionItem;
    };
    render() {
        return (
            <AccordionList
                accordionItems={this.props.accordionItems}
                setItemRef={this.setAccordionRef}
                isExpandedAccordionIndex={this.state.isExpandedAccordionIndex}
                toggleIsExpanded={this.toggleIsExpanded} />
        );
    }
}

export default StatefulAccordionList;