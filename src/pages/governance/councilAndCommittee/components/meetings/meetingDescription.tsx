import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import parse from 'date-fns/parse';
import { useParams } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import { formateDateForUI } from "../../../../administration/payments/paymentUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";

export default function MeetingDescription(props) {
  const params = useParams();
  const navigate = useNavigate();
  
  if(!councilAndCommittieesData[params.type]){
    return <NotFoundSearch />
  }
  const meetingSelected = councilAndCommittieesData[params.type].meetings.find(meet => meet.id === Number(params.id));

  if(!meetingSelected){
    return <NotFoundSearch />
  }

  const meetingDateFormatted = formateDateForUI(meetingSelected.date);
  const meetingTimeFormatted = formateDateForUI(meetingSelected.time);

  const membersList = formatMember(councilAndCommittieesData[params.type].members);
  const membersSelected = formatMember(meetingSelected.participants);

  const addType =
    params.type === "familyCouncil"
      ? "Consejo Familiar"
      : params.type === "investmentCommittee"
      ? "Comite de Inversión"
      : null;
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState(meetingSelected.title);
  const [address, setAddress] = useState(meetingSelected.location);
  const [meetUrl, setMeetUrl] = useState("");
  const [meetingSubjects, setMeetingSubjects] = useState(meetingSelected.meetingSubjects);
  const [callToAction, setCallToAction] = useState(meetingSelected.callToAction);
  const [members, setMembers] = useState(membersSelected);
  const [meetingDate, setMeetingDate] = useState<Dayjs | null>(dayjs(meetingDateFormatted));
  const [meetingHour, setMeetingHour] = useState(parse(meetingSelected.date, 'hh:mm a', new Date()));

  const [modality, setModality] = useState({
    value: "Presencial",
    label: "Presencial",
  });

  const [councilType, setCouncilType] = useState({
    value: addType,
    label: addType,
  });

  const OptionsCouncils = [
    { value: "Consejo Familiar", label: "Consejo Familiar" },
    { value: "Comite de Inversión", label: "Comite de Inversión" },
  ];

  const OptionsModality = [
    { value: "En linea", label: "En Linea" },
    { value: "Presencial", label: "Presencial" },
  ];

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 10 }}>
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
            Reunion {addType}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            {/* <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Reunion de:</Form.Label>
                <Select
                  options={OptionsCouncils}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setCouncilType(value)}
                  placeholder=""
                  value={councilType}
                />
              </Form.Group>
            </Row> */}
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Titulo de junta</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="numeric"
                    placeholder=""
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={(text) => setTitle(text.target.value)}
                    value={title}
                  />
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
                <Form.Label>Miembros participantes en la reunion de {addType}</Form.Label>
                <MultiSelect
                  options={membersList}
                  value={members}
                  onChange={setMembers}
                  labelledBy="Select"
                  overrideStrings={{
                    selectSomeItems: "Selecciona miembros participantes",
                    allItemsAreSelected: "Todos los miembros",
                    selectAll: "Seleccionar todos",
                  }}
                  disableSearch
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
                <Form.Label>Modalidad</Form.Label>
                <Select
                  options={OptionsModality}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setModality(value)}
                  placeholder=""
                  value={modality}
                />
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              {
                modality.label === 'En Linea' ? (
                  <>
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                      className="form-group"
                    >
                      <Form.Label>Plataforma</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="numeric"
                          placeholder=""
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={(text) => setPlatform(text.target.value)}
                          value={platform}
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
                      <Form.Label>Link de meet</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="numeric"
                          placeholder=""
                          aria-describedby="inputGroupPrepend"
                          required
                          onChange={(text) => setMeetUrl(text.target.value)}
                          value={meetUrl}
                        />
                        <Form.Control.Feedback type="invalid">
                          Favor de añadir el monto del pago
                        </Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>
                  </>
                ): (
                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="validationCustom01"
                    className="form-group"
                  >
                  <Form.Label>Dirección de junta</Form.Label>
                  <InputGroup hasValidation>
                    <Form.Control
                      type="numeric"
                      placeholder=""
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={(text) => setAddress(text.target.value)}
                      value={address}
                    />
                    <Form.Control.Feedback type="invalid">
                      Favor de añadir el monto del pago
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                )
              }
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Dia de reunion</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(value) => setMeetingDate(value)}
                    value={dayjs(meetingDate)}
                    defaultValue={dayjs(meetingDate)}
                  />
                </LocalizationProvider>
              </Form.Group>

              <Form.Group
                as={Col}
                md="6"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Hora de reunion</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                    label={""}
                    views={["hours", "minutes"]}
                    onChange={(value) => setMeetingHour(value)}
                    value={meetingHour}
                    defaultValue={meetingHour}
                  />
                </LocalizationProvider>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <p style={{ color: "gray", fontStyle: "italic" }}>
                Si la junta no se ha llevado a cabo aún, se pueden dejar los
                siguientes cuadros en texto sin responder
              </p>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom09"
                className="form-group"
              >
                <Form.Label>Temas vistos en junta</Form.Label>
                <Form.Control
                  as="textarea"
                  className="textArea-meeting"
                  style={{ minHeight: 200 }}
                  onChange={(text) => setMeetingSubjects(text.target.value)}
                  value={meetingSubjects}
                  id="validationCustom09"
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Plan de acción</Form.Label>
                <Form.Control
                  style={{ minHeight: 200 }}
                  onChange={(text) => setCallToAction(text.target.value)}
                  value={callToAction}
                  as="textarea"
                  id="exampleFormControlTextarea1"
                ></Form.Control>
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
