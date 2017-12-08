import React from 'react';

import Accordion from '../Accordion/Accordion';

/**
 * Status: *in progress*.
 *
 * An AccordionList handles the state for a list of Accordions.
 * Only one accordion can be open at a time.
 */

class AccordionList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpandedAccordionIndex: this.props.isExpandedAccordionIndex
        };
        this.toggleIsExpanded = this.toggleIsExpanded.bind(this);
    }
    toggleIsExpanded(newIndex) {
        if (newIndex === this.state.isExpandedAccordionIndex) {
            this.setState({ isExpandedAccordionIndex: -1 });
        } else {
            this.setState({ isExpandedAccordionIndex: newIndex });
        }
    }
    render() {
        return (
            <div className="accordion-list">
                {this.props.accordionItems.map((accordionItem, i) =>
                    <Accordion
                        key={i}
                        {...accordionItem}
                        isExpanded={i === this.state.isExpandedAccordionIndex}
                        toggleIsExpanded={() => this.toggleIsExpanded(i)} />
                )}
            </div>
        );
    }
}

export default AccordionList;