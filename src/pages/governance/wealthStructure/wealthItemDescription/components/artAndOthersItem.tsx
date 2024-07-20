import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Nav,
  Tab,
} from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import FileView from "../../../../administration/accounting/components/fileView";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { otherWealthData } from "../../wealthStructureData";
import { family } from "../../../familyStructure/familyStructureData";

export default function ArtAndOthersItem(props) {
  const artSelected = otherWealthData.artAndOthers.find(
    (art) => art.id === Number(props.id)
  );

  if (!artSelected) {
    return <NotFoundSearch />;
  }

  const [artName, setArtName] = useState(artSelected.name);
  const [value, setValue] = useState(artSelected.value);
  const [currency, setCurrency] = useState({
    value: artSelected.currency,
    label: artSelected.currency,
  });
  const [propertyType, setPropertyType] = useState({
    value: artSelected.type,
    label: artSelected.type,
  });
  const [selectedMembers, setSelectedMembers] = useState(
    artSelected.ownersIds.map(id => {
      const member = family.members.find(m => m.id === id);
      return { label: member.name, value: member.id };
    })
  );

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsPropertyType = [
    { value: "Arte", label: "Arte" },
    { value: "Joyeria", label: "Joyeria" },
    { value: "Colecciones", label: "Colecciones" },
  ];

  const familyMembersOptions = family.members.map(member => ({
    label: member.name,
    value: member.id,
  }));

  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 10 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de la obra</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setArtName(text.target.value)}
                value={artName}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el nombre de la obra
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de Propiedad</Form.Label>
            <Select
              options={OptionsPropertyType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setPropertyType(value)}
              placeholder=""
              value={propertyType}
            />
          </Form.Group>
        </Row>
        <Row style={{ marginBottom: 10 }}>

        </Row>
        <Row style={{ marginBottom: 10 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Miembros propietarios</Form.Label>
            <MultiSelect
              options={familyMembersOptions}
              value={selectedMembers}
              onChange={setSelectedMembers}
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
          <Form.Group
            as={Col}
            md="4"
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
            md="4"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Valor</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setValue(text.target.value)}
                value={value}
              />
              <InputGroup.Text id="inputGroupPrepend-2">
                {currency.value}
              </InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                Favor de añadir el valor
              </Form.Control.Feedback>
            </InputGroup>
            <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
              Una valuación acertada y reciente es importante para un cálculo
              más acertado en el total del valor patrimonial
            </p>
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <>
        <Row>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">Foto</Form.Label>
            {artSelected.photo ? (
              <FileView title="Foto" fileName={artSelected.photo} />
            ) : (
              <div>
                <FileUpload />
              </div>
            )}
          </Form.Group>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">Certificado</Form.Label>
            {artSelected.certificate ? (
              <FileView title="Certificado" fileName={artSelected.certificate} />
            ) : (
              <div>
                <FileUpload />
              </div>
            )}
          </Form.Group>
        </Row>
      </>
    );
  };

  return (
    <Fragment>
      <Row style={{ marginTop: 10, padding: 20 }}>
        <Card.Title>{artSelected.type} - {artSelected.name}</Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            style={{
              paddingBottom: 0,
              paddingLeft: 10,
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <div className="tabs-menu1">
              <Nav as="ul" className="nav panel-tabs">
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="first" href="#">
                    Información
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">Documentos</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
            <Tab.Pane eventKey="second">{renderDocuments()}</Tab.Pane>
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
            style={{ position: "absolute", right: 25, bottom: 20 }}
            variant="primary"
            className="mb-1"
            type="submit"
          >
            Guardar
          </Button>
        </div>
      </Row>
    </Fragment>
  );
}
