import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import uniqueId from 'lodash/uniqueId';

/**
 * Status: *finished*
 * Category: PageHeaders
 */
const ArticleMetaData = ({ iconName, tags = [], date, author, className, ...rest }) => (
    <section
        className={classnames('article-meta-data', {
            [className]: className
        })}
        {...rest}>
        <div className="article-meta-data__wrapper container container--large container--no-margin">
            <span className="article-meta-data__date-author">
                <span className="article-meta-data__date">Published: {date}</span>
                <span className="article-meta-data__author">by {author}</span>
            </span>
            <div className="tags">
                {tags.map(tag => (
                    <span className="tags__tag" key={uniqueId('tag-')}> {tag}</span>
                ))}
            </div>
            {iconName && (
                <div className="article-meta-data__share">
                    <SvgIcon className="article-meta-data__share-icon" iconName={iconName} />
                </div>
            )}
        </div>
    </section>
);

ArticleMetaData.propTypes = {
    /** Source of icon to use. */
    iconName: PropTypes.string,
    /** Array of tags to display. */
    tags: PropTypes.arrayOf(PropTypes.string),
    /** Formatted date of publishing. */
    date: PropTypes.string.isRequired,
    /** Name of the author, who published the article. */
    author: PropTypes.string.isRequired,
};

export default ArticleMetaData;