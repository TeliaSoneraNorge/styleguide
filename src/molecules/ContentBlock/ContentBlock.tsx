import React from 'react';
import cn from 'classnames';
import { Banner, Heading, Button } from '../../index';

export interface Block {
  type?: 'ContentBlock';
  __type?: 'ContentBlock';
  title: string;
  text: string;
  image: {
    title: string;
    url: string;
  };
  orientation: boolean;
  buttonLink?: string;
  buttonText?: string;
}

export interface ContentBlockProps extends Block {
  className?: string;
  search?: string;
  whiteBackground?: boolean;
}

export const ContentBlock: React.FC<ContentBlockProps> = ({
  className,
  block,
  search,
  whiteBackground = false,
}) => (
  <Banner
    className={cn('contentBlock', {
      className: className,
      'contentBlock--white': whiteBackground,
    })}
    img={block.image.url}
    imgAlt={block.image.title}
    reverse={block.orientation}
  >
    <Heading tag="h2" size="l">
      {block.title}
    </Heading>
    <div dangerouslySetInnerHTML={{ __html: block.text }} />
    {block.buttonLink && block.buttonText && (
      <Button
        kind="normal"
        onClick={(): void => window.location.assign(`${block.buttonLink}${search}`)}
        text={block.buttonText}
      />
    )}
  </Banner>
);

export default ContentBlock;
