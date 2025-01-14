import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "../../accounting/companyUtils";

export default function RealStateList(props) {
  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  const totalValue = props.numbers ? props.numbers.value.find(value => value.currency === props.currency) : null;
  const totalRent = props.numbers ? props.numbers.rentValue.find(value => value.currency === props.currency): null ;

  return (
    <div>
      {!props.hideAddButton ? (
        <>
          <Row>
            <Col lg={3} className="col-lg-4">
              <div style={{ marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-map-pin fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Total valor en bienes raices
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      ${totalValue.value} {totalValue.currency}
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={3} className="col-lg-4">
              <div style={{marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-arrow-down-right fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Total cobro mensual arrendamientos
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      ${totalRent.value} {totalRent.currency}
                    </h3>
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
            {/*// @ts-ignore */}
            <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL
              }governance/wealthItemCreate/realState`}
            >
              + Añadir propiedad
            </Link>
          </Button>
        </div>
        </>
      ) : null}

      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Nombre</th>
              <th>Ciudad</th>
              <th>País</th>
              <th>Valuación</th>
              <th>Tipo de propiedad</th>
              <th>Propietarios</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.nombre}</td>
                <td>{idx.ciudad}</td>
                <td>{renderFlag(idx.country)}</td>
                <td>
                  ${idx.valuacion} {idx.moneda}
                </td>
                <td>{idx.propertyType}</td>
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
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL
                    }governance/wealthItem/type/realState/id/${idx.id}`}
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
    </div>
  );
}
