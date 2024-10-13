import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ResultsChartProps {
  categories: string[];
  ventas: number[];
  egresos: number[];
  utilidad: number[];
}

function currencyFormat(num: number, currency?: string) {
  return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

const ResultsChart: React.FC<ResultsChartProps> = (props) => {
  const series = [
    { name: 'Ventas', data: props.ventas },
    { name: 'Egresos', data: props.egresos },
    { name: 'Utilidad', data: props.utilidad }
  ];

  const options = {
    chart: {
      height: 550,
      type: 'line',
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    dataLabels: { enabled: false },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
    },
    legend: {
      tooltipHoverFormatter: function (val: string, opts: any) {
        return val + ' ' + currencyFormat(opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]) + ' ';
      }
    },
    yaxis: {
      labels: {
        show: false // Hides the vertical numbers
      }
    },
    tooltip: {
      y: {
        formatter: function (val: number, opts: any) {
          return currencyFormat(val) + ' ';  // Formatting the value on hover
        }
      }
    },
    markers: {
      size: 0,
      hover: { sizeOffset: 6 }
    },
    colors: [      
    "#1c2b2e",
    "#5e9975",
    "#99babd",
    "#7dc2ad",],
    xaxis: {
      categories: props.categories,
      axisBorder: { show: false, color: 'rgba(119, 119, 142, 0.05)' },
      axisTicks: { show: false, color: 'rgba(119, 119, 142, 0.05)' }
    },
    grid: { borderColor: 'rgba(119, 119, 142, 0.1)' }
  };
  //@ts-ignore
  return <ReactApexChart options={options} series={series} type="line" height={300} />;
};

export default ResultsChart;
