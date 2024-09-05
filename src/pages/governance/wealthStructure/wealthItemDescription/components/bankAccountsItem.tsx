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
  Table
} from "react-bootstrap";
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
import { fideicomisos } from "../../../../administration/accounting/accountingData";
import { formatTrust } from "../../wealthStructureUtils";
import { providers } from "../../../../administration/providers/providersData";
import { formatProviderContacts } from "../../../../administration/providers/providersUtils";

import { Link } from "react-router-dom";

export default function BanksAccountsItem(props) {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;

  const accountSelected = otherWealthData.bankAccounts.find(
    (account) => account.id === Number(props.id)
  );

  if (!accountSelected) {
    return <NotFoundSearch />;
  }

  const isCompanyOwned = accountSelected.owners[0].type === "Persona moral";
  const isTrustOwned = accountSelected.owners[0].type === "Fideicomiso";
  const trustList = formatTrust(fideicomisos);

  const membersList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const [bank, setBank] = useState(accountSelected.bank);
  const [todayValue, setTodayValue] = useState(accountSelected.value);
  const [members, setMembers] = useState(
    !isCompanyOwned ? bankAccountOwnersFormat(accountSelected.owners) : []
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

  const [ownerTrust, setOwnerTrust] = useState(
    isTrustOwned
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
    { value: "Fideicomiso", label: "Fideicomiso" },
  ];

  const renderOwnerTypeOptions = () => {
    if (ownerAccountType.label === "Persona física") {
      return (
        <Row>
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

  const renderInformation = () => {
    return (
      <>
        <Row>
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
          <p style={{ color: "gray", fontSize: 12 }}>
            {accountSelected.lastUpdate}
          </p>
        </Row>
      </>
    );
  };

  const renderAccountOwners = () => {
    return (
      <>
        <Row>
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
      </>
    );
  };

  const renderContactList = () => {
    const existringContacts = accountSelected.contacts.length > 0;
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
            '{accountSelected.bank} - {accountSelected.accountNumber}' a su lista de activos relacionados{" "}
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
                {accountSelected.contacts.map((contact) => (
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
          <p style={{ fontSize: 12, color: "gray", textAlign: 'center' }}>
            Aún no hay ningun contacto seleccionado para{" "}
            {accountSelected.bank} - {accountSelected.accountNumber}
          </p>
        )}
      </>
    );
  };

  return (
    <Fragment>
      <Row style={{ padding: 20 }}>
        <Card.Title style={{ marginBottom: 15 }}>
          <i
            style={{ marginRight: 9 }}
            className="fe fe-credit-card text-black fs-15"
          ></i>{" "}
          Cuenta bancaria {accountSelected.bank} -
          {accountSelected.accountNumber}
        </Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="info">
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
                  <Nav.Link eventKey="info" href="#">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-file-text text-black fs-13"
                    ></i>
                    Información
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="owners">
                    <i
                      style={{ marginRight: 9 }}
                      className="fe fe-book-open text-black fs-13"
                    ></i>
                    Titular(es) de cuenta
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
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="info">{renderInformation()}</Tab.Pane>
            <Tab.Pane eventKey="owners">{renderAccountOwners()}</Tab.Pane>
            <Tab.Pane eventKey="contacts">{renderContactList()}</Tab.Pane>
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
        {/* </Form> */}
      </Row>
    </Fragment>
  );
}
