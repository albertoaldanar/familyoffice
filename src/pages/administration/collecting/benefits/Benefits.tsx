import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { prestamosIntrafamiliares, prestamosTerceros } from "../collectingData";
import { dividends } from "../collectingData";

export default function BenefitsCollecting() {
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
          + Añadir cobro regalias
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
        Regalias
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Fecha de pago</th>
                  <th>Se pago a:</th>
                  <th>Empresa/Entidad</th>
                  <th>Monto</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {dividends.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>
                      {idx.fechaCobro}
                    </td>
                    <td>{idx.sePagoA}</td>
                    <td>{idx.empresa}</td>
                    <td>{idx.monto}</td>
                    <td>{idx.proxCobro}</td>
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
                ))}
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
}
