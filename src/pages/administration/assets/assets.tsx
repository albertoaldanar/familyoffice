import React, { Fragment, useState } from "react";
import { Nav, Row, Tab, Dropdown } from "react-bootstrap";
import RealStateList from "./assetCategories/realStateList";
import VechicleList from "./assetCategories/vehicleList";
import ArtAndOthers from "./assetCategories/artAndOthers";
import BankAccountsList from "./assetCategories/bankAccountsList";
import PrivateEquityList from "./assetCategories/privateEquityList";
import StockInvestmentList from "./assetCategories/stockInvestmentList";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { useParams } from "react-router-dom";

export default function Assets() {
  const params = useParams();

  const [currency, setCurrency] = useState({
    value: "MXN",
    label: "MXN",
  });

  const currencyDefault = "MXN";
  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const renderCurrencyDropdown = () => {
    return (
      <div>
        <Dropdown className="h-3">
          <Dropdown.Toggle
            size="sm"
            color="default"
            type="button"
            className="custom-button"
          >
            {currency.value} <span className="caret"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            <>
              {Optionscurrency.map((currency) => {
                return (
                  <Dropdown.Item
                    onClick={() => setCurrency(currency)}
                    key={currency.value}
                    href="#"
                  >
                    {currency.value}
                  </Dropdown.Item>
                );
              })}
            </>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ minHeight: 550 }}>
          <Tab.Container
            id="left-tabs-example"
            defaultActiveKey={params.assetType}
          >
            <div style={{ padding: 20 }}>
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="realState" href="#">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-map-pin text-black fs-15"
                      ></i>
                      Bienes raices
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="bankAccounts">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-credit-card text-black fs-15"
                      ></i>
                      Cuentas bancarias
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="privateEquity">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-activity text-black fs-15"
                      ></i>
                      Capital privado
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="stockInvestments">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-trending-up text-black fs-15"
                      ></i>
                      Inversiones Bursatiles
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="vehicles">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-truck text-black fs-15"
                      ></i>
                      Vehiculos
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="artAndOthers">
                      <i
                        style={{ marginRight: 7 }}
                        className="fe fe-watch text-black fs-15"
                      ></i>
                      Arte, colecciones y otros
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="realState">
                <RealStateList data={realstateData} numbers={otherWealthData.totalValues.realState} currency={currency.value} />
              </Tab.Pane>
              <Tab.Pane eventKey="bankAccounts">
                <BankAccountsList data={otherWealthData.bankAccounts} numbers={otherWealthData.totalValues.bankAccounts} currency={currency.value} />
              </Tab.Pane>
              <Tab.Pane eventKey="privateEquity">
                <PrivateEquityList data={otherWealthData.privateEquity} numbers={otherWealthData.totalValues.privateEquity} currency={currency.value} />
              </Tab.Pane>
              <Tab.Pane eventKey="stockInvestments">
                <StockInvestmentList data={otherWealthData.stockInvestments} numbers={otherWealthData.totalValues.stockInvestments} currency={currency.value} />
              </Tab.Pane>
              <Tab.Pane eventKey="vehicles">
                <VechicleList data={otherWealthData.vehicles} numbers={otherWealthData.totalValues.vehicles} currency={currency.value} />
              </Tab.Pane>
              <Tab.Pane eventKey="artAndOthers">
                <ArtAndOthers data={otherWealthData.artAndOthers} numbers={otherWealthData.totalValues.artAndCollections} currency={currency.value} />
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Row>
    </Fragment>
  );
}
