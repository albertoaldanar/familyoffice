import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../../../../administration/accounting/companyUtils";
import { family } from "../../../familyStructure/familyStructureData";
import { companies } from "../../../../administration/accounting/accountingData";
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { providers } from "../../../../administration/providers/providersData";
import { formatProviderContacts } from "../../../../administration/providers/providersUtils";
import {
  formatCompany,
  formatTrust,
} from "../../../../administration/accounting/companyUtils";
//@ts-ignore
import { Link, useNavigate } from "react-router-dom";

export default function PrivateEquityCreate(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustsList = formatTrust(fideicomisos);
  const providersList = formatProviderContacts(providers);
  const [ownerTurst, setOwnerTurst] = useState([]);
  const [fundName, setFundName] = useState("");
  const [investment, setInvestment] = useState("");
  const [investmentYear, setInvestmentYear] = useState("");
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState([]);
  const [ownerCompanies, setOwnerCompanies] = useState([]);
  const [industry, setIndustry] = useState("");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [alreadyPayed, setAlreadyPayed] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [preMoney, setPreMoney] = useState("");
  const [postMoney, setPostMoney] = useState("");
  const [equityPercentage, setEquityPercentage] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [tir, setTir] = useState("");
  const [providersSelected, setProvidersSelected] = useState([]);

  const [companyStage, setCompanyStage] = useState({
    value: "",
    label: "",
  });

  const [country, setCountry] = useState({
    value: "",
    label: "",
  });

  const [paymentFrequency, setPaymentFrequency] = useState({
    value: "",
    label: "",
  });

  const [investmentType, setInvestmentType] = useState({
    value: "",
    label: "",
  });

  const [directType, setDirectType] = useState({
    value: "",
    label: "",
  });

  const [fundType, setFundType] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsInvestmentType = [
    { value: "Fondo", label: "Fondo de inversión" },
    { value: "Directo", label: "Directo" },
  ];

  const OptionsDirectType = [
    { value: "Deuda", label: "Deuda" },
    { value: "Capital", label: "Capital" },
  ];

  const OptionsPaymentFrequency = [
    { value: "Mensual", label: "Mensual" },
    { value: "Anual", label: "Anual" },
    { value: "MensualNR", label: "Mensual no recurrente" },
  ];

  const OptionsCompanyStage = [
    { value: "Angel Investor", label: "Angel Investor" },
    { value: "Seed", label: "Seed" },
    { value: "Serie A", label: "Serie A" },
    { value: "Serie B", label: "Serie B" },
    { value: "Serie C", label: "Serie C" },
  ];

  const OptionsFundType = [
    { value: "Venture Capital", label: "Venture Capital" },
    { value: "Private Equity", label: "Private Equity" },
    { value: "LBO", label: "LBO" },
  ];

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

  const renderOwnerTypeOptions = () => {
    return (
      <div>
        <Row>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Porcentajes de propietarios de inversión</Form.Label>
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
                selectSomeItems: "Selecciona miembros propietarios",
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
                selectSomeItems: "Selecciona empresas propietarias",
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
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>
              Contactos o proveedores para ligar a esta inversión de CP
            </Form.Label>
            <MultiSelect
              options={providersList}
              value={providersSelected}
              onChange={setProvidersSelected}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems:
                  "Selecciona contactos o proveedores importantes para esta inversión de CP",
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

  const renderFundTypeInputs = () => {
    return (
      <div>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nombre de fondo</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setFundName(text.target.value)}
                value={fundName}
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
            <Form.Label>Año de inversion</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setInvestmentYear(text.target.value)}
              value={investmentYear}
            />
            <Form.Control.Feedback type="invalid">
              Favor de añadir el monto del pago
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de fondo</Form.Label>
            <Select
              options={OptionsFundType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setFundType(value)}
              placeholder=""
              value={fundType}
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
            <Form.Label>Valor de inversion</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setInvestment(text.target.value)}
                value={investment}
              />
              <InputGroup.Text id="inputGroupPrepend-2">
                {currency.value}
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row style={{ marginBottom: 10, marginTop: 20 }}>
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

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Industria</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setIndustry(text.target.value)}
              value={industry}
            />
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderDirectType = () => {
    return (
      <>
        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Tipo de inversión directa</Form.Label>
          <Select
            options={OptionsDirectType}
            classNamePrefix="Select2"
            className="multi-select"
            onChange={(value) => setDirectType(value)}
            placeholder=""
            value={directType}
          />
        </Form.Group>
        <div style={{ marginTop: 20 }}>{renderDirectSelectedInputs()}</div>
      </>
    );
  };

  const renderSelectedType = () => {
    if (investmentType.value === "Fondo") {
      return renderFundTypeInputs();
    } else if (investmentType.value === "Directo") {
      return renderDirectType();
    }

    return;
  };

  //aqui trabajar
  const renderDirectSelectedInputs = () => {
    if (directType.value === "Capital") {
      return (
        <div>
          <Row>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Año de inversion</Form.Label>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setInvestmentYear(text.target.value)}
                value={investmentYear}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
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

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Industria</Form.Label>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setIndustry(text.target.value)}
                value={industry}
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
              <Form.Label>Monto de inversión</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setInvestment(text.target.value)}
                  value={investment}
                />
                <InputGroup.Text id="inputGroupPrepend-2">
                  {currency.value}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Porcentaje de participación</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setEquityPercentage(text.target.value)}
                  value={equityPercentage}
                />
                <InputGroup.Text id="inputGroupPrepend-2">%</InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Valuación pre money</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPreMoney(text.target.value)}
                  value={preMoney}
                />
                <InputGroup.Text id="inputGroupPrepend-2">
                  {currency.value}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Valuación post money</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend-1">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setPostMoney(text.target.value)}
                  value={postMoney}
                />
                <InputGroup.Text id="inputGroupPrepend-2">
                  {currency.value}
                </InputGroup.Text>
              </InputGroup>
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
                  onChange={(text) => setCurrentValue(text.target.value)}
                  value={currentValue}
                />
                <InputGroup.Text id="inputGroupPrepend-2">
                  {currency.value}
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>TIR (Tasa interna de retorno)</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setTir(text.target.value)}
                  value={tir}
                />
                <InputGroup.Text id="inputGroupPrepend-2">%</InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Etapa de la empresa en la que se invirtio</Form.Label>
              <Select
                options={OptionsCompanyStage}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setCompanyStage(value)}
                placeholder=""
                value={companyStage}
              />
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group as={Col} md="6" className="form-group">
              <Form.Label className="form-label my-3">
                Comprobante de transferencia
              </Form.Label>
              <FileUpload />
            </Form.Group>

            <Form.Group as={Col} md="6" className="form-group">
              <Form.Label className="form-label my-3">
                Acta constitutiva de empresa
              </Form.Label>
              <FileUpload />
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group as={Col} md="6" className="form-group">
              <Form.Label className="form-label my-3">
                Acta de asamblea donde entra la inversión
              </Form.Label>
              <FileUpload />
            </Form.Group>

            <Form.Group as={Col} md="6" className="form-group">
              <Form.Label className="form-label my-3">
                Estado financiero
              </Form.Label>
              <FileUpload />
            </Form.Group>
          </Row>
        </div>
      );
    } else if (directType.value === "Deuda") {
      return (
        <div>
          <Row>
            <Form.Group
              as={Col}
              md="10"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Concepto</Form.Label>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setConcept(text.target.value)}
                value={concept}
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
              <Form.Label>Frecuencia de pago</Form.Label>
              <Select
                options={OptionsPaymentFrequency}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => setPaymentFrequency(value)}
                placeholder=""
                value={paymentFrequency}
              />
            </Form.Group>
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
          </Row>
          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Monto prestado</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAmount(text.target.value)}
                  value={amount}
                />
                <InputGroup.Text id="inputGroupPrepend">
                  {currency.value}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Favor de añadir el monto del pago
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Tasa de interes</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setInterestRate(text.target.value)}
                  value={interestRate}
                />
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Favor de añadir el monto del pago
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Cobrado hasta el dia de hoy</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAlreadyPayed(text.target.value)}
                  value={alreadyPayed}
                />
                <InputGroup.Text id="inputGroupPrepend">
                  {currency.value}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Favor de añadir el monto del pago
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group
              as={Col}
              md="6"
              controlId="validationCustomUsername"
              className="form-group"
            >
              <Form.Label>Monto pendiente por cobrar</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setAmountToPay(text.target.value)}
                  value={amountToPay}
                />
                <InputGroup.Text id="inputGroupPrepend">
                  {currency.value}
                </InputGroup.Text>
                <Form.Control.Feedback type="invalid">
                  Favor de añadir el monto del pago
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Plazo del</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(value) => setVigenciaDel(value)}
                    value={dayjs(vigenciaDel)}
                    defaultValue={dayjs(vigenciaDel)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Form.Group>

            <Form.Group
              as={Col}
              md="4"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Al</Form.Label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(value) => setVigenciaAl(value)}
                    value={dayjs(vigenciaAl)}
                    defaultValue={dayjs(vigenciaAl)}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group as={Col} md="6" className="form-group">
              <Form.Label className="form-label my-3">
                Contrato de prestamo
              </Form.Label>
              <FileUpload />
            </Form.Group>
          </Row>
        </div>
      );
    }

    return;
  };

  return (
    <Fragment>
      <Row style={{ padding: 20 }}>
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
            className="fe fe-activity text-black fs-15"
          ></i>{" "}
          Nuevo Registro inversion de capital privado
        </Card.Title>

        {renderOwnerTypeOptions()}

        <Form.Group
          as={Col}
          style={{ marginTop: 20 }}
          md="4"
          controlId="validationCustom01"
          className="form-group"
        >
          <Form.Label>Tipo de inversión capital privado</Form.Label>
          <Select
            options={OptionsInvestmentType}
            classNamePrefix="Select2"
            className="multi-select"
            onChange={(value) => setInvestmentType(value)}
            placeholder=""
            value={investmentType}
          />
        </Form.Group>


        <Row style={{ marginBottom: 10, marginTop: 20 }}>
          {renderSelectedType()}
        </Row>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 40,
          }}
        >
          <div></div>
          <Button variant="primary" className=" mb-1" type="submit">
            Crear
          </Button>
        </div>
      </Row>
    </Fragment>
  );
}
