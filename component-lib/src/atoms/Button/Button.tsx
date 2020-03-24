import React from 'react';
import classnames from 'classnames';
import { Icon, IconDefinition } from '../../index';



interface isAButton {
  /**
   * you can define a component tag with one of these below.
   * 'button' are default and is not necessary to define
   */
  component?: 'button';
}

interface isALink {
  component?: 'link';
  href: string;
}

interface isADiv {
  component?: 'div';
}


interface CommonButtonProps {
  /**
   * A button can have a text.
   */
  text?: string;
  /**
   * When defining component as 'link', href needs to be added
   */
  href?: string;
  /**
   * Look at Icon component for aviable icons to choose from
   */
  icon?: IconDefinition;
  type?: 'button' | 'reset' | 'submit';
  /**
   * A button can have different appearances e.g. 'primary', 'cancel'.
   */
  kind?: 'normal' | 'primary' | 'cancel' | 'link' | 'inverted' | 'negative';
  /**
   * One of ['top', 'bottom']
   */
  margin?: 'top' | 'bottom';
  /**
   * A button can have different sizes e.g. 'small'.
   */
  size?: 'small';
  onClick?: React.MouseEventHandler;
  /**
   * Additional classes.
   */
  className?: string;
  /**
   * A button can change text while it is processing.
   */
  processingText?: string;
  /**
   * A button can be in processing state
   */
  isProcessing?: boolean;
  /**
   * A button can be disabled.
   */
  isDisabled?: boolean;

  /**
   * Children is not a valid prop, and is present with type `never` to override the default React.FC definition.
   * See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/34237
   */
  children?: never;

  /**
   * rest propeties are set to any
   */
  [key: string]: any;
}

export type ButtonProps = (isAButton | isALink | isADiv) & CommonButtonProps

/**
 * Status: *finished*.
 * Category: Buttons
 */
const Button = (props: ButtonProps) => {
  const {
    component = 'button',
    href,
    text,
    kind,
    icon,
    size,
    onClick,
    className,
    processingText,
    isProcessing,
    isDisabled,
    type = 'button',
    margin,
    ...rest
  } = props;

  const Tag = component === 'link' ? 'a': component;
  
  return (
    <Tag
      className={classnames('button',
        {
          [`button--${kind}`]: !isDisabled && kind,
          [`button--${size}`]: size,
          [`button--margin-${margin}`]: margin,
          'button--processing': isProcessing,
          'button--disabled': isDisabled,
        },
        className ? className : undefined
      )}
      href={href ? href : undefined}
      onClick={onClick}
      disabled={isProcessing || isDisabled}
      type={type}
      {...rest}
    > 
      {icon && 
        <Icon icon={icon} style={{
          fill: 'currentColor',
          height: '20px',
          marginBottom: '-8px',
          marginLeft: '-6px',
          marginRight: '10px',
          position: 'relative',
          top: '-3.5px',
          width: '20px',
          }} 
        />
      }
      {!isProcessing && text}
      {isProcessing && (
        <span className="button__processing">
          {processingText}
          <span className="button__processing-dot">.</span>
          <span className="button__processing-dot">.</span>
          <span className="button__processing-dot">.</span>
        </span>
      )}
    </Tag>
  )
};

export default Button;