import React from 'react';
import { TextBoxWithLabel } from '@telia/styleguide';

export default class TypeWithRef extends React.Component {
  state = {
    value: '',
  };
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }
  onChange = event => {
    this.setState({
      value: event.target.value,
    });
  };
  render() {
    const { value } = this.state;
    const ref = this.inputRef.current;

    return (
      <React.Fragment>
        <p>Value from ref: {ref && ref.value}</p>
        <TextBoxWithLabel
          type="text"
          labelText="Sample input field"
          hideLabel
          value={value}
          ref={this.inputRef}
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}
