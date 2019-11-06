import React, { useState } from "react";
import { storiesOf } from "@storybook/react";

import { MainMenu } from "./MainMenu";
import { MainMenuItem } from "./MainMenuItem";
import { Icon, AllBusinessIcons } from "../Icon";

storiesOf("Business|MainMenu", module).add("default", () => {
    function onClickItem() {
        console.log("onClickItem");
    }

    return (
        <>
            <AllBusinessIcons />

            <h1>MainMenu</h1>

            <p>
                <em>
                    If using the default icon set, remember to include{" "}
                    <code>{"<AllBusinessIcons />"}</code> somewhere on the page.
                </em>
            </p>

            <div
                style={{
                    maxWidth: "300px",
                    marginRight: "30px"
                }}
            >
                <MainMenu>
                    <MainMenuItem
                        onClick={onClickItem}
                        label="Hjem"
                        icon={
                            <Icon
                                className="Business-MainMenu-icon"
                                icon="home"
                            />
                        }
                    />
                    <MainMenuItem
                        onClick={onClickItem}
                        active={true}
                        screenReaderSuffixWhenActive="current"
                        label="Tjenester"
                        icon="world"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Kart"
                        icon="place"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Feilmeldinger"
                        icon="email"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Kostnader"
                        icon="money"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Fakturaer"
                        icon="invoice"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Bestilling"
                        icon="buy"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Personer"
                        icon="person"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Dokumenter"
                        icon="folder"
                    />

                    <MainMenuItem
                        onClick={onClickItem}
                        label="Logg"
                        icon="time-waiting"
                    />
                </MainMenu>
            </div>
        </>
    );
});
