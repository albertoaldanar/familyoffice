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
import FileUpload from "./components/fileUpload";
import FileView from "./components/fileView";
import { Link } from "react-router-dom";
import { fideicomisos } from "./accountingData";
import { useParams } from "react-router-dom";
import { family } from "../../governance/familyStructure/familyStructureData";
import { companies } from "./accountingData";
import { formatCompany, formatTrust } from "./companyUtils";
import { formatMember } from "../../governance/councilAndCommittee/councilAndCommitteeUtils";

export default function CompanyCreate(props) {
  const [companyName, setCompanyName] = useState("");
  const [rfc, setRFC] = useState("");
  const [razonSocial, setRazonSocial] = useState("");
  const [percentage, setPercentage] = useState("");
  const [todayValue, setTodayValue] = useState("");
  const [address, setAddress] = useState("");
  const [ownerFamilyMembers, setOwnerFamilyMembers] = useState([]);
  const [ownerCompanies, setOwnerCompanies] = useState([]);
  const [foundationDate, setfoundationDate] = useState<Dayjs | null>(dayjs(""));
  const [ownerTurst, setOwnerTurst] = useState([]);

  const [currency, setCurrency] = useState({
    value: "",
    label: "",
  });

  const familyList = formatMember(family.members);
  const companiesList = formatCompany(companies);
  const trustsList = formatTrust(fideicomisos);


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
      if (ownerTurst.length) {
        return ownerTurst.map((trust, index) => {
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
                  {trust.label}
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
                    handleInputChange(
                      index,
                      "pct",
                      e.target.value,
                      "trust"
                    )
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

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 35 }}>
            Nuevo Registro de Empresa
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre comercial</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setCompanyName(text.target.value)}
                    value={companyName}
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
            </Row>

            <Row style={{ marginTop: 20, marginBottom: -10 }}>
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
                <p style={{ color: "gray", fontSize: 13 }}>
                  Miembros familiares
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
                  options={trustsList}
                  value={ownerTurst}
                  onChange={setOwnerTurst}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona fideicomiso",
                    allItemsAreSelected: "Todos los fideicomisos",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
                />

                {renderOptionsSelected("trust")}
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 30 }}>
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
                </InputGroup>
                <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
                  Una valuación acertada y reciente es importante para un
                  calculo mas acertado en el total del valor patrimonial
                </p>
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

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                   1) Acta constitutiva:
                </p>
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                    2) CIF (Constancia de Identificacion fiscal)
                </p>
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                   3) Actas de asamblea ordinaras
                </p>
                <Row style={{ marginTop: 10, marginBottom: 20 }}>
                  {family.documents.family.actasAsamblea.length ? (
                    family.documents.family.actasAsamblea.map((acta, index) => (
                      <Form.Group as={Col} md="4" className="form-group">
                        <Form.Label
                          className="form-label my-3"
                          style={{ color: "gray", fontSize: 13 }}
                        >
                          {" "}
                          {acta.nombre}
                        </Form.Label>
                        <FileView
                          key={index}
                          title={acta.nombre}
                          fileName={acta.url}
                        />
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
                </Row>
                <div>
                <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
                  + Añadir nueva actas de asamblea ordinaras
                </p>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                   4) Poderes
                </p>
                <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
                  + Añadir nueva acta de poderes
                </p>
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 16,
                    marginTop: 20,
                  }}
                >
                   5) Actas de dividendos
                </p>
                
                <div>
                <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
                  + Añadir nueva acta de dividendos
                </p>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <p
                  style={{
                    fontSize: 15,
                    marginTop: 20,
                  }}
                >
                  6) Actas de asamblea extraordinaria
                </p>
                <p style={{ fontSize: 10, color: "gray", marginBottom: -1 }}>
                  + Añadir actas de asamblea extraordinaria
                </p>
                <div>
                  <FileUpload />
                  <p
                    style={{
                      fontSize: 10,
                      textDecoration: "underline",
                      cursor: "pointer",
                      marginTop: -15,
                      color: "#A0A0A0",
                    }}
                  >
                    Descargar formato guia
                  </p>
                </div>
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
