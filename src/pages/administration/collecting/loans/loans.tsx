import React, { Fragment } from "react";
import {
  Button,
  Badge,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { prestamos } from "../collectingData";
import { nextPaymentFormatDate } from "../../payments/paymentUtils";
import { Link } from "react-router-dom";

const prestamosIntrafamiliares = prestamos.filter(prestamo => prestamo.tipo === 'Intrafamiliar');
const prestamosTerceros = prestamos.filter(prestamo => prestamo.tipo === 'Tercero');

export default function LoansCollecting() {
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
          <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/loanCreate`}>
              + Añadir prestamo
            </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Prestamos a terceros
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Deudor</th>
                  <th>Monto otorgado</th>
                  <th>Total pagado</th>
                  <th>Por pagar</th>
                  <th>% interes</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {prestamosTerceros.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {idx.deudor}
                    </td>
                    <td>$ {idx.monto} {idx.moneda}</td>
                    <td>$ {idx.pagado} {idx.moneda}</td>
                    <td>$ {idx.pagado} {idx.moneda}</td>
                    <td>{idx.interes}</td>
                    <td>
                      {
                        nextPaymentFormatDate(idx.pagos) === 'Vencido' ? 
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
                          nextPaymentFormatDate(idx.pagos)
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
                      <Link to={`${import.meta.env.BASE_URL}administration/loanDescription/${idx.id}`}>
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
        Prestamos intrafamiliares
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
                <tr>
                  <th>Deudor</th>
                  <th>Monto otorgado</th>
                  <th>Total pagado</th>
                  <th>Por pagar</th>
                  <th>% interes</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {prestamosIntrafamiliares.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {idx.deudor}
                    </td>
                    <td>$ {idx.monto} {idx.moneda}</td>
                    <td>$ {idx.pagado} {idx.moneda}</td>
                    <td>$ {idx.pagado} {idx.moneda}</td>
                    <td>{idx.interes}</td>
                    <td>
                      {
                        nextPaymentFormatDate(idx.pagos) === 'Vencido' ? 
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
                          nextPaymentFormatDate(idx.pagos)
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
                      <Link to={`${import.meta.env.BASE_URL}administration/loanDescription/${idx.id}`}>
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
