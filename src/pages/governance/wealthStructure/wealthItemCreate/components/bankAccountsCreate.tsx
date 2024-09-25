import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
//@ts-ignore
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import { formatMember } from "../../../councilAndCommittee/councilAndCommitteeUtils";
import { family } from "../../../familyStructure/familyStructureData";
import { companies } from "../../../../administration/accounting/accountingData";
import { formatCompany } from "../../../../administration/accounting/companyUtils";
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { providers } from "../../../../administration/providers/providersData";
import { formatProviderContacts } from "../../../../administration/providers/providersUtils";
import { formatTrust } from "../../wealthStructureUtils";
import { Link, useNavigate } from "react-router-dom";

export default function BanksAccountsCreate(props) {
  const navigate = useNavigate();
  const membersList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustList = formatTrust(fideicomisos);
  const providersList = formatProviderContacts(providers);
  const [bank, setBank] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [members, setMembers] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");
  const [providersSelected, setProvidersSelected] = useState([]);
  const [ownerCompanies, setOwnerCompanies] = useState({
    value: "",
    label: "",
  });
  const [countryAccount, setCountryAccount] = useState({
    value: "",
    label: "",
  });

  const [ownerAccountType, setOwnerAccountType] = useState({
    value: "",
    label: "",
  });

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const [accountType, setAccountType] = useState({
    value: "",
    label: "",
  });

  const [ownerTrust, setOwnerTrust] = useState({
    value: "",
    label: "",
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const Optionscountry = [
    { value: "México", label: "México" },
    { value: "USA", label: "USA" },
  ];

  const OptionsAccountType = [
    { value: "Inversión", label: "Inversión" },
    { value: "Ahorro", label: "Ahorro" },
    { value: "Cuenta corriente", label: "Cuenta corriente" },
  ];

  const OptionsOwnerType = [
    { value: "Persona física", label: "Persona física" },
    { value: "Persona moral", label: "Persona moral" },
    { value: "Fideicomiso", label: "Fideicomiso" },
  ];

  const renderOwnerTypeOptions = () => {
    if (ownerAccountType.label === "Persona física") {
      return (
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Titular(es) de cuenta</Form.Label>
            <MultiSelect
              options={membersList}
              value={members}
              onChange={setMembers}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona Titular(es)",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
          </Form.Group>
        </Row>
      );
    } else if (ownerAccountType.label === "Persona moral") {
      return (
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Empresa titular de cuenta</Form.Label>
            <Select
              options={companiesList}
              value={ownerCompanies}
              onChange={setOwnerCompanies}
              classNamePrefix="Select2"
              className="multi-select"
            />
          </Form.Group>
        </Row>
      );
    } else if (ownerAccountType.label === "Fideicomiso") {
      return (
        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Fideicomiso titular de cuenta</Form.Label>
            <Select
              options={trustList}
              value={ownerTrust}
              onChange={setOwnerTrust}
              classNamePrefix="Select2"
              className="multi-select"
            />
          </Form.Group>
        </Row>
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
            className="fe fe-credit-card text-black fs-15"
          ></i>
          Nuevo Registro cuenta bancaria
        </Card.Title>

        <Row style={{ marginTop: 10 }}>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Tipo de titular de cuenta</Form.Label>
            <Select
              options={OptionsOwnerType}
              classNamePrefix="Select2"
              className="multi-select"
              value={ownerAccountType}
              onChange={setOwnerAccountType}
            />
          </Form.Group>
        </Row>

        {renderOwnerTypeOptions()}

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>
              Contactos o proveedores para ligar a esta cuenta bancaria
            </Form.Label>
            <MultiSelect
              options={providersList}
              value={providersSelected}
              onChange={setProvidersSelected}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems:
                  "Selecciona contactos o proveedores importantes para esta cuenta bancaria",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />
          </Form.Group>
        </Row>

        <Row style={{ marginBottom: 10, marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Entidad bancaria</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setBank(text.target.value)}
                value={bank}
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
            <Form.Label>Numbero de cuenta</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setAccountNumber(text.target.value)}
              value={accountNumber}
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
            <Form.Label>Tipo de cuenta</Form.Label>
            <Select
              options={OptionsAccountType}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setAccountType(value)}
              placeholder=""
              value={accountType}
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
            <Form.Label>Valor de cuenta</Form.Label>
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
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>País de cuenta</Form.Label>
            <Select
              options={Optionscountry}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setCountryAccount(value)}
              placeholder=""
              value={countryAccount}
            />
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
