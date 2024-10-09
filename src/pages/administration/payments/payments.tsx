import React, { Fragment } from "react";
import { Card, Nav, Row, Tab, Table, Col } from "react-bootstrap";
import InsurancePayment from "./insurances/insurances";
import PropertyTax from "./propertyTax/propertyTax";
import { Link } from "react-router-dom";
import Debt from "./debt/debt";
import Mantainance from "./mantainance/Mantainance";
import LeasingAndRents from "./leasingAndRents/LeasingAndRents";
import Taxes from "../taxes/taxes";
import { companies } from "../accounting/accountingData";
import { daysToAnualTax, daysUntilNextMonth17 } from "../taxes/taxesUtils";
import { renderFlag } from "../accounting/companyUtils";
import Collecting from "../collecting/collecting";

export default function Payments() {
  const renderPayments = () => {
    return (
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div >
          <Nav
            variant="pills"
            as="ul"
            className="nav panel-tabs mr-auto custom-nav"
          >
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first" href="#">
                Seguros
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="second">Prediales </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="third">Deudas</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="fourth">Arrendamientos</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="fifth">Mantenimientos</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        <Tab.Content style={{marginTop: 20}}>
          <Tab.Pane eventKey="first">
            <InsurancePayment />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <PropertyTax />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <Debt />
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <LeasingAndRents />
          </Tab.Pane>
          <Tab.Pane eventKey="fifth">
            <Mantainance />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    );
  };

  const renderCompanies = () => {
    const today = new Date();
    return (
      <Col xl={12} style={{ marginTop: 20 }}>
        <div style={{ marginTop: -25, marginBottom: 30 }}>
          <p style={{ fontStyle: "italic", fontSize: 13, color: "gray" }}>
            Fecha limite prox declaracion anual: {daysToAnualTax(today)}
          </p>
          <p
            style={{
              fontStyle: "italic",
              fontSize: 13,
              marginTop: -15,
              color: "gray",
            }}
          >
            Fecha limite prox declaracion mensual: {daysUntilNextMonth17(today)}
          </p>
        </div>

        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>Razon social</th>
                  <th>RFC</th>
                  <th>País</th>
                  <th>Valuación</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.nombre}</td>
                    <td>{idx.razonSocial}</td>
                    <td>{idx.rfc}</td>
                    <td>{renderFlag(idx.nationality)}</td>
                    <td>
                      ${idx.valuacion} {idx.moneda}
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL
                        }administration/company/${idx.id}/tax`}
                      >
                      <i
                        className="fe fe-arrow-right text-black fs-15"
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
            <div style={{ padding: 20}} className="tabs-menu1">
              <Nav as="ul" className="nav panel-tabs">
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="first" href="#">
                    <i
                      style={{ marginRight: 7 }}
                      className="fe fe-arrow-up-right text-black fs-15"
                    ></i>
                    Cuentas por pagar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="fourth" href="#">
                    <i
                      style={{ marginRight: 7 }}
                      className="fe fe-arrow-down-right text-black fs-15"
                    ></i>
                    Cuentas por cobrar
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-users text-black fs-15"
                    ></i>
                    Fiscal personas fisicas{" "}
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="third">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-briefcase text-black fs-15"
                    ></i>
                    Fiscal personas morales
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderPayments()}</Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Collecting />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Taxes />
              </Tab.Pane>
              <Tab.Pane eventKey="third">{renderCompanies()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Row>
    </Fragment>
  );
}
