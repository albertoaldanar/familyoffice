import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { prestamosIntrafamiliares, prestamosTerceros } from "../collectingData";

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
          + Añadir prestamo
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
                    <td>{idx.monto}</td>
                    <td>{idx.pagado}</td>
                    <td>{idx.pagado}</td>
                    <td>{idx.interes}</td>
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
                    <td>{idx.monto}</td>
                    <td>{idx.pagado}</td>
                    <td>{idx.pagado}</td>
                    <td>{idx.interes}</td>
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
