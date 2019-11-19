import * as React from 'react';

export interface RelatedArticleProps {
    /**
     * Source of the image.
     */
    imgSrc?: string;
    imgAlt?: string;
    /**
     * The heading text.
     */
    heading: string;
    /**
     * Array of string tags. If you want to pass tags manually, use children and Tags component.
     */
    tags?: string[];
    /**
     * Tags component, or use tags property.
     */
    children?: React.ReactNode;
}

const RelatedArticle: React.FC<RelatedArticleProps>;

export default RelatedArticle;
