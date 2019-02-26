import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import range from 'lodash/range';

/**
 * Status: *In progress*.
 */
const renderLine = (number, numberOfSteps, index) => {
    if (number >= numberOfSteps - 1) {
        return null;
    }

    const isPassed = index > number;

    return (
        <span className={classnames('step-indicator__line', { 'step-indicator__line--passed': isPassed }) } />
    );
};

const renderStep = (index, number, numberOfSteps, label, link) => {
    const isActive = index === number;
    const isPassed = index >= number;
    const isPassedButNotActive = isPassed && !isActive;

    const onClick = () => {
        if (isPassedButNotActive) {
            window.location.assign(link);
        }
    };

    const Element = isPassedButNotActive ? 'button' : 'div';

    return (
        <li className="step-indicator__wrapper" key={`step-indicator-step-${number}`}>
            <Element
                className={classnames('step-indicator__clickable', {
                    'step-indicator__clickable--future': !isPassedButNotActive
                })}
                onClick={onClick}
                disabled={isPassed || isActive ? 0 : -1}>
                <span className={
                    classnames('step-indicator__label', { 'step-indicator__label--active': isActive })}>
                    {label}
                    {index > number && <span className="sr-only">- fullført</span>}
                </span>
                <div className={classnames(
                    'step-indicator__step',
                    {
                        'step-indicator__step--active': isActive,
                        'step-indicator__step--passed': isPassed
                    }
                )} />
            </Element>
            { renderLine(number, numberOfSteps, index) }
        </li>
    );
};

const StepIndicator = ({ index, numberOfSteps, labels, links }) =>
    <div className="step-indicator">
        <ul className="step-indicator__list">
            {range(numberOfSteps).map(number => renderStep(index, number, numberOfSteps, labels[number], links[number]))}
        </ul>
    </div>;

StepIndicator.propTypes = {
    /** Current active step (index starts at 0) */
    index: PropTypes.number,
    /** Total number of steps */
    numberOfSteps: PropTypes.number,
    /** Labels for steps */
    labels: PropTypes.arrayOf(PropTypes.string),
    /** Links for steps */
    links: PropTypes.arrayOf(PropTypes.string)
};

export default StepIndicator;
