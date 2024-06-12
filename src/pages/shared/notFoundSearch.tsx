import React, { Fragment } from "react";
//@ts-ignore
import search from "../../assets/images/familyOffice/search.png";
import 'reactflow/dist/base.css';

export default function NotFoundSearch() {
  return (
    <Fragment>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        flexDirection: 'column'
      }}>
        <img src={search} alt="company" style={{ width: "200px", marginBottom: 30 }} />
        <p>No se han encontrado registros de la busqueda</p>
      </div>
    </Fragment>
  );
}