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
import LoansCollecting from "./loans/loans";
import  DividendsCollecting from './dividends/dividends';
import BenefitsCollecting from "./benefits/Benefits";
import LeasingAndRents from "./leasingAndRents/LeasingAndRents";

export default function Collecting() {
  const breadcrumbs = ["Administración", "Cobranza"];

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card>
          <div className="">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div style={{ padding: 20 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="first" href="#">
                        Prestamos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">Arrendamiento </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="third">Dividendos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fourth">Regalias</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body">
                <Tab.Pane eventKey="first" >
                  <LoansCollecting />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <LeasingAndRents />
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <DividendsCollecting /> 
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <BenefitsCollecting />
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </Card>
      </Row>
    </Fragment>
  );
}
