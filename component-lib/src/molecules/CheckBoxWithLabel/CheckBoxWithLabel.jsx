import React from 'react';

import Label from '../../atoms/Label/Label';
import StatefulTooltip from '../Tooltip/StatefulTooltip';

/**
 * Status: *in progress*.
 *
 * Waiting on the Photoshop files to get the exact checkmark SVG.
 */
const CheckBoxWithLabel = ({ label, checked, tooltipText, ...rest }) => (
            <Label className="check-box-with-label" tooltipText={tooltipText}>
                <input className="check-box-with-label__input" type="checkbox" defaultChecked={checked} {...rest} />
                <span className="check-box-with-label__svg-container">
                    <svg className="check-box-with-label__svg" width="20px" height="20px" viewBox="0 0 20 20">
                        <path className="check-box-with-label__frame" d="M16,19H4c-1.7,0-3-1.4-3-3V4c0-1.7,1.3-3,3-3h12c1.6,0,3,1.3,3,3v12C19,17.6,17.6,19,16,19z" />
                        <path className="check-box-with-label__check-mark" d="M5,7.7c1.5,2.4,3.1,4.8,4.6,7.3c2.1-3.3,4.3-6.7,6.4-10" />
                    </svg>
                </span>
                {tooltipText
                    ? <StatefulTooltip className="check-box-with-label__label-tooltip" label={label} text={tooltipText} />
                    : <span className="check-box-with-label__label-text">{label}</span>
                }
            </Label>
);

export default CheckBoxWithLabel;
