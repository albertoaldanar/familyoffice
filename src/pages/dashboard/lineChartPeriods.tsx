import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ResultsChartProps {
  currency: string;  // The currency to filter (e.g., "MXN", "USD", "EUR")
  year: number;      // The year to filter
  wealthBalancebyPeriod: Array<{
    type: string;
    values: Array<{
      year: number;
      month: string;
      value: Array<{
        currency: string;
        value: number;
      }> | null; // Handle null or undefined values
    }>;
  }>;
}

const ResultsChart: React.FC<ResultsChartProps> = (props) => {
  const { currency, year, wealthBalancebyPeriod } = props;

  // Filter data by the selected year and extract months
  const months = wealthBalancebyPeriod[0]?.values
    .filter((v) => v.year === year)
    .map((v) => v.month) || [];

  // Prepare the series by filtering data for the selected year and currency
  const series = wealthBalancebyPeriod.map((asset) => ({
    name: asset.type,
    data: asset.values
      .filter((v) => v.year === year)
      .map((v) => {
        // Ensure v.value is an array before using .find()
        if (Array.isArray(v.value)) {
          const selectedCurrencyValue = v.value.find(
            (currencyData) => currencyData.currency === currency
          )?.value;
          return selectedCurrencyValue ?? 0;  // Default to 0 if no value found
        }
        return 0;  // Default to 0 if v.value is not an array
      }),
  }));

  const options = {
    chart: {
      height: 550,
      type: 'line',
      zoom: { enabled: false },
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2], // Set line thickness to 2.5
      curve: 'smooth',
    },
    yaxis: {
      labels: {
        show: false,
        formatter: function (value: number) {
            return value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
          },
      },
    },
    tooltip: {
      y: {
        formatter: function (val: number) {
          return "$" + val.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " " + currency;
        },
      },
    },
    markers: {
      size: 0,
      hover: { sizeOffset: 6 },
    },
    colors: [
        "#1c2b2e",
        "#004745",
        "#5e9975",
        "#7dc2ad",
        "#2e8b57",
        "#99babd",
        "#0b121a",
    ],
    xaxis: {
      categories: months,
      axisBorder: { show: true, color: 'rgba(119, 119, 142, 0.05)' },
      axisTicks: { show: true, color: 'rgba(119, 119, 142, 0.05)' },
    },
    grid: { borderColor: 'rgba(119, 119, 142, 0)' }, // Removed grid lines by setting color to transparent
  };

  return <ReactApexChart options={options} series={series} type="line" height={250} />;
};

export default ResultsChart;
