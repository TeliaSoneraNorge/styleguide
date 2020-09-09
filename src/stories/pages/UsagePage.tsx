import React, { useState, useEffect } from 'react';
import { Header, DonutChart, ChartLegend, DataBoostChart } from '../../index';

function getRandomData() {
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
      { color: 'purple', percent: rollover / total },
      { color: 'orange', percent: data / total },
      { color: 'green', percent: extra / total },
    ],
    series: [
      {
        title: 'Rollover',
        color: 'purple',
        value: `${rollover.toFixed(1)} GB`,
        total: `${maxRollover.toFixed(1)} GB`,
      },
      {
        title: 'Inkludert data',
        color: 'orange',
        value: `${data.toFixed(1)} GB`,
        total: `${maxData.toFixed(1)} GB`,
      },
      {
        title: 'Extra datapack',
        color: 'green',
        value: `${extra.toFixed(1)} GB`,
        total: `${maxExtra.toFixed(1)} GB`,
      },
    ],
  };
}

export function UsagePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [showRemainingTime, setShowRemainingTime] = useState(false);
  const [data, setData] = useState<any>({});

  function refreshData() {
    setIsLoading(true);
    setData({});
    setTimeout(() => {
      setIsLoading(false);
      setData(getRandomData());
    }, 1500);
  }

  useEffect(() => {
    refreshData();
    const interval = setInterval(() => {
      setShowRemainingTime(p => !p);
    }, 1500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Header pageTitle="Usage page" withMask={false} withContentOverlap={false}></Header>
      <div
        className="container container--small container--extra-padding-top container--extra-margin-bottom"
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <button onClick={refreshData} className="button" style={{ marginBottom: 50 }}>
          Refresh data
        </button>

        <DonutChart loading={isLoading} segments={data.segments} value={data.value} />

        <ChartLegend series={data.series} />

        <DonutChart loading={isLoading} segments={data.segments} value={data.value} showLineCaps />

        <ChartLegend series={data.series} />

        <DonutChart
          loading={isLoading}
          segments={data.segments}
          value={data.value}
          showLineCaps
          showSegmentSeparators
        />

        <ChartLegend series={data.series} />

        <DonutChart loading={isLoading} segments={data.segments} value={data.value} showSegmentSeparators />

        <ChartLegend series={data.series} />

        <DataBoostChart loading={isLoading} lowerCaption={showRemainingTime ? '15:00' : 'Fri bruk'} />
      </div>
    </div>
  );
}
