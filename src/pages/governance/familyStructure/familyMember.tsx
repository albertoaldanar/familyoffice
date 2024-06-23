import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
//@ts-ignore
import download from "../../../assets/images/familyOffice/download.png";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs, { Dayjs } from "dayjs";
import FileUpload from "../../administration/providers/components/fileUpload";
import FileView from "../../administration/accounting/components/fileView";
import Pageheader from "../../../layouts/pageheader/pageheader";
import { taxesRules } from "../../administration/taxes/taxesUtils";
import { family } from "./familyStructureData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function FamilyMember(props) {
  const breadcrumbs = ["Gobernanza", "Miembro Familiar"];
  const params = useParams();
  const memberSelected = family.members.find((memb) => memb.id === params.id);
  
  console.log("memberSelected---", memberSelected);

  if (!memberSelected) {
    return <p>Not Found</p>;
  }

  const [memberName, setMemberName] = useState(memberSelected.name);
  const [isProviderMemberIC, setIsProviderMemberIC] = useState(memberSelected.isMemberIC);
  const [isProviderisMemberFC, setIsProviderisMemberFC] = useState(memberSelected.isMemberFC);
  const [rfc, setRFC] = useState(memberSelected.rfc);

  const [regimen, setRegimen] = useState({
    value: memberSelected.regimenFiscal,
    label: memberSelected.regimenFiscal,
  });
  const [relationship, setRelationship] = useState({
    value: "",
    label: "",
  });
  const [address, setAddress] = useState(memberSelected.address);
  const [dateOfBirth, setDateOfBirth] = useState<Dayjs | null>(
    dayjs(memberSelected.dob)
  );

  const [gender, setGender] = useState({
    value: memberSelected.gender,
    label: memberSelected.gender,
  });

  const OptionsGender = [
    { value: "Masculino", label: "Masculino" },
    { value: "Femenino", label: "Femenino" },
  ];

  const OptionsRelationship = [
    { value: "Descendiente", label: "Descendiente" },
    { value: "Pareja", label: "Pareja" },
  ];

  const onlyDescendantOption = OptionsRelationship.filter(
    (option) => option.value !== "Pareja"
  );

  const OptionsRegimen = taxesRules.map((rule) => ({
    value: rule.regimen,
    label: rule.regimen,
  }));

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30 , marginTop: 20}}>
          <Card.Title style={{ marginBottom: 35 }}>
            Ver/editar miembro familiar
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginBottom: 20}}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isProviderisMemberFC}
                  onChange={(e) => setIsProviderisMemberFC(e.target.checked)}
                  label={`Este miembro de la familia es parte del consejo Familiar`}
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>

              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={isProviderMemberIC}
                  onChange={(e) => setIsProviderMemberIC(e.target.checked)}
                  label={`Este miembro de la familia es parte del comite de inversión`}
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
            </Row>
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
                {memberSelected.pasport ? (
                  <FileView title="pasport" fileName={memberSelected.pasport} />
                ) : (
                  <FileUpload />
                )}
              </Form.Group>

              <Form.Group as={Col} md="6" className="form-group">
                <Form.Label className="form-label my-3">
                  Copia Acta de nacimiento
                </Form.Label>
                {memberSelected.birthCertificate ? (
                  <FileView
                    title="birthCertificate"
                    fileName={memberSelected.birthCertificate}
                  />
                ) : (
                  <FileUpload />
                )}
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
                {memberSelected.birthCertificate ? (
                  <FileView
                    title="birthCertificate"
                    fileName={memberSelected.birthCertificate}
                  />
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
