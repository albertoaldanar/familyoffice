import React, { Fragment, useState } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { loansDataStats } from "./loansData";
import {
  formatByAssetForCurrency,
  formatCurrency,
  formatForApexChart,
  formatForApexBarChart,
  formatForApexBarChartByDates,
  getUniqueYears,
} from "../utils";
import LoansCollecting from "../../administration/collecting/loans/loans";
import { WorldMap } from "../../../components/maps/simplemaps/data/simplemapdata";

export default function LoansDashboard() {
  const defaultCurrecny = "MXN";
  const defaultYear = new Date().getFullYear();
  const [content, setContent] = useState("");
  const [currency, setCurrency] = useState(defaultCurrecny);
  const [year, setYear] = useState(defaultYear);
  const [viewSelected, setViewSelected] = useState("stats");

  const byCreditor = formatByAssetForCurrency(
    loansDataStats.byCreditor,
    currency
  );
  const byDates = formatForApexBarChartByDates(
    loansDataStats.byDates,
    currency,
    year
  );

  const byType = formatByAssetForCurrency(loansDataStats.byType, currency);
  const byCountry = formatForApexChart(loansDataStats.byCountry);
  const byNumbers = formatForApexBarChart(loansDataStats.byNumber, currency);
  const byCurrency = formatForApexChart(loansDataStats.byCurrency);

  const totalValueWithCurrencySelected = loansDataStats.totalValueOfLoans.find(
    (value) => value.currency === currency
  );

  const totalReceivableWithCurrencySelected =
    loansDataStats.totalValueReceivable.find(
      (value) => value.currency === currency
    );

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

  const chartOptionCleanValue: ApexCharts.ApexOptions = {
    ...chartOptions,
    tooltip: {
      y: {
        formatter: function (value) {
          return value.toString();
        },
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

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
        {loansDataStats.byCreditor.length > 0 ? (
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
              {loansDataStats.totalValueOfLoans.map((currency) => {
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

  const renderYearsDropdown = () => {
    return (
      <div style={{ marginTop: 30, marginRight: 20 }}>
        <Dropdown className="h-3">
          <Dropdown.Toggle size="sm" color="default" type="button" className="custom-button">
            {year} <span className="caret"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            <>
              {loansDataStats.yearsAvailables.map((year) => {
                return (
                  <Dropdown.Item
                    onClick={() => setYear(Number(year))}
                    key={year}
                    href="#"
                  >
                    {year}
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

    if (loansDataStats.byCreditor.length === 0) {
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
            <Row style={{ marginTop: 0, marginBottom: 30 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                {renderYearsDropdown()}
              </div>

              <p style={{ marginBottom: -10, marginLeft: 30 }}>
                Desglose monto de cobros por mes
              </p>
              <ReactApexChart
                options={{
                  ...options,
                  xaxis: { categories: byDates.categories },
                  plotOptions: {
                    bar: {
                      horizontal: false,
                      distributed: true,
                      borderRadius: 6,
                    },
                  },
                }}
                series={byDates.series}
                type="bar"
                height={250}
              />
            </Row>
            <Row style={{ marginTop: 20, marginBottom: 0 }}>
              <p style={{ marginBottom: -10, marginLeft: 30 }}>
                Desglose de montos por cobrar
              </p>
              <ReactApexChart
                options={{
                  ...options,
                  xaxis: { categories: byNumbers.categories },
                }}
                series={byNumbers.series}
                type="bar"
                height={200}
              />
            </Row>

            <Row style={{ marginTop: 15, marginBottom: 30 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por deudor en {currency}
                  </p>
                  <ReactApexChart
                    options={{ ...chartOptions, labels: byCreditor.labels }}
                    series={byCreditor.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>

              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por tipo en {currency}
                  </p>
                  <ReactApexChart
                    options={{ ...chartOptions, labels: byType.labels }}
                    series={byType.series}
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

            <Row style={{ marginTop: 20, marginBottom: 50 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución # de prestamos por país
                  </p>
                  <ReactApexChart
                    options={{
                      ...chartOptionCleanValue,
                      labels: byCountry.labels,
                    }}
                    series={byCountry.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>

              <Col lg={4}>
                <WorldMap
                  countries={loansDataStats.countries}
                  setTooltipContent={setContent}
                />
              </Col>
            </Row>
          </>
        ) : (
          <Row style={{ marginTop: 30, marginBottom: 40 }}>
            <LoansCollecting hideAddButton />
          </Row>
        )}
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ minHeight: 500}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title style={{ marginTop: 40, marginLeft: 20 }}>
              Prestamos por cobrar
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
                      Total otorgado en prestamos
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      ${totalValueWithCurrencySelected.value}{" "}
                      {totalValueWithCurrencySelected.currency}
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
                      <i className="fe fe-phone-outgoing text-black fs-24"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 fw-semibold text-muted-dark">
                      Total prestamos por cobrar
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      ${totalReceivableWithCurrencySelected.value}{" "}
                      {totalReceivableWithCurrencySelected.currency}
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
