import React, { Fragment, useState } from "react";
import { Button, Card, Col, Table, Row, Badge, Form, FormCheck } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { providers } from "./providersData";

export default function ProviderDescription() {
  const breadcrumbs = ["Administración", "Cobranza", "Arrendamientos"];
  const [isProviderMemberIC, setIsProviderMemberIC] = useState(true);
  const [isProviderisMemberFC, setIsProviderisMemberFC] = useState(true);
  const params = useParams();
  const providerCategorySelected = providers.find(
    (prov) => prov.id === Number(params.id)
  );

  console.log('params', params);

  if (!providerCategorySelected) {
    return <p>Not Found</p>;
  }

  const providerSelected = providerCategorySelected.proveedores.find(
    (acc) => acc.id === Number(params.providerId)
  );

  if (!providerSelected) {
    return <p>Not Found</p>;
  }

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderProviderServices = () => {

    if(providerSelected.registroDeServicios.length){
      return (
        <div className="table-responsive" style={{ marginTop: 15 }}>
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Fecha</th>
                <th>Concepto</th>
                <th>Documento o Entregable</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {providerSelected.registroDeServicios.map((idx, tb8) => (
                <tr key={tb8}>
                  <td>{idx.fecha}</td>
                  <td>{idx.concepto}</td>
                  <td>{addEllipsis(idx.documentoOEntrgable)}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}administration/providerService/${providerCategorySelected.id}/provider/${providerSelected.id}/service/${idx.id}`}>
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } 

    return <p style={{textAlign: 'center', marginTop: 40}}>Aún no se ha registrado servicios para este proveedor</p>;
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
          <h4 className="mb-3 fw-semibold">
            Proveedor de servicio {providerCategorySelected.categoria} - {providerSelected.nombre}
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
              marginBottom: 20, 
              marginTop: 20
            }}
          >
            <div>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Nombre de proveedor</dt>
                <dd>{providerSelected.nombre}</dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Empresa</dt>
                <dd>{providerSelected.empresa}</dd>
              </dl>
            </div>

            <div style={{ marginLeft: 150 }}>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Correo</dt>
                <dd
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {providerSelected.correo}
                </dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Teléfono</dt>
                <dd>{providerSelected.telefono}</dd>
              </dl>
            </div>

          </div>
          {
              providerSelected.isMemberFC && (
                <Row style={{ marginTop: -10, marginBottom: 20 }}>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      checked={isProviderisMemberFC}
                      onChange={(e) => setIsProviderisMemberFC(e.target.checked)}
                      label={`Este proveedor es parte del consejo Familiar (si deseas retirarlo haz uncheck en el checkbox)`}
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                </Row>
              )
            }

            {
              providerSelected.isMemberIC && (
                <Row style={{ marginTop: -10, marginBottom: 20 }}>
                <Form.Group className="mb-3 form-group">
                  <Form.Check
                    required
                    checked={isProviderMemberIC}
                    onChange={(e) => setIsProviderMemberIC(e.target.checked)}
                    label={`Este proveedor es parte del comite de inversión (si deseas retirarlo haz uncheck en el checkbox)`}
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
              </Row>
              )
            }
          <dl className="product-gallery-data1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <dt>Registro de servicios</dt>
              <Button
                style={{
                  marginRight: 10,
                }}
                variant="primary"
                size="sm"
                className=" mb-1"
              >
                 {/*// @ts-ignore */}
                <Link style={{ color: 'white' }} to={`${import.meta.env.BASE_URL}administration/providerNewService/${providerCategorySelected.id}/provider/${providerSelected.id}`}>
                  + Añadir servicio
                </Link>
              </Button>
            </div>
            {renderProviderServices()}
          </dl>
        </Card>
      </Row>
    </Fragment>
  );
}
