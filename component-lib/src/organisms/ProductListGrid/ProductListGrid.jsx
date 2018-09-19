import React from 'react';

const ProductListGrid = ({ children }) =>
    <div className="product-list-grid">
        {children}
    </div>;

const ProductListGridSection = ({ children }) =>
    <div className="product-list-grid__section">
        {children}
    </div>;

ProductListGrid.Section = ProductListGridSection;

export default ProductListGrid;