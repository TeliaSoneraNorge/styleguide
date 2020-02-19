import React from 'react';
import colorsJSON from '../lib/colorsJSON';
import { colors, Icon } from '../../src/index';

export default {
  title: 'introduction|Home/Color Palette',
};

export const Default = () => (
  <>
    <h3>How to use colors</h3>
    <p>{`import { colors } from '@telia/styleguide'`}</p>
    <div style={{ width: '30px', height: '30px', background: colors.blue }}></div>
    <Icon icon="like" style={{ width: '100px', height: '100px', color: colors.red }} />
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
