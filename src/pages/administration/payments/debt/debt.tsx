import React, { Fragment } from "react";
import { Button, Card, Col, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { creditos } from "../paymentsData";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";

export default function Debt() {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const creditoss = creditos.filter((credito) => credito.tipo === "Credito de entidad financiera");
  const prestamosTerceros = creditos.filter(
    (credito) => credito.tipo === "Prestamo de tercero"
  );

  const renderTypeIcon = (type) => {
    if (type === "Hipotecario") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-map-pin"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Vehicular") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-truck"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    }  else if (type === "Credito empresarial") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-briefcase"
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

  const renderUrl = (type, linkedItemId, name) => {
    if (type === "Hipotecario" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link
            to={`${baseUrl}governance/wealthItem/type/realState/id/${linkedItemId}`}
          >
            {name}
          </Link>
        </td>
      );
    } else if (type === "Vehicular" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link
            to={`${baseUrl}governance/wealthItem/type/vehicle/id/${linkedItemId}`}
          >
            {name}
          </Link>
        </td>
      );
    }  else if (type === "Credito empresarial" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link
            to={`${baseUrl}administration/company/${linkedItemId}/company`}
          >
            {name}
          </Link>
        </td>
      );
    }

    return (
      <td
        style={{
          fontSize: 13,
        }}
      >
        <Link to={`${baseUrl}governance/familyMember/${linkedItemId}`}>
          {name}
        </Link>
      </td>
    );
  };

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
          <Link
            style={{ color: "white" }}
            to={`${baseUrl}administration/debtCreate/type/null/itemId/null`}
          >
            + Añadir deuda
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
        <i style={{ marginRight: 4 }} className="fe fe-edit-3 fs-13"></i>{" "}
        Creditos bancarios
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Deuda de</th>
                  <th>Monto otorgado</th>
                  <th>% interes</th>
                  <th>Por pagar</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {creditoss.map((debt, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(debt.tipoCredito)}
                    {renderUrl(debt.tipoCredito, debt.linkedItemId, debt.concepto)}
                    <td>
                      ${debt.monto} {debt.moneda}
                    </td>
                    <td>{debt.interes} %</td>
                    <td>
                      ${debt.pagado} {debt.moneda}
                    </td>
                    <td>{calculateDaysOrMonthsLeft(debt.proxPago)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        state={{ debt }}
                        to={`${baseUrl}administration/debtDescription/${debt.id}`}
                      >
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

      <Card.Title
        style={{
          marginLeft: 15,
          marginBottom: 20,
          fontSize: 14,
          marginTop: 50,
        }}
      >
        <i style={{ marginRight: 4 }} className="fe fe-users fs-13"></i>{" "}
        Prestamos de terceros
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Deuda de</th>
                  <th>Monto otorgado</th>
                  <th>% interes</th>
                  <th>Por pagar</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {prestamosTerceros.map((debt, tb8) => (
                  <tr key={tb8}>
                  {renderTypeIcon(debt.tipoCredito)}
                  {renderUrl(debt.tipoCredito, debt.linkedItemId, debt.concepto)}
                  <td>
                    ${debt.monto} {debt.moneda}
                  </td>
                  <td>{debt.interes} %</td>
                  <td>
                    ${debt.pagado} {debt.moneda}
                  </td>
                  <td>{calculateDaysOrMonthsLeft(debt.proxPago)}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    <Link
                      state={{ debt }}
                      to={`${baseUrl}administration/debtDescription/${debt.id}`}
                    >
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
