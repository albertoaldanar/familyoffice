import React, { Fragment, useCallback } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { providers } from "./providersData";

export default function Companies() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;

  const renderTable = () => {
    return (
      <Col xl={12}>
        <div style={{marginBottom: 40}}>
          {providers.map((provider) => (
            <div className="table-responsive">
              <Card.Title
                style={{ marginTop: 40, fontSize: 14, marginBottom: 23 }}
              >
                {provider.categoria}
              </Card.Title>
              <Table className="table border text-nowrap text-md-nowrap mb-0">
                <thead className="bg-light">
                  <tr>
                    <th>Nombre</th>
                    <th>Empresa</th>
                    <th>Teléfono</th>
                    <th>Correo</th>
                    <th>Puesto</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {provider.proveedores.map((proveedor, index) => (
                    <tr key={index}>
                      <td>{proveedor.nombre}</td>
                      <td>{proveedor.empresa}</td>
                      <td>{proveedor.telefono}</td>
                      <td>{proveedor.correo}</td>
                      <td>{proveedor.puesto}</td>
                      <td
                        style={{
                          cursor: "pointer",
                          textDecoration: "underline",
                          color: "#5488d2",
                        }}
                      >
                        <Link to={`${baseUrl}administration/providerDescription/${
                            provider.id
                          }/provider/${proveedor.id}`}
                        >
                        <i
                          className="fe fe-arrow-right text-black fs-15"
                        ></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
        </div>
      </Col>
    );
  };

  return (
    <Fragment>
      <Row>
        <div
          style={{
            minHeight: 550,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginTop: 10,
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              <i
                style={{ marginRight: 9 }}
                className="fe fe-book-open text-black fs-15"
              ></i>
              Proveedores de servicio y Contactos
            </Card.Title>
            <Button
              style={{
                marginRight: 15,
                alignSelf: "flex-end",
                justifyContent: "flex-end",
              }}
              size="sm"
              className="custom-button"
            >
              <Link
                style={{ color: "white" }}
                to={`${baseUrl}administration/providerCreate/standar`}
              >
                + Añadir proveedor
              </Link>
            </Button>
          </div>

          <div>{renderTable()}</div>
        </div>
      </Row>
    </Fragment>
  );
}
