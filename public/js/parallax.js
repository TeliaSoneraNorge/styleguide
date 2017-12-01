// Remaining:
// Make it possible to have more than 1 .parallax-container on a page
// Try to use JS for transitions instead of CSS

function preloadImages() {
    var imageList = document.querySelectorAll('.parallax-container img');
    for (var i = 0; i < imageList.length; i++) {
        var imageObject = new Image();
        imageObject.src = imageList[i].getAttribute('src');
    }
}

function calculateScrollBreak() {
    var scrollBreak = (window.innerHeight * 3) / 4;
    return scrollBreak;
}

function togglePlay(el) {
    var video = el.parentNode.querySelector('video');
    if (video.paused) {
        video.play();
        video.classList.remove('stopped');
    } else {
        video.pause();
        video.classList.add('stopped');
    }
}

function resizeSpacers() {
    [].map.call(document.querySelectorAll('.parallax-block__spacer--full'), function(el) {
        el.style.height = window.innerHeight.toString() + "px";
    });
    [].map.call(document.querySelectorAll('.parallax-block__spacer--half'), function(el) {
        el.style.height = (window.innerHeight / 2).toString + "px";
    });
}

function initVideo() {
    [].map.call(document.querySelectorAll('.parallax-block__background--video'), function(el) {
        [].map.call(el.parentNode.querySelectorAll('.parallax-block__spacer'), function(child) {
            child.setAttribute('onclick', 'togglePlay(this)');
        });
        el.currentTime += 1;
    });
}

function toggleSound(el) {
    var video = el.parentNode.parentNode.parentNode.querySelector('video');
    if (video.muted) {
        video.muted = false;
        el.classList.add('parallax-block__mute-button--unmuted');
        el.innerText = 'Skru av lyden';
    } else {
        video.muted = true;
        el.classList.remove('parallax-block__mute-button--unmuted');
        el.innerText = 'Skru på lyd';
    }
}

var DOMReady = function() {
    var parallax = document.querySelector('.parallax-container');
    if (parallax) {
        preloadImages();
        var containerPosition = document.querySelector('.parallax-container').offsetTop;
        var scrollBreak = calculateScrollBreak();
        resizeSpacers();
        initVideo();
        window.onresize = function() {
            scrollBreak = calculateScrollBreak();
            resizeSpacers();
        };

        window.onscroll = function() {
            var scrollPos = window.pageYOffset;
            [].map.call(document.querySelectorAll('.parallax-block'), function(el, index, array) {
                var yTopPos = el.offsetTop + containerPosition;
                var yBottomPos = yTopPos + el.offsetHeight;
                var topDiff = yTopPos - scrollPos;
                var bottomDiff = yBottomPos - scrollPos;
                var video = el.querySelector('video');
                // this conditioned chunk could be refactored to eliminate calculations

                if (index === 0) {
                    if (topDiff < 0 && bottomDiff >= scrollBreak) {
                        el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--hidden');
                        el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--absolute-top');
                        el.querySelector('.parallax-block__background').classList.add('parallax-block__background--fixed');
                        if (video !== null && video.classList.contains('stopped') !== true) {
                            video.play();
                            el.querySelector('.parallax-block__mute-button').classList.remove('parallax-block__background--hidden');
                        }
                    } else {
                        if (topDiff >= 0) {
                            el.querySelector('.parallax-block__background').classList.add('parallax-block__background--absolute-top');
                            el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--fixed');
                        } else if (bottomDiff < scrollBreak) {
                            el.querySelector('.parallax-block__background').classList.add('parallax-block__background--hidden');
                            if (video !== null) {
                                el.querySelector('.parallax-block__mute-button').classList.add('parallax-block__background--hidden');
                            }
                        }
                        if (video !== null) {
                            video.pause();
                        }
                    }
                } else if (index === array.length - 1) {
                    if (topDiff < scrollBreak && bottomDiff >= window.innerHeight) {
                        el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--hidden');
                        el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--absolute-bottom');
                        el.querySelector('.parallax-block__background').classList.add('parallax-block__background--fixed');
                        if (video !== null && video.classList.contains('stopped') !== true) {
                            video.play();
                            el.querySelector('.parallax-block__mute-button').classList.remove('parallax-block__background--hidden');
                        }
                    } else {
                        if (topDiff >= scrollBreak) {
                            el.querySelector('.parallax-block__background').classList.add('parallax-block__background--hidden');
                            if (video !== null) {
                                el.querySelector('.parallax-block__mute-button').classList.add('parallax-block__background--hidden');
                            }
                        } else if (bottomDiff < window.innerHeight) {
                            el.querySelector('.parallax-block__background').classList.add('parallax-block__background--absolute-bottom');
                            el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--fixed');
                        }
                        if (video !== null) {
                            video.pause();
                        }
                    }
                } else {
                    if (topDiff < scrollBreak && bottomDiff >= scrollBreak) {
                        el.querySelector('.parallax-block__background').classList.remove('parallax-block__background--hidden');
                        if (video !== null && video.classList.contains('stopped') !== true) {
                            video.play();
                            el.querySelector('.parallax-block__mute-button').classList.remove('parallax-block__background--hidden');
                        }
                    } else {
                        el.querySelector('.parallax-block__background').classList.add('parallax-block__background--hidden');
                        if (video !== null) {
                            video.pause();
                            el.querySelector('.parallax-block__mute-button').classList.add('parallax-block__background--hidden');
                        }
                    }
                }
            });
        };
    };
};

if (document.readyState === "complete" || (document.readyState !== "loading" && !document.documentElement.doScroll)) {
    DOMReady();
} else {
    document.addEventListener("DOMContentLoaded", DOMReady);
}