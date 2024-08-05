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
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { otherWealthData } from "../../wealthStructureData";
import { bankAccountOwnersFormat } from "../../wealthStructureUtils";
import { Link } from "react-router-dom";

export default function BanksAccountsItem(props) {
  const accountSelected = otherWealthData.bankAccounts.find(
    (account) => account.id === Number(props.id)
  );

  if (!accountSelected) {
    return <NotFoundSearch />;
  }

  const isCompanyOwned = accountSelected.owners[0].type === "Persona moral";

  const membersList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const [bank, setBank] = useState(accountSelected.bank);
  const [todayValue, setTodayValue] = useState(accountSelected.value);
  const [members, setMembers] = useState(
    !isCompanyOwned
    ? bankAccountOwnersFormat(accountSelected.owners)
    : []
  );
  const [accountNumber, setAccountNumber] = useState(
    accountSelected.accountNumber
  );
  const [ownerCompanies, setOwnerCompanies] = useState(
    isCompanyOwned
      ? {
          value: accountSelected.owners[0].name,
          label: accountSelected.owners[0].name,
        }
      : { value: "", label: "" }
  );

  const [countryAccount, setCountryAccount] = useState({
    value: accountSelected.country,
    label: accountSelected.country,
  });

  const [ownerAccountType, setOwnerAccountType] = useState({
    value: accountSelected.owners[0].type,
    label: accountSelected.owners[0].type,
  });

  const [currency, setCurrency] = useState({
    value: accountSelected.currency,
    label: accountSelected.currency,
  });

  const [accountType, setAccountType] = useState({
    value: accountSelected.accountType,
    label: accountSelected.accountType,
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
    }

    return;
  };

  return (
    <Fragment>
      <Row style={{ padding: 20 }}>
        <Card.Title style={{ marginBottom: 35 }}>
          Cuenta bancaria {accountSelected.bank} -
          {accountSelected.accountNumber}
        </Card.Title>
        {
          accountSelected.containedIntrusts.length ? (
            <Row>
              <Form.Label>Cuentas bancarias contenido en los siguientes fideicomisos:</Form.Label>
              {accountSelected.containedIntrusts.map(trust => {
                  return (
                    <p
                      style={{
                        cursor: "pointer",
                        textDecoration: "underline",
                        color: "#5488d2",
                        fontSize: 12,
                        marginTop: -6
                      }}
                    >
                      {/*// @ts-ignore */}
                      <Link to={`${import.meta.env.BASE_URL}administration/trustDescription/${trust.id}`}>
                        {trust.name}
                      </Link>
                    </p>
                  );
              })}
            </Row>
          ): null
        }
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

        <Row style={{ marginTop: 20 }}>
          <Form.Label>Ultima actualización</Form.Label>
          <p style={{color: "gray",fontSize: 12}}>
            {accountSelected.lastUpdate}
          </p>
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
