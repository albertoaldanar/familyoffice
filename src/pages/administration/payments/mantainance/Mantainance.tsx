import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { mantenimientos } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";
import { Link } from "react-router-dom";

export default function Mantainance() {
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
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/mantainanceCreate`}>
            + Añadir arrendamiento
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Mantenimientos
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Pago a:</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {mantenimientos.map((mantainance, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {mantainance.tipo}
                    </td>
                    <td>{mantainance.pagoA}</td>
                    <td>{mantainance.concepto}</td>
                    <td>${mantainance.monto} {mantainance.moneda}</td>
                    <td>
                      {
                        nextPaymentFormatDate(mantainance.pagos) === 'Vencido' ? 
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
                          nextPaymentFormatDate(mantainance.pagos)
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
                    <Link state={{ mantainance }} to={`${import.meta.env.BASE_URL}administration/mantainanceDescription/${mantainance.id}`}>
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
