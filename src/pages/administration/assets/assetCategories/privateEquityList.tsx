import React from "react";
import { Button, Table, Row, Col } from "react-bootstrap";
import { formatCurrency } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function PrivateEquityList(props) {

  const totalValue = props.numbers ? props.numbers.totalValueOfPrivateEquity.find(value => value.currency === props.currency): null;
  const fundsValue = props.numbers ? props.numbers.totalValueOfPrivateEquityFunds.find(value => value.currency === props.currency) : null;
  const directValue = props.numbers ? props.numbers.totalValueOfPrivateEquityDirect.find(value => value.currency === props.currency) : null;


  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  return (
    <div>
      {!props.hideAddButton ? (
        <>
           <Row style={{marginBottom: 15, marginTop: -10}}>
            <Col lg={2} className="col-lg-4">
              <div style={{ marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-activity fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Tatal capital privado
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      $ {totalValue.value} {totalValue.currency}
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
                      <i className="fe fe-layers fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                     A traves de fondos
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      $ {fundsValue.value} {fundsValue.currency}
                    </h3>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col lg={3} className="col-lg-4" style={{marginLeft: -10}}>
              <div style={{marginBottom: 10}}>
                <Row className="row align-items-center">
                  <Col xs={2} className="text-center">
                    <span>
                      <i className="fe fe-arrow-up-right fs-20"></i>
                    </span>
                  </Col>
                  <Col xs={10}>
                    <p className="mb-0  text-muted-dark">
                      Inversión directa
                    </p>
                    <h3 className="mt-2 mb-1 text-dark ">
                      $ {directValue.value} {directValue.currency}
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
            marginTop: 20,
            alignSelf: "flex-end",
            justifyContent: "flex-end",
          }}
          size="sm"
          className="custom-button"
        >
         {/*// @ts-ignore */}
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/wealthItemCreate/privateEquity`}
          >
              + Añadir capital privado
            </Link>
          </Button>
        </div>
        </>
      ) : null}
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Tipo</th>
              <th>Nombre</th>
              <th>País</th>
              <th>Inversión</th>
              <th>Industria</th>
              <th>Propietario(s)</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.data.map((idx, tb8) => (
              <tr key={tb8}>
                <td>{idx.privateEquityType} {idx.directType ? '- ' + idx.directType : ''}</td>
                <td>{idx.investmentName}</td>
                <td>{renderFlag(idx.country)}</td>
                <td>{formatCurrency(idx.investment, idx.currency)}</td>
                <td>{idx.industry ? idx.industry : '--'}</td>
                <td>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {idx.owners.map((owner, index) => (
                      <div key={index} style={{fontSize: 13}}>
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
                 
                  <Link to={
                      idx.loanId ? 
                        //@ts-ignore 
                        `${import.meta.env.BASE_URL}administration/loanDescription/${idx.loanId}` 
                      :  
                        //@ts-ignore 
                        `${import.meta.env.BASE_URL}governance/wealthItem/type/privateEquity/id/${idx.id}`
                    }>
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