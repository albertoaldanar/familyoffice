import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup, Table } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../../../../administration/accounting/components/fileUpload";
import { formatMember } from "../../../../councilAndCommittee/councilAndCommitteeUtils";
import { countryOptions } from "../../../../../administration/accounting/companyUtils";
import { family } from "../../../../familyStructure/familyStructureData";
import { companies } from "../../../../../administration/accounting/accountingData";
import NotFoundSearch from "../../../../../shared/notFoundSearch";
import { otherWealthData } from "../../../wealthStructureData";
import { formatCompany } from "../../../../../administration/accounting/companyUtils";
import { formatOwnersData } from "../../../../../administration/accounting/companyUtils";
import { formatCurrency } from "../../../../../administration/payments/paymentUtils";
//@ts-ignore
import { Link } from "react-router-dom";
import FileView from "../../../../../administration/accounting/components/fileView";

export default function PrivateEquity(props) {
  const privateEquitySelected = otherWealthData.privateEquity.find(
    (privateEquity) => privateEquity.id === Number(props.id)
  );

  if (!privateEquitySelected) {
    return <NotFoundSearch />;
  }

  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const ownerData = formatOwnersData(privateEquitySelected);

  const [fundName, setFundName] = useState(privateEquitySelected.fundName);
  const [investment, setInvestment] = useState(privateEquitySelected.investment);
  const [investmentYear, setInvestmentYear] = useState(privateEquitySelected.investmentYear);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(ownerData.family);
  const [ownerCompanies, setOwnerCompanies] = useState(ownerData.company);
  const [industry, setIndustry] = useState(privateEquitySelected.industry);
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState(privateEquitySelected.investment);
  const [interestRate, setInterestRate] = useState();
  const [alreadyPayed, setAlreadyPayed] = useState("");
  const [amountToPay, setAmountToPay] = useState("");
  const [vigenciaDel, setVigenciaDel] = useState<Dayjs | null>(dayjs(""));
  const [vigenciaAl, setVigenciaAl] = useState<Dayjs | null>(dayjs(""));
  const [preMoney, setPreMoney] = useState(privateEquitySelected.preMoneyValue);
  const [postMoney, setPostMoney] = useState(privateEquitySelected.postMoneyValue);
  const [equityPercentage, setEquityPercentage] = useState(privateEquitySelected.equityPercentage);
  const [currentValue, setCurrentValue] = useState(privateEquitySelected.currentValue);
  const [tir, setTir] = useState(privateEquitySelected.tir);

  const [companyStage, setCompanyStage] = useState({
    value: privateEquitySelected.companyStage,
    label: privateEquitySelected.companyStage,
  });

  const [country, setCountry] = useState({
    value: privateEquitySelected.country,
    label: privateEquitySelected.country,
  });

  const [investmentType, setInvestmentType] = useState({
    value: privateEquitySelected.privateEquityType,
    label: privateEquitySelected.privateEquityType,
  });

  const [directType, setDirectType] = useState({
    value: privateEquitySelected.directType,
    label: privateEquitySelected.directType,
  });

  const [fundType, setFundType] = useState({
    value: privateEquitySelected.fundType,
    label: privateEquitySelected.fundType,
  });

  const [currency, setCurrency] = useState({
    value: privateEquitySelected.currency,
    label: privateEquitySelected.currency,
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
        </Row>
      </div>
    );
  };

  const renderListData = () => {
    if(privateEquitySelected.investmentReturns.length > 0){
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
              {privateEquitySelected.investmentReturns.map((idx, tb8) => (
                <tr key={tb8}>
                  <td>{formatCurrency(idx.amount, privateEquitySelected.currency)}</td>
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
                    <Link to={`${import.meta.env.BASE_URL}governance/privateEquityResult/${privateEquitySelected.id}/returnId/${idx.id}`}>
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
        Aún no hay retornos de capital para esta inversión. 
      </p>
    )
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

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
            marginTop: 30
          }}
        >
          <dt>Registros de retornos de inversión</dt>
          <Button
            style={{
              marginRight: 10,
            }}
            variant="primary"
            size="sm"
            className=" mb-1"
          >
              {/*// @ts-ignore */}
              <Link style={{color: 'white'}} to={`${import.meta.env.BASE_URL}governance/privateEquityResultCreate/${privateEquitySelected.id}`}>
                + Añadir retorno
              </Link>
          </Button>
        </div>

        {renderListData()}
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
            isDisabled
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
          <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">Comprobante de transferencia</Form.Label>
              {privateEquitySelected.voucher ? (
                <FileView
                  title="Invoice"
                  fileName={privateEquitySelected.voucher}
                />
              ) : (
                <FileUpload />
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">Acta constitutiva de empresa</Form.Label>
              {privateEquitySelected.actaConstitutiva ? (
                <FileView
                  title="Invoice"
                  fileName={privateEquitySelected.actaConstitutiva}
                />
              ) : (
                <FileUpload />
              )}
            </Form.Group>
          </Row>

          <Row style={{ marginTop: 20 }}>
            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">Acta de asamblea donde entra la inversión</Form.Label>
              {privateEquitySelected.actaAsamblea ? (
                <FileView
                  title="Invoice"
                  fileName={privateEquitySelected.actaAsamblea}
                />
              ) : (
                <FileUpload />
              )}
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
          Inversion de capital privado - {privateEquitySelected.investmentName}
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
            isDisabled
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
            marginTop: 70,
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
