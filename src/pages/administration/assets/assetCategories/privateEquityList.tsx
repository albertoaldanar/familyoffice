import React from "react";
import { Button, Table } from "react-bootstrap";
import { formatCurrency } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function PrivateEquityList(props) {
  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  return (
    <div>
      {!props.hideAddButton ? (
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
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/wealthItemCreate/privateEquity`}
          >
              + Añadir capital privado
            </Link>
          </Button>
        </div>
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
                    Ver
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