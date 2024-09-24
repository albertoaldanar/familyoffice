import React, { Fragment } from "react";
import { Button, Badge, Card, Col, Table } from "react-bootstrap";
import { prestamos } from "../collectingData";
import { nextPaymentFormatDate } from "../../payments/paymentUtils";
import { calculateDaysOrMonthsLeft } from "../../payments/paymentUtils";
import { renderFlag } from "../../accounting/companyUtils";
import { Link } from "react-router-dom";

export default function LoansCollecting(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;

  const renderTypeIcon = (type) => {
    if (type === "Tercero") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-user"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Intrafamiliar") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-users"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    } else if (type === "Capital Privado") {
      return (
        <td>
          {" "}
          <i
            className="fe fe-activity"
            style={{ color: "gray", marginRight: 10, fontSize: 14 }}
          ></i>{" "}
          {type}
        </td>
      );
    }

    return (
      <td>
        {" "}
        <i
          className="fe fe-user"
          style={{ color: "gray", marginRight: 10, fontSize: 14 }}
        ></i>{" "}
        {type}
      </td>
    );
  };

  const renderUrl = (type, linkedItemId, name) => {
    if (type === "Empresa Familiar" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link
            to={`${baseUrl}administration/company/${linkedItemId}/company`}
          >
            {name}
          </Link>
        </td>
      );
    } else if (type === "Miembro de la familia" && linkedItemId) {
      return (
        <td
          style={{
            fontSize: 13,
          }}
        >
          <Link
            to={`${baseUrl}governance/familyMember/${linkedItemId}`}
          >
            {name}
          </Link>
        </td>
      );
    }

    return (
      <td
        style={{
          fontSize: 13,
        }}
      >
       {name}
      </td>
    );
  };
  
  return (
    <Fragment>
      {!props.hideAddButton ? (
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginBottom: 15,
            marginTop: -50,
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
            <Link style={{ color: "white" }} to={`${baseUrl}administration/loanCreate`}>
              + Añadir prestamo
            </Link>
          </Button>
        </div>
      ) : null}
      {
        !props.hideAddButton && (
          <Card.Title style={{ marginLeft: 15, marginBottom: 20, fontSize: 14 }}>
            <i style={{ marginRight: 4 }} className="fe fe-arrow-down-right fs-16"></i>{" "}
            Prestamos por cobrar
          </Card.Title>
        )
      }

      <Col xl={12}>
        <Card>
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Tipo</th>
                  <th>Acreedor</th>
                  <th>Deudor</th>
                  <th>País</th>
                  <th>Pendiente por cobrar</th>
                  <th>Prox cobro</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {prestamos.map((idx, tb8) => (
                  <tr key={tb8}>
                    {renderTypeIcon(idx.tipo)}
                    {renderUrl(idx.creditor.type, idx.creditor.linkedItemId, idx.creditor.name)}
                    {renderUrl(idx.debtor.type, idx.debtor.linkedItemId, idx.debtor.name)}
                    <td>{renderFlag(idx.country)}</td>
                    <td>
                      $ {idx.porPagar} {idx.moneda}
                    </td>
                    <td>
                   {calculateDaysOrMonthsLeft(idx.proxCobro)}
                    </td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link to={`${baseUrl}administration/loanDescription/${idx.id}`}>
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
