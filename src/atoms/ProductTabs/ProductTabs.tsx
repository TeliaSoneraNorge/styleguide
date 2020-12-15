import cn from 'classnames';
import React from 'react';

const TABS = {
  LEFT: 'left',
  RIGHT: 'right',
};

export interface ProductTabsProps {
  leftTabTitle: string;
  rightTabTitle: string;
  leftTabDescription?: string;
  rightTabDescription?: string;
  leftTabLink: string;
  rightTabLink: string;
  selectedTab: 'left' | 'right';
}

const ProductTabs = ({
  leftTabTitle,
  leftTabDescription,
  leftTabLink,
  rightTabTitle,
  rightTabDescription,
  rightTabLink,
  selectedTab,
}: ProductTabsProps) => {
  return (
    <nav className="product-tabs">
      <a
        href={leftTabLink}
        className={cn('product-tabs__item', { 'product-tabs__item--selected': selectedTab === TABS.LEFT })}
      >
        <div
          className={cn('product-tabs__item__label', {
            'product-tabs__item__label--selected': selectedTab === TABS.LEFT,
          })}
        >
          {leftTabTitle}
        </div>
        {leftTabDescription && (
          <div
            className={cn('product-tabs__item__description', {
              'product-tabs__item__description--selected': selectedTab === TABS.LEFT,
            })}
          >
            {leftTabDescription}
          </div>
        )}
      </a>
      <a
        href={rightTabLink}
        className={cn('product-tabs__item', { 'product-tabs__item--selected': selectedTab === TABS.RIGHT })}
      >
        <div
          className={cn('product-tabs__item__label', {
            'product-tabs__item__label--selected': selectedTab === TABS.RIGHT,
          })}
        >
          {rightTabTitle}
        </div>
        {rightTabDescription && (
          <div
            className={cn('product-tabs__item__description', {
              'product-tabs__item__description--selected': selectedTab === TABS.RIGHT,
            })}
          >
            {rightTabDescription}
          </div>
        )}
      </a>
    </nav>
  );
};

export default ProductTabs;
