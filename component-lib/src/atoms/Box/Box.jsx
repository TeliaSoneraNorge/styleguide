import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * A Box component has a default size, but can be made into a small or a medium box.
 * It serves as a container with a colored border, and do not have any padding since the content
 * should be able to control that part.
 *
 * One or more Boxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 *
 * Color can be set to transparent with box--no-background
 */
const Box = (
  { className, isExpanded, canExpand, color, size, speechBubbleText, children, id, onClick, onClose },
  ref
) => {
  function boxContainerClick(e) {
    if (!canExpand) return;

    if (e.type === 'click' || (e.type === 'keyup' && (e.which === 13 || e.which === 32))) {
      onClick(e, id, '');
    }
  }

  function closeBoxClick(e) {
    e.stopPropagation();
    onClose(id);
  }

  return (
    <article
      ref={ref}
      id={id}
      className={classnames('box', {
        [className]: className,
        [`box--${color}`]: color,
        [`box--${size}`]: size,
        'box--expandable': canExpand,
        'box--is-expanded': isExpanded,
      })}
      onClick={boxContainerClick}
      onKeyUp={boxContainerClick}
      aria-expanded={isExpanded}
      tabIndex={canExpand && !isExpanded ? '0' : null}
    >
      {speechBubbleText ? (
        <div className="box__speech-bubble">
          <div className="box__speech-bubble-text">{speechBubbleText}</div>
        </div>
      ) : (
        <div className="box__speech-bubble box__speech-bubble--empty"></div>
      )}
      {isExpanded ? (
        <button className="box__close-expanded-info" onClick={closeBoxClick} aria-controls={id}>
          <span className="box__close-text">LUKK</span>
          <SvgIcon className="box__close-icon" iconName="ico_delete" color="black" />
        </button>
      ) : null}
      {children}
    </article>
  );
};

Box.propTypes = {
  className: PropTypes.string,
  isExpanded: PropTypes.bool,
  canExpand: PropTypes.bool,
  color: PropTypes.oneOf(['purple', 'pink', 'light-orange', 'green', 'blue', 'teal', 'grey', 'black']),
  size: PropTypes.oneOf(['small', 'medium']),
  speechBubbleText: PropTypes.string,
  /** close button aria-controls */
  id: PropTypes.string,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};

const BoxWithForwardRef = forwardRef(Box);

export default BoxWithForwardRef;
