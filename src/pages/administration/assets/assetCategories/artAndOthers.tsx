import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "../../accounting/companyUtils";

export default function ArtAndOthers(props) {
  //@ts-ignore
  const baseURl = import.meta.env.BASE_URL;

  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  const totalValue = props.numbers.value.find(value => value.currency === props.currency);

  return (
    <div>
      <Row style={{ marginBottom: 15, marginTop: -10 }}>
        <Col lg={2} className="col-lg-4">
          <div style={{ marginBottom: 10 }}>
            <Row className="row align-items-center">
              <Col xs={2} className="text-center">
                <span>
                  <i className="fe fe-watch fs-20"></i>
                </span>
              </Col>
              <Col xs={10}>
                <p className="mb-0  text-muted-dark">
                  Valor total en arte y colecciones
                </p>
                <h3 className="mt-2 mb-1 text-dark ">${totalValue.value} {totalValue.currency}</h3>
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
                <p className="mb-0  text-muted-dark">
                  Numero de articulos de arte o coleccion
                </p>
                <h3 className="mt-2 mb-1 text-dark ">{props.numbers.totalItems}</h3>
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
            to={`${baseURl}governance/wealthItemCreate/artAndOthers`}
          >
            + Añadir arte, collecciones y otros
          </Link>
        </Button>
      </div>
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Nombre</th>
              <th>Valuación</th>
              <th>Tipo</th>
              <th>País</th>
              <th>Propietarios</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.name}</td>
                <td>
                  ${idx.value} {idx.currency}
                </td>
                <td>{idx.type}</td>
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
                    to={`${baseURl}governance/wealthItem/type/artAndOthers/id/${idx.id}`}
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
