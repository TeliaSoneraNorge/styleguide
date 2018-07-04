import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

/**
 * Status: *in progress*.
 *
 * Future work: Replace it with gif
 *
 */
class Spinner extends Component {
    static propTypes = {
        className: PropTypes.string,
        type: PropTypes.oneOf(['lg', 'md', 'sm']),
        spinnerWillShow: PropTypes.func,
        spinnerWillHide: PropTypes.func,
        center: PropTypes.bool,
    };

    static defaultProps = {
        type: 'lg',
    };

    componentWillUnmount() {
        this.props.spinnerWillHide && this.props.spinnerWillHide();
    }

    componentWillMount() {
        this.props.spinnerWillShow && this.props.spinnerWillShow();
    }

    render() {
        const { className, type, center, spinnerWillShow, spinnerWillHide, ...rest } = this.props;
        return (
            <div
                className={classnames('spinner', {
                    [className]: className,
                    [`spinner--${type}`]: type,
                    'spinner--margin-auto': center,
                })}
                {...rest}>
                <div className="spinner__blade spinner__blade--0" />
                <div className="spinner__blade spinner__blade--1" />
                <div className="spinner__blade spinner__blade--2" />
                <div className="spinner__blade spinner__blade--3" />
                <div className="spinner__blade spinner__blade--4" />
                <div className="spinner__blade spinner__blade--5" />
                <div className="spinner__blade spinner__blade--6" />
                <div className="spinner__blade spinner__blade--7" />
                <div className="spinner__blade spinner__blade--8" />
                <div className="spinner__blade spinner__blade--9" />
                <div className="spinner__blade spinner__blade--10" />
                <div className="spinner__blade spinner__blade--11" />
                <div className="spinner__blade spinner__blade--12" />
                <div className="spinner__blade spinner__blade--13" />
            </div>
        );
    }
}

export default Spinner;