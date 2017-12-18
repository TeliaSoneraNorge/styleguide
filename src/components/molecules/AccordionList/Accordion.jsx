import React from 'react';

class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.accordionHeaderClicked = this.accordionHeaderClicked.bind(this);

    }
    accordionHeaderClicked(){
        this.props.toggleIsExpanded();
        this.accordion.scrollIntoView({behavior: 'smooth'});
    }
    render() {
        return (
            <section
                className={`accordion${this.props.isExpanded ? ' accordion--open' : ''}`}
                ref={(accordion) => { this.accordion = accordion; }}>
                <h3 className="accordion__header heading heading--level-3">
                    <button
                        className="accordion__header-button"
                        aria-expanded={this.props.isExpanded}
                        aria-controls={this.props.id}
                        onClick={this.accordionHeaderClicked}>
                        {this.props.title}
                    </button>
                </h3>
                <div className="accordion__panel rich-text-area" id={this.props.id}>
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default Accordion;