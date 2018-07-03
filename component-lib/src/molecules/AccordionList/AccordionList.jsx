import React from 'react';
import PropTypes from 'prop-types';

import Accordion from './Accordion';

/**
 * Status: *finished*.
 *
 * An AccordionList is a list of Accordions. An Accordion consists of a header and a panel.
 * The header contains a button which toggles the associated panel's visibility.
 *
 * The header is a `h3` tag due to the assumption that in most scenarios there will be
 * a `h1` on the page already, and the Accordion is likely to be a sub-section containing
 * its own `h2`. The `h3` can be swapped with a `h2` if necessary without affecting the
 * appearance.
 *
 * The `aria-expanded` and `aria-controls` attributes allow screen readers to recognize
 * the link between the header button and its associated panel content.
 *
 * Additional resources: [w3.org Accordion](https://www.w3.org/TR/wai-aria-practices/#accordion),
 * [w3.org Accordion example](https://www.w3.org/TR/wai-aria-practices/examples/accordion/accordion1.html),
 * [Stack Overflow: ARIA / button role](https://stackoverflow.com/questions/26934719/do-i-need-role-button-on-a-button),
 * [MDN: ARIA / button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_button_role)
 *
 */

class AccordionList extends React.Component {
    static propTypes = {
        accordionItems: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            children: PropTypes.string.isRequired
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
            <div className="accordion-list">
                {this.props.accordionItems.map((accordionItem, i) =>
                    <Accordion
                        accordionRef={(element) => {this.setAccordionRef(element, i);}}
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