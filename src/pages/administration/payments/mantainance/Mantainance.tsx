import React, { Fragment } from "react";
import { Button, Card, Col, Table, Badge } from "react-bootstrap";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";
import { mantenimientos } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function Mantainance() {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;

  const renderTypeIcon = (type) => {
    if (type === "Inmobiliario") {
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
    }

    return (
      <td>
        {" "}
        <i
          className="fe fe-circle"
          style={{ color: "gray", marginRight: 10, fontSize: 14 }}
        ></i>{" "}
        {type}
      </td>
    );
  };

  const renderUrl = (type, linkedItemId, name) => {
    if (type === "Inmobiliario" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
            textDecoration: 'underline'
          }}
        >
          <Link to={`${baseUrl}governance/wealthItem/type/realState/id/${linkedItemId}`}>
            {name}
          </Link>
        </td>
      );
    } else if (type === "Vehicular" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
            textDecoration: 'underline'
          }}
        >
          <Link to={`${baseUrl}governance/wealthItem/type/vehicle/id/${linkedItemId}`}>
            {name}
          </Link>
        </td>
      );
    }

    return (
      <td
      style={{
        fontSize: 13,
        textDecoration: 'underline'
      }}
      >
        {name}
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
          size="sm"
          className="custom-button"
        >
          <Link style={{ color: "white" }} 
            to={`${baseUrl}administration/mantainanceCreate/type/null/itemId/null`}
          >
            + Añadir mantenimiento
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
        <i style={{ marginRight: 4 }} className="fe fe-clipboard fs-13"></i>{" "}
        Cuotas de mantenimientos
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Mantenimiento de:</th>
                  <th>Pago a:</th>
                  <th>País</th>
                  <th>Monto</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {mantenimientos.map((mantainance, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(mantainance.tipo)}

                    {renderUrl(mantainance.tipo, mantainance.linkedItemId, mantainance.mantainanceTo)}
                    <td>{mantainance.pagoA}</td>
                    <td>{renderFlag(mantainance.conuntry)}</td>
                    <td>
                      ${mantainance.monto} {mantainance.moneda}
                    </td>
                    <td>{calculateDaysOrMonthsLeft(mantainance.proxPago)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link to={`${baseUrl
                        }administration/mantainanceDescription/${
                          mantainance.id
                        }`}
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
        </Card>
      </Col>
    </Fragment>
  );
}
