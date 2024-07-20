import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { family } from "../../../familyStructure/familyStructureData";
import { Link } from "react-router-dom";

export default function BanksAccountsCreate(props) {
  const membersList = formatMember(family.members);
  const [objectName, setObjectName] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [members, setMembers] = useState([]);

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [propertyType, setPropertyType] = useState({
    value: "",
    label: "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsProperyType = [
    { value: "Arte", label: "Arte" },
    { value: "Joyeria", label: "Joyeria" },
    { value: "Colecciones", label: "Colecciones" },
  ];

  return (
    <Fragment>

      <Row style={{padding: 20}}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de arte, colecciones y otros
          </Card.Title>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setObjectName(text.target.value)}
                    value={objectName}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
             
              <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom01"
                  className="form-group"
                >
                <Form.Label>Tipo de propiedad</Form.Label>
                <Select
                  options={OptionsProperyType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setPropertyType(value)}
                  placeholder=""
                  value={propertyType}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Moneda</Form.Label>
                <Select
                  options={Optionscurrency}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setCurrency(value)}
                  placeholder=""
                  value={currency}
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Valuación actual</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTodayValue(text.target.value)}
                    value={todayValue}
                  />
                  <InputGroup.Text id="inputGroupPrepend-2">
                    {currency.value}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
                <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
                  Una valuación acertada y reciente es importante para un
                  calculo mas acertado en el total del valor patrimonial
                </p>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Miembro(s) propietarios</Form.Label>
                <MultiSelect
                  options={membersList}
                  value={members}
                  onChange={setMembers}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona propietario(s)",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Certificado
                </Form.Label>
                  <FileUpload />
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Foto
                </Form.Label>
                <FileUpload />
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
              <Button variant="primary" className=" mb-1" type="submit">
                Crear
              </Button>
            </div>
          {/* </Form> */}
      </Row>
    </Fragment>
  );
}
