import React from 'react';
import classnames from 'classnames';
import Tags from '../../atoms/Tags/Tags';

type Props = {
    imgSrc?: string;
    imgAlt?: string;
    heading: string;
    tags?: string[];
    children?: React.ReactNode;
};

/**
 * Status: *finished*
 * Category: Misc
 */
// @ts-expect-error ts-migrate(2339) FIXME: Property 'className' does not exist on type 'Props... Remove this comment to see the full error message
const RelatedArticle = ({ children, className, imgSrc, imgAlt, heading, tags = [], ...rest }: Props) => (
  <a className={classnames('related-article', { [className]: className })} {...rest}>
    <div className="related-article__image-placeholder">
      {imgSrc && <img className="related-article__image" src={imgSrc} alt={imgAlt} />}
    </div>
    <div className="related-article__text">
      <h3 className="heading heading--level-3 related-article__heading">{heading}</h3>
      {tags.length && (
        <Tags color="dark-grey">
          {tags.map(it => (
            <Tags.Tag key={it}>{it}</Tags.Tag>
          ))}
        </Tags>
      )}
      {children}
    </div>
  </a>
);

export default RelatedArticle;
