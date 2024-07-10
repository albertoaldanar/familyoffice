import React, { Fragment } from "react";
import { Button, Card, Col, Table, Row, Badge } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import { Link } from "react-router-dom";
import { mantenimientos } from "../paymentsData";
import { useParams } from "react-router-dom";
import { isDateDefeated } from "../paymentUtils";
import { nextPaymentFormatDate } from "../paymentUtils";

export default function MantainanceDescription(props) {
  const breadcrumbs = ["Administración", "Pagos", "Seguro"];
  const params = useParams();
  const mantainance = mantenimientos.find(mantenimiento => mantenimiento.id === Number(params.id));

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

  const renderMantainancePayments = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap  mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              {mantainance.frecuenciaDePago !== "Anual" && <th>Mes</th>}
              <th>Fecha limite pago</th>
              <th>Monto</th>
              <th>Estatus</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mantainance.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                {mantainance.frecuenciaDePago !== "Anual" && <td>{idx.mes}</td>}
                <td>{idx.limitePago}</td>
                <td>${idx.monto} {mantainance.moneda}</td>
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
                  <Link to={`${import.meta.env.BASE_URL}administration/mantainancePayment/${mantainance.id}/payment/${idx.id}`}>
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
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <h4 className="mb-3 fw-semibold">
            Mantenimiento {mantainance.tipo} - {mantainance.concepto}
          </h4>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
              marginBottom: 20, 
              marginTop: 5
            }}
          >
            <div>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Realizar pago a</dt>
                <dd>{mantainance.pagoA}</dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Frecuencia de pago</dt>
                <dd>{mantainance.frecuenciaDePago}</dd>
              </dl>
            </div>


            <dl style={{ marginTop: 15, marginLeft: 150 }}>
              <dt>Estatus de pago</dt>
              <dd>
                {nextPaymentFormatDate(mantainance.pagos) === "Vencido" ? (
                  <div style={{ marginTop: 2 }}>
                    <Badge
                      bg="danger-transparent"
                      className={`me-2 my-1 Primary`}
                    >
                      Vencido
                    </Badge>
                  </div>
                ) : (
                  nextPaymentFormatDate(mantainance.pagos)
                )}
              </dd>
            </dl>
          </div>
          <dl className="product-gallery-data1">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
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
                  <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/mantainanceNewPayment/${mantainance.id}`}>
                    + Añadir pago
                  </Link>
              </Button>
            </div>

            {renderMantainancePayments()}
          </dl>
        </Card>
      </Row>
    </Fragment>
  );
}
