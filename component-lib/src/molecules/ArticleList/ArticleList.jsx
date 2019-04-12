import React from 'react';
import Tags from '../../atoms/Tags/Tags';

/**
 * Status: *in progress*.
 * Category: Lists
 *
 * TODO: Rename to search result
 */
const ArticleListItem = ({ article }) => (
    <li className="article-list__item">
        <a className="link article-list__title" href={article.link}>{article.title}</a>
        {article.tags.length && (
            <Tags color="dark-grey">
                {article.tags.map((it, i) => (<Tags.Tag key={it}>{it}</Tags.Tag>))}
            </Tags>
        )}
        <p className="paragraph">{article.description}</p>
    </li>
);

const ArticleList = ({ articles }) => (
    <ul className="article-list">
        {articles.map((article) => <ArticleListItem key={article.title} article={article} />)}
    </ul>
);

export default ArticleList;