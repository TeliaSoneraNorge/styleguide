import React from 'react';
import PropTypes from 'prop-types';

const PriceTable = ({ productListWithPrice, totalTextWithPrice, additionalLine }) =>
    <table className="price-table">
        <tbody className="price-table__items">
            {productListWithPrice.map((product, index) =>
                <tr className="price-table__item" key={index}>
                    <td className="price-table__item-cell">
                        <div className="price-table__item-title">{product.title}</div>
                        {product.subtitles && product.subtitles.map((subtitle, i) => (
                            <div key={i} className="price-table__item-subtitle">{subtitle}</div>
                        ))}
                    </td>
                    <td className="price-table__item-cell price-table__item-price">{product.price}</td>
                </tr>
            )}
        </tbody>
        <tfoot>
            <tr className="price-table__item price-table__total">
                <td className="price-table__item-cell">
                    <div className="price-table__item-title">{totalTextWithPrice.title}</div>
                    {totalTextWithPrice.subtitles && totalTextWithPrice.subtitles.map((subtitle, i) => (
                        <div key={i} className="price-table__item-subtitle">{subtitle}</div>
                    ))}
                </td>
                <td className="price-table__item-cell price-table__item-price">{totalTextWithPrice.price}</td>
            </tr>
            {additionalLine &&
                <tr className="price-table__item price-table__additional">
                    <td className="price-table__item-cell">
                        <div className="price-table__item-title">{additionalLine}</div>
                    </td>
                </tr>}
        </tfoot>
    </table>;

PriceTable.propTypes = {
    productListWithPrice: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitles: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })),
    totalTextWithPrice: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitles: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    }),
    additionalLine: PropTypes.string,
};

export default PriceTable;