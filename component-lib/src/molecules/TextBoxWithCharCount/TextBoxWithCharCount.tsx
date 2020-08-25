import React from 'react';
import classnames from 'classnames';

import TextBox from '../../atoms/TextBox';

type Props = {
    innerRef?: string;
    type?: string;
    placeholder?: string;
    disabled?: boolean;
    errorMessage?: string;
    small?: boolean;
    className?: string;
    onChange?: (...args: any[]) => any;
    maxCharCount: number;
};

type State = any;

/**
 * Status: *finished*.
 * Category: FormElements
 **/
class TextBoxWithCharCount extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      maxCharCount: this.props.maxCharCount,
      inputValue: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event: any) {
    const value = event.target.value;
    value.length <= this.props.maxCharCount && this.setState({ inputValue: value });
    this.props.onChange && this.props.onChange(event);
  }

  render() {
    return (
      <React.Fragment>
        <div
          className={classnames('textbox-with-char-count', {
            // @ts-expect-error ts-migrate(2464) FIXME: A computed property name must be of type 'string',... Remove this comment to see the full error message
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
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'rest' does not exist on type 'Readonly<P... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2322) FIXME: Type 'null' is not assignable to type 'string | un... Remove this comment to see the full error message
export default React.forwardRef((props, ref) => <TextBoxWithCharCount innerRef={ref} {...props} />);
