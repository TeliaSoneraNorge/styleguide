import React from 'react';
import PropType from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *finished*
 *
 * The css-class <code>.horizontal-rule</code> can be used on any element to give it a grey border in bottom of
 * the element, or it can be used on the <code>&lt;hr/&gt;</code> tag as a standalone component.
 * The style should be used to define a thematic break.
 */
const HorizontalRule = ({ className, short, left, ...rest }) => (
    <hr
        className={classnames('horizontal-rule', {
            [className]: className,
            'horizontal-rule--short': short,
            'horizontal-rule--left': left
        })}
        {...rest} />
);

HorizontalRule.propTypes = {
    /** Whenever this should be short or not. */
    short: PropType.bool,
    /** Whenever this should be left aligned. */
    left: PropType.bool
};

export default HorizontalRule;