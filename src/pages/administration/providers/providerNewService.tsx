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
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { providers } from "./providersData";
import { useParams } from "react-router-dom";

export default function ProviderNewService(props) {
  const params = useParams();
  const providerCategorySelected = providers.find(
    (prov) => prov.id === Number(params.id)
  );

  if (!providerCategorySelected) {
    return <p>Not Found</p>;
  }

  const providerSelected = providerCategorySelected.proveedores.find(
    (acc) => acc.id === Number(params.providerId)
  );

  if (!providerSelected) {
    return <p>Not Found</p>;
  }

  const [income, setIncome] = useState("");
  const [description, setDescription] = useState("");
  const [concept, setConcept] = useState("");
  const [fechaDeServicio, setFechaDeServicio] = useState<Dayjs | null>(
    dayjs("")
  );

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 50 }}>
            Nuevo registro de servicio de {providerSelected.nombre}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row className="mb-6">
              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Fecha de servicio</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setFechaDeServicio(value)}
                      value={dayjs(fechaDeServicio)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row>
            <Row className="mb-6">
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustomUsername"
                className="form-group"
              >
                <Form.Label>Concepto de servicio</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setConcept(text.target.value)}
                    value={concept}
                  />
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
                <Form.Label>Descripción de servicio</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setDescription(text.target.value)}
                    value={description}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>

            <Row className="mb-6">
              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Documento entregable
                </Form.Label>

                <FileUpload />
              </Form.Group>

              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Comprobante de pago
                </Form.Label>

                <FileUpload />
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
                Guardar
              </Button>
            </div>
          </Form>
        </Card>
      </Row>
    </Fragment>
  );
}
