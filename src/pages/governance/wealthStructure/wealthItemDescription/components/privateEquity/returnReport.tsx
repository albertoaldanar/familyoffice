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
import FileUpload from "../../../../../administration/accounting/components/fileUpload";
import { otherWealthData } from "../../../wealthStructureData";
import NotFoundSearch from "../../../../../shared/notFoundSearch";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import FileView from "../../../../../administration/accounting/components/fileView";

export default function PrivateEquityReturn(props) {
  const params = useParams();
  const navigate = useNavigate();

  const privateEquitySelected = otherWealthData.privateEquity.find(
    (privateEquity) => privateEquity.id === Number(params.id)
  );

  if (!privateEquitySelected) {
    return <NotFoundSearch />;
  }

  const privateEquityReturn = privateEquitySelected.investmentReturns.find(
    (report) => report.id === Number(params.returnId)
  );

  if (!privateEquityReturn) {
    return <NotFoundSearch />;
  }

  const [year, setYear] = useState({
    value: privateEquityReturn.year.toString(),
    label: privateEquityReturn.year.toString(),
  });

  const [month, setMonth] = useState({
    value: privateEquityReturn.month,
    label: privateEquityReturn.month,
  });

  const [resultAmount, setResultAmount] = useState(privateEquityReturn.amount);

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
        <div style={{ padding: 30 }}>
          <Card.Title style={{ marginBottom: 30 }}>
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
          Nuevo retorno inversión para inversion capital privado - 
            {privateEquitySelected.investmentName}
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
            </Row>

            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Valor de devolución de capital</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setResultAmount(text.target.value)}
                    value={resultAmount}
                  />
                  <InputGroup.Text id="inputGroupPrepend">
                    {privateEquitySelected.currency}
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
                  Comprobante
                </Form.Label>

                {
                  privateEquityReturn.voucher ? (
                    <FileView title="stockSelectedResult" fileName="stockSelectedResult"/>
                  ): (
                    <FileUpload />
                  )
                }

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
