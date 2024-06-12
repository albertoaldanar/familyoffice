import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ResultsChartProps {
  categories: string[];
  ventas: number[];
  egresos: number[];
  utilidad: number[];
}

function currencyFormat(num: number) {
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
      height: 450,
      type: 'line',
      zoom: { enabled: false },
      toolbar: { show: false }
    },
    dataLabels: { enabled: true },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth',
      dashArray: [0, 8, 5]
    },
    legend: {
      tooltipHoverFormatter: function (val: string, opts: any) {
        return val + ' ' + currencyFormat(opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]) + ' ';
      }
    },
    markers: {
      size: 0,
      hover: { sizeOffset: 6 }
    },
    colors: ['#5797fc', '#5eba00', '#ffc107'],
    xaxis: {
      categories: props.categories,
      axisBorder: { show: true, color: 'rgba(119, 119, 142, 0.05)' },
      axisTicks: { show: true, color: 'rgba(119, 119, 142, 0.05)' }
    },
    grid: { borderColor: 'rgba(119, 119, 142, 0.1)' }
  };
  //@ts-ignore
  return <ReactApexChart options={options} series={series} type="line" height={300} />;
};

export default ResultsChart;
