import React, { Fragment } from "react";
import { Button, Card, Col, Table, Row, Badge, ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Pageheader from "../../../../layouts/pageheader/pageheader";
import { Link } from "react-router-dom";
import { calculateTotalWithPercentage, calculateDifference, getMemberPercentage } from "../../payments/paymentUtils";
import { prestamos } from "../collectingData";
import { useParams } from "react-router-dom";
import { isDateDefeated } from "../../payments/paymentUtils";
import { nextPaymentFormatDate } from "../../payments/paymentUtils";

export default function LoansDescription(props) {
  const breadcrumbs = ["Administración", "Cobranza", "Deudas"];
  const params = useParams();
  const debt = prestamos.find(prestamo => prestamo.id === Number(params.id));

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

  const renderDebtPayments = () => {
    return (
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap  mb-0">
          <thead className="bg-light">
            <tr>
              <th>Año</th>
              {debt.frecuenciaDePago !== "Anual" && <th>Mes</th>}
              <th>Fecha limite pago</th>
              <th>Monto</th>
              <th>Estatus</th>
              <th>Comprobante pago</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {debt.pagos.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.anio}</td>
                {debt.frecuenciaDePago !== "Anual" && <td>{idx.mes}</td>}
                <td>{idx.limitePago}</td>
                <td>${idx.monto} {debt.moneda}</td>
                <td>
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
                  <Link to={`${import.meta.env.BASE_URL}administration/loanCollecting/${debt.id}/payment/${idx.id}`}>
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

  const renderData = () => {
    return (
        <div>
          <div style={{ marginTop: 15, display: 'flex', flexDirection: 'row' }}>
            <dl  className="product-gallery-data1">
              <dt>Monto prestado</dt>
              <dd>{debt.monto} {debt.moneda}</dd>
            </dl>

            <dl style={{ marginLeft: 60 }} className="product-gallery-data1">
              <dt>Tasa de interes</dt>
              <dd>
                {debt.interes}
              </dd>
            </dl>

            <dl style={{ marginLeft: 60 }} className="product-gallery-data1">
              <dt>Deuda total</dt>
              <dd>
                {'$ '}{calculateTotalWithPercentage(debt.monto, debt.interes)} {debt.moneda}
              </dd>
            </dl>
          </div>

          <div style={{ marginTop: 15, marginBottom: -15, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <dl  className="product-gallery-data1">
              <dt>Total cobrado</dt>
              <dd>{debt.pagado} {debt.moneda}</dd>
            </dl>

            <dl style={{ marginLeft: 60 }} className="product-gallery-data1">
              <dt>Por cobrar</dt>
              <dd>
              {'$ '}{calculateDifference(calculateTotalWithPercentage(debt.monto, debt.interes), debt.pagado )} {debt.moneda}
              </dd>
            </dl>
          </div>
        </div>
    );
  };

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ padding: 30 }}>
          <h4 className="mb-3 fw-semibold">
            Prestamo {debt.tipo} por cobrar: {debt.concepto}
          </h4>

          {renderData()}
          <ProgressBar animated variant='primary' now={getMemberPercentage(debt.pagado, calculateTotalWithPercentage(debt.monto, debt.interes))} className="progress-md mb-3" />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              overflow: "scroll",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <div>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Deudor</dt>
                <dd>{debt.deudor}</dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Plazo de prestamo</dt>
                <dd>
                  Del {debt.fechaDeContratacion} al {debt.fechaVencimiento}
                </dd>
              </dl>
            </div>

            <div style={{ marginLeft: 150 }}>
              <dl style={{ marginTop: 15 }} className="product-gallery-data1">
                <dt>Frecuencia de pago</dt>
                <dd>{debt.frecuenciaDePago}</dd>
              </dl>
              <dl className="product-gallery-data1">
                <dt>Contrato</dt>
                <dd
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {debt.contrato}{" "}
                </dd>
              </dl>
            </div>

            <dl style={{ marginTop: 15, marginLeft: 150 }}>
              <dt>Estatus de pago</dt>
              <dd>
                {nextPaymentFormatDate(debt.pagos) === "Vencido" ? (
                  <div style={{ marginTop: 2 }}>
                    <Badge
                      bg="danger-transparent"
                      className={`me-2 my-1 Primary`}
                    >
                      Vencido
                    </Badge>
                  </div>
                ) : (
                  nextPaymentFormatDate(debt.pagos)
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
                  <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/loanNewPayment/${debt.id}`}>
                    + Añadir pago
                  </Link>
              </Button>
            </div>

            {renderDebtPayments()}
          </dl>
        </Card>
      </Row>
    </Fragment>
  );
}
