import React, { Fragment, useState } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { privateEquityStats } from "./privateEquityData";
import {
  formatCurrency,
  formatByAssetForCurrency,
  formatForApexChart,
  formatForApexBarChartByAssets,
} from "../utils";
import PrivateEquityList from "../../administration/assets/assetCategories/privateEquityList";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import ResultsChart from "../stockMarket/lineChartPeriods";

export default function PrivateEquityDashboard() {
  const defaultCurrecny = "MXN";
  const [currency, setCurrency] = useState(defaultCurrecny);

  const byStage = formatByAssetForCurrency(
    privateEquityStats.byStage,
    currency
  );
  const byIndustrie = formatByAssetForCurrency(
    privateEquityStats.byIndustrie,
    currency
  );
  const byType = formatByAssetForCurrency(privateEquityStats.byType, currency);
  const byOwner = formatByAssetForCurrency(
    privateEquityStats.byOwners,
    currency
  );
  const byAssets = formatForApexBarChartByAssets(
    privateEquityStats.byAssets,
    currency
  );
  const byCurrency = formatForApexChart(privateEquityStats.byCurrency);
  const byCountry = formatByAssetForCurrency(
    privateEquityStats.byCountry,
    currency
  );
  const [viewSelected, setViewSelected] = useState("stats");
  const [content, setContent] = useState("");

  const valueWithCurrencySelected =
    privateEquityStats.totalValueOfPrivateEquity.find(
      (value) => value.currency === currency
    );

  const fundsWithCurrencySelected =
    privateEquityStats.totalValueOfPrivateEquityFunds.find(
      (value) => value.currency === currency
    );

  const directWithCurrencySelected =
    privateEquityStats.totalValueOfPrivateEquityDirect.find(
      (value) => value.currency === currency
    );

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [],
    },
    yaxis: {
      labels: {
        show: false,
      },
      title: {
        text: "",
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        horizontal: true,
        distributed: true,
      },
    },
    dataLabels: {
      formatter: (val: number) => `$${val.toLocaleString()}`,
    },
    colors: [
      "#1c2b2e",
      "#004745",
      "#5e9975",
      "#7dc2ad",
      "#2e8b57",
      "#99babd",
      "#0b121a",
      "#212F3C",
      "#17202A",
      "#1A1A2E",
    ],
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut" as "donut",
    },
    colors: [
      "#1c2b2e",
      "#004745",
      "#5e9975",
      "#7dc2ad",
      "#2e8b57",
      "#99babd",
      "#0b121a",
      "#212F3C",
      "#17202A",
      "#1A1A2E",
    ],
    labels: [],
    legend: {
      position: "bottom",
      horizontalAlign: "center",
    },
    dataLabels: {
      enabled: true,

      style: {
        fontSize: "10px",
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const currencyChartOptions: ApexCharts.ApexOptions = {
    ...chartOptions,
    tooltip: {
      y: {
        formatter: function (value) {
          return formatCurrency(value);
        },
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

  const chartOptionsPercentage: ApexCharts.ApexOptions = {
    ...chartOptions,
    tooltip: {
      y: {
        formatter: function (value) {
          return value.toString() + " %";
        },
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

  const renderCurrencyDropdown = () => {
    const isStatsView = viewSelected === "stats";

    return (
      <div
        style={{
          marginTop: 30,
          marginRight: 20,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {privateEquityStats.byOwners.length > 0 ? (
          <div style={{ marginRight: 40, marginTop: 5 }}>
            <i
              style={{
                cursor: "pointer",
                marginRight: 20,
                color: isStatsView ? "#004745" : "#A9A9A9",
              }}
              className="fe fe-activity  fs-20"
              onClick={() => setViewSelected("stats")}
            ></i>
            <i
              style={{
                cursor: "pointer",
                marginRight: 20,
                color: !isStatsView ? "#004745" : "#A9A9A9",
              }}
              className="fe fe-list  fs-20"
              onClick={() => setViewSelected("list")}
            ></i>
          </div>
        ) : null}
        <Dropdown className="h-3">
          <Dropdown.Toggle size="sm" color="default" type="button" className="custom-button">
            {currency} <span className="caret"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            <>
              {privateEquityStats.totalValueOfPrivateEquity.map((currency) => {
                return (
                  <Dropdown.Item
                    onClick={() => setCurrency(currency.currency)}
                    key={currency.currency}
                    href="#"
                  >
                    {currency.currency}
                  </Dropdown.Item>
                );
              })}
            </>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  const renderContent = () => {
    const isStatsView = viewSelected === "stats";

    if (privateEquityStats.byOwners.length === 0) {
      return (
        <div style={{ marginTop: 60 }}>
          <p
            style={{
              color: "gray",
              fontSize: 12,
              marginRight: 4,

              textAlign: "center",
            }}
          >
            Aún no se ha registrado ningún bien raiz
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: -10,
            }}
          >
            <p
              style={{
                color: "gray",
                fontSize: 12,
                marginRight: 4,
              }}
            >
              Los bienes y activos se pueden crear en la pestaña de
            </p>
            {/*// @ts-ignore */}
            <Link style={{ fontSize: 12 }} to={`${import.meta.env.BASE_URL}administration/assets`}>
              Activos fijos
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        {isStatsView ? (
          <>
            <Row style={{ marginTop: 10, marginBottom: 30 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por propietario en {currency}
                  </p>
                  <ReactApexChart
                    options={{
                      ...currencyChartOptions,
                      labels: byOwner.labels,
                    }}
                    series={byOwner.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por etapa de inversión {currency}
                  </p>
                  <ReactApexChart
                    options={{
                      ...currencyChartOptions,
                      labels: byStage.labels,
                    }}
                    series={byStage.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>Distribución por moneda</p>

                  <ReactApexChart
                    options={{
                      ...chartOptionsPercentage,
                      labels: byCurrency.labels,
                    }}
                    series={byCurrency.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
            </Row>

            <Row style={{ marginBottom: 30, marginRight: 20, marginLeft: 20, marginTop: 40 }}>
              <p style={{ marginBottom: -10 }}>
                Retornos acumulados fondos en {currency}
              </p>
              <ResultsChart currency={currency} year={2024} wealthBalancebyPeriod={privateEquityStats.returnsByPeriodsFunds} />
            </Row>

            <Row style={{ marginTop: 0, marginBottom: 30 }}>
              <p style={{ marginBottom: -10, marginLeft: 30 }}>
                Desglose por inversiones
              </p>
              <ReactApexChart
                options={{
                  ...options,
                  xaxis: { categories: byAssets.categories },
                  plotOptions: {
                    bar: {
                      horizontal: true,
                      distributed: true,
                      borderRadius: 6,
                    },
                  },
                }}
                series={byAssets.series}
                type="bar"
                height={250}
              />
            </Row>

            <Row style={{ marginTop: 20, marginBottom: 50 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por tipo de inversión de CP
                  </p>

                  <ReactApexChart
                    options={{ ...currencyChartOptions, labels: byType.labels }}
                    series={byType.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>Distribución por industria</p>

                  <ReactApexChart
                    options={{
                      ...currencyChartOptions,
                      labels: byIndustrie.labels,
                    }}
                    series={byIndustrie.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por país en {currency}
                  </p>
                  <ReactApexChart
                    options={{
                      ...currencyChartOptions,
                      labels: byCountry.labels,
                    }}
                    series={byCountry.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
            </Row>
          </>
        ) : (
          <Row style={{ marginTop: 30, marginBottom: 40 }}>
            <PrivateEquityList
              data={otherWealthData.privateEquity}
              hideAddButton
            />
          </Row>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ minHeight: 500 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title style={{ marginTop: 40, marginLeft: 20 }}>
              Capital privado
            </Card.Title>
            {renderCurrencyDropdown()}
          </div>

          <Row className="row" style={{marginTop: 10}}>
            <Col lg={4} className="col-lg-4">
              <Card.Body className="card-body">
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-activity text-black fs-24"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 fw-semibold text-muted-dark">
                      Total inversiones Capital privado
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      ${valueWithCurrencySelected.value}{" "}
                      {valueWithCurrencySelected.currency}
                    </h3>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col lg={4} className="col-lg-4">
              <Card.Body className="card-body">
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-layers text-black fs-24"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 fw-semibold text-muted-dark">
                      Total invertido a traves de fondos
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      ${fundsWithCurrencySelected.value}{" "}
                      {fundsWithCurrencySelected.currency}
                    </h3>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
            <Col lg={4} className="col-lg-4">
              <Card.Body className="card-body">
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-arrow-up-right text-black fs-24"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 fw-semibold text-muted-dark">
                      Total invertido directamente
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      ${directWithCurrencySelected.value}{" "}
                      {directWithCurrencySelected.currency}
                    </h3>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
          {renderContent()}
        </div>
      </Row>
    </Fragment>
  );
}
