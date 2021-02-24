import React from 'react';
import { QuickSearch } from './index';
import { Button } from '../../business/Button';
import { action } from '@storybook/addon-actions';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: QuickSearch,
  title: 'Component library/Molecules/QuickSearch',
  decorators: [withDesign],
};

export const Default = () => {
  return (
    <>
      <h3>QuickSearch</h3>
      <a href="https://www.figma.com/file/DY2nAi4QVg4DZWQSGP1A0n/Text-field?node-id=2%3A2"> Figma skisser</a> <p></p>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
      </div>
      <h4>Compact</h4>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="grey"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
        <div style={{ width: '30%', marginRight: '1rem' }}>
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={<Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />}
          />
          <br />
          <QuickSearch
            placeholder="Søk i..."
            kind="white"
            size="compact"
            leftContent={<Button kind="secondary-text" size="compact" icon="search" onClick={action('search')} />}
            rightContent={
              <div style={{ display: 'flex', paddingRight: '4px' }}>
                <Button kind="secondary-text" size="compact" icon="close" onClick={action('clear')} />{' '}
                <Button kind="secondary-text" size="compact" icon="filter" onClick={action('clear')} />{' '}
              </div>
            }
          />
        </div>
      </div>
      <p>
        Looking for a quick search field with a dropdown menu to display results? See{' '}
        <a href="https://styleguide.channelapi.telia.no/?path=/story/component-library-molecules-dropdown--with-search-toggle">
          the dropdown with search toggle
        </a>
      </p>
    </>
  );
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/EBjS8URGPnFXU0SQsVL9la/Quick-search?node-id=2%3A2',
  },
};
