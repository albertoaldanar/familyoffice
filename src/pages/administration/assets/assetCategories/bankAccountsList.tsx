import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function BankAccountsList(props) {

  const companiesValue = props.numbers.companiesValue.find(value => value.currency === props.currency);
  const familyMembersValue = props.numbers.familyMembersValue.find(value => value.currency === props.currency);

  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  return (
    <div>
      <>
        <Row style={{ marginBottom: 15 }}>
          <Col lg={3} className="col-lg-4">
            <div style={{ marginBottom: 10 }}>
              <Row className="row align-items-center">
                <Col xs={2} className="text-center">
                  <span>
                    <i className="fe fe-briefcase fs-20"></i>
                  </span>
                </Col>
                <Col xs={10}>
                  <p className="mb-0  text-muted-dark">
                    Valor cuentas personas morales
                  </p>
                  <h3 className="mt-2 mb-1 text-dark ">$ {companiesValue.value} {companiesValue.currency}</h3>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={3} className="col-lg-4">
            <div style={{ marginBottom: 10 }}>
              <Row className="row align-items-center">
                <Col xs={2} className="text-center">
                  <span>
                    <i className="fe fe-users fs-20"></i>
                  </span>
                </Col>
                <Col xs={10}>
                  <p className="mb-0  text-muted-dark">
                    Valor cuentas personas físicas
                  </p>
                  <h3 className="mt-2 mb-1 text-dark "> ${familyMembersValue.value} {familyMembersValue.currency}</h3>
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
              }governance/wealthItemCreate/bankAccount`}
            >
              + Añadir cuenta bancaria
            </Link>
          </Button>
        </div>
      </>
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Titulares de cuenta</th>
              <th>Entidad bancaria</th>
              <th>Valor</th>
              <th>Numero de cuenta</th>
              <th>País</th>
              <th>Tipo de cuenta</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx, tb8) => (
              <tr key={tb8}>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {idx.owners.map((owner, index) => (
                      <div key={index} style={{ fontSize: 13 }}>
                        - {owner.name}
                        <br />
                      </div>
                    ))}
                  </div>
                </td>
                <td>{idx.bank}</td>
                <td>{formatCurrency(idx.value, idx.currency)}</td>
                <td>{idx.accountNumber}</td>
                <td>{renderFlag(idx.country)}</td>
                <td>{idx.accountType}</td>
                <td
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                    color: "#5488d2",
                  }}
                >
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL
                    }governance/wealthItem/type/bankAccount/id/${idx.id}`}
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
