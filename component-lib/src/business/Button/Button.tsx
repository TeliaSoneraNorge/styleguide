import React from "react";
import classnames from "classnames";

type ButtonType = "button" | "reset" | "submit";

interface Props {
    /** A button can have a text. */
    text?: string;
    type?: ButtonType;
    /** A button can have different appearances e.g. 'primary', 'cancel'. */
    kind?: "primary" | "cancel" | "link" | "inverted" | "negative";
    /** One of ['top', 'bottom'] */
    margin?: "top" | "bottom";
    /** A button can have different sizes e.g. 'small'. */
    size?: "small";
    onClick?: (e: any) => void;
    /** Additional classes. */
    className?: string;
    /** A button can change text while it is processing. */
    processingText?: string;
    /** A button can be in processing state */
    isProcessing?: boolean;
    /** A button can be disabled.  */
    isDisabled?: boolean;
    [key: string]: any;
}

/**
 * Status: *finished*.
 * Category: Buttons
 */
function Button(props: Props) {
    const {
        text,
        kind,
        size,
        onClick,
        className,
        processingText,
        isProcessing,
        isDisabled,
        type = "button",
        margin,
        ...rest
    } = props;

    return (
        <button
            className={classnames("button", className, {
                [`button--${kind}`]: !isDisabled && kind,
                [`button--${size}`]: size,
                [`button--margin-${margin}`]: margin,
                "button--processing": isProcessing,
                "button--disabled": isDisabled,
            })}
            onClick={onClick}
            disabled={isProcessing || isDisabled}
            type={type}
            {...rest}
        >
            {!isProcessing && text}
            {isProcessing && (
                <span className="button__processing">
                    {processingText}
                    <span className="button__processing-dot">.</span>
                    <span className="button__processing-dot">.</span>
                    <span className="button__processing-dot">.</span>
                </span>
            )}
        </button>
    );
}

export default Button;
