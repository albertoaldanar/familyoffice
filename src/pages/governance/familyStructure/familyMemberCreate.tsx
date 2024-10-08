import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MultiSelect } from "react-multi-select-component";
//@ts-ignore
import download from '../../../assets/images/familyOffice/download.png';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../administration/providers/components/fileUpload";
import { taxesRules } from "../../administration/taxes/taxesUtils";
import { family } from "./familyStructureData";
import { nationalities } from './familyStructureConst';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FamilyMemberCreate(props) {
  const navigate = useNavigate();
  const params = useParams();
  const memberSelected = params.source == 'root' ? 'root' : family.members.find((memb) => memb.id === params.source);

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
  
  const [nationality, setNationalities] = useState([]);

  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(dayjs(""));
  const [isDescendantOfCouple, setIsDescendantOfCouple] = useState(true);

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

  const nameOfCouple = memberSelected !=='root' && memberSelected.coupleId ? family.members.find((memb) => memb.id === memberSelected.coupleId).name : null;

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30}}>
          <Card.Title style={{ marginBottom: 35 }}>
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
            {
              nameOfCouple && (
                <Row style={{ marginTop: -10, marginBottom: 20 }}>
                  <Form.Group className="mb-3 form-group">
                    <Form.Check
                      required
                      checked={isDescendantOfCouple}
                      onChange={(e) => setIsDescendantOfCouple(e.target.checked)}
                      label={`El nuevo miembro también es descendiente de ${nameOfCouple}`}
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
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
              <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Nacionalidades</Form.Label>
            <MultiSelect
              options={nationalities}
              value={nationality}
              onChange={setNationalities}
              labelledBy="Select"
              overrideStrings={{
                selectSomeItems: "Selecciona nacionalidades",
                allItemsAreSelected: "Todos los miembros",
                selectAll: "Seleccionar todas",
              }}
              disableSearch
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
              <Button className="custom-button" type="submit">
                Crear
              </Button>
            </div>
          </Form>
        </div>
      </Row>
    </Fragment>
  );
}
