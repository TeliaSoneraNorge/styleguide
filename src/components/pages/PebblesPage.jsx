import React from 'react';
import _ from 'lodash';
import { Header } from '../../../component-lib/src/index';

export const PebbleVariant = ({
    VARIANT_0: { value: 'page-pebbles', description: 'Page Pebble' },
    VARIANT_1: { value: 'page-pebbles page-pebbles--variant-1', description: 'Variant 1' },
    VARIANT_2: { value: 'page-pebbles page-pebbles--variant-2', description: 'Variant 2' },
    VARIANT_3: { value: 'page-pebbles page-pebbles--variant-3', description: 'Variant 3' },
    VARIANT_4: { value: 'page-pebbles page-pebbles--variant-4', description: 'Variant 4' },
    VARIANT_5: { value: 'page-pebbles page-pebbles--variant-5', description: 'Variant 5' }
});

export default class PebblesPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            variant: PebbleVariant.VARIANT_0.value
        };

        this.dropdownChange = this.dropdownChange.bind(this);
    }
    dropdownChange(e) {
        e.preventDefault();
        this.setState({ variant: e.target.value });
    }
    render() {
        return (
            <div className={this.state.variant}>
                <Header
                    iconName="ico_info"
                    pageTitle="Pebble Page"
                    withMask={false}
                    withContentOverlap={false}>
                    <p>See how a page looks when it has pebbles scattered around the page!</p>
                </Header>
                <div className="container container--small container--extra-padding-top container--extra-margin-bottom">
                    <label>Select your variant: </label>
                    <select className="dropdown-list" onChange={this.dropdownChange}>
                        {_.map(PebbleVariant, (variant,i) =>
                            <option key={variant.description} className="dropdown-list__option" value={variant.value}>{variant.description}</option>
                        )}
                    </select>
                </div>
            </div>
        );
    }
}
