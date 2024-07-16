import React, { Fragment } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrendamientos } from "../collectingData";
import { nextPaymentFormatDate } from "../../payments/paymentUtils";

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
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/rentCreate/type/null/itemId/null`}>
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
                  <th>Arrendadatario</th>
                  <th>Concepto</th>
                  <th>Monto</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {arrendamientos.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {idx.tipo}
                    </td>
                    <td>{idx.arrendatario}</td>
                    <td>{idx.concepto}</td>
                    <td>$ {idx.monto} {idx.moneda}</td>
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
                      <Link to={`${import.meta.env.BASE_URL}administration/rentDescription/${idx.id}`}>
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
