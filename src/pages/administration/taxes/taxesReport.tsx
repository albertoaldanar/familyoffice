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
import { Link , useNavigate} from "react-router-dom";
import FileUpload from "../accounting/components/fileUpload";
import FileView from "../accounting/components/fileView";
import { taxes } from "./taxesData";
import { useParams } from "react-router-dom";

export default function TaxesReport(props) {
  const params = useParams();
  const navigate = useNavigate();
  const taxUserSelected = taxes.find(
    (tax) => tax.id === Number(params.id)
  );

  if (!taxUserSelected) {
    return <p>Not Found</p>;
  }

  let reportSelected;

  if((params.type ==='mensuales' || params.type==='anuales' || params.type==='bimestrales')){
    reportSelected = taxUserSelected.declaraciones[params.type].find((acc) => acc.id === Number(params.reportId));
  } else {
    return <p>Not Found</p>;
  }

  if (!reportSelected) {
    return <p>Not Found</p>;
  }

  const [year, setYear] = useState({
    value: reportSelected.anio,
    label: reportSelected.anio,
  });

  const [month, setMonth] = useState({
    value: reportSelected.mes,
    label: reportSelected.mes,
  });

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

  const bimestralOptions = [
    {
      value: "Marzo (Declaracion de Enero - Febrero)",
      label: "Marzo (Declaracion de Enero - Febrero)",
    },
    {
      value: "Mayo (Declaracion de Marzo - Abril)",
      label: "Mayo (Declaracion de Marzo - Abril)",
    },
    {
      value: "Julio (Declaracion de Mayo - Junio)",
      label: "Julio (Declaracion de Mayo - Junio)",
    },
    {
      value: "Septiembre (Declaracion de Julio - Agosto)",
      label: "Septiembre (Declaracion de Julio - Agosto)",
    },
    {
      value: "Noviembre (Declaracion de Septiembre - Octubre)",
      label: "Noviembre (Declaracion de Septiembre - Octubre)",
    },
    {
      value: "Enero (Declaracion de Noviembre - Diciembre)",
      label: "Enero (Declaracion de Noviembre - Diciembre)",
    },
  ];

  const renderDropdowns = () => {
    if (params.type === "mensuales") {
      return (
        <>
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
        </>
      );
    } else if (params.type === "anuales") {
      return (
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
      );
    }

    return (
      <>
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

        <Form.Group
          as={Col}
          md="4"
          controlId="validationCustom04"
          className="form-group"
        >
          <Form.Label>Bimestre</Form.Label>
          <Select
            options={bimestralOptions}
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
      </>
    );
  }

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            <Link
              style={{
                color: "#696969",
                fontSize: 16,
                marginBottom: 20,
                marginRight: 15,
              }}
              to={".."}
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
            Declaracion {params.type} {taxUserSelected.nombre} - {reportSelected.mes} {reportSelected.anio}
            {reportSelected.year}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row className="mb-3">
              {renderDropdowns()}
            </Row>

            <Row>
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Declaración
                </Form.Label>
                {reportSelected.declaracion ? (
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
        </div>
      </Row>
    </Fragment>
  );
}
