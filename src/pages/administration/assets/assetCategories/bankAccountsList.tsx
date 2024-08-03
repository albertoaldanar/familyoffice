import React from "react";
import { Button, Table } from "react-bootstrap";
import { formatCurrency } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function BankAccountsList(props) {
  if (!props.data || props.data.length === 0) {
    return <p>No hay registros</p>;
  }

  return (
    <div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginBottom: 35,
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
          className="mb-1"
        >
         {/*// @ts-ignore */}
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/wealthItemCreate/bankAccount`}
          >
            + Añadir cuenta bancaria
          </Link>
        </Button>
      </div>
      <div className="table-responsive">
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Titular de cuenta</th>
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
                      <div key={index} style={{fontSize: 13}}>
                        {owner.name}<br />
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
                  <Link to={`${import.meta.env.BASE_URL}governance/wealthItem/type/bankAccount/id/${idx.id}`}
                  >
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