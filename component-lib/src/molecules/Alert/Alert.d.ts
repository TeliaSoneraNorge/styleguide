import * as React from 'react';

export type AlertKind = "positive" | "negative" | "info" | "warning";

export type AlertSize = "large" | "large-with-borders";

export interface AlertLinks {
    text?: string;
    url?: string;
}

export interface AlertProps {
    kind?: AlertKind;
    size?: AlertSize;
    onOpen?: (...args: any[])=>any;
    onClose?: (...args: any[])=>any;
    isOpen?: boolean;
    minimizedText?: string;
    links?: AlertLinks[];
}

const Alert: React.FC<AlertProps>;

export default Alert;
