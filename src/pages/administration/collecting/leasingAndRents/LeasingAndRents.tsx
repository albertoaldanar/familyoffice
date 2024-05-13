import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { arrendamientos } from "../collectingData";

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
          + Añadir arrendamiento
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
                    <td>{idx.monto}</td>
                    <td>{idx.proxpago}</td>
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
