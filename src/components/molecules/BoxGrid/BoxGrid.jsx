import React from 'react';

import Box from '../../atoms/Box/Box';

export default class BoxGrid extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className="box-grid container container--medium">
                <Box color="pink" isMediumBox/>
                <Box color="green" isMediumBox/>
                <Box color="blue" isMediumBox/>
                <Box color="light-orange"/>
                <Box color="teal"/>
            </section>
        );
    }
}