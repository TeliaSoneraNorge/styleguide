import React from 'react';
import { Header, DonutChart, ChartLegend, DataBoostChart } from '../../../component-lib/src/index';

const Prism = window.Prism; // A global, added with a <script> tag in the HTML template

export default class UsagePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            showRemainingTime: false,
            data: {}
        };

        this.refreshData = this.refreshData.bind(this);
    }
    getRandomData() {
        const maxData = 60;
        const maxExtra = 20;
        const maxRollover = 30;

        const data = Math.random() * maxData;
        const extra = Math.random() * maxExtra;
        const rollover = Math.random() * maxRollover;

        const totalRemaining = data + extra + rollover;
        const total = maxData + maxExtra + maxRollover;

        return {
            value: `${totalRemaining.toFixed(1)} GB`,
            segments: [
                { "color": "purple", "percent": rollover / total },
                { "color": "orange", "percent": data / total },
                { "color": "green", "percent": extra / total }
            ],
            series: [
                {
                    "title": "Rollover",
                    "color": "purple",
                    "value": `${rollover.toFixed(1)} GB`,
                    "total": `${maxRollover.toFixed(1)} GB`
                },
                {
                    "title": "Inkludert data",
                    "color": "orange",
                    "value": `${data.toFixed(1)} GB`,
                    "total": `${maxData.toFixed(1)} GB`
                },
                {
                    "title": "Extra datapack",
                    "color": "green",
                    "value": `${extra.toFixed(1)} GB`,
                    "total": `${maxExtra.toFixed(1)} GB`
                }
            ]
        };
    }
    refreshData() {
        this.setState({ isLoading: true, data: {} });

        setTimeout(() => {
            this.setState({
                isLoading: false,
                data: this.getRandomData()
            });
        }, 1500);
    }
    componentDidMount() {
        this.refreshData();

        this.dataBoostAlternatingTextInteval = setInterval(() => {
            this.setState({ showRemainingTime: !this.state.showRemainingTime });
        }, 1500);
    }
    componentWillUnmount() {
        clearInterval(this.dataBoostAlternatingTextInteval);
    }
    render() {
        return (
            <div className={this.state.variant}>
                <Header
                    pageTitle="Usage page"
                    withMask={false}
                    withContentOverlap={false}>
                </Header>
                <div
                    className="container container--small container--extra-padding-top container--extra-margin-bottom"
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <button
                        onClick={this.refreshData}
                        className="button"
                        style={{ marginBottom: 50 }}>
                        Refresh data
                    </button>

                    <DonutChart
                        loading={this.state.isLoading}
                        segments={this.state.data.segments}
                        value={this.state.data.value} />

                    <ChartLegend series={this.state.data.series} />

                    <DonutChart
                        loading={this.state.isLoading}
                        segments={this.state.data.segments}
                        value={this.state.data.value}
                        showLineCaps />

                    <ChartLegend series={this.state.data.series} />

                    <DonutChart
                        loading={this.state.isLoading}
                        segments={this.state.data.segments}
                        value={this.state.data.value}
                        showLineCaps
                        showSegmentSeparators />

                    <ChartLegend series={this.state.data.series} />

                    <DonutChart
                        loading={this.state.isLoading}
                        segments={this.state.data.segments}
                        value={this.state.data.value}
                        showSegmentSeparators />

                    <ChartLegend series={this.state.data.series} />

                    <DataBoostChart
                        loading={this.state.isLoading}
                        lowerCaption={this.state.showRemainingTime ? '15:00' : 'Fri bruk'}
                    />
                </div>
            </div>
        );
    }
}
