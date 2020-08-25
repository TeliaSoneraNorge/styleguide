import React from 'react';

import StatefulBox from '../../atoms/Box/StatefulBox';
import IconLink from '../../atoms/IconLink/IconLink';

type Props = {
    id?: string;
    color?: 'purple' | 'pink' | 'light-orange' | 'green' | 'blue' | 'teal' | 'grey';
    isExpanded?: boolean;
    imagePath: string;
    name: string;
    title: string;
    description: string;
    linkedInProfile?: string;
    twitterProfile?: string;
};

/**
 * Status: *finished*.
 * Category: Boxes
 *
 * A PersonBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this Box presents a person with an image, name, job title, description and
 * links to profiles on social media.
 *
 * One or more PersonBoxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 */
const PersonBox = ({ id, color, isExpanded, imagePath, name, title, description, linkedInProfile, twitterProfile }: Props) => {
  const imageAltText = `${name} - ${title}`;
  const titleLinkedInProfile = `${name}'s LinkedIn profile`;
  const titleTwitterProfile = `${name}'s Twitter profile`;
  return (
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'children' does not exist on type 'Intrin... Remove this comment to see the full error message
    <StatefulBox color={color} id={id} canExpand={true} isExpanded={isExpanded}>
      <div className="person-box">
        <div className="person-box__image-label">
          <img className="person-box__image" src={imagePath} alt={imageAltText} />
          <div className="person-box__label">
            <span className="person-box__name">{name}</span>
            <span className="person-box__title">{title}</span>
          </div>
        </div>
        <div className="person-box__text-links">
          <div className="person-box__description">{description}</div>
          <div className="person-box__social-links">
            <IconLink
              iconName="linkedin_icon"
              className="icon-link icon-link--linkedIn"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'string... Remove this comment to see the full error message
              href={linkedInProfile}
              target="_self"
              title={titleLinkedInProfile}
              aria-label={titleLinkedInProfile}
            />
            <IconLink
              iconName="twitter_icon"
              className="icon-link icon-link--twitter"
              // @ts-expect-error ts-migrate(2322) FIXME: Type 'undefined' is not assignable to type 'string... Remove this comment to see the full error message
              href={twitterProfile}
              target="_self"
              title={titleTwitterProfile}
              aria-label={titleTwitterProfile}
            />
          </div>
        </div>
      </div>
    </StatefulBox>
  );
};

export default PersonBox;
