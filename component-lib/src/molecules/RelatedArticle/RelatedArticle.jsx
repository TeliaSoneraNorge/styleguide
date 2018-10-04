import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Tags from '../../atoms/Tags/Tags';

/**
 * Status: *finished*
 */
const RelatedArticle = ({ children, className, imgSrc, imgAlt, heading, tags = [], ...rest }) => (
    <a className={classnames('related-article', { [className]: className })}
        {...rest}>
        <div className="related-article__image-placeholder" >
            {imgSrc && <img className="related-article__image" src={imgSrc} alt={imgAlt} />}
        </div>
        <div className="related-article__text">
            <h3 className="heading heading--level-3 related-article__heading">{heading}</h3>
            {tags.length && (
                <Tags color="dark-grey">
                    {tags.map((it, i) => (<Tags.Tag key={i}>{it}</Tags.Tag>))}
                </Tags>
            )}
            {children}
        </div>
    </a>
);

RelatedArticle.propTypes = {
    /** Source of the image. */
    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    /** The heading text. */
    heading: PropTypes.string.isRequired,
    /** Array of string tags. If you want to pass tags manually, use children and Tags component. */
    tags: PropTypes.arrayOf(
        PropTypes.string
    ),
    /** Tags component, or use tags property. */
    children: PropTypes.node
};

export default RelatedArticle;