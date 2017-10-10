import React from 'react';

import Box from '../../atoms/Box/Box';

/**
 * Status: *finished*.
 *
 * A PersonBox component use the default <a href="/components/atoms#Box">Box</a> component.
 * The content within this Box presents a person with an image, name, job title, description and
 * links to profiles on social media.
 *
 * One or more PersonBoxes can be used inside a <a href="/components/molecules#BoxGrid">BoxGrid</a> component.
 */
const PersonBox = ({ id, color, isExpanded, imagePath, name, title, description, linkedInProfile, twitterProfile }) => {
    const imageAltText = `${name} - ${title}`;
    const titleLinkedInProfile = `${name}'s LinkedIn profile`;
    const titleTwitterProfile = `${name}'s Twitter profile`;
    return (
        <Box color={color} id={id} isExpanded={isExpanded}>
            <div className="person-box">
                <div className="person-box__image-label">
                    <img className="person-box__image" src={imagePath} alt={imageAltText}/>
                    <div className="person-box__label">
                        <span className="person-box__name">{name}</span>
                        <span className="person-box__title">{title}</span>
                    </div>
                </div>
                <div className="person-box__text-links">
                    <div className="person-box__description">{description}</div>
                    <div className="person-box__social-links">
                        <a className="person-box__social-link" href={linkedInProfile} target="_self" title={titleLinkedInProfile}>
                            <img className="person-box__social-link-icon" src="/public/icons/linkedin_icon.svg" alt={titleLinkedInProfile}/>
                        </a>
                        <a className="person-box__social-link" href={twitterProfile} target="_self" title={titleTwitterProfile}>
                            <img className="person-box__social-link-icon" src="/public/icons/twitter_icon.svg" alt={titleTwitterProfile}/>
                        </a>
                    </div>
                </div>
            </div>
        </Box>);
};

export default PersonBox;
