import React from 'react';

import Header from '../../components/molecules/Header/Header';
import BoxGrid from '../../components/molecules/BoxGrid/BoxGrid';

export default class BoxGridSamplePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article>
                <Header pageTitle="Box Grid"
                        withMask={false}
                        withContentOverlap={false}>
                    <p>On this page you can have a look at a page with Box Grid layout
                        and how it can be used.</p>
                </Header>
                <BoxGrid/>
            </article>
        );
    }
}