import React from 'react';

import Box from '../../atoms/Box/Box';

export default class BoxGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="box-grid">
                <Box/>
            </section>
        );
    }
}