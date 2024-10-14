import React, { Fragment } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Table,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { arrendamientos } from "../collectingData";
import { renderFlag } from "../../accounting/companyUtils";
import { calculateDaysOrMonthsLeft } from "../../payments/paymentUtils";

export default function LeasingAndRents() {
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
         {/*// @ts-ignore */}
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/rentCreate/type/null/itemId/null`}>
            + Añadir arrendamiento
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
      <i style={{ marginRight: 4 }} className="fe fe-edit-3 fs-13"></i>{" "}
       Arrendamientos por cobrar
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Renta de</th>
                  <th>Arrendatario</th>
                  <th>País</th>
                  <th>Monto</th>
                  <th>Prox cobro:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {arrendamientos.map((idx, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(idx.tipo)}
                    {renderUrl(idx.tipo, idx.linkedItemId, idx.concepto)}
                    <td>{idx.arrendatario}</td>
                    <td>{renderFlag(idx.country)}</td>
                    <td>${idx.monto} {idx.moneda}</td>
                    <td>{calculateDaysOrMonthsLeft(idx.proxCobro)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/rentDescription/${idx.id}`}>
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
