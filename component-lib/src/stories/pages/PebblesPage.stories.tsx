import React, { useState } from 'react';
import _ from 'lodash';
import { Header } from '../../index';

export default {
  title: 'Examples|Pages',
};

const PebbleVariant = {
  VARIANT_0: { value: 'page-pebbles', description: 'Page Pebble' },
  VARIANT_1: { value: 'page-pebbles page-pebbles--variant-1', description: 'Variant 1' },
  VARIANT_2: { value: 'page-pebbles page-pebbles--variant-2', description: 'Variant 2' },
  VARIANT_3: { value: 'page-pebbles page-pebbles--variant-3', description: 'Variant 3' },
  VARIANT_4: { value: 'page-pebbles page-pebbles--variant-4', description: 'Variant 4' },
  VARIANT_5: { value: 'page-pebbles page-pebbles--variant-5', description: 'Variant 5' },
};

export function PebblesPage() {
  const [variant, setVariant] = useState(PebbleVariant.VARIANT_0.value);

  function dropdownChange(e: React.ChangeEvent<HTMLSelectElement>) {
    e.preventDefault();
    setVariant(e.target.value);
  }

  return (
    <div className={variant}>
      <Header iconName="ico_info" pageTitle="Pebble Page" withMask={false} withContentOverlap={false}>
        <p>See how a page looks when it has pebbles scattered around the page!</p>
      </Header>

      <div className="container container--small container--extra-padding-top container--extra-margin-bottom">
        <label>Select your variant: </label>
        <select className="dropdown-list" onChange={dropdownChange}>
          {_.map(PebbleVariant, v => (
            <option key={v.description} className="dropdown-list__option" value={v.value}>
              {v.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
