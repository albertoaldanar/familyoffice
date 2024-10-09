import React, { Fragment, useState } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
} from "react-bootstrap";
import FileUpload from "./components/fileUpload";
import { Link, useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import { formateDateForUI } from "../payments/paymentUtils";
import { providers } from "./providersData";
import { useParams } from "react-router-dom";
import FileView from "../accounting/components/fileView";

export default function ProviderService(props) {
  const params = useParams();
  const navigate = useNavigate();
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

  const serviceSelected = providerSelected.registroDeServicios.find(
    (acc) => acc.id === Number(params.serviceId)
  );

  if (!serviceSelected) {
    return <p>Not Found</p>;
  }

  const serviceDateFormatted = formateDateForUI(serviceSelected.fecha);

  const [serviceDate, setServiceDate] = useState<Dayjs | null>(
    dayjs(serviceDateFormatted)
  );

  const [description, setDescription] = useState(serviceSelected.descripcion);
  const [concept, setConcept] = useState(serviceSelected.concepto);

  return (
    <Fragment>
      <Row>|
        <div style={{ padding: 30}}>
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
                      onChange={(value) => setServiceDate(value)}
                      value={dayjs(serviceDate)}
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

                {
                  serviceSelected.documentoOEntrgable ? (
                    <FileView fileName="Entregable" title="Entregable" />
                  ) : (
                    <FileUpload />
                  )
                }

              </Form.Group>

              <Form.Group as={Col} md="4" className="form-group">
                <Form.Label className="form-label my-3">
                  Comprobante de pago
                </Form.Label>
                {
                  serviceSelected.reciboOFactura ? (
                    <FileView fileName="Recibo o factura" title="Recibo o factura" />
                  ) : (
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
