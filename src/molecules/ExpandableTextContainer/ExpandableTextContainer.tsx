import React, { useState } from 'react';
import Container from '../../atoms/Container';
import Heading from '../../atoms/Heading';
import cn from 'classnames';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';

type Props = {
  textBlocks: {
    id: string;
    heading: string;
    content: string;
  }[];
  whiteBg?: boolean;
};

const ExpandableTextContainer: React.FC<Props> = ({ textBlocks, whiteBg = false }) => {
  const [expanded, setExpanded] = useState(false);
  if (!textBlocks) {
    return null;
  }

  return (
    <div
      className={cn('telia-expandableTextContainer', {
        ['telia-expandableTextContainer--expanded']: expanded,
      })}
    >
      {textBlocks.map((block) => (
        <div key={`${block.id}-${block.heading}`} className="telia-expandableTextContainer__textblock">
          <Heading tag="h2" size="xs">
            {block.heading}
          </Heading>
          <Paragraph>{block.content}</Paragraph>
        </div>
      ))}
      <span className={cn('button-container', { ['gradient']: !expanded, ['gradient--white']: !expanded && whiteBg })}>
        <Button
          className="telia-expandableTextContainer__button"
          kind="link"
          iconPlacement="right"
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          text="Les mer"
          onClick={() => setExpanded(!expanded)}
        />
      </span>
    </div>
  );
};

export default ExpandableTextContainer;
