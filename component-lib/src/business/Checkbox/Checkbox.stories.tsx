import React from 'react';
import {Checkbox} from './Checkbox';

import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export default {
    component: Checkbox,
    title: "Business|Checkbox",
    decorators: [withKnobs]
}

export const Default = ({}) => {
    return (
        <div>
            <div>
                With knobs:<br />
                <Checkbox
                    checked={boolean('checked', true, "Standard")}
                    label={text('label', "Checkbox", "Standard")}
                    hiddenLabel={boolean('hiddenLabel', false, "Standard")}
                    onChange={() => undefined}
                    disabled={boolean('disabled', false, "Standard")}
                    partial={boolean('partial', false, 'Partial/mixed states')}
                    id={text('id', '', 'Partial/mixed states')}
                    controls={text('controls', "id1 id2 id3", 'Partial/mixed states')}
                    className={text('className', '', "Standard")} />
            </div><br />
            <div>
                Examples:<br />
                <Checkbox checked={false} label={"Unchecked"} onChange={() => undefined} /><br />
                <Checkbox checked={false} partial={true} label={"Partial"} onChange={() => undefined} /><br />
                <Checkbox checked={true} label={"Checked"} onChange={() => undefined} /><br />
                <Checkbox checked={false} disabled={true}label={"Disabled"} onChange={() => undefined} /><br />
                <Checkbox checked={false} partial={true} disabled={true} label={"Disabled partial"} onChange={() => undefined} /><br />
                <Checkbox checked={true} disabled={true} label={"Disabled checked"} onChange={() => undefined} /><br />
                (Hidden label) <Checkbox checked={false} label={"Hidden label"} onChange={() => undefined} hiddenLabel={true} />
            </div>
        </div>
    )
}