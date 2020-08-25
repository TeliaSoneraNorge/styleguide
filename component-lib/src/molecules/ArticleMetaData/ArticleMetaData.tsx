import React from 'react';
import classnames from 'classnames';
import SvgIcon from '../../atoms/SvgIcon/SvgIcon';
import uniqueId from 'lodash/uniqueId';

type Props = {
    iconName?: string;
    tags?: string[];
    date: string;
    author: string;
};

/**
 * Status: *finished*
 * Category: PageHeaders
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const ArticleMetaData = ({ iconName, tags = [], date, author, className, ...rest }: Props) => (
  <section
    className={classnames('article-meta-data', {
      [className]: className,
    })}
    {...rest}
  >
    <div className="article-meta-data__wrapper container container--large container--no-margin">
      <span className="article-meta-data__date-author">
        <span className="article-meta-data__date">Published: {date}</span>
        <span className="article-meta-data__author">by {author}</span>
      </span>
      <div className="tags">
        {tags.map(tag => (
          <span className="tags__tag" key={uniqueId('tag-')}>
            {' '}
            {tag}
          </span>
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

export default ArticleMetaData;
