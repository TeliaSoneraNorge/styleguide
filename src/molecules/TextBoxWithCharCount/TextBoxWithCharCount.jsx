import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import deprecate from 'util-deprecate';

import TextBox from '../../atoms/TextBox';

/**
 * Status: *finished*.
 * Category: FormElements
 **/
class TextBoxWithCharCount extends React.Component {
  static propTypes = {
    innerRef: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    small: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    maxCharCount: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      maxCharCount: this.props.maxCharCount,
      inputValue: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;
    value.length <= this.props.maxCharCount && this.setState({ inputValue: value });
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={classnames('textbox-with-char-count', {
            [this.props.className]: this.props.className,
            ['textbox-with-char-count--with-error']: this.props.errorMessage,
          })}
        >
          <TextBox
            ref={this.props.innerRef}
            type={this.props.type}
            placeholder={this.props.placeholder}
            disabled={this.props.disabled}
            small={this.props.small}
            onChange={this.onChange}
            value={this.state.inputValue}
            {...this.props.rest}
          />
          <p className="textbox-with-char-count__char-count">
            {this.state.inputValue.length}/{this.state.maxCharCount}
          </p>
        </div>
        {this.props.errorMessage && <p className="input-error">{this.props.errorMessage}</p>}
      </React.Fragment>
    );
  }
}

export default React.forwardRef(
  deprecate(
    (props, ref) => <TextBoxWithCharCount innerRef={ref} {...props} />,
    '<TextBoxWithCharCount/> from Telia Styleguide is a deprecated component. Use <TextField/>  with `helpText` props instead'
  )
);
