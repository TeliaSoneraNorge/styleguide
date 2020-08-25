import React from 'react';
import classnames from 'classnames';
import Button from '../../atoms/Button/Button';

import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    isExpanded?: boolean;
    id?: string;
    title?: string;
    accordionRef?: any;
    children?: React.ReactNode;
    icon?: string;
    text?: string;
    button?: string;
    buttonType?: string;
    iconTitle?: string;
    imageUrl?: string;
    onButtonClick?: (...args: any[]) => any;
    toggleIsExpanded?: (...args: any[]) => any;
    footer?: React.ReactNode;
    shouldAnimateHeaderButtonTextBox?: boolean;
};

/**
 * Status: *Finished*
 * Category: Accordion
 *
 * TODO: Add possibility for passing objects to the right content area
 */
const Accordion = ({ isExpanded, id, title, accordionRef, children, icon, iconTitle = '', imageUrl, text, button, buttonType, onButtonClick, toggleIsExpanded, footer, shouldAnimateHeaderButtonTextBox }: Props) => {
  function accordionHeaderClicked() {
    // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
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

export default Accordion;
