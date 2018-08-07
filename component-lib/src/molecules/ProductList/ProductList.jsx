import React from 'react';
import PropTypes from 'prop-types';

/**
 * Status: *finished*.
 *
 * Used for showing lists of products like subscriptions and services, in a less "in your face" manner than the Subscription component.
 */
const ProductList = ({ items = [] }) =>
    <div className="product-list">
        {items.map((item, index) => {
            const icon = <img className="product-list__item-icon" src={`/public/icons/${item.icon}.svg`} />;
            const content = (
                <div className="product-list__item-content">
                    <div className="product-list__item-heading">{item.title}</div>
                    {item.description && <div className="product-list__item-description">{item.description}</div>}
                </div>
            );

            if (item.href) {
                return (
                    <a href={item.href} key={index} className="product-list__item product-list__item--link">
                        {icon}
                        {content}
                    </a>
                );
            }

            return (
                <article key={index} className="product-list__item">
                    {icon}
                    {content}
                </article>
            );
        })}
    </div>;
ProductList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        /** Name of the icon e.g. arrow_ico */
        icon: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
        href: PropTypes.string
    }))
};

export default ProductList;