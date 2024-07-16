import React, { Fragment } from "react";
import {
  Button,
  Card,
  Col,
  Table,
  Badge
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { seguros } from "../paymentsData";
import { nextPaymentFormatDate } from "../paymentUtils";

export default function InsurancePayment() {

  const segurosVida = seguros.filter(seguro => seguro.tipo === 'Vida');
  const segurosCarro = seguros.filter(seguro => seguro.tipo === 'Vehicular');
  const segurosInmuebles = seguros.filter(seguro => seguro.tipo === 'Inmueble');

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
          <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}administration/insuranceCreate/type/null/itemId/null`}>
            + Añadir tipo de seguro
          </Link>
          
        </Button>
      </div>
      <Card.Title style={{ marginLeft: 15, marginBottom: 20 }}>
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
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosVida.map((insurance, tb8) => (
                  <tr key={tb8}>
                    <td
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      {insurance.nombre}
                    </td>
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>
                    {
                      nextPaymentFormatDate(insurance.pagos) === 'Vencido' ? 
                        (
                          <div style={{marginTop: 2}}>
                            <Badge
                              bg="danger-transparent"
                              className={`me-2 my-1 Primary`}
                            >
                              Vencido
                            </Badge> 
                          </div>
                        ) : 
                        nextPaymentFormatDate(insurance.pagos)
                    }
                    </td>
                   
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/insuraceDescription/${insurance.id}`}>
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
      <Card.Title style={{ marginLeft: 15, marginBottom: 20, marginTop: 60 }}>
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
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosCarro.map((insurance, tb8) => (
                  <tr key={tb8}>
                    <td
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      {insurance.nombre}
                    </td>
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>
                      {
                        nextPaymentFormatDate(insurance.pagos) === 'Vencido' ? 
                          (
                            <div style={{marginTop: 2}}>
                              <Badge
                                bg="danger-transparent"
                                className={`me-2 my-1 Primary`}
                              >
                                Vencido
                              </Badge> 
                            </div>
                          ) : 
                          nextPaymentFormatDate(insurance.pagos)
                      }
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link state={{ insurance }} to={`${import.meta.env.BASE_URL}administration/insuraceDescription/${insurance.id}`}>
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

      <Card.Title style={{ marginLeft: 15, marginBottom: 20, marginTop: 60 }}>
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
                  <th>Vigencia del</th>
                  <th>Vigencia al</th>
                  <th>Prox. pago en:</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {segurosInmuebles.map((insurance, tb8) => (
                  <tr key={tb8}>
                    <td
                      style={{ cursor: "pointer", textDecoration: "underline" }}
                    >
                      {insurance.nombre}
                    </td>
                    <td>{insurance.nombreAseguradora}</td>
                    <td>{insurance.moneda}</td>
                    <td>{insurance.vigenciaDel}</td>
                    <td>{insurance.vigenciaAl}</td>
                    <td>
                      {
                        nextPaymentFormatDate(insurance.pagos) === 'Vencido' ? 
                          (
                            <div style={{marginTop: 2}}>
                              <Badge
                                bg="danger-transparent"
                                className={`me-2 my-1 Primary`}
                              >
                                Vencido
                              </Badge> 
                            </div>
                          ) : 
                          nextPaymentFormatDate(insurance.pagos)
                      }
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link state={{ insurance }} to={`${import.meta.env.BASE_URL}administration/insuraceDescription/${insurance.id}`}>
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
