import React from 'react';

/**
 * Status: *in progress*.
 *
 * Be sure to set the correct type when using this component as it helps
 * the user to give correct input.
 *
 * TODO: wrap Label component around the input element
 *
**/
export default class TextBox extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <input class="textbox__input" type={this.props.type} placeholder={this.props.placeholder} id={this.props.id} />
        )
    }
}