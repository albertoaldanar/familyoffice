import React, { Fragment } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { taxes } from "./taxesData";
import { taxesRules, daysUntilRIFDeclarationDeadline, daysToAnualTax, closestReportDayForMultipleReports } from "./taxesUtils";

export default function Taxes() {
  const validateDaysToReport = (tax) => {
    let reportFrequence = taxesRules.find(taxRule => tax.regimenFiscal === taxRule.regimen).declaracion;
    const today = new Date();

    if(reportFrequence.length === 1){
      if(reportFrequence[0] === 'Bimestral'){
        return daysUntilRIFDeclarationDeadline(today, true);
      } else if(reportFrequence[0] === 'Anual') {
        return daysToAnualTax(today, true);
      }
    } else {
      return closestReportDayForMultipleReports(today)
    }

    return ''
  }

  const renderTable = () => {
    return (
      <div className="table-responsive" style={{marginBottom: 20}}>
        <Table className="table border text-nowrap text-md-nowrap mb-0" style={{marginTop: 20}}>
          <thead className="bg-light">
            <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Regimen fiscal</th>
              <th>Prox dia limite declaración</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {taxes.map((tax, index) => {
            const daysToPay = validateDaysToReport(tax);

            return (
              <tr key={index}>
                <td>{tax.nombre}</td>
                <td>{tax.rfc}</td>
                <td>{tax.regimenFiscal}</td>
                <td>
                  {daysToPay}
                </td>
                <td
                  style={{
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    color: '#5488d2',
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL}administration/taxes/${tax.id}`}>
                    Ver
                  </Link>
                </td>
              </tr>
            );
          })}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: -20 }}>
              Gestión fiscal
            </Card.Title>
          </div>

          <p style={{marginTop: 15, marginLeft: 15, color: 'gray', fontSize: 12}}>Solo las personas fisicas del organigrama familiar que pertenezcan a un regimen fiscal como persona fisica, apareceran aqui.</p>
          <p style={{ marginLeft: 15, color: 'gray', marginTop: -20, fontSize: 12}}>Si quieres añadir a una persona mas, añade un regimen en su perfil de miembro de organigrama familiar.</p>

          {renderTable()}
      </Row>
    </Fragment>
  );
}
