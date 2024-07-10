import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { companies } from "../../../administration/accounting/accountingData";
import NotFoundSearch from "../../../shared/notFoundSearch";
import CompanyItem from "./components/companyItem";
import RealStateItem from "./components/realStateItem";
import VehicleItem from "./components/vehicleItem";

export default function WealthDescription() {
  const params = useParams();
  const { type, id } = params;

  let componentToRender;
  switch (type) {
    case "company":
      componentToRender = <CompanyItem id={id} />;
      break;
    case "realState":
      componentToRender = <RealStateItem id={id} />;
      break;
    case "vehicle":
      componentToRender = <VehicleItem id={id} />;
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
