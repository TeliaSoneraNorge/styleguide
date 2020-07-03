import * as React from 'react';

declare const ProductListGrid: React.FC<{layout?: string}> & {
  Section: React.FC<{children?: React.ReactNode;}>;
};

export default ProductListGrid;
