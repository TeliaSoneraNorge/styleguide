import React from 'react';
import classnames from 'classnames';

/**
 * Status: *Finished*
 * Category: Misc
 */
const ProductListGrid = ({
  children,
  layout
}: any) => (
  <div className={classnames('product-list-grid', { 'product-list-grid--horizontal': layout === 'horizontal' })}>
    {children}
  </div>
);

const ProductListGridSection = ({
  children
}: any) => <div className="product-list-grid__section">{children}</div>;

ProductListGrid.Section = ProductListGridSection;

export default ProductListGrid;
