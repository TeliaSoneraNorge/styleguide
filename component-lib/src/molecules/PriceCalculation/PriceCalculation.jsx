import React from 'react';
import HorizontalRule from '../../atoms/HorizontalRule/HorizontalRule';

const PriceCalculation = ({ productListWithPrice, totalTextWithPrice }) =>
    <div className="price-calculation">
        {productListWithPrice.map((product, index) =>
            <div className="price-calculation__item" key={index}>
                <div className="price-calculation__item-title">{product.title}
                    <span className="price-calculation__item-price">{product.price}</span>
                </div>
                {product.subtitle &&
                    <div className="price-calculation__item-subtitle">{product.subtitle}</div>
                }
            </div>)
        }
        <HorizontalRule/>
        <div className="price-calculation__item price-calculation__total">
            <div className="price-calculation__item-title">{totalTextWithPrice.title}
                <span className="price-calculation__item-price">{totalTextWithPrice.price}</span>
            </div>
            {totalTextWithPrice.subtitle &&
                <div className="price-calculation__item-subtitle">{totalTextWithPrice.subtitle}</div>
            }
        </div>
    </div>;

export default PriceCalculation;