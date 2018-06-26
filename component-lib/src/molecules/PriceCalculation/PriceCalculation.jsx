import React from 'react';

const PriceCalculation = ({ productListWithPrice, totalTextWithPrice }) =>
    <table className="price-calculation">
        <tbody className="price-calculation__items">
            {productListWithPrice.map((product, index) =>
                <tr className="price-calculation__item" key={index}>
                    <td className="price-calculation__item-cell">
                        <div className="price-calculation__item-title">{product.title}</div>
                        {product.subtitle &&
                            <div className="price-calculation__item-subtitle">{product.subtitle}</div>
                        }
                    </td>
                    <td className="price-calculation__item-cell price-calculation__item-price">{product.price}</td>
                </tr>
            )}
        </tbody>
        <tfoot>
            <tr className="price-calculation__item price-calculation__total">
                <td className="price-calculation__item-cell">
                    <div className="price-calculation__item-title">{totalTextWithPrice.title}</div>
                    {totalTextWithPrice.subtitle &&
                        <div className="price-calculation__item-subtitle">{totalTextWithPrice.subtitle}</div>
                    }
                </td>
                <td className="price-calculation__item-cell price-calculation__item-price">{totalTextWithPrice.price}</td>
            </tr>
        </tfoot>
    </table>;

export default PriceCalculation;