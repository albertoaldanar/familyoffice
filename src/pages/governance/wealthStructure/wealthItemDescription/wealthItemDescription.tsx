import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { companies } from "../../../administration/accounting/accountingData";
import NotFoundSearch from "../../../shared/notFoundSearch";
import CompanyItem from "./components/companyItem";
import RealStateItem from "./components/realStateItem";
import VehicleItem from "./components/vehicleItem";
import ArtAndOthersItem from "./components/artAndOthersItem";
import BanksAccountsItem from "./components/bankAccountsItem";
import StockInvestment from "./components/stockInvestment/stockInvestment";
import PrivateEquity from "./components/privateEquity/privateEquity";

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
    case "artAndOthers":
      componentToRender = <ArtAndOthersItem id={id} />;
      break;
    case "bankAccount":
      componentToRender = <BanksAccountsItem id={id} />;
      break;
    case "stockInvestment":
      componentToRender = <StockInvestment id={id} />;
      break;
    case "privateEquity":
      componentToRender = <PrivateEquity id={id} />;
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
