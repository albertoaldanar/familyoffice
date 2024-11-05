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
import { useParams } from "react-router-dom";
import { family } from "../../governance/familyStructure/familyStructureData";
import { companies, fideicomisos } from "../accounting/accountingData";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { formatCompany, formatTrust } from "../accounting/companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../accounting/companyUtils";
import { providers } from "../providers/providersData";
import { formatProviderContacts } from "../providers/providersUtils";

export default function TrustCreate(props) {
  const navigate = useNavigate();

  const providersList = formatProviderContacts(providers);
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustList = formatTrust(fideicomisos);
  const providerList = formatProviderContacts(providers);
  // family
  const [trustorsFamilyMembers, setTrustorsFamilyMembers] = useState([]);
  const [trusteesFamilyMembers, setTrusteesFamilyMembers] = useState([]);
  const [beneficiariesFamilyMembers, setBeneficiariesFamilyMembers] = useState([]);

  // companies  
  const [trustorCompanies, setTrustorCompanies] = useState([]);
  const [trusteesCompanies, setTrusteesCompanies] = useState([]);
  const [beneficiariesCompanies, setBeneficiariesCompanies] = useState([]);

  // trusts  
  const [trustorsTrusts, setTrustorsTrusts] = useState([]);
  const [beneficiariesTrusts, setBeneficiariesTrust] = useState([]);

  // providers  
  const [trusteesProvider, setTrusteesProvider] = useState([]);
  const [trustNumber, setTrustNumber] = useState("");
  const [trustBank, setTrustBank] = useState("");
  const [purpose, setPurpose] = useState("");
  const [country, setCountry] = useState([]);
  const [providersSelected, setProvidersSelected] = useState([]);
  const [creationDate, setCreationDate] = useState<Dayjs | null>(dayjs(""));

  const [trustType, setTrustType] = useState({
    value: "",
    label: "",
  });

  const OptionsTrustType = [
    {
      value: "Patrimonial recovable con derecho a reversión",
      label: "Patrimonial recovable con derecho a reversión",
    },
    { value: "Testamentario", label: "Testamentario" },
    { value: "Estructurado", label: "Estructurado" },
  ];

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30 }}>
          <Card.Title style={{ marginBottom: 35 }}>
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
              className="fe fe-file text-black fs-15"
            ></i>{" "}
            Nuevo Registro de Fideicomiso
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Numero de fideicomiso</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTrustNumber(text.target.value)}
                    value={trustNumber}
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
                <Form.Label>Fiduciario (Banco)</Form.Label>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setTrustBank(text.target.value)}
                  value={trustBank}
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Tipo de fideicomiso</Form.Label>
                <Select
                  options={OptionsTrustType}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setTrustType(value)}
                  placeholder=""
                  value={trustType}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label>Contrato de fideicomiso</Form.Label>
                <FileUpload />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: -10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fideicomitentes</Form.Label>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomitente miembros de la familia
                </p>
                <MultiSelect
                  options={familyList}
                  value={trustorsFamilyMembers}
                  onChange={setTrustorsFamilyMembers}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomitentes de la familia",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomitente empresas de la familia
                </p>
                <MultiSelect
                  options={companiesList}
                  value={trustorCompanies}
                  onChange={setTrustorCompanies}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomitentes empresas",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomitentes otros fideicomisos
                </p>
                <MultiSelect
                  options={trustList}
                  value={trustorsTrusts}
                  onChange={setTrustorsTrusts}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomisos fideicomitentes",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: -10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fideicomisarios</Form.Label>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomisarios de la familia
                </p>
                <MultiSelect
                  options={familyList}
                  value={trusteesFamilyMembers}
                  onChange={setTrusteesFamilyMembers}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomisarios de la familia",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomisarios proveedores de servicio externos
                </p>
                <MultiSelect
                  options={providerList}
                  value={trusteesProvider}
                  onChange={setTrusteesProvider}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomisarios externos",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Fideicomisarios personas morales de la familia
                </p>
                <MultiSelect
                  options={companiesList}
                  value={trusteesCompanies}
                  onChange={setTrusteesCompanies}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomisarios empresas",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: -10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Beneficiarios</Form.Label>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Beneficiarios miembros de la familia
                </p>
                <MultiSelect
                  options={familyList}
                  value={beneficiariesFamilyMembers}
                  onChange={setBeneficiariesFamilyMembers}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona beneficiarios de la familia",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Beneficiarios empresas de la familia
                </p>
                <MultiSelect
                  options={companiesList}
                  value={beneficiariesCompanies}
                  onChange={setBeneficiariesCompanies}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona empresas beneficiarias",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />
              </Form.Group>

              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12 }}>
                  Beneficiarios otros fideicomisos
                </p>
                <MultiSelect
                  options={trustList}
                  value={beneficiariesTrusts}
                  onChange={setBeneficiariesTrust}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomisos beneficiarios",
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
                <Form.Label>
                  Contactos o proveedores para ligar a esta empresa
                </Form.Label>
                <MultiSelect
                  options={providersList}
                  value={providersSelected}
                  onChange={setProvidersSelected}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: `Selecciona contactos o proveedores importantes para esta empresa`,
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
                <Form.Label>Finalidad del fideicomiso</Form.Label>
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
                <Form.Label>Fecha de creación de fideicomiso</Form.Label>
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
