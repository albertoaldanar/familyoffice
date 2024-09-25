import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import dayjs, { Dayjs } from "dayjs";
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { family } from "../../../familyStructure/familyStructureData";
import { companies } from "../../../../administration/accounting/accountingData";
import { formatCompany, formatTrust } from "../../../../administration/accounting/companyUtils";
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { providers } from "../../../../administration/providers/providersData";
import { Link, useNavigate } from "react-router-dom";
import { formatProviderContacts } from "../../../../administration/providers/providersUtils";

export default function RealStateItemCreate(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const membersList = formatMember(family.members);
  const trustsList = formatTrust(fideicomisos);
  const providersList = formatProviderContacts(providers);
  const [propertyName, setPropertyName] = useState("");
  const [location, setLocation] = useState("");
  const [city, setCity] = useState("");
  const [members, setMembers] = useState([]);
  const [percentage, setPercentage] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [mt2, setMt2] = useState("");
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState([]);
  const [ownerTurst, setOwnerTurst] = useState([]);
  const [ownerCompanies, setOwnerCompanies] = useState([]);
  const [country, setCountry] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [propertyType, setPropertyType] = useState({
    value: "",
    label: "",
  });

  const [providersSelected, setProvidersSelected] = useState([]);

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsProperyType = [
    { value: "Casa", label: "Casa" },
    { value: "Departamento", label: "Departamento" },
    { value: "Oficinas", label: "Oficinas" },
    { value: "Terreno", label: "Terreno" },
  ];

  const Optionscountry = [
    { value: "México", label: "México" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "España", label: "España" },
  ];

  const handleInputChange = (
    memberIndex,
    attributeName,
    value,
    type
  ) => {
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
      setOwnerTurst((prevState) => {
        const updatedTrusts = [...prevState];
        updatedTrusts[memberIndex] = {
          ...updatedTrusts[memberIndex],
          [attributeName]: value,
        };
        return updatedTrusts;
      });
    }
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
      if (ownerTurst.length) {
        return ownerTurst.map((trust, index) => {
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

  return (
    <Fragment>
      <Row style={{padding: 20}}>
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
              className="fe fe-map-pin text-black fs-13"
            ></i>
            Nuevo Registro de propiedad
          </Card.Title>
          {/* <Form noValidate validated={false} onSubmit={() => {}}> */}
            <Row style={{ marginBottom: 10 }}>
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
            <Row style={{ marginTop: 10, marginBottom: -10 }}>
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
                <p style={{ color: "gray", fontSize: 13 }}>
                  Miembros familiares
                </p>
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
                  options={trustsList}
                  value={ownerTurst}
                  onChange={setOwnerTurst}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona empresas accionistas",
                    allItemsAreSelected: "Todos los fideicomisos",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />

                {renderOptionsSelected("trust")}
              </Form.Group>
            </Row>

            <Row style={{marginTop: 30}}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Contactos o proveedores para ligar a esta propiedad</Form.Label>
                <MultiSelect
                  options={providersList}
                  value={providersSelected}
                  onChange={setProvidersSelected}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona contactos o proveedores importantes para esta propiedad",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 30 }}>
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

              <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
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
                  <InputGroup.Text id="inputGroupPrepend-2">
                    Mt2
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Escrituras
                </Form.Label>
                  <FileUpload />
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Imagenes de propieda
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
