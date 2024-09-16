import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { prediales } from "../paymentsData";
import { Link } from "react-router-dom";
import { nextPaymentFormatDate } from "../paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";

export default function PropertyTax() {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  
  const renderUrl = (linkedItemId, name) => {
    if (linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link to={`${baseUrl}governance/wealthItem/type/realState/id/${linkedItemId}`}>
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
          variant="primary"
          size="sm"
          className=" mb-1"
        >
         {/*// @ts-ignore */}
         <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/propertyTaxCreate/null`}>
            + Añadir predial
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
        <i
          style={{ marginRight: 4 }}
          className="fe fe-map-pin fs-13"
        ></i>{" "} Prediales de propiedades
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Propiedad</th>
                  <th>Moneda</th>
                  <th>País</th>
                  <th>Frecuencia de pago</th>
                  <th>Pagar en</th>
                  <th></th>
                </tr>
              </thead>
              <tbody> 
                {prediales.map((taxProperty, tb8) => (
                  <tr key={tb8}>
                    {renderUrl(taxProperty.linkedItemId, taxProperty.nombre)}
                    <td>{taxProperty.moneda}</td>
                    <td>{renderFlag(taxProperty.country)}</td>
                    <td>{taxProperty.frecuenciaDePago}</td>
                    <td>
                      {calculateDaysOrMonthsLeft(taxProperty.proxPago)}
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                   {/*// @ts-ignore */}
                    <Link state={{ taxProperty }} to={`${import.meta.env.BASE_URL}administration/propertyTaxDescription/${taxProperty.id}`}>
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
