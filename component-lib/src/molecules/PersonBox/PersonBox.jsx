import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../atoms/Box/Box';
import IconLink from '../../atoms/IconLink/IconLink';

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
        <Box color={color} id={id} canExpand={true} isExpanded={isExpanded}>
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
                        <IconLink iconName="linkedin_icon" className="icon-link icon-link--linkedIn" href={linkedInProfile} target="_self" title={titleLinkedInProfile} aria-label={titleLinkedInProfile} />
                        <IconLink iconName="twitter_icon" className="icon-link icon-link--twitter" href={twitterProfile} target="_self" title={titleTwitterProfile} aria-label={titleTwitterProfile} />
                    </div>
                </div>
            </div>
        </Box>);
};
PersonBox.propTypes = {
    id: PropTypes.string,
    color: PropTypes.oneOf(['purple', 'pink', 'light-orange', 'green', 'blue', 'teal', 'grey']),
    isExpanded: PropTypes.bool,
    imagePath: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    /** Url */
    linkedInProfile: PropTypes.string,
    /** Url */
    twitterProfile: PropTypes.string,
};

export default PersonBox;
