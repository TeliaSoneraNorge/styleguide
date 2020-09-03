import React from 'react';
import colorsJSON from '../lib/colorsJSON';
import { colors, Icon } from '../../index';

export default {
  title: 'Introduction/Color Palette',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Default = () => (
  <>
    <h3>How to use colors</h3>
    <p>{`import { colors } from '@telia/styleguide'`}</p>
    <div style={{ display: 'flex', marginRight: '1rem' }}>
      <div style={{ background: colors.corePurple, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
      <div style={{ background: colors.corePurple500, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
      <div style={{ background: colors.darkGrey, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
      <div style={{ background: colors.grey400, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
      <div style={{ background: colors.green, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
      <div style={{ background: colors.green500, width: '30px', height: '30px', marginRight: 'inherit' }}></div>
    </div>
  </>
);

export const ThePalette = () => {
  const style = {
    minWidth: '12rem',
  };

  return (
    <>
      {colorsJSON.map(color => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              padding: '.3rem 1rem',
              marginRight: '1rem',
              flexBasis: '8rem',
              minWidth: '8rem',
              color: color.textColor,
              background: color.hex,
              textAlign: 'center',
              overflowWrap: 'normal',
            }}
          >
            Text Color
          </div>
          <p style={{ minWidth: style.minWidth }}>{color.name}</p>
          <p style={{ minWidth: style.minWidth }}>
            <span
              style={{
                color: 'rgba(0,0,0,.4)',
                background: '#f8f8f8',
                padding: '.2rem',
                marginRight: '.5rem',
                fontSize: '12px',
              }}
            >
              HEX
            </span>
            {color.hex}
          </p>
          <p style={{ minWidth: style.minWidth }}>
            <span
              style={{
                color: 'rgba(0,0,0,.4)',
                background: '#f8f8f8',
                padding: '.2rem',
                marginRight: '.5rem',
                fontSize: '12px',
              }}
            >
              RGB
            </span>
            {color.rgb}
          </p>
          {color.alias ? (
            <p style={{ minWidth: style.minWidth }}>
              <span
                style={{
                  color: 'rgba(0,0,0,.4)',
                  background: '#f8f8f8',
                  padding: '.2rem',
                  marginRight: '.5rem',
                  fontSize: '12px',
                }}
              >
                ALIAS
              </span>
              {color.alias}
            </p>
          ) : null}
        </div>
      ))}
    </>
  );
};
