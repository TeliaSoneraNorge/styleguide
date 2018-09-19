import _ from 'lodash';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';

/**
 * Status: *In progress*.
 */
const StepIndicator = ({ index, numberOfSteps }) =>
    <div className="step-indicator">
        <ul className="step-indicator__list">
            {_.range(numberOfSteps).map(number =>
                <li key={`step-indicator-step-${number}`}
                    className={classnames(
                        'step-indicator__step',
                        {
                            'step-indicator__step--active': index === number,
                            'step-indicator__step--passed': index >= number
                        }
                    )}>
                    { index > number ?
                        <span className="icon-wrapper">
                            <SvgIcon className="icon" iconName="ico_check" />
                        </span>
                        : number + 1
                    }
                </li>
            )}
        </ul>
    </div>;

StepIndicator.propTypes = {
    /** Current active step (index starts at 0) */
    index: PropTypes.number,
    /** Total number of steps */
    numberOfSteps: PropTypes.number
};

export default StepIndicator;
