import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import range from 'lodash/range';
import SvgIcon from '../SvgIcon/SvgIcon';

/**
 * Status: *In progress*.
 * Category: Wizard
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

const StepElement = ({ children, isPassed, onClick }) => {
    if (isPassed) {
        return (
            <a href="javascript:void(0)" className="step-indicator__element step-indicator__element__clickable" onClick={onClick}>
                {children}
            </a>
        );
    } else {
        return (
            <div className="step-indicator__element">
                {children}
            </div>
        );
    }
};

const renderStep = (index, number, numberOfSteps, label, link) => {
    const isActive = index === number;
    const isPassed = index > number;

    return (
        <li className="step-indicator__wrapper" key={`step-indicator-step-${number}`}>
            <StepElement isPassed={isPassed} onClick={() => window.location.assign(link)}>
                <div className={classnames(
                    'step-indicator__step',
                    {
                        'step-indicator__step--active': isActive,
                        'step-indicator__step--passed': isPassed
                    }
                )}>
                    {index > number ?
                        <span className="icon-wrapper">
                            <SvgIcon className="icon" iconName="ico_check" role="presentation" title={`${number + 1}`} />
                        </span>
                        : number + 1
                    }
                </div>
                <span className={
                    classnames('step-indicator__label', { 'step-indicator__label--active': isActive })}>
                    {label}
                    {index > number && <span className="sr-only">- fullført</span>}
                </span>
            </StepElement>
            { renderLine(number, numberOfSteps, index) }
        </li>
    );
};

const StepIndicator = ({ index, numberOfSteps, labels, links }) =>
    <div className="step-indicator">
        <ol className="step-indicator__list">
            {range(numberOfSteps).map(number => renderStep(index, number, numberOfSteps, labels[number], links[number]))}
        </ol>
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
