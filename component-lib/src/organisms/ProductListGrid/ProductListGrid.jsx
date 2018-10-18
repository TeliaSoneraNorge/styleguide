import React from 'react';
import classnames from 'classnames';

const ProductListGrid = ({ children, layout }) =>
    <div className={classnames('product-list-grid', { 'product-list-grid--horizontal': (layout === 'horizontal') })}>
        {children}
    </div>;

const ProductListGridSection = ({ children }) =>
    <div className="product-list-grid__section">
        {children}
    </div>;

ProductListGrid.Section = ProductListGridSection;

export default ProductListGrid;