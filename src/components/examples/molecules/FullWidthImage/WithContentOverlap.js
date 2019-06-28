import React from 'react';
import { FullWidthImage } from '@telia/styleguide';

const DefaultFullWidthImage = () => (
  <div>
    <FullWidthImage src="https://placekitten.com/1440/440" alt="Kitten" withContentOverlap />
    <div className="container container--medium container--white-bg container--overlapping-full-width-image">
      <div className="container container--small">
        <p>
          If you add the <code>--with-content-overlap</code> CSS class then the next piece of content will overlap the
          image.
        </p>
        <p>
          It's recommended to wrap the overlapping content in a <code>&lt;div class="container"&gt;</code>
          to make it responsive and <code>&lt;section class="container--small"&gt;</code>
          to give the content a max-width to restrict the line length in the text for readability (accessibility)
          reasons.
        </p>
        <p>
          If you also specify the <code>container--extra-padding-top</code> CSS class the container will be padded on
          top. This is solved with a modifier class because not all elements within the main-content element should have
          padding on top.
        </p>
        <p>
          If you specify the <code>container--overlapping-full-width-image</code> CSS class the overlapping content will
          look the same on smaller devices until it wraps beneath the image on the smallest devices.
        </p>
        <p>
          Add <code>main-content--bg-color-white</code> if you want the background-color to be white.
        </p>
        <p>It's also recommended to keep the height of the next piece of content tall enough to cover the mask.</p>
      </div>
    </div>
  </div>
);

export default DefaultFullWidthImage;
