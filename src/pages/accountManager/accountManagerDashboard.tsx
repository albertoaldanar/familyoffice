import React, { Fragment, useCallback, useState } from "react";
import { Form, Button, Card, Col, Row, Tab, Nav, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { transformAccountData } from "./accountManagerUtils";
import { accountManagerData } from "./accountManagerData";
import Select from "react-select";

export default function AccountManagerDashboard() {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;

  const options = transformAccountData(accountManagerData);
  const [accountSelcted, setAccountSelected] = useState({
    label: accountManagerData.families[0].lastName,
    value: accountManagerData.families[0].id,
  });
  const [accountStatus, setAccountStatus] = useState(
    accountManagerData.families[0].isVfoOn
  );

  console.log('accountStatus', accountStatus)

  const renderTable = () => {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <div></div>
          <Button
            style={{
              marginRight: 15,
            }}
            size="sm"
            className="custom-button"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseUrl}administration/providerCreate/standar`}
            >
              + Crear cuenta
            </Link>
          </Button>
        </div>

        <Col xl={12}>
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Usuario</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {accountManagerData.families[0].accounts.map((contact) => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.type}</td>
                  <td>{contact.username}</td>
                  <td>{contact.email}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    <Link
                      to={`${baseUrl}accountManager/accountManagerUserDescription/familyId/${accountSelcted.value}/user/${contact.id}`}
                    >
                      <i className="fe fe-arrow-right text-black fs-15"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </>
    );
  };

  return (
    <Fragment>
      <Row style={{ backgroundColor: "white" }}>
        <div
          style={{
            minHeight: 850,
            paddingRight: 40,
            paddingLeft: 40,
            marginTop: 20,
          }}
        >
          <div
            style={{
              marginTop: 10,
            }}
          >
            <Card.Title style={{ marginLeft: 15, marginTop: 30 }}>
              <i
                style={{ marginRight: 9 }}
                className="fe fe-book-open text-black fs-15"
              ></i>
              Account manager dashboard
            </Card.Title>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="form-group"
              style={{ marginTop: 30 }}
            >
              <Form.Label>Familia</Form.Label>
              <Select
                options={options}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setAccountSelected(value)}
                placeholder=""
                value={accountSelcted}
              />
            </Form.Group>

            <div style={{ marginLeft: 30, marginBottom: 5, marginTop: 30 }}>
              <Form.Check
                checked={accountStatus}
                type="switch"
                id="custom-switch"
                label="Estatus de VFO"
                onClick={() => {
                  setAccountStatus(!accountStatus);
                }}
              />
            </div>
            <div style={{marginLeft: 20, marginBottom: 30}}>
              {accountStatus ? (
                <p style={{ color: "gray", fontSize: 13 }}>
                  Si quieres apagar el VFO por seguridad, apaga el switch y haz
                  click en guardar. Al apagar, nadie podra acceder a ninguna cuenta
                  temporalmente.
                </p>
              ) : (
                <p style={{ color: "gray", fontSize: 13 }}>
                  Si quieres activar de nuevo el VFO, activa el switch y haz
                  click en guardar. Las cuentas podran acceder de nuevo a al VFO
                </p>
              )}
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div
                style={{
                  paddingBottom: 0,
                  paddingLeft: 10,
                  marginTop: 20,
                  marginBottom: 0,
                }}
              >
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="first" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-lock text-black fs-13"
                        ></i>
                        Cuentas y accesos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">
                        <i
                          style={{ marginRight: 11 }}
                          className="fe fe-users text-black fs-13"
                        ></i>
                        Equipo VFO
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body">
                <Tab.Pane eventKey="first">{renderTable()}</Tab.Pane>
                <Tab.Pane eventKey="second">{}</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}
