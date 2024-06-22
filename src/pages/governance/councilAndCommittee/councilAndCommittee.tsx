import React, { useState, Fragment } from "react";
import {
  Card,
  Row,
  Tab,
  Nav,
} from "react-bootstrap";
import Structure from "./components/structure";
import { councilAndCommittieesData } from "./councilAndCommitteeData";
import { Meetings } from "./components/meetings/meetings";
import { Votings } from "./components/voting/voting";

export default function CouncilAndCommittee() {
  const renderFamilyCouncil = () => {
    return (
        <div style={{marginTop: 10}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-council">
        <div className="tabs-menu2" style={{marginBottom: 10}}>
          <Nav variant="pills" as="ul" className="nav panel-tabs mr-auto custom-nav">
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first-council" href="#">
                Estructura de cómite
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
                <Structure structureName='Concejo familiar' type='consejoFamiliar' data={councilAndCommittieesData.familyCouncil.members} />
            </Tab.Pane>

            <Tab.Pane eventKey="second-council">
              <Meetings meetingType='familyCouncil' />
            </Tab.Pane>

            <Tab.Pane eventKey="third-council">
              <Votings votingType='familyCouncil' />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

  const renderInvestmentCommittee = () => {
    return(
      <div style={{marginTop: 10}}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-committee">
        <div className="tabs-menu2" style={{marginBottom: 10}}>
          <Nav variant="pills" as="ul" className="nav panel-tabs mr-auto custom-nav">
            <Nav.Item as="li" style={{ marginRight: 10 }}>
              <Nav.Link eventKey="first-committee" href="#">
                Estructura de cómite
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
                <Structure type='comiteInversion' structureName='Comite de inversión' data={councilAndCommittieesData.investmentCommittee.members} />
            </Tab.Pane>

            <Tab.Pane eventKey="second-committee">
              <Meetings meetingType='investmentCommittee' />
            </Tab.Pane>

            <Tab.Pane eventKey="third-committee">
              <Votings votingType='investmentCommittee' />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    )
  }

  return (
    <Fragment>
      <Row>
        <Card style={{ paddingBottom: 20, marginTop: 20, minHeight: 550, paddingTop: 10 }}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                      Concejo Familiar
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">Cómite de Inversión </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderFamilyCouncil()}</Tab.Pane>

              <Tab.Pane eventKey="second">
                {renderInvestmentCommittee()}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card>
      </Row>
    </Fragment>
  );
}
