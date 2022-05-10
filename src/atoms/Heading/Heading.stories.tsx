import React from 'react';
import Heading from './Heading';

export default {
  title: 'Component library/Atoms/Heading',
  component: Heading,
};

export const Default = () => (
  <div>
    <Heading tag="h1" text="This is heading 1" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading tag="h2" text="This is heading 2" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading tag="h3" text="This is heading 3" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading tag="h4" text="This is heading 4" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>
  </div>
);

export const HeadingWithLevel = () => (
  <div>
    <p style={{ color: 'red', fontWeight: 800 }}>
      DEPRECATED! Use <code>size</code> and <code>tag</code> properties.
    </p>

    <Heading level={1} text="This is a level 1 heading" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading level={2} text="This is a level 2 heading" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading level={3} text="This is a level 3 heading" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>

    <Heading level={4} text="This is a level 4 heading" />
    <p className="paragraph">
      With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
      Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
    </p>
  </div>
);

export const HeadingWithSizes = () => (
  <>
    <Heading tag="h1" size="mega" text="Mega heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="xxl" text="XXL heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="xl" text="XL heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="l" text="Large heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="m" text="Medium heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="s" text="Small heading" style={{ color: '#222' }} />
    <Heading tag="h1" size="xs" text="Xtra Small heading" style={{ color: '#222' }} />
  </>
);

export const HeadingWithAlignment = () => (
  <>
    <Heading tag="h1" size="l" text="Aligned Left" style={{ color: '#222', textAlign: 'left' }} />
    <Heading tag="h1" size="l" text="Aligned Center" style={{ color: '#222', textAlign: 'center' }} />
    <Heading tag="h1" size="l" text="Aligned Right" style={{ color: '#222', textAlign: 'right' }} />
  </>
);
