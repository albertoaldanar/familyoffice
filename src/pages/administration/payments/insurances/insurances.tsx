import React, { Fragment } from "react";
import { Button, Card, Col, Table, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import { seguros } from "../paymentsData";
import { calculateDaysOrMonthsLeft } from "../paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";

export default function InsurancePayment() {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const segurosVida = seguros.filter((seguro) => seguro.tipo === "Vida");
  const segurosCarro = seguros.filter((seguro) => seguro.tipo === "Vehicular");
  const segurosInmuebles = seguros.filter(
    (seguro) => seguro.tipo === "Inmobiliario"
  );

  const renderUrl = (type, linkedItemId, name) => {
    if (type === "Inmobiliario" && linkedItemId) {
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
    } else if (type === "Vehicular" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link to={`${baseUrl}governance/wealthItem/type/vehicle/id/${linkedItemId}`}>
            {name}
          </Link>
        </td>
      );
    } else if(type === "Vida" && linkedItemId){
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
          <Link
            style={{ color: "white" }}
            to={`${baseUrl}administration/insuranceCreate/type/null/itemId/null`}
          >
            + Añadir tipo de seguro
          </Link>
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
        <i
          style={{ marginRight: 4 }}
          className="fe fe-user text-black fs-13"
        ></i>{" "}
        Seguros de vida
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap  mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>Aseguradora</th>
                  <th>Moneda</th>
                  <th>País</th>
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosVida.map((insurance, tb8) => (
                  <tr key={tb8}>
                    {renderUrl(insurance.tipo, insurance.linkedItemId, insurance.nombre)}
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{renderFlag(insurance.country)}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>{calculateDaysOrMonthsLeft(insurance.proxPago)}</td>

                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/insuranceDescription/${insurance.id}`}
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
          marginTop: 40,
          fontSize: 14,
        }}
      >
        <i
          style={{ marginRight: 4 }}
          className="fe fe-truck text-black fs-13"
        ></i>{" "}
        Seguros de vehiculos
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>Aseguradora</th>
                  <th>Moneda</th>
                  <th>País</th>
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosCarro.map((insurance, tb8) => (
                  <tr key={tb8}>
                     {renderUrl(insurance.tipo, insurance.linkedItemId, insurance.nombre)}
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{renderFlag(insurance.country)}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>{calculateDaysOrMonthsLeft(insurance.proxPago)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/insuranceDescription/${insurance.id}`}
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
          marginTop: 40,
          fontSize: 14,
        }}
      >
        <i
          style={{ marginRight: 4 }}
          className="fe fe-map-pin text-black fs-13"
        ></i>{" "}
        Seguros de inmuebles
      </Card.Title>
      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>Aseguradora</th>
                  <th>Moneda</th>
                  <th>País</th>
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosInmuebles.map((insurance, tb8) => (
                  <tr key={tb8}>
                     {renderUrl(insurance.tipo, insurance.linkedItemId, insurance.nombre)}
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{renderFlag(insurance.country)}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>{calculateDaysOrMonthsLeft(insurance.proxPago)}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/insuranceDescription/${insurance.id}`}
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
