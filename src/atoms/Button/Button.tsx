import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, CSSProperties } from 'react';
import classnames from 'classnames';
import { Icon, IconDefinition } from '../../atoms/Icon/index';

export type ButtonKind = 'normal' | 'primary' | 'cancel' | 'link' | 'secondLink' | 'inverted' | 'negative';
export type ButtonType = 'button' | 'reset' | 'submit';
export type ButtonMargin = 'top' | 'bottom';
export type IconPlacement = 'left' | 'right';

export interface HTMLButtonProps {
  component?: 'button';
}

export interface HTMLAElementProps {
  component?: 'link';
  href: string;
}

export interface HTMLDivElementProps {
  component?: 'div';
}

export interface CommonButtonProps {
  /**
   * you can define a component tag with one of these below.
   * 'button' are default and is not necessary to define
   */
  component?: 'button' | 'link' | 'div';
  /**
   * A button can have a text.
   */
  text?: string;

  /**
   * When defining component as 'link', href should to be added
   */
  href?: string;

  /**
   * Look at Icon component for aviable icons to choose from
   */
  icon?: IconDefinition;

  /**
   * On which side of the button the icon shows e.g 'left' or 'right'
   */
  iconPlacement?: IconPlacement;

  type?: ButtonType;
  /**
   * A button can have different appearances e.g. 'primary', 'cancel'.
   */
  kind?: ButtonKind;
  /**
   * Optional margin
   */
  margin?: ButtonMargin;
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

  style?: CSSProperties;

  /**
   * rest propeties are set to any
   */
  // [key: string]: any;
}

export type ButtonProps = CommonButtonProps &
  (
    | (HTMLButtonProps & ButtonHTMLAttributes<HTMLButtonElement>)
    | (HTMLAElementProps & AnchorHTMLAttributes<HTMLAnchorElement>)
    | HTMLDivElementProps
  );

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
    iconPlacement = 'left',
    size,
    onClick,
    className,
    processingText,
    isProcessing,
    isDisabled,
    type = 'button',
    margin,
    style,
    ...rest
  } = props;

  const Tag: any = component === 'link' ? 'a' : component;

  return (
    <Tag
      className={classnames(
        'button',
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
      style={style}
      {...rest}
    >
      {icon && iconPlacement === 'left' && (
        <Icon
          icon={icon}
          style={{
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
      )}
      {!isProcessing && text}
      {isProcessing && (
        <span className="button__processing">
          {processingText}
          <span className="button__processing-dot">.</span>
          <span className="button__processing-dot">.</span>
          <span className="button__processing-dot">.</span>
        </span>
      )}
      {icon && iconPlacement === 'right' && (
        <Icon
          icon={icon}
          style={{
            fill: 'currentColor',
            height: '20px',
            marginBottom: '-8px',
            marginLeft: '10px',
            marginRight: '-6px',
            position: 'relative',
            top: '-3.5px',
            width: '20px',
          }}
        />
      )}
    </Tag>
  );
};

export default Button;

type ButtonTypeDict = {
  [key in ButtonType]: ButtonType;
};
Button.types = {
  button: 'button',
  reset: 'reset',
  submit: 'submit',
} as ButtonTypeDict;

type ButtonKindDict = {
  [key in ButtonKind]: ButtonKind;
};
Button.kinds = {
  normal: 'normal',
  primary: 'primary',
  cancel: 'cancel',
  link: 'link',
  secondLink: 'secondLink',
  inverted: 'inverted',
  negative: 'negative',
} as ButtonKindDict;

type ButtonMarginDict = {
  [key in ButtonMargin]: ButtonMargin;
};
Button.margins = {
  top: 'top',
  bottom: 'bottom',
} as ButtonMarginDict;
