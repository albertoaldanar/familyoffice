import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface ResultsChartProps {
  ventas: number[];
  egresos: number[];
  utilidad: number[];
}

const ResultsChart: React.FC<ResultsChartProps> = (props) => {
  const series = [
    { name: 'Ventas', data: props.ventas },
    { name: 'Egresos', data: props.egresos },
    { name: 'Utilidad', data: props.utilidad }
  ];

  const options = {
    chart: {
      height: 250,
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
        return val + ' $ ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ' ';
      }
    },
    markers: {
      size: 0,
      hover: { sizeOffset: 6 }
    },
    colors: ['#5797fc', '#5eba00', '#ffc107'],
    xaxis: {
      categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'],
      axisBorder: { show: true, color: 'rgba(119, 119, 142, 0.05)' },
      axisTicks: { show: true, color: 'rgba(119, 119, 142, 0.05)' }
    },
    grid: { borderColor: 'rgba(119, 119, 142, 0.1)' }
  };
  //@ts-ignore
  return <ReactApexChart options={options} series={series} type="line" height={300} />;
};

export default ResultsChart;
