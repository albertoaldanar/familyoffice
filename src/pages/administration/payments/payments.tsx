import React, { Fragment } from "react";
import {
  Badge,
  Breadcrumb,
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Nav,
  Row,
  Tab,
  Table,
} from "react-bootstrap";
import Pageheader from "../../../layouts/pageheader/pageheader";
import InsurancePayment from "./insurances/insurances";
import PropertyTax from "./propertyTax/propertyTax";
import Debt from './debt/debt';
import Mantainance from "./mantainance/Mantainance";
import LeasingAndRents from "./leasingAndRents/LeasingAndRents";

export default function Payments() {
  const breadcrumbs = ["Administración", "Pagos"];

  return (
    <Fragment>
      <Row>
        <Card style={{marginTop: 20}}>
          <div className="">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div style={{ padding: 20 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item  as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="first" href="#">
                        Seguros
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">Prediales </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="third">Deudas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fourth">Arrendamientos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fifth">Mantenimientos</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body">
                <Tab.Pane eventKey="first" >
                  <InsurancePayment />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <PropertyTax />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Debt />
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <LeasingAndRents />
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <Mantainance />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Card>
      </Row>
    </Fragment>
  );
}
