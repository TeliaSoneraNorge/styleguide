import React from 'react';

import AccordionList from './AccordionList';

type Props = {
    accordionItems: {
        id: string;
        title: string;
    }[];
    isExpandedAccordionIndex: number;
    className?: string;
    noBorder?: boolean;
};

type State = any;

export default class StatefulAccordionList extends React.Component<Props, State> {
  state = {
    isExpandedAccordionIndex: this.props.isExpandedAccordionIndex,
  };
  accordions = {};

  toggleIsExpanded = (newIndex: any) => {
    if (newIndex === this.state.isExpandedAccordionIndex) {
      this.setState({ isExpandedAccordionIndex: -1 });
    } else {
      this.setState({ isExpandedAccordionIndex: newIndex });
    }
  };

  setAccordionRef = (accordionItem: any, i: any) => {
    // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
    this.accordions[i] = accordionItem;
  };

  render() {
    return (
      <AccordionList
        noBorder={this.props.noBorder}
        className={this.props.className}
        // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' is missing in type '{ id: stri... Remove this comment to see the full error message
        accordionItems={this.props.accordionItems}
        setItemRef={this.setAccordionRef}
        isExpandedAccordionIndex={this.state.isExpandedAccordionIndex}
        toggleIsExpanded={this.toggleIsExpanded}
      />
    );
  }
}
