import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrendamientos } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";

export default function LeasingAndRents() {

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
         {/*// @ts-ignore */}
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/leasingCreate`}>
            + Añadir arrendamiento
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
      <i style={{ marginRight: 4 }} className="fe fe-edit-3 fs-13"></i>{" "}
       Arrendamientos por pagar
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Arrendador</th>
                  <th>Concepto</th>
                  <th>País</th>
                  <th>Monto</th>
                  <th>Prox pago</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {arrendamientos.map((leasing, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(leasing.tipo)}
                    <td>{leasing.arrendador}</td>
                    <td>{leasing.concepto}</td>
                    <td>{renderFlag(leasing.country)}</td>
                    <td>${leasing.monto} {leasing.moneda}</td>
                    <td>{calculateDaysOrMonthsLeft(leasing.proxPago)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                    {/*// @ts-ignore */}
                    <Link state={{ leasing }} to={`${import.meta.env.BASE_URL}administration/leasingPaymentDescription/${leasing.id}`}>
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
