import React from 'react';
import PropTypes from 'prop-types';

import AccordionList from './AccordionList';

export default class StatefulAccordionList extends React.Component {
  static propTypes = {
    accordionItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      })
    ).isRequired,
    isExpandedAccordionIndex: PropTypes.number.isRequired,
  };
  state = {
    isExpandedAccordionIndex: this.props.isExpandedAccordionIndex,
  };
  accordions = {};

  toggleIsExpanded = newIndex => {
    if (newIndex === this.state.isExpandedAccordionIndex) {
      this.setState({ isExpandedAccordionIndex: -1 });
    } else {
      this.setState({ isExpandedAccordionIndex: newIndex });
    }
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
        toggleIsExpanded={this.toggleIsExpanded}
      />
    );
  }
}
