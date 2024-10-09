import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ArtAndOthersCreate from "./components/artAndOthersCreate";
import BanksAccountsCreate from "./components/bankAccountsCreate";
import NotFoundSearch from "../../../shared/notFoundSearch";
import RealStateItemCreate from "./components/realStateItemCreate";
import VehicleItemCreate from "./components/vehicleItemCreate";
import PrivateEquityCreate from "./components/privateEquityCreate";
import StockInvestmentCreate from "./components/stockInvestmentCreate";

export default function WealthItemCreate() {
  const params = useParams();
  const { type } = params;

  let componentToRender;
  //@ts-ignore
  switch (type) {
    case "realState":
      componentToRender = <RealStateItemCreate />;
      break;
    case "vehicle":
        componentToRender = <VehicleItemCreate />;
        break;
    case "artAndOthers":
        componentToRender = <ArtAndOthersCreate />;
        break;
    case "bankAccount":
        componentToRender = <BanksAccountsCreate />;
        break;
    case "privateEquity":
        componentToRender = <PrivateEquityCreate />;
        break;
    case "stockInvestment":
        componentToRender = <StockInvestmentCreate />;
        break;
    default:
      componentToRender = <NotFoundSearch />;
      break;
  }

  return (
    <Fragment>
      <Row>
        <div
          style={{
            paddingBottom: 20,
            minHeight: 550,
            paddingTop: 10,
          }}
        >
          <p>{componentToRender}</p>
        </div>
      </Row>
    </Fragment>
  );
}
