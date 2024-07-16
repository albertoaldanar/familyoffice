import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { creditos } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";

export default function Debt() {

  const creditoss = creditos.filter(credito => credito.tipo === 'Credito');
  const prestamosTerceros = creditos.filter(credito => credito.tipo === 'Terceros');

  return (
    <Fragment>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginBottom: 15,
          marginTop: -30,
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
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/debtCreate/type/null/itemId/null`}>
            + Añadir deuda
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Creditos
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Acreedor</th>
                  <th>Monto otorgado</th>
                  <th>Total pagado</th>
                  <th>Por pagar</th>
                  <th>% interes</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {creditoss.map((debt, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {debt.acreedor}
                    </td>
                    <td>${debt.monto} {debt.moneda}</td>
                    <td>${debt.pagado}  {debt.moneda}</td>
                    <td>${debt.pagado} {debt.moneda}</td>
                    <td>{debt.interes}</td>
                    <td>
                      {
                        nextPaymentFormatDate(debt.pagos) === 'Vencido' ? 
                          (
                            <div style={{marginTop: 2}}>
                              <Badge
                                bg="danger-transparent"
                                className={`me-2 my-1 Primary`}
                              >
                                Vencido
                              </Badge> 
                            </div>
                          ) : 
                          nextPaymentFormatDate(debt.pagos)
                      }
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link state={{ debt }} to={`${import.meta.env.BASE_URL}administration/debtDescription/${debt.id}`}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>

      <Card.Title style={{ marginLeft: 15, marginBottom: 20, marginTop: 60 }}>
        Prestamos de terceros
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
                <tr>
                  <th>Acreedor</th>
                  <th>Monto otorgado</th>
                  <th>Total pagado</th>
                  <th>Por pagar</th>
                  <th>% interes</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {prestamosTerceros.map((debt, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {debt.acreedor}
                    </td>
                    <td>${debt.monto} {debt.moneda}</td>
                    <td>${debt.pagado}  {debt.moneda}</td>
                    <td>${debt.pagado} {debt.moneda}</td>
                    <td>${debt.interes}</td>
                    <td>{debt.proxpago}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link state={{ debt }} to={`${import.meta.env.BASE_URL}administration/debtDescription/${debt.id}`}>
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
}
