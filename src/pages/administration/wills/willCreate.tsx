import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import { MultiSelect } from "react-multi-select-component";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../accounting/components/fileUpload";
import FileView from "../accounting/components/fileView";
import { Link, useNavigate } from "react-router-dom";
import { countryOptions } from "../accounting/companyUtils";
import { providers } from "../providers/providersData";
import { formatProviderContacts } from "../providers/providersUtils";

export default function WillCreate(props) {
  const navigate = useNavigate();

  const providersList = formatProviderContacts(providers);
  const [willName, setwillName] = useState("");
  const [notary, setNotary] = useState("");
  const [purpose, setPurpose] = useState("");
  const [country, setCountry] = useState([]);
  const [providersSelected, setProvidersSelected] = useState([]);
  const [creationDate, setCreationDate] = useState<Dayjs | null>(dayjs(""));

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30 }}>
          <Card.Title style={{ marginBottom: 35 }}>
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
            Nuevo Registro de testamento
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>

            <Row style={{ marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre de testamento</Form.Label>
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

            <Row style={{ marginTop: 10 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label>Copia de testamento</Form.Label>
                <FileUpload />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>
                  Contactos o proveedores para ligar a esta testamento
                </Form.Label>
                <MultiSelect
                  options={providersList}
                  value={providersSelected}
                  onChange={setProvidersSelected}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems:
                    `Selecciona contactos o proveedores importantes para esta testamento`,
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
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

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <div></div>
              <Button className="custom-button" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Fragment>
  );
}
