import _ from "lodash";
import React from "react";

/**
 * Status: *in progress*.
 */
const ProductList = ({ icon, title, description }) => (
    <div>
        <article className="product-list">
            <img
                className="product-list__icon"
                src={`/public/icons/ico_heart.svg`}
            />
            <div className="product-list__content">
                <div className="product-list__heading">
                    Consetetur sadipscing
                </div>

                <div className="product-list__description">
                    At vero eos et accusam et justo
                </div>
            </div>
        </article>
        <article className="product-list">
            <img
                className="product-list__icon"
                src={`/public/icons/ico_info.svg`}
            />
            <div className="product-list__content">
                <div className="product-list__heading">Tempor invidunt</div>
            </div>
        </article>
        <article className="product-list">
            <img
                className="product-list__icon"
                src={`/public/icons/ico_heart.svg`}
            />
            <div className="product-list__content">
                <div className="product-list__heading">No sea takimata</div>

                <div className="product-list__description">
                    Duo dolores et ea rebum
                </div>
            </div>
        </article>
        <article className="product-list">
            <img
                className="product-list__icon"
                src={`/public/icons/ico_edit.svg`}
            />
            <div className="product-list__content">
                <div className="product-list__heading">Aliquyam erat</div>
            </div>
        </article>
    </div>
);

export default ProductList;
