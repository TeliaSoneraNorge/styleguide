import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import FocusBox from '../../molecules/FocusBox/FocusBox';

const FocusBoxWithLabels = ({ padding, content: { upperLeft, upperRight, bottomLeft, bottomRight } }) => {
    return (
        <FocusBox>
            <div className="focus-box-with-labels">
                <div className={
                    classnames('focus-box-with-labels__upper-left', 'focus-box-with-labels__item', {
                        'focus-box-with-labels__upper-left--padding': padding ,
                        'focus-box-with-labels__upper-left--border': true,
                    })
                }>
                    <div className="item-title">{upperLeft.title}</div>
                    <span className="item-description item-description--bold">{upperLeft.description}</span>
                </div>
                <div className={
                    classnames('focus-box-with-labels__upper-right', 'focus-box-with-labels__item', {
                        'focus-box-with-labels__upper-right--padding': padding,
                        'focus-box-with-labels__upper-right--border': true,
                    })
                }>
                    <div className="item-title">{upperRight.title}</div>
                    <span className="item-description">{upperRight.description}</span>
                </div>
                <div className={
                    classnames('focus-box-with-labels__bottom-left', 'focus-box-with-labels__item', {
                        'focus-box-with-labels__bottom-left--padding': padding,
                        'focus-box-with-labels__bottom-left--border': true,
                    })
                }>
                    <div className="item-title">{bottomLeft.title}</div>
                    <span className="item-description">{bottomLeft.description}</span>
                </div>
                <div className={
                    classnames('focus-box-with-labels__bottom-right', 'focus-box-with-labels__item', {
                        'focus-box-with-labels__bottom-right--padding': padding,
                        'focus-box-with-labels__bottom-right--border': true,
                    })
                }>
                    <div className="item-title">{bottomRight.title}</div>
                    <span className="item-description item-description--bold">{bottomRight.description}</span>
                </div>
            </div>
        </FocusBox>
    );
};


FocusBoxWithLabels.defaultProps = {
    padding: true
};

FocusBoxWithLabels.propTypes = {
    content: PropTypes.objectOf(
        PropTypes.shape({
            title: PropTypes.string,
            description: PropTypes.string,
        })
    ).isRequired,
    padding: PropTypes.bool
};

export default FocusBoxWithLabels;