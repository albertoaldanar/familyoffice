import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Table,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import { MultiSelect } from "react-multi-select-component";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../accounting/components/fileUpload";
import NotFoundSearch from "../../shared/notFoundSearch";
import FileView from "../accounting/components/fileView";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { family } from "../../governance/familyStructure/familyStructureData";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../accounting/companyUtils";
import { formateDateForUI } from "../payments/paymentUtils";

export default function WillDescription(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const params = useParams();

  const userSelected = family.members.find(
    (member) => member.id === params.userId
  );

  if (!userSelected) {
    return <NotFoundSearch />;
  }

  const willSelected = userSelected.wills.find(
    (will) => will.id === Number(params.id)
  );

  if (!willSelected) {
    return <NotFoundSearch />;
  }

  const trustDateFormatted = formateDateForUI(willSelected.lastUpdate);

  const [willName, setwillName] = useState(willSelected.name);
  const [notary, setNotary] = useState(willSelected.notary);
  const [purpose, setPurpose] = useState(willSelected.willReason);
  const [country, setCountry] = useState({
    label: willSelected.country,
    value: willSelected.country,
  });
  const [creationDate, setCreationDate] = useState<Dayjs | null>(
    dayjs(trustDateFormatted)
  );

  const renderContract = () => {
    return (
      <Row>
        <Form.Group as={Col} md="6" className="form-group">
          <Form.Label>Copia de testamento</Form.Label>
          {willSelected.url ? (
            <FileView fileName="Fideicomiso" title="Fideicomiso" />
          ) : (
            <FileUpload />
          )}
        </Form.Group>
      </Row>
    );
  };

  const renderInfo = () => {
    return (
      <div>
        <Row style={{ marginBottom: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre del testamento</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setwillName(text.target.value)}
                value={willName}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Notaria emisora de testamento</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setNotary(text.target.value)}
              value={notary}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Finalidad del testamento</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setPurpose(text.target.value)}
              value={purpose}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>País</Form.Label>
            <Select
              options={countryOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCountry(value)}
              placeholder=""
              value={country}
            />
          </Form.Group>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Ultima actualización de testamento</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(value) => setCreationDate(value)}
                  value={dayjs(creationDate)}
                  defaultValue={dayjs(creationDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderContactList = () => {
    const existringContacts = willSelected.contacts.length > 0;
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginBottom: 30,
          }}
        >
          <div></div>
          <Button
            style={{
              marginRight: 10,
              height: 30,
            }}
            size="sm"
            className="custom-button"
          >
            <Link
              style={{ color: "white" }}
              to={`${
                baseUrl
              }administration/providerCreate/standar`}
            >
              + Añadir nuevo contacto
            </Link>
          </Button>
        </div>
        {existringContacts ? (
          <div className="table-responsive">
            <Table className="table border text-nowrap text-md-nowrap mb-0">
              <thead className="bg-light">
                <tr>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Ubicación</th>
                  <th>Teléfono</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {willSelected.contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.type}</td>
                    <td>{contact.location}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                      }}
                    >
                      <Link
                        to={`${baseUrl}administration/providerDescription/${contact.categoryCoreId}/provider/${contact.coreId}/`}
                      >
                          <i
                            className="fe fe-arrow-right text-black fs-15"
                          ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p style={{ fontSize: 12, color: "gray", textAlign: 'center' }}>
            Aún no hay ningun contacto seleccionado para{" "}
            {willSelected.name}
          </p>
        )}
      </>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30, minHeight: 550 }}>
          <Card.Title style={{ marginBottom: 0 }}>
            <Link
                style={{color: '#696969', fontSize: 16, marginBottom: 20, marginRight: 15}}
                to={'..'}
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
              className="fe fe-book-open text-black fs-15"
            ></i>{" "}
            Testamento de {userSelected.name} - {willSelected.name}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
              <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="third">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-file-text text-black fs-13"
                        ></i>
                        Información 
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-book-open text-black fs-13"
                        ></i>
                        Testamento 
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="contacts" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-users text-black fs-13"
                        ></i>
                        Contactos
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </div>

              <Tab.Content className="panel-body" style={{marginTop: 10}}>
                <Tab.Pane eventKey="third">{renderInfo()}</Tab.Pane>
                <Tab.Pane eventKey="second">{renderContract()}</Tab.Pane>
                <Tab.Pane eventKey="contacts">{renderContactList()}</Tab.Pane>
              </Tab.Content>
            </Tab.Container>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div></div>
              <Button
                style={{ position: "absolute", right: 25, bottom: 80 }}
                className="custom-button"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Fragment>
  );
}
