import React, { Fragment } from "react";
import { Button, Card, Col, Table, Row, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import { Link } from "react-router-dom";
import { prediales } from "../paymentsData";
import { useParams } from "react-router-dom";
import { isDateDefeated } from "../paymentUtils";

export default function PropertTaxDescription(props) {
  const breadcrumbs = ["Administración", "Pagos", "Seguro"];

  const params = useParams();
  const taxProperty = prediales.find(predial => predial.id === Number(params.id));

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  const renderStatus = (isPayed: boolean, limitePago: string) => {
    if(!isPayed){
      if(isDateDefeated(limitePago)){
        return (
          <div>
            <Badge
              bg="danger-transparent"
              className={`me-2 my-1 Primary`}
            >
              Vencido
            </Badge>
          </div>
        )
      } else {
        return (
          <Badge
            bg="info-transparent"
            className={`me-2 my-1 Primary`}
          >
            Por pagar
          </Badge>
        )
      }
    }

    return (
      <div>
        <Badge
          bg="secondary-transparent"
          className={`me-2 my-1 Primary`}
        >
          Pagado
        </Badge>
      </div>
    )
  }

  const renderInsurancePayments = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap  mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              <th>Vigencia del</th>
              <th>Vigencia al</th>
              <th>Fecha limite pago</th>
              <th>Monto</th>
              <th>Estatus</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {taxProperty.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                <td>{idx.vigenciaDel}</td>
                <td>{idx.vigenciaAl}</td>
                <td>{idx.limitePago}</td>
                <td>${idx.monto} {taxProperty.moneda}</td>
                <td>
                  {/*// @ts-ignore */}
                  {renderStatus((idx.fechaDePago && (idx.comprobantePago || idx.facturaOrecibo)), idx.limitePago)}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {addEllipsis(idx.comprobantePago)}
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link state={{name: 'alberto'}} to={`${import.meta.env.BASE_URL}administration/propertyTaxPayment/${taxProperty.id}/payment/${idx.id}`}>
                  Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ padding: 30 }}>
          <h4 className="mb-3 fw-semibold">
            Predial - {taxProperty.nombre}
          </h4>
          <dl style={{ marginTop: 15 }} className="product-gallery-data1">
            <dt>Dirección de propiedad</dt>
            <dd>{taxProperty.direccion}</dd>
          </dl>
          <dl className="product-gallery-data1">
            <dt>Vigencia</dt>
            <dd>
              Del {taxProperty.vigenciaDel} al {taxProperty.vigenciaAl}{" "}
            </dd>
          </dl>
          <dl className="product-gallery-data1">
            <div style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'row'}}>
              <dt>Registro de pagos</dt>
              <Button
                style={{
                  marginRight: 10,
                }}
                variant="primary"
                size="sm"
                className=" mb-1"
              >
                  {/*// @ts-ignore */}
                  <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/propertyTaxNewPayment/${taxProperty.id}`}>
                    + Añadir pago
                  </Link>
              </Button>
            </div>
            {renderInsurancePayments()}
          </dl>
        </Card>
      </Row>
    </Fragment>
  );
}
