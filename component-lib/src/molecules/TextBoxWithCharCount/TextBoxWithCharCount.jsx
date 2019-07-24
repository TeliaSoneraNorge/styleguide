import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import TextBox from '../../atoms/TextBox';

class TextBoxWithCharCount extends React.Component {
    static propTypes = {
        innerRef: PropTypes.string,
        type: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        small: PropTypes.bool,
        className: PropTypes.string,
        onChange: PropTypes.func,
        maxCharCount: PropTypes.number.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            maxCharCount: this.props.maxCharCount,
            inputValue: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const value = event.target.value;
        (value.length <= this.props.maxCharCount) && this.setState({ inputValue: value });
        this.props.onChange && this.props.onChange(event);
    }

    render() {
        return (
                <div className='textbox-with-char-count'>
                    <TextBox
                        ref={this.props.innerRef}
                        className={classnames('textbox-with-char-count__textbox', {
                            [this.props.className]: this.props.className
                        })}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        disabled={this.props.disabled}
                        small={this.props.small}
                        onChange={this.onChange}
                        value={this.state.inputValue}
                        {...this.props.rest} />
                    <span className='textbox-with-char-count__char-count'>
                        {this.state.inputValue.length}/{this.state.maxCharCount}
                    </span>
                </div>
        );
    }
};

/**
 * Status: *in progress*.
 * Category: FormElements
 *
 * The input field has a dynamically updated char count with maximum length.
 * TODO: It should be possible to add error messages.
 * Maybe we do not really need this component at all.
**/
export default React.forwardRef((props, ref) => <TextBoxWithCharCount innerRef={ref} {...props} />);
