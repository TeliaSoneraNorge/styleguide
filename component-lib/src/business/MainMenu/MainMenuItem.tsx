import React from "react";
import cs from "classnames";
import { Icon, IconDefinition } from "../Icon";

export type MainMenuItemProps = {
    /**
     * The label to show on the menu item.
     */
    label: string;

    /**
     * Click handler.
     */
    onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;

    /**
     * An icon component to show before the label, or a string (from IconDefinition)
     * as shorthand to use the <Icon icon={props.icon} /> component.
     */
    icon?: JSX.Element | IconDefinition;

    /**
     * Whether this is the active menu element.
     */
    active?: boolean;

    /**
     * When this value is provided and `active` is true, this will be shown behind the label
     * for screen readers only. Typically `'current'` in English, `'aktiv'` in Norwegian.
     * E.g. `{label}<span className="sr-only"> ({screenReaderSuffixWhenActive})</span>`
     */
    screenReaderSuffixWhenActive?: string;
};

export const MainMenuItem: React.FC<MainMenuItemProps> = props => {
    function onClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        if (props.onClick) {
            e.preventDefault();
            props.onClick(e);
        }
    }

    const activeClass = props.active ? "active" : undefined;

    return (
        <li className={cs("Business-MainMenu-item", activeClass)}>
            <a
                className={cs("Business-MainMenu-link", activeClass)}
                role="button"
                href="#"
                onClick={onClick}
                aria-current={props.active ? "page" : undefined}
            >
                <span>
                    {typeof props.icon === "string" ? (
                        <Icon
                            className="Business-MainMenu-icon"
                            icon={props.icon}
                        />
                    ) : (
                        props.icon
                    )}

                    {props.label}

                    {props.active && props.screenReaderSuffixWhenActive ? (
                        <span className="sr-only">
                            {" "}
                            ({props.screenReaderSuffixWhenActive})
                        </span>
                    ) : null}
                </span>
            </a>
        </li>
    );
};
