import React, { Fragment } from "react";
import { Button, Card, Col, Table, Row, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "./companyUtils";
import { companies, fideicomisos } from "./accountingData";

export default function Companies() {
  const renderCompanies = () => {
    return (

      <Col xl={12}>
        <Row style={{marginBottom: 15}}>
            <Col lg={3} className="col-lg-4">
              <div style={{ marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-briefcase fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Total valuación de personas morales
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      $53,00,00.00{" "}
                      MXN
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={3} className="col-lg-4">
              <div style={{marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-phone-outgoing fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Total prestamos por cobrar
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      $53,00,00.00{" "}
                      MXN
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
            {/* <Col lg={3} className="col-lg-4">
              <div style={{marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-phone-outgoing fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Total prestamos por cobrar
                    </p>
                    <h3 className="mt-2 mb-1 text-dark fw-semibold">
                      $53,00,00.00{" "}
                      MXN
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col> */}
          </Row>
          <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <div></div>
          <Button
            style={{
              marginRight: 15,
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            }}
            size="sm"
            className="custom-button"
          >
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyCreate`}>
              + Añadir personas morales
            </Link>
          </Button>
        </div>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Razon social</th>
                  <th>Valuación</th>
                  <th>RFC</th>
                  <th>País</th>
                  <th>Accionistas familiares</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.razonSocial}</td>
                    <td>
                      $ {idx.valuacion} {idx.moneda}
                    </td>
                    <td>{idx.rfc}</td>
                    <td>{renderFlag(idx.nationality)}</td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {idx.owners.map((owner, index) => (
                          <div key={index} style={{ fontSize: 12 }}>
                          - {owner.name}: <strong>{owner.pct}</strong>% <br />
                          </div>
                        ))}
                      </div>
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/company/${
                          idx.id
                        }/company`}
                      >
                        <i
                          className="fe fe-arrow-right fs-15"
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    );
  };

  const renderTrusts = () => {
    return (
      <Col xl={12}>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <div></div>
          <Button
            style={{
              marginRight: 15,
              alignSelf: "flex-end",
              justifyContent: "flex-end",
            }}
            size="sm"
            className="custom-button"
          >
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/trustCreate`}
            >
              + Añadir fideicomiso
            </Link>
          </Button>
        </div>

        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Numero de fideicomiso</th>
                  <th>Fiduciario (Banco)</th>
                  <th>País</th>
                  <th>Fideicomisario</th>
                  <th>Fideicomitentes</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {fideicomisos.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.trustNumber}</td>
                    <td>{idx.trusteeBank}</td>
                    <td>{renderFlag(idx.country)}</td>
                    <td>{idx.trustee}</td>
                    <td>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {idx.trustors.map((owner, index) => (
                          <div key={index} style={{ fontSize: 13 }}>
                          - {owner.name} <br />
                          </div>
                        ))}
                      </div>
                    </td>
                    <td>
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/trustDescription/${idx.id}`}
                      >
                        <i
                          className="fe fe-arrow-right fs-15"
                        ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ minHeight: 550}}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div
              style={{
                paddingBottom: 8,
                paddingLeft: 10,
                marginTop: 20,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-briefcase text-black fs-15"
                    ></i>
                      Personas morales
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-file text-black fs-15"
                        ></i>
                        Fideicomisos
                      </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content style={{marginTop: 20}}>
              <Tab.Pane eventKey="first">{renderCompanies()}</Tab.Pane>

              <Tab.Pane eventKey="second">{renderTrusts()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Row>
    </Fragment>
  );
}
