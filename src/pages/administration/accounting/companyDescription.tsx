import React, { useState, Fragment } from "react";
import {
  InputGroup,
  Button,
  Card,
  Col,
  Dropdown,
  Table,
  Row,
  Form,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { companies } from "./accountingData";
import { family } from "../../governance/familyStructure/familyStructureData";
import FileView from "./components/fileView";
import FileUpload from "./components/fileUpload";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MultiSelect } from "react-multi-select-component";
import { fideicomisos } from "./accountingData";
//@ts-ignore
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import ResultsChart from "./components/resultsChart";
import NotFoundSearch from "../../shared/notFoundSearch";
import { useNavigate } from "react-router-dom";
import { useParams, Link } from "react-router-dom";
import { daysToAnualTax, daysUntilNextMonth17 } from "../taxes/taxesUtils";
import { formateDateForUI } from "../payments/paymentUtils";
import { formatCompany, formatOwnersData, formatTrust } from "./companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";

export default function CompanyDescription() {
  //@ts-ignore
  const baseUrl = import.meta.env.BASE_URL;
  const navigate = useNavigate();
  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const params = useParams();
  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustList = formatTrust(fideicomisos);
  const companySelected = companies.find(
    (company) => company.id === Number(params.id)
  );

  if (!companySelected) {
    return <NotFoundSearch />;
  }

  const foundationDateFormatted = formateDateForUI(companySelected.fundacion);
  const ownerData = formatOwnersData(companySelected);

  const [rfc, setRFC] = useState(companySelected.rfc);
  const [razonSocial, setRazonSocial] = useState(companySelected.razonSocial);
  const [percentage, setPercentage] = useState(companySelected.percentage);
  const [todayValue, setTodayValue] = useState(companySelected.valuacion);
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState(
    ownerData.family
  );
  const [ownerCompanies, setOwnerCompanies] = useState(ownerData.company);
  const [ownerTrust, setOwnerTrust] = useState(ownerData.trust);

  const [address, setAddress] = useState(companySelected.direccionFiscal);
  const [regimenCapital, setRegimenCapital] = useState(
    companySelected.regimenCapital
  );
  const [foundationDate, setfoundationDate] = useState<Dayjs | null>(
    dayjs(foundationDateFormatted)
  );

  const [currency, setCurrency] = useState({
    value: companySelected.moneda,
    label: companySelected.moneda,
  });

  const [nationality, setNationality] = useState({
    value: companySelected.nationality,
    label: companySelected.nationality,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const OptionsNationality = [
    { value: "Mexico", label: "Mexico" },
    { value: "USA", label: "USA" },
    { value: "CANDA", label: "CANDA" },
  ];

  const currentYear = new Date().getFullYear();
  const mensualesReports = companySelected.reports.mensuales;
  const anualReports = companySelected.reports.anuales;
  const currentYearString = currentYear.toString();

  const isDefaultCurrentYear =
    mensualesReports.length > 0
      ? mensualesReports.find((report) => report.year === currentYearString)
      : null;

  const defaultYear = isDefaultCurrentYear
    ? currentYearString
    : mensualesReports.length > 0
    ? mensualesReports[mensualesReports.length - 1].year
    : null;

  const [yearSelected, setYearSelected] = useState(defaultYear);

  const egresosArray: number[] = [];
  const ventasArray: number[] = [];
  const utilidadArray: number[] = [];

  const egresosArrayAnual: number[] = [];
  const ventasArrayAnual: number[] = [];
  const utilidadArrayAnual: number[] = [];

  const accountingYearsSet: Set<string> = new Set();

  const years = anualReports.length
    ? anualReports.map((anual) => anual.year)
    : [];

  if (mensualesReports.length) {
    mensualesReports.forEach((report) => {
      accountingYearsSet.add(report.year);
    });

    mensualesReports.forEach((report) => {
      report.accounting.forEach((acc) => {
        if (acc.year === yearSelected) {
          egresosArray.push(parseFloat(acc.egresos));
          ventasArray.push(parseFloat(acc.ventas));
          utilidadArray.push(parseFloat(acc.utilidad));
        }
      });
    });
  }

  const accountingYears: string[] = Array.from(accountingYearsSet).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );

  if (anualReports.length) {
    anualReports.forEach((report) => {
      egresosArrayAnual.push(parseFloat(report.egresos));
      ventasArrayAnual.push(parseFloat(report.ventas));
      utilidadArrayAnual.push(parseFloat(report.utilidad));
    });
  }

  function addEllipsis(str: string): string {
    if (str.length > 20) {
      return str.substring(0, 20) + "...";
    } else {
      return str;
    }
  }

  function currencyFormat(num: number) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

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
      setOwnerTrust((prevState) => {
        const updatedTrusts = [...prevState];
        updatedTrusts[memberIndex] = {
          ...updatedTrusts[memberIndex],
          [attributeName]: value,
        };
        return updatedTrusts;
      });
    }
  };

  const renderMultiSelect = () => {
    return (
      <>
        <Row>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Porcentajes de accionistas/propietarios</Form.Label>
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
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <p style={{ color: "gray", fontSize: 13 }}>Fideicomisos</p>
            <MultiSelect
              options={trustList}
              value={ownerTrust}
              onChange={setOwnerTrust}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona fideicomisos accionistas",
                allItemsAreSelected: "Todos los fideicomisos",
                selectAll: "Seleccionar todos",
              }}
              disableSearch
            />

            {renderOptionsSelected("trust")}
          </Form.Group>
        </Row>
      </>
    );
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
                <Link to={`${baseUrl}governance/familyMember/${member.value}`}>
                  {member.label}
                </Link>
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

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Capital social
              </p>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "capitalSocial",
                      e.target.value,
                      "family"
                    )
                  }
                  value={member.capitalSocial || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
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
                <p style={{marginBottom: -0}}>
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

              <p
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 3,
                  marginBottom: 4,
                }}
              >
                Capital social
              </p>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  aria-describedby="inputGroupPrepend-3"
                  required
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "capitalSocial",
                      e.target.value,
                      "company"
                    )
                  }
                  value={company.capitalSocial || ""}
                />
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              </InputGroup>
            </div>
          );
        });
      }
    } else if (type === "trust") {
      if (ownerTrust.length) {
        return ownerTrust.map((trust, index) => {
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
                <Link to={`${baseUrl}administration/trustDescription/${trust.value}`}>
                  {trust.label}
                </Link>
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

  const renderLegal = () => {
    return (
      <>
        <Row>
          <p
            style={{
              fontSize: 15,
              marginTop: 20,
            }}
          >
            1) Acta constitutiva y CIF:
          </p>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              Acta constitutiva
            </Form.Label>
            {companySelected.actaConstitutiva ? (
              <FileView
                title="Acta constitutiva"
                fileName={companySelected.actaConstitutiva}
              />
            ) : (
              <>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </>
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label
              className="form-label my-3"
              style={{ fontSize: 13, color: "gray" }}
            >
              CIF (Cedula de Identificación fiscal)
            </Form.Label>
            {companySelected.cif ? (
              <FileView title="CIF" fileName={companySelected.cif} />
            ) : (
              <>
                <FileUpload />
                <p
                  style={{
                    fontSize: 10,
                    cursor: "pointer",
                    marginTop: -15,
                    color: "#A0A0A0",
                  }}
                >
                  Descargar formato guia
                </p>
              </>
            )}
          </Form.Group>
        </Row>

        <Row style={{ marginBottom: 50 }}>
          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            2) Actas de Asamblea Ordinaria:
          </p>
          {companySelected.actasAsamblea.length ? (
            companySelected.actasAsamblea.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nueva acta de asamblea
            </p>
            <FileUpload />
          </div>
          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            3) Poderes:
          </p>
          {companySelected.poderes.length ? (
            companySelected.poderes.map((poder, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {poder.name}
                </Form.Label>
                <FileView key={index} title={poder.name} fileName={poder.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}

          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nueva acta de poder
            </p>
            <FileUpload />
          </div>

          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            5) Actas de dividendos:
          </p>
          {companySelected.actasDividendos.length ? (
            companySelected.actasDividendos.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nueva acta de dividendos
            </p>
            <FileUpload />
          </div>

          <p
            style={{
              fontSize: 15,
              marginTop: 40,
            }}
          >
            6) Actas de asamblea extraordinaria:
          </p>
          {companySelected.actaAsambleaExtraordinaria.length ? (
            companySelected.actaAsambleaExtraordinaria.map((acta, index) => (
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label
                  className="form-label my-3"
                  style={{ color: "gray", fontSize: 13 }}
                >
                  {" "}
                  {acta.name}
                </Form.Label>
                <FileView key={index} title={acta.name} fileName={acta.url} />
              </Form.Group>
            ))
          ) : (
            <p
              style={{
                fontSize: 13,
                fontStyle: "italic",
                color: "gray",
                textAlign: "center",
              }}
            ></p>
          )}
          <div style={{ width: "70%" }}>
            <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
              + Añadir nueva acta de asamblea extraordinaria
            </p>
            <FileUpload />
          </div>
        </Row>
      </>
    );
  };

  const renderCompany = () => {
    if (mensualesReports.length > 0) {
      let yearsReport = mensualesReports.find(
        (rep) => rep.year === yearSelected
      );

      const reports = yearsReport.accounting;

      return (
        <div className="table-responsive">
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Mes</th>
                <th>Cumplimiento</th>
                <th>Utilidad neta</th>
                <th>Declaración ISR</th>
                <th>Declaración IVA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.isr}>
                  <td>{report.month}</td>
                  <td style={{ textAlign: "center" }}>
                    {(() => {
                      const accountingTasks = [
                        report.isr,
                        report.diot,
                        report.iva,
                        report.utilidad,
                      ];
                      const numberOfUploads = accountingTasks.filter(
                        (task) => task.length
                      ).length;
                      return `${numberOfUploads}/4`;
                    })()}
                  </td>
                  <td>
                    {currencyFormat(parseFloat(report.utilidad))}{" "}
                    {companySelected.moneda}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.isr)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.iva)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link
                      to={`${baseUrl}administration/company/${companySelected.id}/report/${report.id}/type/mensuales`}
                    >
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-arrow-right text-black fs-15"
                      ></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>
        Aún no se ha registrado ninguna declaración mensual
      </p>
    );
  };

  const renderBankAccounts = () => {
    if (companySelected.bankAccounts.length === 0) {
      return (
        <p
          style={{
            color: "gray",
            fontSize: 12,
          }}
        >
          Aún no hay cuentas bancarias registradas, las cuentas bancarias se
          registran en la pestaña de activos fijos
        </p>
      );
    }
    return companySelected.bankAccounts.map((account) => {
      return (
        <p
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "#004745",
            fontSize: 13,
          }}
        >
          {/*// @ts-ignore */}
          <Link
            to={`${baseUrl}governance/wealthItem/type/bankAccount/id/${account.id}`}
          >
            {account.bank} - {account.accountNumber}
          </Link>
        </p>
      );
    });
  };

  const renderAnualTaxReport = () => {
    if (companySelected.reports.anuales.length > 0) {
      return (
        <div className="table-responsive">
          <Table className="table border text-nowrap text-md-nowrap mb-0">
            <thead className="bg-light">
              <tr>
                <th>Año</th>
                <th>Cumplimiento</th>
                <th>Utilidad neta</th>
                <th>Declaración ISR</th>
                <th>Declaración IVA</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {companySelected.reports.anuales.map((report) => (
                <tr key={report.isr}>
                  <td>{report.year}</td>
                  <td style={{ textAlign: "center" }}>
                    {(() => {
                      const accountingTasks = [
                        report.isr,
                        report.iva,
                        report.utilidad,
                      ];
                      const numberOfUploads = accountingTasks.filter(
                        (task) => task.length
                      ).length;
                      return `${numberOfUploads}/4`;
                    })()}
                  </td>
                  <td>
                    {currencyFormat(parseFloat(report.utilidad))}{" "}
                    {companySelected.moneda}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.isr)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {addEllipsis(report.iva)}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link
                      to={`${baseUrl}administration/company/${companySelected.id}/report/${report.id}/type/anuales`}
                    >
                      <i
                        className="fe fe-arrow-right text-black fs-15"
                      ></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );
    }
    return (
      <p style={{ textAlign: "center", marginTop: 40 }}>
        Aún no se ha registrado ninguna declaración anual
      </p>
    );
  };

  const renderTaxReports = () => {
    const today = new Date();

    return (
      <div style={{ marginTop: 30 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-tax">
          <div className="tabs-menu2" style={{ marginBottom: 5 }}>
            <Nav
              variant="pills"
              as="ul"
              className="nav panel-tabs mr-auto custom-nav"
            >
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first-tax" href="#">
                  Declraración mensual
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-tax">Declaración anual </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-tax">
              <>
                <p style={{ fontStyle: "italic" }}>
                  Fecha limite prox declaracion mensual:{" "}
                  {daysUntilNextMonth17(today)}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                    marginBottom: 7,
                  }}
                >
                  <div style={{ marginBottom: 30 }}>
                    {mensualesReports.length > 0 && renderYearsDropdown()}
                  </div>

                  <div>
                    <Button className="custom-button" size="sm">
                      {/*// @ts-ignore */}
                      <Link
                        style={{ color: "white" }}
                        to={`${baseUrl}administration/companyNewReport/${companySelected.id}/type/mensual`}
                      >
                        + Añadir declaración mensual
                      </Link>
                    </Button>
                  </div>
                </div>

                {renderCompany()}
              </>
            </Tab.Pane>

            <Tab.Pane eventKey="second-tax">
              <p style={{ fontStyle: "italic" }}>
                Fecha limite prox declaracion anual: {daysToAnualTax(today)}
              </p>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 7,
                  marginBottom: 7,
                }}
              >
                <div style={{ marginBottom: 30 }}></div>

                <div style={{ marginBottom: 10 }}>
                  <Button className="custom-button" size="sm">
                    {/*// @ts-ignore */}
                    <Link
                      style={{ color: "white" }}
                      to={`${baseUrl}administration/companyNewReport/${companySelected.id}/type/anual`}
                    >
                      + Añadir declaración anual
                    </Link>
                  </Button>
                </div>
              </div>
              {renderAnualTaxReport()}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

  const renderDescription = () => {
    return (
      <div>
        <Row>
          <Form.Label>Cuentas bancarias</Form.Label>
          {renderBankAccounts()}
        </Row>
        <Row style={{ marginBottom: 20, marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Razon social</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setRazonSocial(text.target.value)}
              value={razonSocial}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>RFC</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setRFC(text.target.value)}
              value={rfc}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Regimen de capital</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
                aria-describedby="inputGroupPrepend"
                required
                onChange={(text) => setRegimenCapital(text.target.value)}
                value={regimenCapital}
              />
              <Form.Control.Feedback type="invalid">
                Favor de añadir el monto del pago
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="8"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Dirección Fiscal</Form.Label>
            <Form.Control
              type="numeric"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
              onChange={(text) => setAddress(text.target.value)}
              value={address}
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nacionalidad</Form.Label>
            <Select
              options={OptionsNationality}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setNationality(value)}
              placeholder=""
              value={nationality}
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
            <Form.Label>Moneda de operación</Form.Label>
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
              <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
                Una valuación acertada y reciente es importante para un calculo
                mas acertado en el total del valor patrimonial
              </p>
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
            <Form.Label>Fecha de fundación</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  format="DD/MM/YYYY"
                  onChange={(value) => setfoundationDate(value)}
                  value={dayjs(foundationDate)}
                  defaultValue={dayjs(foundationDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </Form.Group>
        </Row>
      </div>
    );
  };

  const renderYearsDropdown = () => {
    return (
      <div>
        <Dropdown className="h-3">
          <Dropdown.Toggle size="sm" color="default" type="button" className="custom-button">
            {yearSelected} <span className="caret"></span>
          </Dropdown.Toggle>
          <Dropdown.Menu role="menu">
            <>
              {accountingYears.map((year) => {
                return (
                  <Dropdown.Item
                    onClick={() => setYearSelected(year.toString())}
                    key={year}
                    href="#"
                  >
                    {year}
                  </Dropdown.Item>
                );
              })}
            </>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  };

  const renderFinance = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first-finance">
          <div className="tabs-menu2" style={{ marginBottom: 10 }}>
            <Nav
              variant="pills"
              as="ul"
              className="nav panel-tabs mr-auto custom-nav"
            >
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="first-finance" href="#">
                  Finanzas mensuales
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li" style={{ marginRight: 10 }}>
                <Nav.Link eventKey="second-finance">Finanzas anuales </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first-finance">
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <div></div>
                  {mensualesReports.length > 0 && renderYearsDropdown()}
                </div>
                {mensualesReports.length > 0 ? (
                  <ResultsChart
                    categories={months}
                    utilidad={utilidadArray}
                    egresos={egresosArray}
                    ventas={ventasArray}
                  />
                ) : (
                  <p style={{ textAlign: "center", marginTop: 40 }}>
                    Aún no se ha registrado ninguna reporte financiero mensual
                  </p>
                )}
              </>
            </Tab.Pane>

            <Tab.Pane eventKey="second-finance">
              {anualReports.length > 0 ? (
                <ResultsChart
                  categories={years}
                  utilidad={utilidadArrayAnual}
                  egresos={egresosArrayAnual}
                  ventas={ventasArrayAnual}
                />
              ) : (
                <p style={{ textAlign: "center", marginTop: 40 }}>
                  Aún no se ha registrado ninguna reporte financiero anual
                </p>
              )}
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    );
  };

  const renderContactList = () => {
    const existringContacts = companySelected.contacts.length > 0;
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
            size="sm"
            className="custom-button"
          >
            <Link
              style={{ color: "white" }}
              to={`${baseUrl}administration/providerCreate/standar`}
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
            justifyContent: existringContacts ? "left" : "center",
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
            ' {companySelected.name}' a su lista de activos relacionados{" "}
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
                {companySelected.contacts.map((contact) => (
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
                      <i
                        className="fe fe-arrow-right text-black fs-15"
                      ></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p style={{ fontSize: 12, color: "gray", textAlign: "center" }}>
            Aún no hay ningun contacto seleccionado para {companySelected.name}
          </p>
        )}
      </>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ paddingBottom: 20, minHeight: 550 }}>
          <Card.Title
            style={{ marginLeft: 15, marginBottom: 0, marginTop: 35 }}
          >
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
              className="fe fe-briefcase text-black fs-15"
            ></i>{" "}
            {companySelected.razonSocial}
          </Card.Title>
          {params.type === "tax" ? (
            renderTaxReports()
          ) : (
            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
              <div style={{ padding: 20, paddingBottom: 0, paddingLeft: 10 }}>
                <div className="tabs-menu1">
                  <Nav as="ul" className="nav panel-tabs">
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="third">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-folder text-black fs-13"
                        ></i>
                        Legal y documentos
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="second">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-trending-up text-black fs-13"
                        ></i>
                        Finanzas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fifth" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-book-open text-black fs-13"
                        ></i>
                        Accionistas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="fourth" href="#">
                        <i
                          style={{ marginRight: 9 }}
                          className="fe fe-file-text text-black fs-13"
                        ></i>
                        Datos generales
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" style={{ marginRight: 10 }}>
                      <Nav.Link eventKey="contacts" href="#">
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
                <Tab.Pane eventKey="third">{renderLegal()}</Tab.Pane>
                <Tab.Pane eventKey="second">{renderFinance()}</Tab.Pane>
                <Tab.Pane eventKey="fifth">{renderMultiSelect()}</Tab.Pane>
                <Tab.Pane eventKey="fourth">{renderDescription()}</Tab.Pane>
                <Tab.Pane eventKey="contacts">{renderContactList()}</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          )}
          <Form noValidate validated={false} onSubmit={() => {}}>
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
                style={{ position: "absolute", right: 25, bottom: 80 }}
                className="custom-button"
                type="submit"
              >
                Guardar
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Fragment>
  );
}
