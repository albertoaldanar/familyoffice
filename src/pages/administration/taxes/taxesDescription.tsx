import React, { Fragment } from "react";
import {
  Button,
  Card,
  Table,
  Row,
  Tab,
  Nav,
} from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { taxes } from "./taxesData";
import { taxesRules } from "./taxesUtils";
import { daysToAnualTax, daysUntilNextMonth17, daysUntilRIFDeclarationDeadline } from "./taxesUtils";

export default function Taxes() {
  const params = useParams();
  const taxUserSelected = taxes.find((prov) => prov.id === Number(params.id));

  let taxRuleForUser;

  if (!taxUserSelected) {
    return <p>Not Found</p>;
  }

  if (taxUserSelected.regimenFiscal) {
    taxRuleForUser = taxesRules.find(
      (rule) => rule.regimen === taxUserSelected.regimenFiscal
    ).declaracion;
  }

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderTaxReportYear = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              <th>Declaración</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taxUserSelected.declaraciones.anuales.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                <td>{idx.declaracion}</td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${ import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/anuales/report/${idx.id}`}>
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  const renderTaxReportMonth = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              <th>Mes</th>
              <th>Declaración</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taxUserSelected.declaraciones.mensuales.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                <td>{idx.mes}</td>
                <td>{idx.declaracion}</td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${ import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/mensuales/report/${idx.id}`}>
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  const renderTaxReportBimestral = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              <th>Mes</th>
              <th>Declaración</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taxUserSelected.declaraciones.bimestrales.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                <td>{idx.mes}</td>
                <td>{idx.declaracion}</td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${ import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/bimestrales/report/${idx.id}`}>
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  const renderReport = () => {
    if (taxRuleForUser.length > 1) {
      return (
        <div>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div className="tabs-menu1">
              <Nav as="ul" className="nav panel-tabs">
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="first" href="#">
                    Declaraciones Mensuales
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">Declaraciones anuales </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <dt></dt>
                  <Button
                    style={{
                      marginRight: 10,
                    }}
                    size="sm"
                    className="custom-button"
                  >
                    {/*// @ts-ignore */}
                    <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/mensuales/newReport`}>
                      + Añadir declaración mensual
                    </Link>
                  </Button>
                </div>
                {renderTaxReportMonth()}
              </Tab.Pane>
              <Tab.Pane eventKey="second">
              <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                  }}
                >
                  <dt></dt>
                  <Button
                    style={{
                      marginRight: 10,
                    }}
                    size="sm"
                    className="custom-button"
                  >
                    {/*// @ts-ignore */}
                    <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/anuales/newReport`}>
                      + Añadir declaración anual
                    </Link>
                  </Button>
                </div>
                {renderTaxReportYear()}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      );
    } else if (taxRuleForUser[0] === "Bimestral") {
      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <dt>Declaraciones Bimestrales</dt>
            <Button
              style={{
                marginRight: 10,
              }}
              size="sm"
              className="custom-button"
            >
              {/*// @ts-ignore */}
              <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/bimestrales/newReport`}>
                + Añadir declaración bimestral
              </Link>
            </Button>
          </div>
          {renderTaxReportBimestral()}
        </div>
      );
    } else if (taxRuleForUser[0] === "Anual") {
      return (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <dt>Declaraciones Anual</dt>
            <Button
              style={{
                marginRight: 10,
              }}
              size="sm"
              className="custom-button"
            >
              {/*// @ts-ignore */}
              <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/taxes/${taxUserSelected.id}/type/anuales/newReport`}>
                + Añadir declaración anual
              </Link>
            </Button>
          </div>
          {renderTaxReportYear()}
        </div>
      );
    }
  };

  const renderNextTaxReportDate = () => {
    const today = new Date();

    if (taxRuleForUser.length > 1) {
      return (
        <div>
          <div style={{ marginLeft: 150 }}>
            <dl style={{ marginTop: 15 }} className="product-gallery-data1">
              <dt>Fecha limite prox declaracion anual</dt>
              <dd >
                {daysToAnualTax(today)}
              </dd>
            </dl>
            <dl className="product-gallery-data1">
              <dt>Fecha limite prox declaracion mensual</dt>
              <dd>
                {daysUntilNextMonth17(today)}
              </dd>
            </dl>
          </div>
        </div>
      );
    } else if (taxRuleForUser[0] === "Bimestral") {
      return (
        <div style={{ marginLeft: 150 }}>
        <dl style={{ marginTop: 15 }} className="product-gallery-data1">
          <dt>Fecha limite prox declaracion bimestral</dt>
          <dd>
            {daysUntilRIFDeclarationDeadline(today)}
          </dd>
        </dl>
        </div>
      );
    } else if (taxRuleForUser[0] === "Anual") {
      return (
        <div style={{ marginLeft: 150 }}>
           <dl style={{ marginTop: 15 }} className="product-gallery-data1">
            <dt>Fecha limite prox declaracion Anual</dt>
            <dd>
              {daysToAnualTax(today)}
            </dd>
          </dl>
        </div>
      );
    }
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <h4 className="mb-3 fw-semibold">
            Declaraciones {taxUserSelected.nombre}
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <div>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>RFC</dt>
                <dd>{taxUserSelected.rfc}</dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Regimen fiscal</dt>
                <dd>{taxUserSelected.regimenFiscal}</dd>
              </dl>
            </div>

            <div style={{ marginLeft: 150 }}>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Constancia de situación fiscal</dt>
                <dd
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {taxUserSelected.cdsf}
                </dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Frecuencia de declaración</dt>
                <dd>{taxRuleForUser[0]} {taxRuleForUser[1] ?' - ' + taxRuleForUser[1] : ''}</dd>
              </dl>
            </div>
            {renderNextTaxReportDate()}
          </div>
          <dl className="product-gallery-data1">{renderReport()}</dl>
        </Card>
      </Row>
    </Fragment>
  );
}
