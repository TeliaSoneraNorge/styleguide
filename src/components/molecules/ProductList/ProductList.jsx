import _ from "lodash";
import React from "react";

/**
 * Status: *finished*.
 * 
 * Used for showing lists of products like subscriptions and services, in a less "in your face" manner than the Subscription component.
 */
const ProductList = ({ items }) => (
    <div className="product-list">
        {items.map((item, index) =>
            <article key={index} className="product-list__item">
                <img className="product-list__item-icon" src={`/public/icons/${item.icon}.svg`} />
                <div className="product-list__item-content">
                    <div className="product-list__item-heading">{item.title}</div>
                    {item.description ?
                        <div className="product-list__item-description">{item.description}</div> : null}
                </div>
            </article>
        )}
    </div>
);

export default ProductList;
