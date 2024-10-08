import React, { Fragment } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Table,
  Row,
  Nav,
  Tab,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
//@ts-ignore
import ReactFlow, { ReactFlowProvider } from "reactflow";
import { CustomNode } from "./components/customeNode";
import { generateNodesAndEdges } from "./familyStructureUtils";
import FileView from "../../administration/accounting/components/fileView";
import FileUpload from "../../administration/providers/components/fileUpload";
import "reactflow/dist/base.css";
import { family, familyS, familyG } from "./familyStructureData";

export default function FamilyStructure() {
  const { initialNodes, initialEdges } = generateNodesAndEdges(family);

  const nodeTypes = {
    customNode: CustomNode,
  };

  const renderFamilyStructure = () => {
    const defaultViewport = { x: 30, y: 0, zoom: 0.9 };

    return (

      <ReactFlowProvider>
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          defaultViewport={defaultViewport}
          zoomOnScroll={false}
        />
      </ReactFlowProvider>
    );
  };

  const renderVFOCoduments = () => {
    return (
      <Row>
        <p
          style={{
            fontSize: 15,
            marginTop: 20,
          }}
        >
          1) Estrategia de largo plazo e Investment Policy:
        </p>
        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label
            className="form-label my-3"
            style={{ fontSize: 13, color: "gray" }}
          >
            Estrategia de largo plazo
          </Form.Label>
          {family.documents.vfo.elp && (
            <FileView title="ELP" fileName={family.documents.vfo.elp} />
          )}
        </Form.Group>

        <Form.Group as={Col} md="4" className="form-group">
          <Form.Label
            className="form-label my-3"
            style={{ fontSize: 13, color: "gray" }}
          >
            Investment Policy
          </Form.Label>
          {family.documents.vfo.investmentPolicy ? (
            <FileView
              title="Investment Policy"
              fileName={family.documents.vfo.investmentPolicy}
            />
          ) : (
            <div>No document available</div>
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderFamilyDocuments = () => {
    return (
      <>
        <Row>
          <p
            style={{
              fontSize: 15,
              marginTop: 20,
            }}
          >
            1) Testamento y protocolo familiar:
          </p>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Testamento
            </Form.Label>
            {family.documents.family.testamento ? (
              <FileView
                title="Testamento"
                fileName={family.documents.family.testamento}
              />
            ) : (
              <>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Protocolo Familiar
            </Form.Label>
            {family.documents.family.protocoloFam ? (
              <FileView
                title="Protocolo Familiar"
                fileName={family.documents.family.protocoloFam}
              />
            ) : (
              <>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </>
            )}
          </Form.Group>
        </Row>

        <Row style={{ marginBottom: 50 }}>
          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            2) Actas de Asamblea Comite familiar:
          </p>
          {family.documents.family.actasAsamblea.length ? (
            family.documents.family.actasAsamblea.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.nombre}
                </Form.Label>
                <FileView key={index} title={acta.nombre} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{width: '70%'}}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nueva acta de asamblea
            </p>
            <FileUpload />
          </div>
          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            3) Fideicomisos:
          </p>
          {family.documents.family.fideicomisos.length ? (
            family.documents.family.fideicomisos.map((fideicomiso, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {fideicomiso.nombre}
                </Form.Label>
                <FileView
                  key={index}
                  title={fideicomiso.nombre}
                  fileName={fideicomiso.url}
                />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}

          <div style={{width: '70%'}}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nuevo fideicomiso
            </p>
            <FileUpload />
          </div>
        </Row>
      </>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ minHeight: 550}}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-users text-black fs-15"
                      ></i> 
                      Organigrama familiar 
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-15"
                      ></i>
                      Documentos Family Office{" "}
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-folder text-black fs-15"
                      ></i>
                      Documentos familiares
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>

            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">
                <Row>
                  <Card style={{ minHeight: 450}}>
                    {renderFamilyStructure()}
                  </Card>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">{renderVFOCoduments()}</Tab.Pane>
              <Tab.Pane eventKey="third">{renderFamilyDocuments()}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Row>
    </Fragment>
  );
}
