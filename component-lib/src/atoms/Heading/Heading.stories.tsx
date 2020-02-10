import React from 'react';
import Heading from './Heading';

import { ColorPalette } from '../../index'

const { black, corePurple, lightGrey, white, deepPurple, blackPurple, darkGrey } = ColorPalette;

export default {
  title: 'Component library|Atoms/Heading',
  component: Heading,
};

export const Default = () => (

  <div>
    <p style={{ color: 'red', fontWeight: 800 }}>DEPRECATED!</p>


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

  <Heading level={1} size="mega" text="Mega heading" style={{ color: corePurple }} />
  <Heading level={1} size="xxl" text="XXL heading" style={{ color: corePurple }} />
  <Heading level={1} size="xl" text="XL heading" style={{ color: corePurple }} />
  <Heading level={1} size="l" text="Large heading" style={{ color: corePurple }} />
  <Heading level={1} size="m" text="Medium heading" style={{ color: black }} />
  <Heading level={1} size="s" text="Small heading" style={{ color: black }} />
  <Heading level={1} size="xs" text="Xtra Small heading" style={{ color: black }} />

  </>
)

export const HeadingWithColors = () => (
  <>
  <p style={{ color: 'red', fontWeight: 800 }}>Rules of colors in headings MEGA - LARGE</p>
  
  <Heading level={1} size="l" text="Purple Text" style={{ color: corePurple }} />
  <Heading level={1} size="l" text="Purple Text, Light Grey Background" style={{ color: corePurple, background: lightGrey }} />
  <Heading level={1} size="l" text="Black Text" style={{ color: black }} />
  <Heading level={1} size="l" text="Black Text, Light Grey Background" style={{ color: black, background: lightGrey }} />
  <Heading level={1} size="l" text="White Text, Deep Purple Background" style={{ color: white, background: deepPurple }} />
  <Heading level={1} size="l" text="White Text, Black Purple Background" style={{ color: white, background: blackPurple }} />

  <p style={{ color: 'red', fontWeight: 800 }}>Rules of colors in headings MEDIUM - XTRA SMALL</p>

  <Heading level={1} size="s" text="Black Text" style={{ color: black }} />
  <Heading level={1} size="s" text="Black Text, Light Grey Background" style={{ color: black, background: lightGrey }} />
  <Heading level={1} size="s" text="Darker Grey Text" style={{ color: '#6E6E6E' }} />
  <Heading level={1} size="s" text="Darker Grey Text, Light Grey Background" style={{ color: '#6E6E6E', background: lightGrey }} />
  <Heading level={1} size="s" text="Dark Grey Text, Deep Purple Background" style={{ color: darkGrey, background: deepPurple }} />
  <Heading level={1} size="s" text="Dark Grey Text, Black Purple Background" style={{ color: darkGrey, background: blackPurple }} />

  </>
)

export const HeadingWithAlignment = () => (
  <>

  <Heading level={1} size="l" text="Aligned Left" style={{ color: corePurple }} align="left" />
  <Heading level={1} size="l" text="Aligned Center" style={{ color: corePurple }} align="center" />
  <Heading level={1} size="l" text="Aligned Right" style={{ color: corePurple }} align="right" />

  </>
)