import React from 'react'
import ColorPalette from './ColorPalette'


const { black, corePurple, lightGrey, white, deepPurple, blackPurple, darkGrey } = ColorPalette;
console.log(ColorPalette)


export default {
  title: 'Component library|Atoms/Color Palette',
  // component: Heading,
};

export const Default = () => {

  return(
    <>
    <p>{`import { ColorPalette } from '@telia/styleguide'`}</p>
    <p>{`const { black, corePurple, lightGrey, white, deepPurple, blackPurple, darkGrey } = ColorPalette;`}</p>
    <p>
      PRIMARY PALETTE:      <br/>
      black:      '#222222',  <br/>
      corePurple: '#990AE3',  <br/>
      lightGrey:  '#F2F2F2',  <br/>
      white:      '#FFFFFF',  <br/><br/>
      ACCENT PALETTE:       <br/>
      blackPurple:     '#1F012F',   <br/>
      darkBlue:        '#0099FF',   <br/>
      darkCorePurple:  '#9B009B',   <br/>
      darkGreen:       '#00CC66',   <br/>
      darkGrey:        '#A0A0A0',   <br/>
      darkPink:        '#D22DB9',   <br/>
      darkPurple:      '#642D96',   <br/>
      darkRed:         '#E12364',   <br/>
      deepPurple:      '#380354',   <br/>
      darkTeal:        '#009999',   <br/>
      lightCorePurple: '#CC00FF',   <br/>
      lightGreen:      '#99FF64',   <br/>
      orange:          '#FF9B00',   <br/>
      pink:            '#FF00CD',   <br/>
      red:             '#FF3264',   <br/>
    </p>
    </>
  )
}
