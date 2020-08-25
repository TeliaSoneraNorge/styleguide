import React from 'react';

type Props = {
    productListWithPrice?: {
        title: string;
        subtitles?: string[];
        price: string | number;
    }[];
    totalTextWithPrice?: {
        title: string;
        subtitles?: string[];
        price: string | number;
    };
    additionalLine?: string;
};

/**
 * Status: *finished*.
 * Category: Tables
 */
const PriceTable = ({ productListWithPrice, totalTextWithPrice, additionalLine }: Props) => (
  <table className="price-table">
    <tbody className="price-table__items">
      {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
      {productListWithPrice.map(product => (
        <tr className="price-table__item" key={product.title}>
          <td className="price-table__item-cell">
            <div className="price-table__item-title">{product.title}</div>
            {product.subtitles &&
              product.subtitles.map(subtitle => (
                <div key={subtitle} className="price-table__item-subtitle">
                  {subtitle}
                </div>
              ))}
          </td>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'originalPrice' does not exist on type '{... Remove this comment to see the full error message */}
          {product.originalPrice && (
            // @ts-expect-error ts-migrate(2339) FIXME: Property 'originalPrice' does not exist on type '{... Remove this comment to see the full error message
            <td className="price-table__item-cell price-table__item-original-price">{product.originalPrice}</td>
          )}
          <td className="price-table__item-cell price-table__item-price">{product.price}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr className="price-table__item price-table__total">
        <td className="price-table__item-cell">
          {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
          <div className="price-table__item-title">{totalTextWithPrice.title}</div>
          {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
          {totalTextWithPrice.subtitles &&
            // @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'.
            totalTextWithPrice.subtitles.map(subtitle => (
              <div key={subtitle} className="price-table__item-subtitle">
                {subtitle}
              </div>
            ))}
        </td>
        {/* @ts-expect-error ts-migrate(2532) FIXME: Object is possibly 'undefined'. */}
        <td className="price-table__item-cell price-table__item-price">{totalTextWithPrice.price}</td>
      </tr>
      {additionalLine && (
        <tr className="price-table__item price-table__additional">
          <td className="price-table__item-cell">
            <div className="price-table__item-title">{additionalLine}</div>
          </td>
        </tr>
      )}
    </tfoot>
  </table>
);

export default PriceTable;
