import React, { CSSProperties } from 'react';
import cs from 'classnames';

import { IconDefinition } from './IconDefinition';

interface Props {
    icon: IconDefinition;
    className?: string;
    style?: CSSProperties;
    title?: string;
}

export function Icon(props: Props) {
    return (
        <svg
            className={cs(
                'Business-Icon',
                `Business-Icon--${props.icon}`,
                props.className
            )}
            aria-hidden={props.title ? undefined : true}
            style={props.style}
        >
            {props.title && <title>{props.title}</title>}
            <use xlinkHref={`#${props.icon}`}></use>
        </svg>
    );
}
