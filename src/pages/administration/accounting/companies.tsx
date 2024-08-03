import React, { Fragment } from "react";
import { Badge, Button, Card, Col, Table, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "./companyUtils";
import { companies } from "./accountingData";

export default function Companies() {
  const renderTable = () => {
    return (
      <Col xl={12} style={{marginTop: 20}}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Razon social</th>
                  <th>Valuación</th>
                  <th>RFC</th>
                  <th>País</th>
                  <th>Accionistas</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {companies.map((idx, tb8) => (
                  <tr key={tb8}>
                    <td>{idx.razonSocial}</td>
                    <td>${idx.valuacion} {idx.moneda}</td>
                    <td>{idx.rfc}</td>
                    <td>{renderFlag(idx.nationality)}</td>
                    <td>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      {idx.owners.map((owner, index) => (
                        <div key={index} style={{fontSize: 13}}>
                          {owner.name}: {owner.pct}% <br />
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
                      <Link to={`${import.meta.env.BASE_URL}administration/company/${idx.id}/company`}>
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
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{minHeight: 500, marginTop: 20}}>
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
              marginBottom: 15,
              marginTop: 10
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              Empresas
            </Card.Title>
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
              <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}administration/companyCreate`}>
                + Añadir empresa
              </Link>
            </Button>
          </div>
          
          {renderTable()}
        </Card>
      </Row>
    </Fragment>
  );
}
