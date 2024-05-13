import React, { useState, Fragment } from "react";
import { Button, Card, Col, Dropdown, Table, Row } from "react-bootstrap";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { accounting } from "./accountingData";

export default function Accounting() {
  const breadcrumbs = ["Administración", "Contabilidad"];
  const currentYear = new Date().getFullYear();
  const [yearSelected, setYearSelected] = useState(currentYear.toString());

  const accountingYearsSet: Set<string> = new Set();
  accounting.forEach((company) => {
    company.reports.forEach((report) => {
      accountingYearsSet.add(report.year);
    });
  });

  const accountingYears: string[] = Array.from(accountingYearsSet).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderCompany = () => {
    if (accounting.length) {
      return accounting.map((company) => {
        let yearsReport = company.reports.find(
          (report) => report.year === yearSelected
        );

        if (yearsReport !== undefined) {
          return (
            <div>
              <Card.Title
                style={{ marginLeft: 15, marginBottom: 20, marginTop: 45 }}
              >
                {company.nombre}
              </Card.Title>
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
                  {yearsReport.accounting.map((report) => {
                    const reportTasks = [ report.isr, report.diot, report.iva, report.utilidad ];
                    const numberOfUploads = reportTasks.filter(task => task.length).length;
                    
                    return (
                      <tr key={report.isr}>
                        <td>{report.month}</td>
                        <td style={{textAlign: 'center'}}>{numberOfUploads}/4</td>
                        <td>{report.utilidad}</td>
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
                          Ver
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginLeft: 15,
                  marginTop: 5,
                  fontSize: 13,
                  color: "#5488d2",
                }}
              >
                + Añadir reporte
              </div>
              </div>
            </div>
          );
        }

        return;
      });
    }
  };

  const renderYearsDropdown = () => {
    return (
      <div style={{ marginLeft: 10, marginTop: 10 }}>
        <Dropdown className="me-2 my-2">
          <Dropdown.Toggle color="default" type="button" className="">
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

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ paddingBottom: 40 }}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginBottom: 0,
              marginTop: 25,
            }}
          >
            <div>{renderYearsDropdown()}</div>
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
              + Añadir empresa
            </Button>
          </div>
          {renderCompany()}
        </Card>
      </Row>
    </Fragment>
  );
}
