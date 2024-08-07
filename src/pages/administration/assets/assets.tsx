import React, { Fragment } from "react";
import { Card, Nav, Row, Tab, Table, Col } from "react-bootstrap";
import RealStateList from "./assetCategories/realStateList";
import VechicleList from "./assetCategories/vehicleList";
import ArtAndOthers from "./assetCategories/artAndOthers";
import BankAccountsList from "./assetCategories/bankAccountsList";
import PrivateEquityList from "./assetCategories/privateEquityList";
import StockInvestmentList from "./assetCategories/stockInvestmentList";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";

export default function Assets() {
  return (
    <Fragment>
      <Row>
        <Card style={{ minHeight: 550, marginTop: 20 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div style={{ padding: 20 }}>
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                      Bienes raices
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">Cuentas bancarias </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">Capital privado</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fourth">Inversiones Bursatiles</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fifth">Vehiculos</Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="six">
                      Arte, colecciones y otros
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first"><RealStateList data={realstateData}/></Tab.Pane>
              <Tab.Pane eventKey="second"><BankAccountsList data={otherWealthData.bankAccounts}/></Tab.Pane>
              <Tab.Pane eventKey="third"><PrivateEquityList data={otherWealthData.privateEquity}/></Tab.Pane>
              <Tab.Pane eventKey="fourth"><StockInvestmentList data={otherWealthData.stockInvestments}/></Tab.Pane>
              <Tab.Pane eventKey="fifth"><VechicleList data={otherWealthData.vehicles}/></Tab.Pane>
              <Tab.Pane eventKey="six"><ArtAndOthers data={otherWealthData.artAndOthers}/></Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Row>
    </Fragment>
  );
}
