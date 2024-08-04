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
import NotFoundSearch from "../../shared/notFoundSearch";
import FileView from "../accounting/components/fileView";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { family } from "../../governance/familyStructure/familyStructureData";
import { companies, fideicomisos } from "../accounting/accountingData";
import { realstateData } from "../../investments/realState/realStateData";
import { otherWealthData } from "../../governance/wealthStructure/wealthStructureData";
import { formatCompany } from "../accounting/companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../accounting/companyUtils";
import { formateDateForUI } from "../payments/paymentUtils";
import { formatRealstateData } from "../payments/paymentUtils";
import { formatBankAccounts, formatPrivateEquity, formatContainedAssets } from "../../governance/wealthStructure/wealthStructureUtils";
import { formatVehicleData } from "../payments/paymentUtils";

export default function TrustDescription(props) {
  const params = useParams();
  const trustSelected = fideicomisos.find(
    (trust) => trust.id === Number(params.id)
  );

  if (!trustSelected) {
    return <NotFoundSearch />;
  }

  const trustDateFormatted = formateDateForUI(trustSelected.trustCreation);

  const [trustNumber, setTrustNumber] = useState(trustSelected.trustNumber);
  const [trustBank, setTrustBank] = useState(trustSelected.trusteeBank);
  const [trustee, setTrustee] = useState(trustSelected.trustee);
  const [purpose, setPurpose] = useState(trustSelected.purpose);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(formatMember(trustSelected.trustors));
  const [companiesContained, setCompaniesContained] = useState(formatContainedAssets(trustSelected.content, 'company'));
  const [realStateContained, setRealStateContained] = useState(formatContainedAssets(trustSelected.content, 'realState'));
  const [bankAccountsContained, setBankAccountsContained] = useState(formatContainedAssets(trustSelected.content, 'bankAccount'));
  const [vehiclesContained, setVehiclesContained] = useState(formatContainedAssets(trustSelected.content, 'vehicle'));
  const [artContained, setArtContained] = useState(formatContainedAssets(trustSelected.content, 'artAndOthers'));
  const [privateEquityContained, setPrivateEquityContained] = useState(formatContainedAssets(trustSelected.content, 'privateEquity'));
  const [country, setCountry] = useState({
    label: trustSelected.country, 
    value: trustSelected.country
  });
  const [creationDate, setCreationDate] = useState<Dayjs | null>(dayjs(trustDateFormatted));

  const [trustType, setTrustType] = useState({
    value: trustSelected.trustType,
    label: trustSelected.trustType,
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
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Fideicomiso {trustSelected.trustNumber} {trustSelected.trusteeBank}
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
                {
                  trustSelected.contract ? (
                    <FileView fileName="Fideicomiso" title="Fideicomiso" />
                  ) :(
                    <FileUpload />
                  )
                }
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20, marginBottom: -10 }}>
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
                  Fideicomitentes (beneficiarios)
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

            {renderSelectAssetsContained()}

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
              <Button variant="primary" className=" mb-1" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
