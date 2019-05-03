import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*
 */
class StepByStep extends React.Component {
    static propTypes = {
        /** StepByStep.Step */
        children: PropTypes.node,
        /** Whether this should be interactive or just static. */
        interactive: PropTypes.bool,
        /** Index of the active step. Use when you want to handle the state on your own. Start at 0. */
        selectedIndex: PropTypes.number,
        /** Handler func triggered when user clicks the icon. Use when you want to handle the state on your own. */
        onSelect: PropTypes.func
    };
    state = {
        selectedIndex: 0
    };
    onSelect = (index) => {
        this.setState({ selectedIndex: index });
    };

    render() {
        const { children, className, interactive, selectedIndex, onSelect, ...rest } = this.props;
        return (
            <ul
                className={classnames('step-by-step', {
                    [className]: className,
                })}
                {...rest}>
                {
                    interactive
                        ? React.Children.map(children, (step, i) => (
                            React.cloneElement(step, {
                                key: step.index,
                                index: i,
                                opened: selectedIndex ? selectedIndex === i : this.state.selectedIndex === i,
                                onSelect: onSelect || this.onSelect,
                                interactive
                            })
                        ))
                        : children
                }
            </ul>
        );
    }
}

StepByStep.Step = ({ children, className, index, opened, onSelect, interactive, ...rest }) => (
    <li
        className={classnames('step-by-step__step-wrapper', {
            [className]: className,
            'step-by-step__step--opened': opened,
            'step-by-step__step--closed': !opened,
            'step-by-step__step--touched': true,
        })}
        {...rest}>
        {
            React.Children.map(children, (it, i) =>
                React.cloneElement(it, {
                    key: index,
                    index,
                    opened,
                    onSelect,
                    interactive
                })
            )
        }
    </li>
);

StepByStep.Description = ({ children, className, heading, iconName, imageSrc, number, pebbles, onSelect, index, interactive, opened, ...rest }) => (
    <React.Fragment>
        <Icon pebbles={pebbles} onSelect={onSelect} index={index} interactive={interactive} opened={opened}>
            {pebbles &&
                <SvgIcon iconName="step-by-step-pebble" color="grey" />}
            {imageSrc &&
                <img className="step-by-step__icon" src={imageSrc} />}
            {iconName &&
                <SvgIcon className="step-by-step__icon" iconName={iconName} color="purple" />}
            {number !== null && <span className="step-by-step__number">{number}</span>}
        </Icon>
        <div
            className={classnames('step-by-step__text', {
                [className]: className,
            })}
            {...rest}>
            <h2 className="step-by-step__heading heading heading--level-2">{heading}</h2>
            {children && <div className="step-by-step__description">{children}</div>}
        </div>
    </React.Fragment>
);

StepByStep.Description.propTypes = {
    /** Short step description. */
    children: PropTypes.node,
    /** Name of svg icon. */
    iconName: PropTypes.string,
    /** Source for an image. */
    imageSrc: PropTypes.string,
    /** Number if you want to show number instead of icon. */
    number: PropTypes.number,
    /** Pebbles style shape of the icon. */
    pebbles: PropTypes.bool,
    /** Step heading. */
    heading: PropTypes.string.isRequired,
    /** Passed down from parent */
    interactive: PropTypes.bool,
    /** Passed down from parent */
    opened: PropTypes.bool
};

StepByStep.Content = ({ children, className, opened, interactive, ...rest }) => (
    <div
        className={classnames('step-by-step__content', {
            [className]: className,
        })}
        {...rest}>
        {children}
    </div>
);

const Icon = ({ children, className, onSelect, index, interactive, opened, pebbles, ...rest }) => {
    const elementType = interactive ? 'a' : 'div';
    return React.createElement(elementType, {
        className: classnames('step-by-step__step', {
            [className]: className,
            'step-by-step__step--interactive': interactive,
            'step-by-step__step--highlighted': opened,
            'step-by-step__pebbles': pebbles,
            'step-by-step__circle step-by-step__circle--no-border': !pebbles,
        }),
        onClick: () => {
            if (!interactive) return;

            onSelect(index);
        },
        tabIndex: index,
        ...rest
    }, children);
};

export default StepByStep;
