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
import { companies } from "../accounting/accountingData";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { formatCompany } from "../accounting/companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../accounting/companyUtils";
import { formatRealstateData } from "../payments/paymentUtils";
import { formatBankAccounts, formatPrivateEquity } from "../../governance/wealthStructure/wealthStructureUtils";
import { formatVehicleData } from "../payments/paymentUtils";
import { providers } from "../providers/providersData";
import { formatProviderContacts } from "../providers/providersUtils";

export default function TrustCreate(props) {
  const navigate = useNavigate();

  const providersList = formatProviderContacts(providers);
  const [trustNumber, setTrustNumber] = useState("");
  const [trustBank, setTrustBank] = useState("");
  const [trustee, setTrustee] = useState("");
  const [purpose, setPurpose] = useState("");
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState([]);
  const [companiesContained, setCompaniesContained] = useState([]);
  const [realStateContained, setRealStateContained] = useState([]);
  const [bankAccountsContained, setBankAccountsContained] = useState([]);
  const [vehiclesContained, setVehiclesContained] = useState([]);
  const [artContained, setArtContained] = useState([]);
  const [privateEquityContained, setPrivateEquityContained] = useState([]);
  const [country, setCountry] = useState([]);
  const [providersSelected, setProvidersSelected] = useState([]);
  const [creationDate, setCreationDate] = useState<Dayjs | null>(dayjs(""));

  const [trustType, setTrustType] = useState({
    value: "",
    label: "",
  });

  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const realStateList = formatRealstateData(realstateData);
  const bankAccountsList = formatBankAccounts(otherWealthData.bankAccounts);
  const vehicleList = formatVehicleData(otherWealthData.vehicles);
  const artAndOthersList = formatMember(otherWealthData.artAndOthers);
  const privateEquityList = formatPrivateEquity(otherWealthData.privateEquity);

  const OptionsTrustType = [
    {
      value: "Patrimonial recovable con derecho a reversión",
      label: "Patrimonial recovable con derecho a reversión",
    },
    { value: "Testamentario", label: "Testamentario" },
    { value: "Estructurado", label: "Estructurado" },
  ];

  const renderSelectAssetsContained = () => {
    return (
      <div>
        <Row style={{ marginTop: 20, marginBottom: -10 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Bienes y activos contenidos en fideicomiso</Form.Label>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 12}}>Empresas</p>
            <MultiSelect
              options={companiesList}
              value={companiesContained}
              onChange={setCompaniesContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona empresas accionistas",
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
            <p style={{ color: "gray", fontSize: 12 }}>Bienes raices</p>
            <MultiSelect
              options={realStateList}
              value={realStateContained}
              onChange={setRealStateContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona bienes raices",
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
            <p style={{ color: "gray", fontSize: 12 }}>Cuentas bancarias</p>
            <MultiSelect
              options={bankAccountsList}
              value={bankAccountsContained}
              onChange={setBankAccountsContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona cuentas bancarias",
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
            <p style={{ color: "gray", fontSize: 12 }}>Vehiculos</p>
            <MultiSelect
              options={vehicleList}
              value={vehiclesContained}
              onChange={setVehiclesContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona vehiculos",
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
            <p style={{ color: "gray", fontSize: 12 }}>Arte y otros</p>
            <MultiSelect
              options={artAndOthersList}
              value={artContained}
              onChange={setArtContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona arte y otros",
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
            <p style={{ color: "gray", fontSize: 12 }}>Inversiones capital privado</p>
            <MultiSelect
              options={privateEquityList}
              value={privateEquityContained}
              onChange={setPrivateEquityContained}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona cuentas bancarias",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

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

            <Row style={{ marginTop: 10, marginBottom: -10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Participantes en fideicomiso</Form.Label>
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
                  Fideicomitentes de la familia (beneficiarios)
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
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <p style={{ color: "gray", fontSize: 12}}>Fideicomisario</p>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setTrustee(text.target.value)}
                  value={trustee}
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
                    selectSomeItems:
                    `Selecciona contactos o proveedores importantes para esta empresa`,
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
