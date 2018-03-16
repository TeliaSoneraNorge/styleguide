import _ from "lodash";
import React from "react";

/**
 * Status: *in progress*.
 */
const ProductList = ({ items }) => (
    <div>
        {items.map((item, index) => (
            <article key={index} className="product-list">
                <img
                    className="product-list__icon"
                    src={`/public/icons/${item.icon}.svg`}
                />
                <div className="product-list__content">
                    <div className="product-list__heading">{item.title}</div>
                    {item.description && (
                        <div className="product-list__description">
                            {item.description}
                        </div>
                    )}
                </div>
            </article>
        ))}
    </div>
);

export default ProductList;
