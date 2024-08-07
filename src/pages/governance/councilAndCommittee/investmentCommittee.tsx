import React, { useState, Fragment } from "react";
import { Card, Row, Tab, Nav } from "react-bootstrap";
import Structure from "./components/structure";
import { councilAndCommittieesData } from "./councilAndCommitteeData";
import { Meetings } from "./components/meetings/meetings";
import { Votings } from "./components/voting/voting";

export default function FamilyCouncil() {
  const renderInvestmentCommittee = () => {
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
                  Miembros de cómite
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-committee">Reuniones </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="third-committee">Votaciones </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-committee">
              <Structure
                type="comiteInversion"
                structureName="Comite de inversión"
                data={councilAndCommittieesData.investmentCommittee.members}
              />
            </Tab.Pane>

            <Tab.Pane eventKey="second-committee">
              <Meetings meetingType="investmentCommittee" />
            </Tab.Pane>

            <Tab.Pane eventKey="third-committee">
              <Votings votingType="investmentCommittee" />
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
          <Card.Title style={{ marginLeft: 15, marginTop: 20, marginBottom: 10}}>
            Comite de inversión
          </Card.Title>
          {renderInvestmentCommittee()}
        </Card>
      </Row>
    </Fragment>
  );
}
