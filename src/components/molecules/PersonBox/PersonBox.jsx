import React from 'react';

import Box from '../../atoms/Box/Box';

const PersonBox = ({ id, color, isExpanded, imagePath, name, title, description, linkedInProfile, twitterProfile }) => {
    const imageAltText = `${name} - ${title}`;
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
                        <a className="person-box__social-link" href={linkedInProfile}>
                            <img className="person-box__social-link-icon" src="/public/icons/linkedin_icon.svg"/>
                        </a>
                        <a className="person-box__social-link" href={twitterProfile}>
                            <img className="person-box__social-link-icon" src="/public/icons/twitter_icon.svg"/>
                        </a>
                    </div>
                </div>
            </div>
        </Box>);
};

export default PersonBox;
