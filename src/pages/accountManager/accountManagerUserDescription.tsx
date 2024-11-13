import React, { Fragment, useCallback, useState } from "react";
import { Form, Button, Card, Col, Row, Tab, Nav, Table } from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import { accountManagerData } from "./accountManagerData";
import NotFoundSearch from "../shared/notFoundSearch";
import { useParams, useNavigate } from "react-router-dom";

export default function AccountManagerUserDescription(props) {
  //@ts-ignore
  const baseUrl = `${import.meta.env.BASE_URL}`;
  const params = useParams();
  const navigate = useNavigate();

  const familySelected = accountManagerData.families.find(
    (family) => family.id === Number(params.familyId)
  );

  const userSelected = familySelected.accounts.find(
    (user) => user.id === Number(params.userId)
  );

  if (!userSelected) {
    return <NotFoundSearch />;
  }

  const [name, setName] = useState(userSelected.name);
  const [email, setEmail] = useState(userSelected.email);
  const [username, setUsername] = useState(userSelected.username);
  const [phone, setPhone] = useState(userSelected.phone);
  const [accountStatus, setAccountStatus] = useState(userSelected.isAccountOn);
  const [type, setType] = useState({
    label: userSelected.type,
    value: userSelected.type,
  });

  const usersType = [
    {
      label: "Miembro de la familia",
      value: "Miembro de la familia",
    },
    {
      label: "Proveedor",
      value: "Proveedor",
    },
  ];

  console.log("userSelected", userSelected);

  const renderPermittedDevices = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <h5 style={{ marginLeft: 15, marginBottom: 20 }}>
          Dispositivos permitidos
        </h5>
        <Col xl={12}>
          {userSelected.permittedDecives.length > 0 ? (
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Id</th>
                  <th>Tipo de dispositivo</th>
                  <th>Último login</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userSelected.permittedDecives.map((device) => (
                  <tr key={device.id}>
                    <td>{device.id}</td>
                    <td>{device.type}</td>
                    <td>{device.lastLogin}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link to={``}>
                        <i className="fe fe-x text-red fs-15"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No hay dispositivos que mostrar</p>
          )}
        </Col>
      </div>
    );
  };

  const renderNotPermittedDevices = () => {
    return (
      <div style={{ marginTop: 50 }}>
        <h5 style={{ marginLeft: 15, marginBottom: 20 }}>
          Dispositivos NO permitidos
        </h5>
        <Col xl={12}>
          {userSelected.notPermittedDevices.length > 0 ? (
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Id</th>
                  <th>Tipo de dispositivo</th>
                  <th>Ubicación de intento de acceso</th>
                  <th>Hora de intento de acceso</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {userSelected.notPermittedDevices.map((device) => (
                  <tr key={device.id}>
                    <td>{device.id}</td>
                    <td>{device.type}</td>
                    <td>{device.location}</td>
                    <td>{device.lastLogin}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link to={``}>
                        <i
                          style={{ marginRight: 10 }}
                          className="fe fe-check text-black fs-15"
                        ></i>
                        <i className="fe fe-x text-red fs-15"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <p>No hay dispositivos que mostrar</p>
          )}
        </Col>
      </div>
    );
  };

  const renderDevices = () => {
    return (
      <>
        {renderPermittedDevices()}
        {renderNotPermittedDevices()}
      </>
    );
  };

  const renderLinks = () => {
    return (
      <>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>
              Generar nueva contraseña para adquirir token familiar
            </Form.Label>
            <p style={{ textDecoration: "underline" }}>
              https://www.reset-password.famhold.com/token/usuarioEjemplo2
              <i
                style={{ marginLeft: 9 }}
                className="fe fe-copy text-black fs-13"
              ></i>
            </p>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Generar nueva contraseña para login</Form.Label>
            <p style={{ textDecoration: "underline" }}>
              https://www.reset-password.famhold.com/password/usuarioEjemplo2
              <i
                style={{ marginLeft: 9 }}
                className="fe fe-copy text-black fs-13"
              ></i>
            </p>
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        {userSelected.type === "Miembro de la familia" && (
          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Ejecutar protocolo de sucesion de datos</Form.Label>
              <Button
                style={{
                  marginRight: 15,
                  marginTop: 10,
                }}
                size="sm"
                className="custom-button"
              >
                <Link style={{ color: "white" }} to={`${baseUrl}`}>
                  Ejecutar protocolo
                </Link>
              </Button>
            </Form.Group>
          </Row>
        )}
      </>
    );
  };

  const renderUserInformation = () => {
    return (
      <>
        <div style={{ marginLeft: 15, marginBottom: 5 }}>
          <Form.Check
            checked={accountStatus}
            type="switch"
            id="custom-switch"
            label="Estatus de cuenta"
            onClick={() => {
              setAccountStatus(!accountStatus);
            }}
          />
        </div>
        {accountStatus ? (
          <p style={{ color: "gray", fontSize: 13 }}>
            Si quieres apagar la cuenta por seguridad, apaga el switch y haz
            click en guardar. Al apagar, nadie podra acceder a esta cuenta
            temporalmente.
          </p>
        ) : (
          <p style={{ color: "gray", fontSize: 13 }}>
            Si quieres activar de nuevo la cuenta, activa el switch y haz click
            en guardar. El usuario podra acceder de nuevo a esta cuenta
          </p>
        )}
        <Row style={{ marginTop: 30 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de usuario</Form.Label>
            <Select
              options={usersType}
              classNamePrefix="Select2"
              className="multi-select"
              isDisabled
              onChange={(value) => setType(value)}
              placeholder=""
              value={type}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setName(text.target.value)}
              value={name}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setUsername(text.target.value)}
              value={username}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setEmail(text.target.value)}
              value={email}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Telefono</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setPhone(text.target.value)}
              value={phone}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el nombre de la obra
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        {renderLinks()}
      </>
    );
  };

  return (
    <Fragment>
      <Row style={{ backgroundColor: "white", paddingTop: 20 }}>
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
            <Card.Title>
              <Link
                style={{
                  color: "#696969",
                  fontSize: 16,
                  marginBottom: 20,
                  marginRight: 15,
                }}
                to={".."}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <i
                  style={{ marginRight: 9 }}
                  className="fe fe-arrow-left text-black fs-13"
                ></i>
              </Link>
              <i
                style={{ marginRight: 9 }}
                className="fe fe-user text-black fs-15"
              ></i>{" "}
              Usuario - {userSelected.name}-{userSelected.type}
            </Card.Title>

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <div
                style={{
                  paddingBottom: 0,
                  paddingLeft: 10,
                  marginTop: 20,
                  marginBottom: 10,
                }}
              >
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="first" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-file-text text-black fs-13"
                        ></i>
                        Informacion del usuario
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">
                        <i
                          style={{ marginRight: 11 }}
                          className="fe fe-monitor text-black fs-13"
                        ></i>
                        Dispositivos permitidos
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body">
                <Tab.Pane eventKey="first">{renderUserInformation()}</Tab.Pane>
                <Tab.Pane eventKey="second">{renderDevices()}</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}
