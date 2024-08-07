import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Tab,
  Table,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import FileUpload from "../../../../../administration/accounting/components/fileUpload";
import NotFoundSearch from "../../../../../shared/notFoundSearch";
import { countryOptions } from "../../../../../administration/accounting/companyUtils";
import { formatMember } from "../../../../councilAndCommittee/councilAndCommitteeUtils";
import { family } from "../../../../familyStructure/familyStructureData";
import { companies } from "../../../../../administration/accounting/accountingData";
import { otherWealthData } from "../../../wealthStructureData";
import { formatCompany } from "../../../../../administration/accounting/companyUtils";
import { formatOwnersData } from "../../../../../administration/accounting/companyUtils";
import { formatCurrency } from "../../../../../administration/payments/paymentUtils";
//@ts-ignore
import { Link } from "react-router-dom";

export default function StockInvestment(props) {
  const stockInvestmentSelected = otherWealthData.stockInvestments.find(
    (account) => account.id === Number(props.id)
  );

  if (!stockInvestmentSelected) {
    return <NotFoundSearch />;
  }

  const ownersList = formatOwnersData(stockInvestmentSelected);

  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const [investment, setInvestment] = useState(
    stockInvestmentSelected.investmentAmount
  );
  const [bank, setBank] = useState(stockInvestmentSelected.bank);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(
    ownersList.family
  );
  const [ownerCompanies, setOwnerCompanies] = useState(ownersList.company);
  const [routing, setRouting] = useState(stockInvestmentSelected.routing);
  const [accountNumber, setAccountNumber] = useState(
    stockInvestmentSelected.accountNumber
  );

  const [country, setCountry] = useState({
    value: stockInvestmentSelected.country,
    label: stockInvestmentSelected.country,
  });

  const [currency, setCurrency] = useState({
    value: stockInvestmentSelected.currency,
    label: stockInvestmentSelected.currency,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
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
    }
  };

  const renderOptionsSelected = (type) => {
    if (type === "family") {
      if (ownerFamilyMembers.length) {
        return ownerFamilyMembers.map((member, index) => {
          return (
            <div key={index} style={{ marginTop: 15 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <p
                  style={{
                    marginTop: 3,
                    fontWeight: "500",
                    fontSize: 13,
                    marginBottom: -3,
                  }}
                >
                  {member.label}
                </p>
              </div>

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div></div>
                <p
                  style={{
                    marginTop: 3,
                    fontWeight: "500",
                    fontSize: 13,
                    marginBottom: -3,
                  }}
                >
                  {company.label}
                </p>
              </div>

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Porcentaje
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
    }

    return;
  };

  const renderListData = () => {
    if(stockInvestmentSelected.resultsReports.length >0){
      return (
        <div className="table-responsive" style={{ marginTop: 15 }}>
          <Table className="table border text-nowrap text-md-nowrap  mb-0">
            <thead className="bg-light">
              <tr>
                <th>Valor actual</th>
                <th>Año</th>
                <th>Mes</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {stockInvestmentSelected.resultsReports.map((idx, tb8) => (
                <tr key={tb8}>
                  <td>{formatCurrency(idx.value, stockInvestmentSelected.currency)}</td>
                  <td>{idx.year}</td>
                  <td>{idx.month}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}governance/stockResult/${stockInvestmentSelected.id}/resultId/${idx.id}`}>
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } return (
      <p style={{
        color: "gray",
        fontSize: 12
      }}>
        Aún no hay resultados de esta inversión registrados. 
      </p>
    )

  };

  const rendeReportList = () => {
    return(
      <dl className="product-gallery-data1" style={{marginTop: 50}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <dt>Registro de resultados</dt>
          <Button
            style={{
              marginRight: 10,
            }}
            variant="primary"
            size="sm"
            className=" mb-1"
          >
              {/*// @ts-ignore */}
              <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}governance/stockResult/${stockInvestmentSelected.id}`}>
                + Añadir resultado
              </Link>
          </Button>
        </div>

        {renderListData()}
      </dl>
    )
  }


  const renderInformation = () => {
    return (
      <div>
        <Row>
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

        <Row style={{ marginBottom: 10, marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Banco</Form.Label>
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
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Numero de cuenta</Form.Label>
            <InputGroup hasValidation>
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
            </InputGroup>
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Clabe | Routing</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setRouting(text.target.value)}
              value={routing}
            />
          </Form.Group>
        </Row>

        {rendeReportList()}
      </div>
    );
  };

  const renderOwnerTypeOptions = () => {
    return (
      <div>
        <Row style={{ marginBottom: -10 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>
              Porcentajes de propietarios de inversión bursatil
            </Form.Label>
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
        </Row>
      </div>
    );
  };

  return (
    <Fragment>
      <Row style={{ padding: 20 }}>
        <Card.Title style={{ marginBottom: 20 }}>
         Inversión bursatil {stockInvestmentSelected.bank} - {stockInvestmentSelected.accountNumber}
        </Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            style={{
              paddingBottom: 0,
              paddingLeft: 10,
              marginBottom: 10,
            }}
          >
            <div className="tabs-menu1">
              <Nav as="ul" className="nav panel-tabs">
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="first" href="#">
                    Información
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="second">
                    Figura(s) / Propietario(s)
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderInformation()}</Tab.Pane>

            <Tab.Pane eventKey="second">{renderOwnerTypeOptions()}</Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 50,
          }}
        >
          <div></div>
          <Button variant="primary" className=" mb-1" type="submit">
            Guardar
          </Button>
        </div>
      </Row>
    </Fragment>
  );
}
