import React from "react";

interface Props {
    text?: string;
    type?: "button" | "reset" | "submit";
    kind?: "primary" | "cancel" | "link" | "inverted" | "negative";
    margin?: "top" | "bottom";
    size?: "small";
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    processingText?: string;
    isProcessing?: boolean;
    isDisabled?: boolean;
}

declare function Button(props: Props): React.ReactElement | null;

export default Button;
