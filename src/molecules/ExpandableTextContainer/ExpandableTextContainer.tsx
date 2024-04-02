import React, { useState } from 'react';
import Container from '../../atoms/Container';
import Heading from '../../atoms/Heading';
import cn from 'classnames';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import './ExpandableTextContainer.pcss';

type textBlock = {
  heading: string;
  content: string;
};

const ExpandableTextContainer = ({ textBlocks }: { textBlocks: textBlock[] }) => {
  const [expanded, setExpanded] = useState(false);
  if (!textBlocks) {
    return null;
  }

  return (
    <Container
      className={cn('telia-expandableTextContainer', {
        ['telia-expandableTextContainer--expanded']: expanded,
      })}
    >
      {textBlocks.map((block) => (
        <div className="telia-expandableTextContainer__textblock">
          <Heading tag="h2" size="xs">
            {block.heading}
          </Heading>
          <Paragraph>{block.content}</Paragraph>
        </div>
      ))}
      <span className={cn('button-container', { ['gradient']: !expanded })}>
        <Button
          className="telia-expandableTextContainer__button"
          kind="link"
          iconPlacement="right"
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          text="Les mer"
          onClick={() => setExpanded(!expanded)}
        />
      </span>
    </Container>
  );
};

export default ExpandableTextContainer;
