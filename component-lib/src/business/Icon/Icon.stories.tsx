import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs, color, select } from "@storybook/addon-knobs";

import { AllBusinessIcons } from "./AllBusinessIcons";
import { Icon } from "./Icon";
import { IconDefinition } from "./IconDefinition";

const stories = storiesOf("Business|Icon", module);

stories.addDecorator(withKnobs);

stories.add("Icon", () => (
    <div style={{ padding: "24px" }}>
        <AllBusinessIcons />

        <h1>Icon</h1>

        <p>
            The component <code>{"<AllBusinessIcons />"}</code> (which itself is
            invisible) must be present in order for the SVGs to be available to
            the <code>{"<Icon />"}</code> component.
        </p>

        <p>
            The icon inherits its color from the surrounding element (
            <code>{"fill: currentColor;"}</code>).
        </p>

        <h2>Sample icon</h2>

        <div
            style={{
                transition: "color 0.15s ease-in-out",
                color: color("Color", "red")
            }}
        >
            <Icon
                icon={
                    select(
                        "Sample icon",
                        Object.keys(availableIcons),
                        "ai-robot"
                    ) as IconDefinition
                }
            />
        </div>

        <h2>All icons</h2>

        <ul style={{ listStyleType: "none", margin: "0", padding: "0" }}>
            {availableIcons.map((key: IconDefinition) => (
                <li
                    key={key}
                    style={{ padding: "8px", display: "inline-block" }}
                    title={key}
                >
                    <Icon
                        style={{ width: "32px", height: "32px" }}
                        icon={key}
                    />
                </li>
            ))}
        </ul>
    </div>
));

/**
 * A complete list of all available icons. While it is must currently be updated
 * manually whenever IconDefinition changes, it _will_ give a TypeScript error
 * if the list does not match the list of icons in IconDefinition.
 */
// const availableIcons: Record<IconDefinition, IconDefinition> = {
const availableIconMap: { [key in IconDefinition]: true } = {
    add: true,
    "ai-robot": true,
    alarm: true,
    alert: true,
    "arrow-down": true,
    "arrow-large-down": true,
    "arrow-large-left": true,
    "arrow-large-right": true,
    "arrow-large-up": true,
    "arrow-left": true,
    "arrow-right": true,
    "arrow-small-down": true,
    "arrow-small-left": true,
    "arrow-small-right": true,
    "arrow-small-up": true,
    "arrow-up": true,
    attach: true,
    battery: true,
    "best-in-test": true,
    broadband: true,
    "business-intelligence": true,
    buy: true,
    calendar: true,
    camera: true,
    "card-view": true,
    chat: true,
    "check-mark": true,
    close: true,
    cloud: true,
    delivery: true,
    devices: true,
    "document-doc": true,
    "document-pdf": true,
    "document-ppt": true,
    document: true,
    "document-xls": true,
    download: true,
    email: true,
    facebook: true,
    filter: true,
    "folder-new": true,
    folder: true,
    games: true,
    gift: true,
    graph: true,
    "grid-view": true,
    "heart-filled": true,
    heart: true,
    home: true,
    image: true,
    infinite: true,
    info: true,
    invoice: true,
    ipad: true,
    laptop: true,
    level: true,
    link: true,
    "list-view": true,
    lock: true,
    login: true,
    logout: true,
    menu: true,
    minus: true,
    "mobile-recycle": true,
    mobile: true,
    "money-euro": true,
    money: true,
    more: true,
    open: true,
    orgchart: true,
    payment: true,
    pen: true,
    "person-new": true,
    person: true,
    phone: true,
    "pie-chart": true,
    place: true,
    play: true,
    position: true,
    question: true,
    refresh: true,
    return: true,
    router: true,
    search: true,
    server: true,
    services: true,
    settings: true,
    shopping_2: true,
    shopping: true,
    shuffle: true,
    signal: true,
    "sim-card": true,
    sms: true,
    "star-filled": true,
    statistics: true,
    summary: true,
    support: true,
    sync: true,
    "table-view": true,
    tags: true,
    time: true,
    "time-waiting": true,
    trash: true,
    tv: true,
    twitter: true,
    undo: true,
    upload: true,
    video: true,
    "visibility-filled": true,
    visibility: true,
    volume: true,
    warning: true,
    "wireless-off": true,
    wireless: true,
    "world-alert": true,
    "world-off": true,
    "world-question": true,
    world: true,
    wrench: true
};

const availableIcons = Object.keys(availableIconMap) as IconDefinition[];
