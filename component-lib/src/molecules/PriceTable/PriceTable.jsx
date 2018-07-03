import React from 'react';
import PropTypes from 'prop-types';

const PriceTable = ({ productListWithPrice, totalTextWithPrice }) =>
    <table className="price-table">
        <tbody className="price-table__items">
        {productListWithPrice.map((product, index) =>
            <tr className="price-table__item" key={index}>
                <td className="price-table__item-cell">
                    <div className="price-table__item-title">{product.title}</div>
                    {product.subtitle &&
                    <div className="price-table__item-subtitle">{product.subtitle}</div>
                    }
                </td>
                <td className="price-table__item-cell price-table__item-price">{product.price}</td>
            </tr>
        )}
        </tbody>
        <tfoot>
        <tr className="price-table__item price-table__total">
            <td className="price-table__item-cell">
                <div className="price-table__item-title">{totalTextWithPrice.title}</div>
                {totalTextWithPrice.subtitle &&
                <div className="price-table__item-subtitle">{totalTextWithPrice.subtitle}</div>
                }
            </td>
            <td className="price-table__item-cell price-table__item-price">{totalTextWithPrice.price}</td>
        </tr>
        </tfoot>
    </table>;
PriceTable.propTypes = {
    productListWithPrice: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })),
    totalTextWithPrice: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
};

export default PriceTable;