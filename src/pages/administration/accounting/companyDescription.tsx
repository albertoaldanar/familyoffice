import React, { useState, Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Table,
  Row,
  Form,
  Tab,
  Nav,
} from "react-bootstrap";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { companies } from "./accountingData";
import FileView from "./components/fileView";
import FileUpload from "./components/fileUpload";
import ResultsChart from "./components/resultsChart";
import NotFoundSearch from "../../shared/notFoundSearch";
import { useParams, Link } from "react-router-dom";

export default function CompanyDescription() {
  const breadcrumbs = ["Administración", "Empresa"];
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dic'];
  const params = useParams();
  const companySelected = companies.find(
    (company) => company.id === Number(params.id)
  );

  if (!companySelected) {
    return <NotFoundSearch />
  }

  const currentYear = new Date().getFullYear();
  const mensualesReports = companySelected.reports.mensuales;
  const anualReports = companySelected.reports.anuales;
  const currentYearString = currentYear.toString();
  
  const isDefaultCurrentYear = mensualesReports.length > 0 
    ? mensualesReports.find((report) => report.year === currentYearString)
    : null;
  
  const defaultYear = isDefaultCurrentYear
    ? currentYearString
    : (mensualesReports.length > 0 
        ? mensualesReports[mensualesReports.length - 1].year 
        : null);

  const [yearSelected, setYearSelected] = useState(defaultYear);

  const egresosArray: number[] = [];
  const ventasArray: number[] = [];
  const utilidadArray: number[] = [];

  const egresosArrayAnual: number[] = [];
  const ventasArrayAnual: number[] = [];
  const utilidadArrayAnual: number[] = [];

  const accountingYearsSet: Set<string> = new Set();

  const accountingYears: string[] = Array.from(accountingYearsSet).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  const years = anualReports.length ? anualReports.map(anual => anual.year) : [];

  if(mensualesReports.length){
    mensualesReports.forEach((report) => {
      accountingYearsSet.add(report.year);
    });

    mensualesReports.forEach((report) => {
      report.accounting.forEach((acc) => {
        if (acc.year === yearSelected) {
          egresosArray.push(parseFloat(acc.egresos));
          ventasArray.push(parseFloat(acc.ventas));
          utilidadArray.push(parseFloat(acc.utilidad));
        }
      });
    });
  }

  if(anualReports.length){
    anualReports.forEach((report) => {
      egresosArrayAnual.push(parseFloat(report.egresos));
      ventasArrayAnual.push(parseFloat(report.ventas));
      utilidadArrayAnual.push(parseFloat(report.utilidad));
    });
  }

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  function currencyFormat(num: number) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  const renderLegal = () => {
    return (
      <>
        <Row>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta constitutiva
            </Form.Label>
            {companySelected.actaConstitutiva ? (
              <FileView
                title="Declaracion ISR"
                fileName={companySelected.actaConstitutiva}
              />
            ) : (
              <div>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta de asamblea ordinaria
            </Form.Label>
            {companySelected.actaAsamblea ? (
              <FileView
                title="Declaracion ISR"
                fileName={companySelected.actaAsamblea}
              />
            ) : (
              <div>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </div>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta de asamblea extraordinaria
            </Form.Label>
            {companySelected.actaAsambleaExtraordinaria ? (
              <FileView
                title="Acta asamble extraordinaria"
                fileName={companySelected.actaAsambleaExtraordinaria}
              />
            ) : (
              <div>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </div>
            )}
          </Form.Group>

          <Row style={{ marginTop: 40 }}>
            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">Poderes</Form.Label>
              {companySelected.poderes ? (
                <FileView
                  title="Declaracion ISR"
                  fileName={companySelected.poderes}
                />
              ) : (
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">
                Actas de dividendos
              </Form.Label>
              {companySelected.actasDividendos ? (
                <FileView
                  title="Declaracion ISR"
                  fileName={companySelected.actasDividendos}
                />
              ) : (
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">
                Constancia de Identificacion fiscal
              </Form.Label>
              {companySelected.cif ? (
                <FileView
                  title="Declaracion ISR"
                  fileName={companySelected.cif}
                />
              ) : (
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              )}
            </Form.Group>
          </Row>
        </Row>
      </>
    );
  };

  const renderCompany = () => {
    if (mensualesReports.length > 0) {
      let yearsReport = mensualesReports.find(
        (rep) => rep.year === yearSelected
      );

      const reports = yearsReport.accounting;

      return (
        <div className="table-responsive">
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Mes</th>
                <th>Cumplimiento</th>
                <th>Utilidad neta</th>
                <th>Declaración ISR</th>
                <th>Declaración IVA</th>
                <th>DIOT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.isr}>
                  <td>{report.month}</td>
                  <td style={{ textAlign: "center" }}>
                    {(() => {
                      const accountingTasks = [
                        report.isr,
                        report.diot,
                        report.iva,
                        report.utilidad,
                      ];
                      const numberOfUploads = accountingTasks.filter(
                        (task) => task.length
                      ).length;
                      return `${numberOfUploads}/4`;
                    })()}
                  </td>
                  <td>
                    {currencyFormat(parseFloat(report.utilidad))}{" "}
                    {companySelected.moneda}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.isr)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.iva)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.diot)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}administration/company/${companySelected.id}/report/${report.id}/type/mensuales`}>
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return <p style={{textAlign: 'center', marginTop: 40}}>Aún no se ha registrado ninguna declaración mensual</p>;
  };

  const renderAnualTaxReport = () => {
    if (companySelected.reports.anuales.length > 0) {
      return (
        <div className="table-responsive">
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Año</th>
                <th>Cumplimiento</th>
                <th>Utilidad neta</th>
                <th>Declaración ISR</th>
                <th>Declaración IVA</th>
                <th>DIOT</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {companySelected.reports.anuales.map((report) => (
                <tr key={report.isr}>
                  <td>{report.year}</td>
                  <td style={{ textAlign: "center" }}>
                    {(() => {
                      const accountingTasks = [
                        report.isr,
                        report.diot,
                        report.iva,
                        report.utilidad,
                      ];
                      const numberOfUploads = accountingTasks.filter(
                        (task) => task.length
                      ).length;
                      return `${numberOfUploads}/4`;
                    })()}
                  </td>
                  <td>
                    {currencyFormat(parseFloat(report.utilidad))}{" "}
                    {companySelected.moneda}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.isr)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.iva)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.diot)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}administration/company/${companySelected.id}/report/${report.id}/type/anuales`}>
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return <p style={{textAlign: 'center', marginTop: 40}}>Aún no se ha registrado ninguna declaración anual</p>;
  }

  const renderTaxReports = () => {
    return (
      <div style={{marginTop: 10}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-tax">
        <div className="tabs-menu2" style={{marginBottom: 10}}>
          <Nav variant="pills" as="ul" className="nav panel-tabs mr-auto custom-nav">
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first-tax" href="#">
                Declraración mensual
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="second-tax">Declaración anual </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-tax">
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >

                  <div style={{ marginBottom: 30 }}>
                    {mensualesReports.length > 0 && renderYearsDropdown()}
                  </div>

                  <div>
                    <Button variant="primary" size="sm" className=" mb-1">
                      {/*// @ts-ignore */}
                      <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyNewReport/${companySelected.id}/type/mensual`}>
                        + Añadir declaración mensual
                      </Link>
                    </Button>
                  </div>
                </div>
                {renderCompany()}
              </>
            </Tab.Pane>

            <Tab.Pane eventKey="second-tax">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 7,
                    marginBottom: 7,
                  }}
                >
                  <div style={{ marginBottom: 30 }}>
                  </div>

                  <div style={{marginBottom: 10}}>
                    <Button variant="primary" size="sm" className=" mb-1">
                      {/*// @ts-ignore */}
                      <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyNewReport/${companySelected.id}/type/anual`}>
                        + Añadir declaración anual
                      </Link>
                    </Button>
                  </div>
                </div>
              {renderAnualTaxReport()}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

  const renderYearsDropdown = () => {
    return (
      <div>
        <Dropdown className="h-3">
          <Dropdown.Toggle size="sm" color="default" type="button" className="">
            {yearSelected} <span className="caret"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            <>
              {accountingYears.map((year) => {
                return (
                  <Dropdown.Item
                    onClick={() => setYearSelected(year.toString())}
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

  const renderFinance = () => {
    return(
      <div style={{marginTop: 10}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-finance">
        <div className="tabs-menu2" style={{marginBottom: 10}}>
          <Nav variant="pills" as="ul" className="nav panel-tabs mr-auto custom-nav">
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first-finance" href="#">
                Finanzas mensuales
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="second-finance">Finanzas anuales </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-finance">
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div></div>
                  {anualReports.length > 0 && renderYearsDropdown()}
                </div>
                {
                  anualReports.length > 0 ? (
                    <ResultsChart
                      categories={months}
                      utilidad={utilidadArray}
                      egresos={egresosArray}
                      ventas={ventasArray}
                    />
                  ) : (
                    <p style={{textAlign: 'center', marginTop: 40}}>Aún no se ha registrado ninguna reporte financiero mensual</p>
                  )
                }
              </>
            </Tab.Pane>

            <Tab.Pane eventKey="second-finance">
              {
                anualReports.length > 0 ? (
                  <ResultsChart
                    categories={years}
                    utilidad={utilidadArrayAnual}
                    egresos={egresosArrayAnual}
                    ventas={ventasArrayAnual}
                  />
                ) : (
                  <p style={{textAlign: 'center', marginTop: 40}}>Aún no se ha registrado ninguna reporte financiero anual</p>
                )
              }

            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    )
  }

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ paddingBottom: 20 }}>
          <Card.Title
            style={{ marginLeft: 15, marginBottom: 0, marginTop: 35 }}
          >
            {companySelected.razonSocial}
          </Card.Title>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                      Fiscal
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">Finanzas </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">Legal </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fourth" href="#">
                      Datos generales
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderTaxReports()}</Tab.Pane>

              <Tab.Pane eventKey="second">
                {renderFinance()}
              </Tab.Pane>
              <Tab.Pane eventKey="third">{renderLegal()}</Tab.Pane>

              <Tab.Pane eventKey="fourth">
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ marginLeft: 10 }}>
                    <dl
                      style={{ marginTop: 15 }}
                      className="product-gallery-data1"
                    >
                      <dt>Nombre comercial</dt>
                      <dd>{companySelected.nombre}</dd>
                    </dl>
                    <dl className="product-gallery-data1">
                      <dt>RFC</dt>
                      <dd>{companySelected.rfc}</dd>
                    </dl>
                    <dl className="product-gallery-data1">
                      <dt>Moneda de operación</dt>
                      <dd>{companySelected.moneda}</dd>
                    </dl>
                  </div>

                  <div style={{ marginLeft: 150 }}>
                    <dl
                      style={{ marginTop: 15 }}
                      className="product-gallery-data1"
                    >
                      <dt>Valuación</dt>
                      <dd>
                        $ {companySelected.valuacion} {companySelected.moneda}
                      </dd>
                    </dl>
                    <dl className="product-gallery-data1">
                      <dt>Dirección Fiscal</dt>
                      <dd>{companySelected.direccionFiscal}</dd>
                    </dl>
                    <dl className="product-gallery-data1">
                      <dt>Año de fundación</dt>
                      <dd>{companySelected.fundacion}</dd>
                    </dl>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Row>
    </Fragment>
  );
}
