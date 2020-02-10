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

export const HeadingWithSizes = () => (
  <>

  <Heading level={1} size="mega" text="Mega heading" style={{ color: '#990AE3' }} />
  <Heading level={1} size="xxl" text="XXL heading" style={{ color: '#990AE3' }} />
  <Heading level={1} size="xl" text="XL heading" style={{ color: '#990AE3' }} />
  <Heading level={1} size="l" text="Large heading" style={{ color: '#990AE3' }} />
  <Heading level={1} size="m" text="Medium heading" style={{ color: '#222' }} />
  <Heading level={1} size="s" text="Small heading" style={{ color: '#222' }} />
  <Heading level={1} size="xs" text="Xtra Small heading" style={{ color: '#222' }} />

  </>
)

export const HeadingWithColors = () => (
  <>
  <p>Rules of colors in heading</p>
  
  <Heading level={1} size="l" text="Purple Text" style={{ color: '#990AE3' }} />
  <Heading level={1} size="l" text="Purple Text, Grey Background" style={{ color: '#990AE3', background: '#F2F2F2' }} />
  <Heading level={1} size="l" text="Black Text" style={{ color: '#222' }} />
  <Heading level={1} size="l" text="Black Text, Grey Background" style={{ color: '#222', background: '#F2F2F2' }} />
  <Heading level={1} size="l" text="White Text, Purple Backgrund" style={{ color: '#FFF', background: '#380354' }} />
  <Heading level={1} size="l" text="Black Text, Dark Purple Backgrund" style={{ color: '#FFF', background: '#1F012F' }} />

  </>
)

export const HeadingWithAlignmnet = () => (
  <>

  <Heading level={1} size="l" text="Aligned Left" style={{ color: '#990AE3' }} align="left" />
  <Heading level={1} size="l" text="Aligned Center" style={{ color: '#990AE3' }} align="center" />
  <Heading level={1} size="l" text="Aligned Right" style={{ color: '#990AE3' }} align="right" />

  </>
)