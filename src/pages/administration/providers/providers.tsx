import React, { Fragment, useCallback } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { providers } from "./providersData";
//@ts-ignore
import Pageheader from "../../../layouts/pageheader/pageheader";

export default function Companies() {
  const breadcrumbs = ["Administración", "Proveedores de servicio"];

  const renderTable= () => {
    return (
      <Col xl={12}>
        <Card style={{borderWidth: 0}}>
          {providers.map((provider) => (
           <div className="table-responsive" >
              <Card.Title style={{ marginTop: 40 }}>
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
                          {/*// @ts-ignore */}
                          <Link to={`${ import.meta.env.BASE_URL }administration/providerDescription/${provider.id}/provider/${proveedor.id}`}>
                            Ver
                          </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ))}
        </Card>
      </Col>
    );
  };

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ minHeight: 400 }}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginTop: 10
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              Proveedores de servicio / Directorio
            </Card.Title>
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
              <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/providerCreate/`}>
                + Añadir proveedor
              </Link>
            </Button>
          </div>

          <div>
            {renderTable()}
          </div>
        </Card>
      </Row>
    </Fragment>
  );
}
