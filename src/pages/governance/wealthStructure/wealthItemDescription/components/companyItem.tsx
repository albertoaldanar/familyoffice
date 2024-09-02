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
} from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from "../../../assets/images/familyOffice/download.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../../../administration/accounting/components/fileUpload";
import FileView from "../../../../administration/accounting/components/fileView";
import { companies } from "../../../../administration/accounting/accountingData";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { formateDateForUI } from "../../../../administration/payments/paymentUtils";

export default function CompanyItem(props) {
  const companySelected = companies.find(
    (company) => company.id === Number(props.id)
  );

  if (!companySelected) {
    return <NotFoundSearch />;
  }

  const foundationDateFormatted = formateDateForUI(companySelected.fundacion);

  const [companyName, setCompanyName] = useState(companySelected.nombre);
  const [rfc, setRFC] = useState(companySelected.rfc);
  const [razonSocial, setRazonSocial] = useState(companySelected.razonSocial);
  const [percentage, setPercentage] = useState(companySelected.percentage);
  const [todayValue, setTodayValue] = useState(companySelected.valuacion);
  const [address, setAddress] = useState(companySelected.direccionFiscal);
  const [foundationDate, setfoundationDate] = useState<Dayjs | null>(
    dayjs(foundationDateFormatted)
  );

  const [currency, setCurrency] = useState({
    value: companySelected.moneda,
    label: companySelected.moneda,
  });

  const Optionscurrency = [
    { value: "MXN", label: "MXN" },
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
  ];

  const renderDescription = () => {
    return (
      <div>
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
            </InputGroup>
            <p style={{ marginTop: 7, fontSize: 11, color: "gray" }}>
              Una valuación acertada y reciente es importante para un calculo
              mas acertado en el total del valor patrimonial
            </p>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustomUsername"
            className="form-group"
          >
            <Form.Label>Porcentaje de propiedad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                aria-describedby="inputGroupPrepend-3"
                required
                onChange={(text) => setPercentage(text.target.value)}
                value={percentage}
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
      </div>
    );
  };

  const renderDocuments = () => {
    return (
      <>
        <Row>
          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta constitutiva
            </Form.Label>
            {companySelected.actaConstitutiva ? (
              <FileView
                title="Declaracion ISR"
                fileName={companySelected.actaConstitutiva}
              />
            ) : (
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
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta de asamblea ordinaria
            </Form.Label>
            {companySelected.actaAsamblea ? (
              <FileView
                title="Declaracion ISR"
                fileName={companySelected.actaAsamblea}
              />
            ) : (
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
            )}
          </Form.Group>

          <Form.Group as={Col} md="4" className="form-group">
            <Form.Label className="form-label my-3">
              Acta de asamblea extraordinaria
            </Form.Label>
            {companySelected.actaAsambleaExtraordinaria ? (
              <FileView
                title="Acta asamble extraordinaria"
                fileName="Acta asamble extraordinaria"
              />
            ) : (
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
            )}
          </Form.Group>

          <Row style={{ marginTop: 40 }}>
            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">Poderes</Form.Label>
              {companySelected.poderes ? (
                <FileView
                  title="poderes"
                  fileName="poderes"
                />
              ) : (
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
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">
                Actas de dividendos
              </Form.Label>
              {companySelected.actasDividendos ? (
                <FileView
                  title="Actasdividendos"
                  fileName="Actasdividendos"
                />
              ) : (
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
              )}
            </Form.Group>

            <Form.Group as={Col} md="4" className="form-group">
              <Form.Label className="form-label my-3">
                Constancia de Identificacion fiscal
              </Form.Label>
              {companySelected.cif ? (
                <FileView
                  title="Declaracion ISR"
                  fileName={companySelected.cif}
                />
              ) : (
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
              )}
            </Form.Group>
          </Row>
        </Row>
      </>
    );
  };

  const renderResponsabilities = () => {};

  return (
    <Fragment>
      <Row style={{ marginTop: 10, padding: 20 }}>
        <Card.Title>{companySelected.razonSocial}</Card.Title>

        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <div
            style={{
              paddingBottom: 0,
              paddingLeft: 10,
              marginTop: 10,
              marginBottom: 20,
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
                  <Nav.Link eventKey="second">Documentos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li" style={{ marginRight: 10 }}>
                  <Nav.Link eventKey="third">Obligaciones</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <Tab.Content className="panel-body">
            <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>

            <Tab.Pane eventKey="second">{renderDocuments()}</Tab.Pane>
            <Tab.Pane eventKey="third">
              <Link
                // @ts-ignore */
                to={`${import.meta.env.BASE_URL}administration/company/${companySelected.id}`}
                style={{
                    fontSize: 15,
                    textDecoration: "underline",
                    cursor: "pointer",
                    color: "#5488d2",
                }}
              >
                Gestionar fiscal y finanzas
              </Link>

            </Tab.Pane>
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
      </Row>
    </Fragment>
  );
}
