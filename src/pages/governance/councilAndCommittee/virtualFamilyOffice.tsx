import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import Structure from "./components/structure";
import { councilAndCommittieesData } from "./councilAndCommitteeData";
import { Meetings } from "./components/meetings/meetings";

export default function VirtualFamilyOffice() {
  const renderVirtualFamilyOffice = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <Tab.Container
          id="left-tabs-example"
          defaultActiveKey="first-committee"
        >
          <div className="tabs-menu1">
            <Nav as="ul" className="nav panel-tabs">
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first-committee" href="#">
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-users text-black fs-15"
                  ></i>
                  Miembros de Virtual Family Office
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-committee">
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-calendar text-black fs-15"
                  ></i>
                  Reuniones 
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-committee">
              <Structure
                type="virtualFamilyOffice"
                structureName="Virtual Family Office"
                data={councilAndCommittieesData.virtualFamilyOffice.members}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="second-committee">
              <Meetings meetingType="virtualFamilyOffice" />
            </Tab.Pane>

          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

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
          {/* <Card.Title style={{ marginLeft: 15, marginTop: 20, marginBottom: 10}}>
            Comite de inversión
          </Card.Title> */}
          {renderVirtualFamilyOffice()}
        </Card>
      </Row>
    </Fragment>
  );
}
