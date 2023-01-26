import React from 'react';
import cn from 'classnames';
import { Banner, Heading, Button } from '../../index';

interface Block {
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
  image,
  orientation,
  buttonText,
  buttonLink,
  title,
  text,
  search,
  whiteBackground = false,
}) => (
  <Banner
    className={cn('contentBlock', {
      className: className,
      'contentBlock--white': whiteBackground,
    })}
    img={image.url}
    imgAlt={image.title}
    reverse={orientation}
  >
    <Heading tag="h2" size="l">
      {title}
    </Heading>
    <div dangerouslySetInnerHTML={{ __html: text }} />
    {buttonLink && buttonText && (
      <Button kind="normal" onClick={(): void => window.location.assign(`${buttonLink}${search}`)} text={buttonText} />
    )}
  </Banner>
);

export default ContentBlock;
