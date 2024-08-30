import React, { Fragment, useState } from "react";
import {
  Card,
  Col,
  Row,
  Dropdown,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import ReactApexChart from "react-apexcharts";
import { WorldMap } from "../../components/maps/simplemaps/data/simplemapdata";
import listPlugin from "@fullcalendar/list";
// @ts-ignore
import collectionAsset from "../../assets/images/assetsCategories/collectionAssets.jpg";
// @ts-ignore
import loanAsset from "../../assets/images/assetsCategories/loanAsset.jpeg";
// @ts-ignore
import privateEquityAsset from "../../assets/images/assetsCategories/privateEquityAsset.png";
// @ts-ignore
import realstateAsset from "../../assets/images/assetsCategories/realstateAsset.jpg";
// @ts-ignore
import stockAsset from "../../assets/images/assetsCategories/stockAsset.jpg";
// @ts-ignore
import volvoAsset from "../../assets/images/assetsCategories/volvoAsset.jpg";

import interactionPlugin from "@fullcalendar/interaction";
import {
  realStateStats,
  realstateData,
} from "../investments/realState/realStateData";
import {
  formatForApexChart,
  formatForApexBarChart,
  formatByAssetForCurrency,
  formatCurrency,
} from "../investments/utils";
import { dashboardData } from "./dashboardData";

export default function RealStateDashboard() {
  const defaultCurrecny = "MXN";
  const [currency, setCurrency] = useState(defaultCurrecny);
  const byOwner = formatByAssetForCurrency(dashboardData.byOwners, currency);
  const byTypePercentage = formatForApexChart(dashboardData.byAssetTypePct);
  const byCountry = formatByAssetForCurrency(dashboardData.byCountry, currency);
  const byAssetType = formatForApexBarChart(
    dashboardData.byAssetType,
    currency
  );
  const [content, setContent] = useState("");
  const [selectedView, setSelectedView] = useState("stats");
  const valueWithCurrencySelected = dashboardData.totalValueOfAssets.find(
    (value) => value.currency === currency
  );

  const valueCompaniesWithCurrencySelected = dashboardData.totalValueOfCompanies.find(
    (value) => value.currency === currency
  );

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      type: "donut" as "donut",
    },
    colors: [
      "#0e0f2e",
      "#811f09",
      "#0c0e4b",
      "#054e49",
      "#3A3D40",
      "#2E4053",
      "#1C2833",
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
    legend: {
      position: "bottom", // Place legend at the bottom to save vertical space
      fontSize: "10px", // Adjust the font size to reduce legend size
      itemMargin: {
        vertical: 0, // Add vertical margin to reduce legend clutter
      },
    },
    chart: {
      height: 500, // Set a fixed height to ensure uniform size
    },
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
    legend: {
      position: "bottom", // Place legend at the bottom to save vertical space
      fontSize: "10px", // Adjust the font size to reduce legend size
      itemMargin: {
        vertical: 1, // Add vertical margin to reduce legend clutter
      },
    },
    chart: {
      height: 500, // Set a fixed height to ensure uniform size
    },
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
    grid: {
      show: false, // This will remove the background grid lines
    },
    dataLabels: {
      formatter: (val: number) => `$${val.toLocaleString()}`,
    },
    colors: [
      "#0e0f2e",
      "#811f09",
      "#0c0e4b",
      "#054e49",
      "#3A3D40",
      "#2E4053",
      "#1C2833",
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

  const renderDonutStats = () => {
    if (dashboardData.byOwners.length === 0) {
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
            <Link
              style={{ fontSize: 12 }}
              to={`${import.meta.env.BASE_URL}administration/assets`}
            >
              Activos fijos
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <>
          <Row style={{ marginTop: 0, marginBottom: 30 }}>
            <Col xl={4} lg={6}>
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
                  height={300}
                  width="100%"
                />
              </div>
            </Col>
            <Col xl={4} lg={6}>
              <div style={{ padding: 10 }}>
                <p style={{ marginBottom: 20 }}>
                  Distribución por tipo de activo en {currency}
                </p>
                <ReactApexChart
                  options={{
                    ...chartOptionsPercentage,
                    labels: byTypePercentage.labels,
                  }}
                  series={byTypePercentage.series}
                  type="donut"
                  height={340}
                  width="100%"
                />
              </div>
            </Col>
            <Col xl={4} lg={6}>
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
                  height={300}
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </>
      </div>
    );
  };

  const renderCurrencyDropdown = () => {
    return (
      <div
        style={{
          marginTop: 30,
          marginRight: 20,
          display: "flex",
          zIndex: 100,
          flexDirection: "row",
        }}
      >
        <Dropdown className="h-3">
          <Dropdown.Toggle size="sm" color="default" type="button" className="">
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

  const renderLatestActivities = (activities) => {
    const isActivityEmpty = activities.length === 0;

    return (
      <Card.Body>
        <div
          className={!isActivityEmpty ? `timeline-label` : ""}
          style={{
            maxHeight: "500px",
            overflowX: "auto",
            whiteSpace: "nowrap",
          }}
        >
          {isActivityEmpty ? (
            <div
              className="text-center text-muted"
              style={{ marginTop: "50%" }}
            >
              No hay actividades recientes.
            </div>
          ) : (
            activities.map((activity, index) => (
              <div className="sales-activity mb-4 fs-13" key={index}>
                <span className="text-muted ms-5">{activity.date}</span>
                <h6 className="my-1 ms-5 fw-semibold">{activity.title}</h6>
                <p className="mb-0 ms-5 text-muted fs-12">
                  <Link to="#" className="text-azure fw-semibold p-0">
                    {activity.user}
                  </Link>{" "}
                  realizó la actividad.
                </p>
              </div>
            ))
          )}
        </div>
      </Card.Body>
    );
  };

  const renderByCountryStats = () => {
    return (
      <Row style={{ marginTop: 20, marginBottom: 50 }}>
        <Col xl={4} lg={6}>
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
              height={300}
              width="100%"
            />
          </div>
        </Col>

        <Col lg={4}>
          <WorldMap
            countries={dashboardData.countries}
            setTooltipContent={setContent}
          />
        </Col>
      </Row>
    );
  };

  const renderStats = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <div></div>

          <div style={{ marginBottom: -80 }}>{renderCurrencyDropdown()}</div>
        </div>

        <Row>
          <Col xl={3} lg={6}>
            <Card.Body className="card-body">
              <Row className="row align-items-center">
                <Col xs={2} className="text-center">
                  <span>
                    <i className="fe fe-activity text-black fs-24"></i>
                  </span>
                </Col>
                <Col xs={10}>
                  <p className="mb-0 fw-semibold text-muted-dark">
                    Total en activos registrados
                  </p>
                  <h4 className="mt-2 mb-1 text-dark fw-semibold">
                    $ {valueWithCurrencySelected.value}{" "}
                    {valueWithCurrencySelected.currency}
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Col>
          <Col xl={3} lg={6}>
            <Card.Body className="card-body">
              <Row className="row align-items-center">
                <Col xs={2} className="text-center">
                  <span>
                    <i className="fe fe-award text-black fs-24"></i>
                  </span>
                </Col>
                <Col xs={10}>
                  <p className="mb-0 fw-semibold text-muted-dark">
                    Total valor empresas
                  </p>
                  <h4 className="mt-2 mb-1 text-dark fw-semibold">
                    $ {valueCompaniesWithCurrencySelected.value}{" "}
                    {valueCompaniesWithCurrencySelected.currency}
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Col>
          <Col xl={4} lg={6} className="col-lg-4">
            <Card.Body className="card-body">
              <Row className="row align-items-center">
                <Col xs={2} className="text-center">
                  <span>
                    <i className="fe fe-layers text-black fs-24"></i>
                  </span>
                </Col>
                <Col xs={10}>
                  <p className="mb-0 fw-semibold text-muted-dark">
                    Numero de activos registrados
                  </p>
                  <h4 className="mt-2 mb-1 text-dark fw-semibold">
                    # {dashboardData.numberOfAssets}
                  </h4>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>

        <Row style={{ marginBottom: 30, marginTop: -20 }}>
          <ReactApexChart
            options={{
              ...options,
              xaxis: { categories: byAssetType.categories },
              plotOptions: {
                bar: {
                  horizontal: false,
                  distributed: true,
                  borderRadius: 6,
                },
              },
            }}
            series={byAssetType.series}
            type="bar"
            height={300}
          />
        </Row>

        {renderDonutStats()}
        {renderAssetCategories()}

        {renderByCountryStats()}
      </>
    );
  };

  const renderAssetCategories = () => {
    return (
      <>
        <Row style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}>
          {/* <p style={{ marginTop: 20, fontWeight: "bold", fontSize: 16 }}>
            - Categorias de activos
          </p> */}
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Arte, colecciones y otros</p>
            <div className="asset-background">
              <Link
                to={`${
                  import.meta.env.BASE_URL
                }administration/assets/artAndOthers`}
              >
                <img
                  src={collectionAsset}
                  alt="Collection Asset"
                  className="asset-image"
                />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Prestamos por cobrar</p>
            <div className="asset-background">
              <Link
                to={`${import.meta.env.BASE_URL}administration/assets/loan`}
              >
                <img src={loanAsset} alt="Loan Asset" className="asset-image" />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Capital privado</p>
            <div className="asset-background">
              <Link
                to={`${
                  import.meta.env.BASE_URL
                }administration/assets/privateEquity`}
              >
                <img
                  src={privateEquityAsset}
                  alt="Private Equity Asset"
                  className="asset-image"
                />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Bienes raices</p>
            <div className="asset-background">
              <Link
                to={`${
                  import.meta.env.BASE_URL
                }administration/assets/realState`}
              >
                <img
                  src={realstateAsset}
                  alt="Realstate Asset"
                  className="asset-image"
                />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Inversiones bursátiles</p>
            <div className="asset-background">
              <Link
                to={`${
                  import.meta.env.BASE_URL
                }administration/assets/stockInvestments`}
              >
                <img
                  src={stockAsset}
                  alt="Stock Asset"
                  className="asset-image"
                />
              </Link>
            </div>
          </Col>
          <Col md={3}>
            <p style={{ fontSize: 13 }}>Vehículos</p>
            <div className="asset-background">
              <Link
                to={`${import.meta.env.BASE_URL}administration/assets/vehicles`}
              >
                <img
                  src={volvoAsset}
                  alt="Volvo Asset"
                  className="asset-image"
                />
              </Link>
            </div>
          </Col>
        </Row>
      </>
    );
  };

  const renderActivitiesListAndCalendar = () => {
    return (
      <Row style={{ marginTop: 30, marginLeft: 20, marginRight: 20 }}>
        <Col xl={4} lg={12}>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>
            - Últimas actividades registradas
          </p>
          {renderLatestActivities(dashboardData.activities)}
        </Col>

        <Col xl={8} lg={12} style={{ marginBottom: 60 }}>
          <p style={{ fontWeight: "bold", fontSize: 16 }}>
            - Calendario de pagos, cobros y declaraciones
          </p>
          <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "title",
        right: "prev,next",
      }}
      eventContent={(eventInfo) => {
        const { type, category, coreId } = eventInfo.event.extendedProps;
        //@ts-ignore
        const baseUrl = `${import.meta.env.BASE_URL}administration/`;
        let linkTo = "/";

        // Dynamically determine the route based on the type and category
        switch (type) {
          case "payment":
            if (category === "insurance") {
              linkTo = `${baseUrl}insuranceDescription/${coreId}`;
            } else if (category === "propertyTax") {
              linkTo = `${baseUrl}propertyTaxDescription/${coreId}`;
            } else if (category === "debt") {
              linkTo = `${baseUrl}debtDescription/${coreId}`;
            } else if (category === "leasingPayment") {
              linkTo = `${baseUrl}leasingPaymentDescription/${coreId}`;
            } else if (category === "mantainance") {
              linkTo = `${baseUrl}mantainanceDescription/${coreId}`;
            }
            break;
          case "taxPerson":
            linkTo = `${baseUrl}taxes/${coreId}`;
            break;
          case "taxCompany":
            linkTo = `${baseUrl}company/${coreId}/tax`;
            break;
          case "collecting":
            if (category === "loan") {
              linkTo = `${baseUrl}loanDescription/${coreId}`;
            } else if (category === "rent") {
              linkTo = `${baseUrl}rentDescription/${coreId}`;
            }
            break;
          default:
            linkTo = "";
            break;
        }

        // Dynamically determine the color based on the type
        let backgroundColor;
        let borderColor;
        switch (type) {
          case "payment":
            backgroundColor = "#B22222"; // Color for payment
            borderColor = "#B22222"; // Border color for payment
            break;
          case "taxPerson":
            backgroundColor = "#6A5ACD"; // Color for tax
            borderColor = "#6A5ACD"; // Border color for tax
            break;
          case "taxCompany":
            backgroundColor = "#DAA520"; // Color for tax
            borderColor = "#DAA520"; // Border color for tax
            break;
          case "collecting":
            backgroundColor = "#3CB371"; // Color for collecting
            borderColor = "#3CB371"; // Border color for collecting
            break;
          default:
            backgroundColor = "gray"; // Default color
            borderColor = "gray"; // Default border color
            break;
        }

        return (
          <Link to={linkTo}>
            <div
              style={{
                fontSize: 11,
                color: "white",
                backgroundColor, // Apply dynamic background color
                border: `1px solid ${borderColor}`, // Apply dynamic border color
                padding: "2px 4px",
                borderRadius: "2px",
                width: '100%',
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              {eventInfo.event.title}
            </div>
          </Link>
        );
      }}
      events={dashboardData.calendarItems}
      editable={true}
      selectable={true}
      moreLinkText={(num) => `+${num} recordatorios`}
      selectMirror={false}
      dayMaxEvents={true}
      locale="es"
    />
        </Col>
      </Row>
    );
  };

  const renderViewSelected = () => {
    if (selectedView === "stats") {
      return renderStats();
    } else if (selectedView === "calendar") {
      return renderActivitiesListAndCalendar();
    }

    return null;
  };

  console.log('selected view', selectedView)
  return (
    <Fragment>
      <Row>
        <Card style={{ minHeight: 500, marginTop: 20 }}>
          <div
            style={{
              marginTop: 40,
              marginLeft: 20,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Card.Title style={{ fontSize: 20 }}>
              Family Office Familia Aldana Ríos
            </Card.Title>

            <div style={{ marginRight: 40, marginTop: -6 }}>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Desgloce patrimonial</Tooltip>}
              >
                <i
                  style={{
                    cursor: "pointer",
                    marginRight: 30,
                    color: selectedView === "stats" ? "#5488d2" : "black",
                  }}
                  className="fe fe-activity  fs-17"
                  onClick={() => setSelectedView("stats")}
                ></i>
              </OverlayTrigger>

              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Calendario de cumplimiento</Tooltip>}
              >
                <i
                  style={{
                    cursor: "pointer",
                    marginRight: 30,
                    color: selectedView === "calendar" ? "#5488d2" : "black",
                  }}
                  className="fe fe-calendar  fs-17"
                  onClick={() => setSelectedView("calendar")}
                ></i>
              </OverlayTrigger>
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Oportunidades y noticias</Tooltip>}
              >
                <i
                  style={{
                    cursor: "pointer",
                    marginRight: 30,
                    color: selectedView === "news" ? "#5488d2" : "black",
                  }}
                  className="fe fe-radio  fs-17"
                  onClick={() => setSelectedView("news")}
                ></i>
              </OverlayTrigger>
            </div>
          </div>
          {renderViewSelected()}
        </Card>
      </Row>
    </Fragment>
  );
}
