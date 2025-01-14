import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import Structure from "./components/structure";
import { councilAndCommittieesData } from "./councilAndCommitteeData";
import { Meetings } from "./components/meetings/meetings";

export default function FamilyCouncil() {
  const renderFamilyCouncil = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-council">
          <div className="tabs-menu1">
            <Nav as="ul" className="nav panel-tabs">
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first-council" href="#">
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-users text-black fs-15"
                  ></i>
                  Miembros de consejo familiar
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-council">
                  <i
                    style={{ marginRight: 9 }}
                    className="fe fe-calendar text-black fs-15"
                  ></i>
                  Reuniones y asambleas
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-council">
              <Structure
                structureName="Consejo familiar"
                type="consejoFamiliar"
                data={councilAndCommittieesData.familyCouncil.members}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="second-council">
              <Meetings meetingType="familyCouncil" />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

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
          {/* <Card.Title style={{ marginLeft: 15, marginTop: 20, marginBottom: 10}}>
            Consejo familiar
          </Card.Title> */}
          {renderFamilyCouncil()}
        </div>
      </Row>
    </Fragment>
  );
}
