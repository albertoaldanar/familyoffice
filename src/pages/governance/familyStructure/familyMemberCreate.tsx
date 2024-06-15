import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from '../../../assets/images/familyOffice/download.png';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../administration/providers/components/fileUpload";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { taxesRules } from "../../administration/taxes/taxesUtils";
import { family } from "./familyStructureData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FamilyMemberCreate(props) {
  const breadcrumbs = ["Gobernanza", "Miembro Familiar"];
  const params = useParams();
  const memberSelected = params.source == 'root' ? 'root' : family.members.find((memb) => memb.id === params.source);
  console.log('memberSelected', memberSelected)

  const [memberName, setMemberName] = useState("");
  const [rfc, setRFC] = useState("");
  const [regimen, setRegimen] = useState({
    value: "",
    label: "",
  });
  const [relationship, setRelationship] = useState({
    value: "",
    label: "",
  });
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(dayjs(""));

  const [gender, setGender] = useState({
    value: "",
    label: "",
  });

  const OptionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Femenino", label: "Femenino" },
  ];

  const OptionsRelationship = [
    { value: "Descendiente", label: "Descendiente" },
    { value: "Pareja", label: "Pareja" },
  ];

  const onlyDescendantOption = OptionsRelationship.filter(option => option.value !== "Pareja");

  const OptionsRegimen = taxesRules.map(rule => ({
    value: rule.regimen,
    label: rule.regimen
  }));

  return (
    <Fragment>
      <Pageheader items={breadcrumbs} />
      <Row>
        <Card style={{ padding: 30}}>
          <Card.Title style={{ marginBottom: 35 }}>
            Añadir nuevo miembro familiar
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            {
              memberSelected !=='root' && (
                <Row style={{ marginBottom: 10, display: 'flex', flexDirection: 'row' }}>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustom01"
                  className="form-group"
                  
                >
                  <Form.Label>Relación</Form.Label>
                  <Select
                    options={memberSelected.coupleId ? onlyDescendantOption : OptionsRelationship}
                    classNamePrefix="Select2"
                    className="multi-select"
                    onChange={(value) => setRelationship(value)}
                    placeholder=""
                    value={relationship}
                  />
                  <p style={{marginTop: 10, fontSize: 12, fontStyle: 'italic'}}> de {memberSelected.name}</p>
                </Form.Group>
              </Row>
              ) 
            }

            <Row style={{ marginBottom: 10 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Nombre completo</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setMemberName(text.target.value)}
                    value={memberName}
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
                <Form.Label>Genero</Form.Label>
                <Select
                  options={OptionsGender}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setGender(value)}
                  placeholder=""
                  value={gender}
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
                <Form.Label>Fecha de Nacimiento</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      format="DD/MM/YYYY"
                      onChange={(value) => setDateOfBirth(value)}
                      value={dayjs(dateOfBirth)}
                      defaultValue={dayjs(dateOfBirth)}
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </Form.Group>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="4"
                controlId="validationCustom02"
                className="form-group"
              >
                <Form.Label>Regimen Fiscal</Form.Label>
                <Select
                  options={OptionsRegimen}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setRegimen(value)}
                  placeholder=""
                  value={regimen}
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
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Copia pasaporte
                </Form.Label>
                <div>
                  <FileUpload />
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Copia Acta de nacimiento
                </Form.Label>
                <div>
                  <FileUpload />
                </div>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Constancia de Identificación Fiscal
                </Form.Label>
                <div>
                  <FileUpload />
                </div>
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Copia Acta de nacimiento
                </Form.Label>
                <div>
                  <FileUpload />
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
