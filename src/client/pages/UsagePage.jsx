import React from 'react';
import Header from '../../components/molecules/Header/Header';
import DonutChart from '../../components/molecules/DonutChart/DonutChart';
import ChartLegend from '../../components/molecules/ChartLegend/ChartLegend';

const Prism = window.Prism; // A global, added with a <script> tag in the HTML template

export default class UsagePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
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
                </div>
            </div>
        );
    }
}
