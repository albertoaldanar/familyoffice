import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function StockInvestmentList(props) {
  //@ts-ignore
  const baseURl = import.meta.env.BASE_URL;
  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  const totalValue = props.numbers ? props.numbers.value.find(value => value.currency === props.currency) : null;

  return (
    <div>
      {!props.hideAddButton && (
        <>
        <Row style={{ marginTop: -10}}>
            <Col lg={2} className="col-lg-4">
              <div style={{ marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-trending-up fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Valor inversiones bursatiles
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      ${totalValue.value} {totalValue.currency}
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={2} className="col-lg-4">
              <div style={{marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-hash fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                     Numero de inversiones bursatiles
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      {props.numbers.totalItems}
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
              <Link
                style={{ color: "white", textDecoration: "none" }}
                to={`${baseURl}governance/wealthItemCreate/stockInvestment`}
              >
                + Añadir inversión bursatil
              </Link>
            </Button>
          </div>
        </>
      )}
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Banco</th>
              <th>No. Cuenta</th>
              <th>Monto de inversión</th>
              <th>País</th>
              <th>Clabe | Routing</th>
              <th>Figura(s)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx) => (
              <tr key={idx.id}>
                <td>{idx.bank}</td>
                <td>{idx.accountNumber}</td>
                <td>{formatCurrency(idx.investmentAmount, idx.currency)}</td>
                <td>{renderFlag(idx.country)}</td>
                <td>{idx.routing}</td>
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
                    to={`${baseURl}governance/wealthItem/type/stockInvestment/id/${idx.id}`}
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
