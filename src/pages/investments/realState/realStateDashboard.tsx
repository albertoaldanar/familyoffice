import React, { Fragment, useState } from "react";
import { Card, Col, Row, Dropdown } from "react-bootstrap";
import ReactApexChart from "react-apexcharts";
import { Link } from "react-router-dom";
import { realStateStats, realstateData } from "./realStateData";
import {
  formatForApexChart,
  formatForApexBarChartByAssets,
  formatByAssetForCurrency,
  formatCurrency,
} from "../utils";
import RealStateList from "../../administration/assets/assetCategories/realStateList";
import { WorldMap } from "../../../components/maps/simplemaps/data/simplemapdata";

export default function RealStateDashboard() {
  const defaultCurrecny = "MXN";
  const [currency, setCurrency] = useState(defaultCurrecny);
  const byType = formatByAssetForCurrency(realStateStats.byType, currency);
  const byOwner = formatByAssetForCurrency(realStateStats.byOwners, currency);
  const byUsage = formatForApexChart(realStateStats.byUsage);
  const byCountry = formatForApexChart(realStateStats.byCountry);
  const [viewSelected, setViewSelected] = useState("stats");
  const byAssets = formatForApexBarChartByAssets(
    realStateStats.byAssets,
    currency
  );
  const [content, setContent] = useState("");

  const valueWithCurrencySelected = realStateStats.totalValueOfProperties.find(
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
        {realStateStats.byOwners.length > 0 ? (
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
              {realStateStats.totalValueOfProperties.map((currency) => {
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

    if (realStateStats.byOwners.length === 0) {
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
                      <Row style={{ marginTop: 20, marginBottom: 20 }}>
              <p style={{ marginBottom: -10, marginLeft: 30 }}>
                Desglose por valor de propiedad en {currency}
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
            <Row style={{ marginTop: 10, marginBottom: 30 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>
                    Distribución por tipo de propiedad
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
                  <p style={{ marginBottom: 20 }}>
                    Distribución por propietario
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
                    Distribución por uso de propiedad
                  </p>

                  <ReactApexChart
                    options={{ ...chartOptions, labels: byUsage.labels }}
                    series={byUsage.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>
            </Row>

            <Row style={{ marginTop: 0, marginBottom: 50 }}>
              <Col lg={4}>
                <div style={{ padding: 10 }}>
                  <p style={{ marginBottom: 20 }}>Distribución por país</p>
                  <ReactApexChart
                    options={{ ...chartOptions, labels: byCountry.labels }}
                    series={byCountry.series}
                    type="donut"
                    width="100%"
                  />
                </div>
              </Col>

              <Col lg={4}>
                <WorldMap
                  countries={realStateStats.countries}
                  setTooltipContent={setContent}
                />
              </Col>
            </Row>
          </>
        ) : (
          <Row style={{ marginTop: 30, marginBottom: 40 }}>
            <RealStateList data={realstateData} hideAddButton />
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
              Bienes raices
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
                      Total valor de propiedades
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
                      <i className="fe fe-map-pin text-black fs-24"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0 fw-semibold text-muted-dark">
                      Numero de propiedades
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      # {realStateStats.numberOfProperties}
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
