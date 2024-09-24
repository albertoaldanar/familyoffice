import React, { Fragment } from "react";
import { Nav, Row, Tab, Table } from "react-bootstrap";
import LoansCollecting from "./loans/loans";
import BenefitsCollecting from "./benefits/Benefits";
import LeasingAndRents from "./leasingAndRents/LeasingAndRents";

export default function Collecting() {
  return (
    <Fragment>
      <Row style={{ marginTop: -25 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div style={{ padding: 20 }}>
            <Nav
              variant="pills"
              as="ul"
              className="nav panel-tabs mr-auto custom-nav"
            >
              <Nav.Item as="li">
                <Nav.Link eventKey="first" href="#">
                  Prestamos
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="second">Arrendamiento </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item as="li">
                  <Nav.Link eventKey="fourth">Regalias</Nav.Link>
                </Nav.Item> */}
            </Nav>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">
              <LoansCollecting />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <LeasingAndRents />
            </Tab.Pane>
            {/* <Tab.Pane eventKey="fourth">
              <BenefitsCollecting />
            </Tab.Pane> */}
          </Tab.Content>
        </Tab.Container>
      </Row>
    </Fragment>
  );
}
