import React from 'react';
import { RenderLine } from './RenderLine';
import { RenderTransparentLayer } from './RenderTransparentLayer';
import { Icon } from '../../atoms/Icon';

export const RenderArrow = (props: any) => {
  const { onPaging, iconName, isComplete, url } = props;

  const modifier = iconName.includes('left') ? 'left' : 'right';

  const buttonClassName = '';

  return (
    <li
      className={
        'telia-step-indicator-paging__list-item telia-step-indicator-paging__arrow-container telia-step-indicator-paging__arrow-container--' +
        modifier
      }
    >
      <div className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
        {url && url.length > 0 && (
          <a href={url} className={buttonClassName}>
            <Icon icon={iconName} />
          </a>
        )}
        {!url && (
          <button type="button" onClick={onPaging} className={buttonClassName}>
            <Icon icon={iconName} />
          </button>
        )}
      </div>
      <div className="telia-step-indicator-paging__arrow__layer-background"></div>
      <div
        className={'telia-step-indicator-paging__arrow__layer telia-step-indicator-paging__arrow__layer--' + modifier}
      ></div>
      <div className="telia-step-indicator-paging__arrow__line"></div>
    </li>
  );

  // return (
  //   <li className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
  //     <RenderLine isComplete={isComplete} className={'telia-step-indicator-paging__line--' + modifier} isActive={false} />

  //     <RenderTransparentLayer modifier={modifier} />

  //     {url && url.length > 0 && (
  //       <a href={url} className={buttonClassName}>
  //         <Icon icon={iconName} />
  //       </a>
  //     )}

  //     {!url && (
  //       <button type="button" onClick={onPaging} className={buttonClassName}>
  //         <Icon icon={iconName} />
  //       </button>
  //     )}
  //   </li>
  // );
};
