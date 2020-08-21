import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../atoms/Button/Button';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *Finished*
 * Category: Accordion
 *
 * TODO: Add possibility for passing objects to the right content area
 */
const Accordion = ({
  isExpanded,
  id,
  title,
  accordionRef,
  children,
  icon,
  iconTitle = '',
  imageUrl,
  text,
  button,
  buttonType,
  onButtonClick,
  toggleIsExpanded,
  footer,
  shouldAnimateHeaderButtonTextBox
}) => {
  function accordionHeaderClicked() {
    toggleIsExpanded();
  }

  return (
    <section id={`accordion-${id}`} className={`accordion${isExpanded ? ' accordion--open' : ''}`} ref={accordionRef}>
      <h3 className={`accordion__header${button ? ' accordion__header--with-button' : ''} heading heading--level-3`}>
        <button
          className="accordion__header-button"
          aria-expanded={isExpanded}
          aria-controls={`panel-${id}`}
          onClick={accordionHeaderClicked}
        >
          {icon && <SvgIcon className="accordion__icon" iconName={icon} title={iconTitle} />}
          {imageUrl && (
            <div className="accordion__image-container">
              <img className="accordion__image" src={imageUrl} alt="" />
            </div>
          )}
          <div
            className={classnames('accordion__header-button--text-box', {
              'accordion__header-button--text-box-no-icon': !icon,
              'accordion__header-button--text-box--animate': shouldAnimateHeaderButtonTextBox,
            })}
          >
            {title}
            {text && <div className="accordion__header-button--text-box-text">{text}</div>}
          </div>
        </button>
        <SvgIcon className="accordion__header-icon" iconName="ico_dropArrow" color="purple" />
      </h3>
      {button && (
        <Button
          type="button"
          className={classnames('accordion__button', { 'button--primary': buttonType === 'primary' })}
          text={button}
          onClick={onButtonClick}
        />
      )}
      <div className="accordion__panel rich-text" id={`panel-${id}`}>
        {children}
      </div>
      {footer}
    </section>
  );
};

Accordion.propTypes = {
  isExpanded: PropTypes.bool,
  id: PropTypes.string,
  title: PropTypes.string,
  accordionRef: PropTypes.any,
  children: PropTypes.node,
  icon: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  buttonType: PropTypes.string,
  iconTitle: PropTypes.string,
  imageUrl: PropTypes.string,
  onButtonClick: PropTypes.func,
  toggleIsExpanded: PropTypes.func,
  footer: PropTypes.node,
  shouldAnimateHeaderButtonTextBox: PropTypes.bool
};

export default Accordion;
