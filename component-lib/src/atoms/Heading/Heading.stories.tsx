import React from 'react';
import Heading from './Heading';


export default {
  title: 'Component library|Atoms/Heading',
  component: Heading,
};

export const Default = () => (

  <div>
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

export const HeadingWithSize = () => (
  <>
  <Heading level={1} size="mega" align="center" text="This is a mega heading" />
  <p className="paragraph">
    With some additional text like lorem ipsum dolor sit amet. Sed libero. Vivamus in erat ut urna cursus vestibulum.
    Sed fringilla mauris sit amet nibh. Nullam quis ante. Aenean imperdiet. Phasellus magna.
  </p>
  </>
)