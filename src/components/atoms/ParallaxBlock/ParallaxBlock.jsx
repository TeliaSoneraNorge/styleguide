import React from 'react';

function classNames(index, backgroundType) {
    const classNames = ['parallax-block__background'];
    if (index === "0") {
        classNames.push('parallax-block__background--absolute-top');
    } else {
        classNames.push('parallax-block__background--fixed parallax-block__background--hidden');
    }
    
    classNames.push('parallax-block__background--' + backgroundType); 
    return classNames.join(' ');
}

function background(backgroundFile, backgroundType) {
    var background = '';
    if (backgroundType === 'image') {
        background = '<img src=\"' + backgroundFile + '" />';
    } else {
        background = '<video muted x-webkit-airplay=\"allow\" webkit-playsinline=\"true\" playsinline=\"true\"><source src=\"' + backgroundFile + '\" type=\"video/mp4\">Some fallback scenario if video tag is not supported.</video>';
    }
    return background;
}
    
/**
 * Example page [is here](/parallax-page)
 *
 */
const ParallaxBlock = ({ index, backgroundFile, backgroundType, children }) =>
    <div className="parallax-block">
        <div className={classNames(index, backgroundType)} dangerouslySetInnerHTML={{ __html: background(backgroundFile, backgroundType) }}>
        
        </div>
        {children}
        {(backgroundType === 'video')
            ? <a dangerouslySetInnerHTML={{ __html: '<div onclick=\"toggleSound(this)\" class=\"parallax-block__mute-button parallax-block__mute-button--unmuted parallax-block__background--hidden\">Skru på lyd' }}></a>
            : null
        }
    </div>;

export default ParallaxBlock;