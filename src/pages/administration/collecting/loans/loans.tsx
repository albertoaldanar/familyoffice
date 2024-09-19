import React, { Fragment } from "react";
import { Button, Badge, Card, Col, Table } from "react-bootstrap";
import { prestamos } from "../collectingData";
import { nextPaymentFormatDate } from "../../payments/paymentUtils";
import { Link } from "react-router-dom";

export default function LoansCollecting(props) {
  const renderTypeIcon = (type) => {
    if (type === "Tercero") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-user"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Intrafamiliar") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-users"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Capital Privado") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-activity"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    }

    return (
      <td>
        {" "}
        <i
          className="fe fe-user"
          style={{ color: "gray", marginRight: 10, fontSize: 14 }}
        ></i>{" "}
        {type}
      </td>
    );
  };

  return (
    <Fragment>
      {!props.hideAddButton ? (
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
            className="mb-1"
          >
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/loanCreate`}>
              + Añadir prestamo
            </Link>
          </Button>
        </div>
      ) : null}
      {
        !props.hideAddButton && (
          <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
            <i style={{ marginRight: 4 }} className="fe fe-arrow-down-right fs-16"></i>{" "}
            Prestamos por cobrar
          </Card.Title>
        )
      }

      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Deudor</th>
                  <th>Monto otorgado</th>
                  <th>Por pagar</th>
                  <th>% interes</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {prestamos.map((idx, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(idx.tipo)}
                    <td>{idx.deudor}</td>
                    <td>
                      $ {idx.monto} {idx.moneda}
                    </td>
                    <td>
                      $ {idx.porPagar} {idx.moneda}
                    </td>
                    <td>{idx.interes}</td>
                    <td>
                      {nextPaymentFormatDate(idx.pagos) === "Vencido" ? (
                        <div style={{ marginTop: 2 }}>
                          <Badge
                            bg="danger-transparent"
                            className="me-2 my-1 Primary"
                          >
                            Vencido
                          </Badge>
                        </div>
                      ) : (
                        nextPaymentFormatDate(idx.pagos)
                      )}
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/loanDescription/${idx.id}`}>
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
