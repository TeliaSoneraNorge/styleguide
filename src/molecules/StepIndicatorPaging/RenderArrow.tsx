import React from 'react';
import { RenderLine } from './RenderLine';
import { RenderTransparentLayer } from './RenderTransparentLayer';
import { Icon } from '../../atoms/Icon';

export const RenderArrow = (props: any) => {
  const { onPaging, iconName, isComplete, url } = props;

  const modifier = iconName.includes('left') ? 'left' : 'right';

  const buttonClassName =
    'telia-step-indicator-paging__arrow__button telia-step-indicator-paging__arrow__button--' + modifier;

  return (
    <li className={'telia-step-indicator-paging__arrow telia-step-indicator-paging__arrow--' + modifier}>
      <RenderLine isComplete={isComplete} className={'telia-step-indicator-paging__line--' + modifier} />

      <RenderTransparentLayer modifier={modifier} />

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
    </li>
  );
};
