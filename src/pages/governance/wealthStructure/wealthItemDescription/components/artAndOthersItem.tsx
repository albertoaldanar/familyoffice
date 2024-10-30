import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Nav,
  Table,
  Tab,
} from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import FileView from "../../../../administration/accounting/components/fileView";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { otherWealthData } from "../../wealthStructureData";
import { family } from "../../../familyStructure/familyStructureData";
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { companies } from "../../../../administration/accounting/accountingData";
import { Link } from "react-router-dom";
import {
  formatCompany,
  formatTrust,
  formatOwnersData,
} from "../../../../administration/accounting/companyUtils";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { useNavigate } from "react-router-dom";

export default function ArtAndOthersItem(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const artSelected = otherWealthData.artAndOthers.find(
    (art) => art.id === Number(props.id)
  );

  if (!artSelected) {
    return <NotFoundSearch />;
  }

  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustList = formatTrust(fideicomisos);
  const ownerData = formatOwnersData(artSelected);

  const [artName, setArtName] = useState(artSelected.name);
  const [value, setValue] = useState(artSelected.value);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(
    ownerData.family
  );
  const [ownerCompanies, setOwnerCompanies] = useState(ownerData.company);
  const [ownerTrust, setOwnerTrust] = useState(ownerData.trust);

  const [currency, setCurrency] = useState({
    value: artSelected.currency,
    label: artSelected.currency,
  });
  const [propertyType, setPropertyType] = useState({
    value: artSelected.type,
    label: artSelected.type,
  });

  const [country, setCountry] = useState({
    value: artSelected.country,
    label: artSelected.country,
  });

  const [newInstruction, setNewInstructions] = useState("");  

  const [instructions, setInstructions] = useState(
    artSelected.successionInstructions || []
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

  const Optionscountry = [
    { value: "México", label: "México" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "España", label: "España" },
  ];

  const familyMembersOptions = family.members.map((member) => ({
    label: member.name,
    value: member.id,
  }));

  const handleAddSubject = () => {
    if (newInstruction.trim()) {
      setInstructions([...instructions, newInstruction]);
      setNewInstructions("");
    }
  };

  const handleRemoveSubject = (index) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 10, marginTop: 10 }}>
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

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>País de ubicación</Form.Label>
            <Select
              options={Optionscountry}
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
      <Row style={{ marginTop: -20 }}>
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
    );
  };

  const handleInputChange = (memberIndex, attributeName, value, type) => {
    if (type === "family") {
      setOwnerFamilyMembers((prevState) => {
        const updatedMembers = [...prevState];
        updatedMembers[memberIndex] = {
          ...updatedMembers[memberIndex],
          [attributeName]: value,
        };
        return updatedMembers;
      });
    } else if (type === "company") {
      setOwnerCompanies((prevState) => {
        const updatedCompanies = [...prevState];
        updatedCompanies[memberIndex] = {
          ...updatedCompanies[memberIndex],
          [attributeName]: value,
        };
        return updatedCompanies;
      });
    } else if (type === "trust") {
      setOwnerTrust((prevState) => {
        const updatedTrusts = [...prevState];
        updatedTrusts[memberIndex] = {
          ...updatedTrusts[memberIndex],
          [attributeName]: value,
        };
        return updatedTrusts;
      });
    }
  };

  const renderOwners = () => {
    return (
      <div style={{ marginTop: -20 }}>
        <Row>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Porcentajes de propietarios</Form.Label>
          </Form.Group>
        </Row>

        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Miembros familiares</p>
            <MultiSelect
              options={familyList}
              value={ownerFamilyMembers}
              onChange={setOwnerFamilyMembers}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona miembros accionistas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("family")}
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Empresas</p>
            <MultiSelect
              options={companiesList}
              value={ownerCompanies}
              onChange={setOwnerCompanies}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona empresas accionistas",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("company")}
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Fideicomisos</p>
            <MultiSelect
              options={trustList}
              value={ownerTrust}
              onChange={setOwnerTrust}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona fideicomisos accionistas",
                allItemsAreSelected: "Todos los fideicomisos",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("trust")}
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderOptionsSelected = (type) => {
    if (type === "family") {
      if (ownerFamilyMembers.length) {
        return ownerFamilyMembers.map((member, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje de <Link
                    to={`${
                      baseUrl
                    }governance/familyMember/${member.value}`}
                  >
                   {member.label}
                  </Link>
              </p>
              <InputGroup hasValidation style={{ marginBottom: 8 }}>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(index, "pct", e.target.value, "family")
                  }
                  value={member.pct || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    } else if (type === "company") {
      if (ownerCompanies.length) {
        return ownerCompanies.map((company, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje de <Link
                    to={`${
                      baseUrl
                    }administration/company/${company.value}/company`}
                  >
                   {company.label}
                  </Link>
              </p>
              <InputGroup hasValidation style={{ marginBottom: 8 }}>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(index, "pct", e.target.value, "company")
                  }
                  value={company.pct || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    } else if (type === "trust") {
      if (ownerTrust.length) {
        return ownerTrust.map((trust, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje de <Link
                    to={`${
                      baseUrl
                    }administration/trustDescription/${trust.value}`}
                  >
                   {trust.label}
                  </Link>
              </p>
              <InputGroup hasValidation style={{ marginBottom: 8 }}>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(index, "pct", e.target.value, "trust")
                  }
                  value={trust.pct || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    }

    return;
  };
  
  const renderContactList = () => {
    const existringContacts = artSelected.contacts.length > 0;
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: existringContacts ? 'left' : 'center'
          }}
        >
          <p
            style={{
              color: "gray",
              fontSize: 12,
              marginRight: 4,
            }}
          >
            Para añadir un contacto existente en proveedores y contactos, añade
            ' {artSelected.name}' a su lista de activos relacionados{" "}
            <Link
              style={{ fontSize: 12 }}
              to={`${baseUrl}administration/providers`}
            >
              Aquí
            </Link>
          </p>
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
                {artSelected.contacts.map((contact) => (
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
            {artSelected.name}
          </p>
        )}
      </>
    );
  };

  const renderSuccessionInstructions = () => {
    return (
      <Row >
      <Form.Group as={Col} md="10" className="form-group">
        <Form.Label style={{marginBottom: 20}}>Instrucciones y/o notas importantes de sucesión de este vehiculo</Form.Label>
        {/* <p>Es importante añadir instrucciones de sucesión, ya que facilitaras a los sucesores de este activo</p> */}
        <ul style={{ marginLeft: 20 }}>
          {instructions.map((subject, index) => (
            <li style={{ fontSize: 13, color: "gray" }} key={index}>
              {index + 1}. {subject}
              <Button
                variant="link"
                style={{
                  fontSize: 11,
                  marginBottom: 8,
                  color: "black",
                }}
                onClick={() => handleRemoveSubject(index)}
              >
                X
              </Button>
            </li>
          ))}
        </ul>
        <InputGroup style={{ marginTop: 13 }}>
          <Form.Control
            type="text"
            placeholder=""
            value={newInstruction}
            onChange={(e) => setNewInstructions(e.target.value)}
          />
          <Button
            style={{ fontSize: 12 }}
            variant="default"
            onClick={handleAddSubject}
          >
            + Agregar
          </Button>
        </InputGroup>
      </Form.Group>
    </Row>
    )
  }

  return (
    <Fragment>
      <Row style={{ marginTop: 10, padding: 20 }}>
        <Card.Title>
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
            className="fe fe-watch text-black fs-15"
          ></i>{" "}
          {artSelected.type} - {artSelected.name}
        </Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            style={{
              paddingBottom: 0,
              paddingLeft: 10,
              marginTop: 15,
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
                    Información
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-folder text-black fs-13"
                    ></i>
                    Documentos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="third">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-book-open text-black fs-13"
                    ></i>
                    Propietario(s)
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="contacts">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-users text-black fs-13"
                    ></i>
                    Contactos
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="six">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-repeat text-black fs-13"
                    ></i>
                    Instrucciones de sucesión
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
            <Tab.Pane eventKey="second">{renderDocuments()}</Tab.Pane>
            <Tab.Pane eventKey="third">{renderOwners()}</Tab.Pane>
            <Tab.Pane eventKey="contacts">{renderContactList()}</Tab.Pane>
            <Tab.Pane eventKey="six">{renderSuccessionInstructions()}</Tab.Pane>
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
      </Row>
    </Fragment>
  );
}
