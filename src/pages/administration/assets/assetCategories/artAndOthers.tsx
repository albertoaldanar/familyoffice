import React from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { renderFlag } from "../../accounting/companyUtils";

export default function ArtAndOthers(props) {
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
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/wealthItemCreate/artAndOthers`}
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
                  {/*// @ts-ignore */}
                  <Link to={`${import.meta.env.BASE_URL}governance/wealthItem/type/artAndOthers/id/${idx.id}`}
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