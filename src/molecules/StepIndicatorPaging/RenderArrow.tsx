import React from 'react';
import { Icon } from '../../atoms/Icon';

export const RenderArrow = (props: any) => {
  const { onPaging, iconName, isComplete, url, arrowsAsCarousel } = props;

  const modifier = iconName.includes('left') ? 'left' : 'right';

  const buttonClassName = '';

  const useATag = arrowsAsCarousel == false && url && url.length > 0;

  return (
    <li
      className={
        'telia-step-indicator-paging__list-item telia-step-indicator-paging__arrow-container telia-step-indicator-paging__arrow-container--' +
        modifier
      }
    >
      <div className={'telia-step-indicator-paging__arrow-item telia-step-indicator-paging__arrow-item--' + modifier}>
        <div className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
          {useATag && (
            <a href={url} className={buttonClassName}>
              <Icon icon={iconName} />
            </a>
          )}
          {!useATag && (
            <button type="button" onClick={onPaging} className={buttonClassName}>
              <Icon icon={iconName} />
            </button>
          )}
        </div>
        <div className="telia-step-indicator-paging__arrow-layer-background"></div>
        <div
          className={'telia-step-indicator-paging__arrow-layer telia-step-indicator-paging__arrow-layer--' + modifier}
        ></div>

        {isComplete && (
          <div
            className={
              'telia-step-indicator-paging__arrow-line telia-step-indicator-paging__arrow-line--solid ' + modifier
            }
          ></div>
        )}

        {!isComplete && (
          <div
            className={
              'telia-step-indicator-paging__arrow-line telia-step-indicator-paging__arrow-line--dashed ' + modifier
            }
          >
            <svg>
              <rect width="100%" height="4px" fill="url(#telia-step-indicator-paging__circle--id)"></rect>
            </svg>
          </div>
        )}
      </div>
    </li>
  );
};
