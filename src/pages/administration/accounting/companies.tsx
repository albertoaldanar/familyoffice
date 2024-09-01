import React, { Fragment } from "react";
import { Button, Card, Col, Table, Row, Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "./companyUtils";
import { companies, fideicomisos } from "./accountingData";

export default function Companies() {
  const renderCompanies = () => {
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
            variant="primary"
            size="sm"
            className=" mb-1"
          >
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyCreate`}>
              + Añadir personas morales
            </Link>
          </Button>
        </div>
        <div className="table-responsive">
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Razon social</th>
                <th>Valuación</th>
                <th>RFC</th>
                <th>País</th>
                <th>Accionistas</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {companies.map((idx, tb8) => (
                <tr key={tb8}>
                  <td>{idx.razonSocial}</td>
                  <td>
                    ${idx.valuacion} {idx.moneda}
                  </td>
                  <td>{idx.rfc}</td>
                  <td>{renderFlag(idx.nationality)}</td>
                  <td>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {idx.owners.map((owner, index) => (
                        <div key={index} style={{ fontSize: 13 }}>
                         - {owner.name}: {owner.pct}% <br />
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
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
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
            variant="primary"
            size="sm"
            className=" mb-1"
          >
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/trustCreate`}
            >
              + Añadir fideicomiso
            </Link>
          </Button>
        </div>
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
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}administration/trustDescription/${idx.id}`}
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Col>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ minHeight: 500, marginTop: 20 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div
              style={{
                paddingBottom: 0,
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
                          className="fe fe-file-text text-black fs-15"
                        ></i>
                        Fideicomisos
                      </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderCompanies()}</Tab.Pane>

              <Tab.Pane eventKey="second">{renderTrusts()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Row>
    </Fragment>
  );
}
