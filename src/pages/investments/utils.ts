export const formatForApexChart = (data, currency?) => {
  const labels = data.map((item) => item.type);

  const series = data.map((item) => item.value);

  return {
    labels,
    series,
  };
};

export const formatByAssetForCurrency = (data, selectedCurrency) => {
  const labels = data.map((item) => item.type);
  const series = data.map((item) => {
    const currencyData = item.value.find(
      (val) => val.currency === selectedCurrency
    );
    return currencyData ? currencyData.value : 0;
  });

  return {
    labels,
    series,
  };
};

export const formatCurrency = (value: number) => {
  return "$" + value.toLocaleString("en-US");
};

export function formatForApexBarChart(byNumber, selectedCurrency) {
  const categories = byNumber.map((item) => item.type);

  const seriesData = byNumber.map((item) => {
    const currencyData = item.value.find(
      (currencyItem) => currencyItem.currency === selectedCurrency
    );
    return currencyData ? currencyData.value : 0;
  });

  const series = [
    {
      name: selectedCurrency,
      data: seriesData,
    },
  ];

  return { series, categories };
}

export function formatForApexBarChartByDates(
  byDates,
  selectedCurrency: string,
  selectedYear: number
) {
  const filteredData = byDates.filter((item) => item.year === selectedYear);

  const categories = filteredData.map((item) => item.date);

  const seriesData = filteredData.map((item) => {
    const currencyData = item.value.find(
      (currencyItem) => currencyItem.currency === selectedCurrency
    );
    return currencyData ? currencyData.value : 0;
  });

  const series = [
    {
      name: selectedCurrency,
      data: seriesData,
    },
  ];

  return { series, categories };
}

export function formatForApexBarChartByAssets(
  byDates,
  selectedCurrency: string,
) {

  const categories = byDates.map((item) => item.type);

  const seriesData = byDates.map((item) => {
    const currencyData = item.value.find(
      (currencyItem) => currencyItem.currency === selectedCurrency
    );
    return currencyData ? currencyData.value : 0;
  });

  const series = [
    {
      name: selectedCurrency,
      data: seriesData,
    },
  ];

  return { series, categories };
}


export const getUniqueYears = (byDates) => {
  const years = byDates.map(item => item.year);
  return Array.from(new Set(years));
}
