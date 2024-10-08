import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Badge,
  Form,
  InputGroup,
} from "react-bootstrap";
import Select from "react-select";
import { Link } from "react-router-dom";
import FileView from "./components/fileView";
import NotFoundSearch from "../../shared/notFoundSearch";
import FileUpload from "./components/fileUpload";
import { companies } from "./accountingData";
import { useParams } from "react-router-dom";

export default function CompanyReport(props) {
  const params = useParams();
  const companySelected = companies.find(
    (company) => company.id === Number(params.id)
  );

  if (!companySelected) {
   return <NotFoundSearch/>
  }

  if (params.type !== 'mensuales' && params.type !== 'anuales') {
   return <NotFoundSearch/>
  }

  const reportSelected = params.type === 'mensuales' ? companySelected.reports.mensuales
    .map((rep) =>
      rep.accounting.find((acc) => acc.id === Number(params.reportId))
    )
    .find((acc) => acc !== undefined && acc !== null) : companySelected.reports.anuales.find((acc) => acc.id === Number(params.reportId))

    if (!reportSelected) {
     return <NotFoundSearch/>
    }

  const [year, setYear] = useState({
    value: reportSelected.year,
    label: reportSelected.year,
  });

  const [month, setMonth] = useState({
    value: reportSelected.month,
    label: reportSelected.month,
  });

  const [income, setIncome] = useState(reportSelected.utilidad);
  const [expenses, setExpenses] = useState(reportSelected.egresos);
  const [sales, setSales] = useState(reportSelected.ventas);

  const Options = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const OptionsMonths = [
    { value: "Enero", label: "Enero" },
    { value: "Febrero", label: "Febrero" },
    { value: "Marzo", label: "Marzo" },
    { value: "Abril", label: "Abril" },
    { value: "Mayo", label: "Mayo" },
    { value: "Junio", label: "Junio" },
    { value: "Julio", label: "Julio" },
    { value: "Agosto", label: "Agosto" },
    { value: "Septiembre", label: "Septiembre" },
    { value: "Octubre", label: "Octubre" },
    { value: "Noviembre", label: "Noviembre" },
    { value: "Diciembre", label: "Diciembre" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            Reporte {params.type === 'mensuales' ? 'mensual': 'anual'} {companySelected.nombre} - {reportSelected.month} del{" "}
            {reportSelected.year}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom04"
                className="form-group"
              >
                <Form.Label>Año</Form.Label>
                <Select
                  options={Options}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setYear(value)}
                  placeholder="Año"
                  value={year}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid state.
                </Form.Control.Feedback>
              </Form.Group>
              {
                 params.type === 'mensuales' && (
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustom04"
                    className="form-group"
                  >
                    <Form.Label>Mes</Form.Label>
                    <Select
                      options={OptionsMonths}
                      classNamePrefix="Select2"
                      onChange={(value) => setMonth(value)}
                      value={month}
                      className="multi-select"
                      placeholder="Mes"
                    />
    
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                 )
              }

            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Ventas</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setSales(text.target.value)}
                    value={sales}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {companySelected.moneda}
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
                <Form.Label>Egresos</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setExpenses(text.target.value)}
                    value={expenses}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {companySelected.moneda}
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
                <Form.Label>Utilidad neta</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setIncome(text.target.value)}
                    value={income}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {companySelected.moneda}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Declaración ISR
                </Form.Label>
                {reportSelected.isr ? (
                  <FileView title="Declaracion ISR" fileName={reportSelected.isr} />
                ) : (
                  <FileUpload />
                )}
              </Form.Group>

              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Declaración IVA
                </Form.Label>
                {reportSelected.iva ? (
                  <FileView title="Declaracion ISR" fileName={reportSelected.isr} />
                ) : (
                  <FileUpload />
                )}
              </Form.Group>

              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">DIOT</Form.Label>
                {reportSelected.diot ? (
                  <FileView title="Declaracion ISR" fileName={reportSelected.isr} />
                ) : (
                  <FileUpload />
                )}
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
              <Button className="custom-button" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
