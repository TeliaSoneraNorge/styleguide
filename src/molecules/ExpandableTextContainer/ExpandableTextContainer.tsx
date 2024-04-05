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
    <div className="telia-expandableTextContainer">
      <div
        className={cn('telia-expandableTextContainer__textblock-container', {
          ['telia-expandableTextContainer__textblock-container--expanded']: expanded,
        })}
      >
        {textBlocks.map((block) => (
          <div key={`${block.id}-${block.heading}`} className="telia-expandableTextContainer__textblock">
            <Heading tag="h2" size="xs">
              {block.heading}
            </Heading>
            {block.content && <Paragraph dangerouslySetInnerHTML={{ __html: block.content }} />}
          </div>
        ))}
        <span className={cn({ ['gradient']: !expanded, ['gradient--white']: !expanded && whiteBg })}></span>
      </div>
      <div className="telia-expandableTextContainer__button-container">
        <Button
          kind="link"
          iconPlacement="right"
          icon={expanded ? 'chevron-up' : 'chevron-down'}
          text="Les mer"
          onClick={() => setExpanded(!expanded)}
        />
      </div>
    </div>
  );
};

export default ExpandableTextContainer;
