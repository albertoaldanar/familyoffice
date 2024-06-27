import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { companies } from "../../../administration/accounting/accountingData";
import NotFoundSearch from "../../../shared/notFoundSearch";
import RealStateItemCreate from "./components/realStateItemCreate";

export default function WealthItemCreate() {
  const params = useParams();
  const { type } = params;

  let componentToRender;
  //@ts-ignore
  switch (type) {
    case "realState":
      componentToRender = <RealStateItemCreate />;
      break;
    default:
      componentToRender = <NotFoundSearch />;
      break;
  }

  return (
    <Fragment>
      <Row>
        <Card
          style={{
            paddingBottom: 20,
            marginTop: 20,
            minHeight: 550,
            paddingTop: 10,
          }}
        >
          <p>{componentToRender}</p>
        </Card>
      </Row>
    </Fragment>
  );
}
