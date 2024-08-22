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
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-map-pin text-black fs-12"
                      ></i>
                      Bienes raices
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-credit-card text-black fs-12"
                      ></i>
                      Cuentas bancarias
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-activity text-black fs-12"
                      ></i>
                      Capital privado
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fourth">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-trending-up text-black fs-12"
                      ></i>
                      Inversiones Bursatiles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="fifth">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-truck text-black fs-12"
                      ></i>
                      Vehiculos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="six">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-watch text-black fs-12"
                      ></i>
                      Arte, colecciones y otros
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">
                <RealStateList data={realstateData} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <BankAccountsList data={otherWealthData.bankAccounts} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <PrivateEquityList data={otherWealthData.privateEquity} />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <StockInvestmentList data={otherWealthData.stockInvestments} />
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <VechicleList data={otherWealthData.vehicles} />
              </Tab.Pane>
              <Tab.Pane eventKey="six">
                <ArtAndOthers data={otherWealthData.artAndOthers} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Row>
    </Fragment>
  );
}
