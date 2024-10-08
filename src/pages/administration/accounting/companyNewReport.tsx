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
import FileUpload from "./components/fileUpload";
import NotFoundSearch from "../../shared/notFoundSearch";
import { Link } from "react-router-dom";
import { companies } from "./accountingData";
import { useParams } from "react-router-dom";

export default function CompanyNewReport(props) {
  const params = useParams();
  const companySelected = companies.find(
    (company) => company.id === Number(params.id)
  );

  if (!companySelected) {
    return <NotFoundSearch />
  }

  if (params.type !== 'mensual' && params.type !== 'anual') {
    return <NotFoundSearch />
  }

  const [year, setYear] = useState({
    value: '',
    label: '',
  });

  const [month, setMonth] = useState({
    value: '',
    label: '',
  });

  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [sales, setSales] = useState('');

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
            Nuevo Reporte {params.type} {companySelected.nombre}
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
                params.type === 'mensual' && (
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

                <FileUpload/>
              </Form.Group>

              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Declaración IVA
                </Form.Label>

                <FileUpload/>
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
