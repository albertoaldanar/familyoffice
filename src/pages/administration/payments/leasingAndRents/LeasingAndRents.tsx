import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrendamientos } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";
export default function LeasingAndRents() {
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
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/leasingCreate`}>
            + Añadir arrendamiento
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Arrendamientos
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Arrendador</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {arrendamientos.map((leasing, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {leasing.tipo}
                    </td>
                    <td>{leasing.arrendador}</td>
                    <td>{leasing.concepto}</td>
                    <td>${leasing.monto} {leasing.moneda}</td>
                    <td>
                      {
                        nextPaymentFormatDate(leasing.pagos) === 'Vencido' ? 
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
                          nextPaymentFormatDate(leasing.pagos)
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
                    <Link state={{ leasing }} to={`${import.meta.env.BASE_URL}administration/leasingPaymentDescription/${leasing.id}`}>
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
