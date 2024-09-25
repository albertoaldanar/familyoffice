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
//@ts-ignore
import { MultiSelect } from "react-multi-select-component";
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import FileView from "../../../../administration/accounting/components/fileView";
import { arrendamientos } from "../../../../administration/collecting/collectingData";
import { realstateData } from "../../../../investments/realState/realStateData";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import {
  prediales,
  mantenimientos,
  creditos,
  seguros,
} from "../../../../administration/payments/paymentsData";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { family } from "../../../familyStructure/familyStructureData";
import { companies } from "../../../../administration/accounting/accountingData";
import {
  formatCompany,
  formatOwnersData,
  formatTrust,
} from "../../../../administration/accounting/companyUtils";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";

export default function RealStateItem(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const realStateSelected = realstateData.find(
    (realState) => realState.id === Number(props.id)
  );

  if (!realStateSelected) {
    return <NotFoundSearch />;
  }

  const trustList = formatTrust(fideicomisos);
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const ownerData = formatOwnersData(realStateSelected);
  const [propertyName, setPropertyName] = useState(realStateSelected.nombre);
  const [location, setLocation] = useState(realStateSelected.location);
  const [city, setCity] = useState(realStateSelected.ciudad);
  const [percentage, setPercentage] = useState(realStateSelected.percentage);
  const [todayValue, setTodayValue] = useState(realStateSelected.valuacion);
  const [mt2, setMt2] = useState(realStateSelected.mt2);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(
    ownerData.family
  );
  const [ownerCompanies, setOwnerCompanies] = useState(ownerData.company);
  const [ownerTrust, setOwnerTrust] = useState(ownerData.trust);

  const [country, setCountry] = useState({
    value: realStateSelected.country,
    label: realStateSelected.country,
  });

  const [currency, setCurrency] = useState({
    value: realStateSelected.moneda,
    label: realStateSelected.moneda,
  });

  const [propertyType, setPropertyType] = useState({
    value: realStateSelected.propertyType,
    label: realStateSelected.propertyType,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const Optionscountry = [
    { value: "México", label: "México" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "España", label: "España" },
  ];

  const OptionsProperyType = [
    { value: "Casa", label: "Casa" },
    { value: "Departamento", label: "Departamento" },
    { value: "Oficinas", label: "Oficinas" },
    { value: "Terreno", label: "Terreno" },
  ];

  const renderDescription = () => {
    return (
      <div>
        <Row style={{ marginBottom: 10, marginTop: 15 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de propiedad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setPropertyName(text.target.value)}
                value={propertyName}
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
            <Form.Label>Direccion de propiedad</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setLocation(text.target.value)}
              value={location}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setCity(text.target.value)}
              value={city}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
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
              Una valuación acertada y reciente es importante para un calculo
              mas acertado en el total del valor patrimonial
            </p>
          </Form.Group>
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
            <Form.Label>País</Form.Label>
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
            style={{ zIndex: 100 }}
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

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Metros cuadrados</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setMt2(text.target.value)}
                value={mt2}
              />
              <InputGroup.Text id="inputGroupPrepend-2">Mt2</InputGroup.Text>
            </InputGroup>
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
            <Form.Label className="form-label my-3">Esctrituras</Form.Label>
            {realStateSelected.escrituras ? (
              <FileView
                title="Escrituras"
                fileName={realStateSelected.actaConstitutiva}
              />
            ) : (
              <FileUpload />
            )}
          </Form.Group>
        </Row>
      </>
    );
  };

  const renderResponsabilities = () => {
    const predialLinked = prediales.find(
      (predial) => predial.linkedItemId === Number(props.id)
    );
    const mantainanceLinked = mantenimientos.find(
      (mantainence) =>
        mantainence.linkedItemId === Number(props.id) &&
        mantainence.tipo === "Inmobiliario"
    );
    const creditLinked = creditos.find(
      (credit) =>
        credit.linkedItemId === Number(props.id) &&
        credit.tipoCredito === "Hipotecario"
    );
    const insuranceLinked = seguros.find(
      (seg) => seg.linkedItemId === Number(props.id) && seg.tipo === "Inmueble"
    );
    const rentLinked = arrendamientos.find(
      (arr) =>
        arr.linkedItemId === Number(props.id) && arr.tipo === "Inmobiliario"
    );

    return (
      <div style={{ display: "flex", flexDirection: "row", marginLeft: 10 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            width: "25%",
          }}
        >
          <p style={{ fontSize: 15, fontWeight: "700", fontStyle: "italic" }}>
            Pagos
          </p>

          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, marginRight: 10, marginBottom: -5 }}>
              Predial:
            </p>
            {predialLinked ? (
              <Link
                to={`${baseUrl}administration/propertyTaxDescription/${predialLinked.id}`}
                style={{
                  fontSize: 13,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#5488d2",
                }}
              >
                Pago de predial
              </Link>
            ) : (
              <Link
                to={`${baseUrl}administration/propertyTaxCreate/${realStateSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar predial
              </Link>
            )}
          </div>

          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, marginRight: 10, marginBottom: -5 }}>
              Mantenimiento:
            </p>
            {mantainanceLinked ? (
              <Link
                to={`${baseUrl}administration/mantainanceDescription/${mantainanceLinked.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#5488d2",
                }}
              >
                Ver pagos de mantenimiento
              </Link>
            ) : (
              <Link
                to={`${baseUrl}administration/mantainanceCreate/type/realState/itemId/${realStateSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar mantenimientos
              </Link>
            )}
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, marginRight: 10, marginBottom: -5 }}>
              Credito:
            </p>
            {creditLinked ? (
              <Link
                to={`${baseUrl}administration/debtDescription/${creditLinked.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#5488d2",
                }}
              >
                Ver pago de credito hipotecario
              </Link>
            ) : (
              <Link
                to={`${baseUrl}administration/debtCreate/type/realState/itemId/${realStateSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar credito
              </Link>
            )}
          </div>
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, marginRight: 10, marginBottom: -5 }}>
              Seguro:
            </p>
            {insuranceLinked ? (
              <Link
                to={`${baseUrl}administration/insuraceDescription/${insuranceLinked.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#5488d2",
                }}
              >
                Ver pagos de seguro inmobiliario
              </Link>
            ) : (
              <Link
                to={`${baseUrl}administration/insuranceCreate/type/realState/itemId/${realStateSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar seguro
              </Link>
            )}
          </div>
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 60 }}
        >
          <p style={{ fontSize: 15, fontWeight: "700", fontStyle: "italic" }}>
            Cobranza
          </p>

          <div style={{ marginBottom: 20 }}>
            <p style={{ fontSize: 13, marginRight: 10, marginBottom: -5 }}>
              Arrendamiento:
            </p>
            {rentLinked ? (
              <Link
                to={`${baseUrl}administration/rentDescription/${rentLinked.id}`}
                style={{
                  fontSize: 13,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "#5488d2",
                }}
              >
                Cobranza de arrendamiento vehicular
              </Link>
            ) : (
              <Link
                to={`${baseUrl}administration/rentCreate/type/realState/itemId/${realStateSelected.id}`}
                style={{
                  fontSize: 12,
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "gray",
                }}
              >
                + Administrar arrendamiento
              </Link>
            )}
          </div>
        </div>
      </div>
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
      <>
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
      </>
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
                Porcentaje de{" "}
                <Link to={`${baseUrl}governance/familyMember/${member.value}`}>
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
                Porcentaje de{" "}
                <Link
                  to={`${baseUrl}administration/company/${company.value}/company`}
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
                Porcentaje de{" "}
                <Link
                  to={`${baseUrl}administration/trustDescription/${trust.value}`}
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
    const existringContacts = realStateSelected.contacts.length > 0;
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
            variant="primary"
            size="sm"
            className="mb-1"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseUrl}administration/providerCreate/standar`}
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
            justifyContent: existringContacts ? "left" : "center",
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
            '{realStateSelected.nombre}' a su lista de activos relacionados{" "}
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
                {realStateSelected.contacts.map((contact) => (
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
                        Ver
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p style={{ fontSize: 12, color: "gray", textAlign: "center" }}>
            Aún no hay ningun contacto seleccionado para{" "}
            {realStateSelected.nombre}
          </p>
        )}
      </>
    );
  };

  return (
    <Fragment>
      <Row style={{ marginTop: 0, padding: 20 }}>
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
            className="fe fe-map-pin text-black fs-13"
          ></i>
          {realStateSelected.nombre}
        </Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            style={{
              paddingBottom: 0,
              paddingLeft: 10,
              marginTop: 10,
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
                      className="fe fe-calendar text-black fs-13"
                    ></i>
                    Obligaciones
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="fourth">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-book-open text-black fs-13"
                    ></i>
                    Propietario(s)
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="fifth">
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

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
            <Tab.Pane eventKey="second">{renderDocuments()}</Tab.Pane>
            <Tab.Pane eventKey="third">{renderResponsabilities()}</Tab.Pane>
            <Tab.Pane eventKey="fourth">{renderOwners()}</Tab.Pane>
            <Tab.Pane eventKey="fifth">{renderContactList()}</Tab.Pane>
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
            className=" mb-1"
            type="submit"
          >
            Guardar
          </Button>
        </div>
      </Row>
    </Fragment>
  );
}
