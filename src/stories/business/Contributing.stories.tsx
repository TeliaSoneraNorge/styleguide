import React from 'react';

function Code(props: { children: any }) {
  return (
    <code
      style={{
        whiteSpace: 'nowrap',
        color: '#1F012F',
        backgroundColor: '#f9f0fd',
        fontSize: '80%',
        padding: '2px 4px',
      }}
    >
      {props.children}
    </code>
  );
}

export default {
  title: 'Introduction/Business',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};

export const Contributing = () => {
  return (
    <div style={{ margin: '30px', maxWidth: '800px' }}>
      <h1>Contributing</h1>

      <h2>Icons</h2>

      <p>To add/update/remove business icons in the styleguide:</p>

      <ol>
        <li>
          Prepare the icons (from Illustrator, Sketch etc). They must be in SVG format with a square artboard/viewbox,
          and they must be named with only alphanumeric characters and dashes (so-called kebab-case, e.g.{' '}
          <Code>example-icon.svg</Code>).
        </li>

        <li style={{ marginTop: '20px' }}>
          If you are adding icons, drop the SVG files into the directory{' '}
          <Code>assets/business-icons/dropHereNewIcons</Code>.
        </li>

        <li style={{ marginTop: '20px' }}>
          If you are removing any existing icons, delete them from the directory{' '}
          <Code>assets/business-icons</Code>.
        </li>

        <li style={{ marginTop: '20px' }}>
          Run <Code>npm run icons:business</Code>.
        </li>
      </ol>

      <p>
        If you have any questions regarding the icons,
        <br /> contact Bjørn Even Egge (<a href="mailto:bjorn.even.egge@telia.no">bjorn.even.egge@telia.no</a>).
      </p>
    </div>
  );
};
