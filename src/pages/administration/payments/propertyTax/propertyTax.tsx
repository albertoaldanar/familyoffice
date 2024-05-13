import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { prediales } from "../paymentsData";
import { Link } from "react-router-dom";
import { nextPaymentFormatDate } from "../paymentUtils";

export default function PropertyTax() {
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
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/propertyTaxCreate`}>
            + Añadir predial
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Prediales de propiedades
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Propiedad</th>
                  <th>Monto</th>
                  <th>Moneda</th>
                  <th>Pagar en</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {prediales.map((taxProperty, tb8) => (
                  <tr key={tb8}>
                    <td
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      {taxProperty.nombre}
                    </td>
                    <td>${taxProperty.monto}</td>
                    <td>{taxProperty.moneda}</td>
                    <td>
                      {
                        nextPaymentFormatDate(taxProperty.pagos) === 'Vencido' ? 
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
                          nextPaymentFormatDate(taxProperty.pagos)
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
                    <Link state={{ taxProperty }} to={`${import.meta.env.BASE_URL}administration/propertyTaxDescription/${taxProperty.id}`}>
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
