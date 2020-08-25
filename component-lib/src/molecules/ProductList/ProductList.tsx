import classnames from 'classnames';
import React from 'react';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';

type Props = {
    items?: {
        iconName: string;
        iconColor?: 'white' | 'black' | 'purple';
        title: string;
        description?: string;
        href?: string;
        onClick?: (...args: any[]) => any;
        style?: 'promo';
    }[];
};

/**
 * Status: *finished*.
 * Category: Lists
 *
 * Used for showing lists of products like subscriptions and services, in a less "in your face" manner than the Subscription component.
 */
const ProductList = ({ items = [] }: Props) => (
  <div className="product-list">
    {items.map(item => {
      const productItemClassNames = classnames('product-list__item', {
        'product-list__item--promo': item.style === 'promo',
      });

      const icon = <SvgIcon className="product-list__item-icon" iconName={item.iconName} color={item.iconColor} />;
      const content = (
        <div className="product-list__item-content">
          <div className="product-list__item-heading">{item.title}</div>
          {item.description && <div className="product-list__item-description">{item.description}</div>}
        </div>
      );

      if (item.href) {
        return (
          <a
            href={item.href}
            key={item.href}
            className={`${productItemClassNames} product-list__item--link`}
            onClick={item.onClick}
          >
            {icon}
            {content}
            <SvgIcon className="product-list__item--link-icon" iconName="ico_linkarrow" color="purple" />
          </a>
        );
      }

      return (
        <button key={item.title} className={`${productItemClassNames} button--stripped`} onClick={item.onClick}>
          {icon}
          {content}
        </button>
      );
    })}
  </div>
);

export default ProductList;
