import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "../../accounting/companyUtils";

export default function VechicleList(props) {
  //@ts-ignore
  const baseURl = import.meta.env.BASE_URL;
  const totalValue = props.numbers.value.find(value => value.currency === props.currency);

  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  return (
    <div>
      <Row style={{  marginTop: -10 }}>
        <Col lg={2} className="col-lg-4">
          <div style={{ marginBottom: 10 }}>
            <Row className="row align-items-center">
              <Col xs={2} className="text-center">
                <span>
                  <i className="fe fe-truck fs-20"></i>
                </span>
              </Col>
              <Col xs={10}>
                <p className="mb-0  text-muted-dark">
                  Valor total en vehiculos
                </p>
                <h3 className="mt-2 mb-1 text-dark ">$ {totalValue.value} {totalValue.currency}</h3>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={2} className="col-lg-4">
          <div style={{ marginBottom: 10 }}>
            <Row className="row align-items-center">
              <Col xs={2} className="text-center">
                <span>
                  <i className="fe fe-hash fs-20"></i>
                </span>
              </Col>
              <Col xs={10}>
                <p className="mb-0  text-muted-dark">Numero de vehiculos</p>
                <h3 className="mt-2 mb-1 text-dark ">{props.numbers.numberOfVehicles}</h3>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginBottom: 35,
          marginTop: -10,
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
          <Link
            style={{ color: "white" }}
            to={`${baseURl}governance/wealthItemCreate/vehicle`}
          >
            + Añadir vehiculo
          </Link>
        </Button>
      </div>
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Nombre</th>
              <th>Valor</th>
              <th>Plates number</th>
              <th>País</th>
              <th>Propietarios</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx, tb8) => (
              <tr key={tb8}>
                <td>
                  {idx.model} {idx.brand} {idx.year}
                </td>
                <td>
                  ${idx.value} {idx.currency}
                </td>
                <td>{idx.platesNumber}</td>
                <td>{renderFlag(idx.country)}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {idx.owners.map((owner, index) => (
                      <div key={index} style={{ fontSize: 13 }}>
                        - {owner.name}: {owner.pct}% <br />
                      </div>
                    ))}
                  </div>
                </td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  <Link
                    to={`${baseURl}governance/wealthItem/type/vehicle/id/${idx.id}`}
                  >
                    <i className="fe fe-arrow-right text-black fs-15"></i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
