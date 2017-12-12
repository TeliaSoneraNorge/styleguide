import React from 'react';

/**
 * Status: *in progress*.
 *
 * TODO: wrap Label component around the input element
 **/
export default class DropDownListWithLabel extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <select className="dropdown-list" value={this.props.selectedOption}>
                {this.props.options.map((option, i) =>
                    <option className="dropdown-list__option">
                        {option}
                    </option>)}
            </select>
        );
    }
}