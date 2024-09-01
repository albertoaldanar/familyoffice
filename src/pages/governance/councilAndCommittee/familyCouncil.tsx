import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import Structure from "./components/structure";
import { councilAndCommittieesData } from "./councilAndCommitteeData";
import { Meetings } from "./components/meetings/meetings";
import { Votings } from "./components/voting/voting";

export default function FamilyCouncil() {
  const renderFamilyCouncil = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-council">
        <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first-council" href="#">
                  Miembros de consejo
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-council">Reuniones </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="third-council">Votaciones </Nav.Link>
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

            <Tab.Pane eventKey="third-council">
              <Votings votingType="familyCouncil" />
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
            Consejo familiar
          </Card.Title> */}
          {renderFamilyCouncil()}
        </Card>
      </Row>
    </Fragment>
  );
}
