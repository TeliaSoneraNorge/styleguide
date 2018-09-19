import React from 'react';
import { Quote } from '@telia/styleguide';

const InlineRightQuote = () => (
    <section className="container container--small">
        <p>
            Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in ipsum id orci porta dapibus.
            Curabitur aliquet quam id dui posuere blandit.
            
            <Quote source="Darth Vader" inline>
                I find your lack of faith disturbing.
            </Quote>
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac diam sit amet quam vehicula elementum
            sed sit amet dui.
        </p>
        <p>
            Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
            Donec sollicitudin molestie malesuada. Sed porttitor lectus nibh. Vestibulum ante ipsum primis in faucibus
            orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper
            sit amet ligula.
        </p>
        <p>
            Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Nulla porttitor accumsan tincidunt.
            Curabitur aliquet quam id dui posuere blandit. Donec rutrum congue leo eget malesuada. Quisque velit nisi,
            pretium ut lacinia in, elementum id enim.
        </p>
    </section>
);

export default InlineRightQuote;