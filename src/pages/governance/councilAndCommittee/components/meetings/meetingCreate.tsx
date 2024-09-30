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
import { useParams } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { formatMeeting } from "../../meetingUtils";

export default function MeetingCreate(props) {
  const params = useParams();
  const navigate = useNavigate();
  const addType =
    params.type === "familyCouncil"
      ? "Consejo Familiar"
      : params.type === "investmentCommittee"
      ? "Comite de Inversión"
      : null;
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [meetUrl, setMeetUrl] = useState("");
  const [members, setMembers] = useState([]);
  const [meetingDate, setMeetingDate] = useState<Dayjs | null>(dayjs(""));
  const [meetingHour, setMeetingHour] = useState<Dayjs | null>(dayjs(""));
  const [isMeetingLinked, setIsMeetingLinked] = useState(true);
  const [modality, setModality] = useState({
    value: "Presencial",
    label: "Presencial",
  });

  const [linkedMeeting, setLinkedMeeting] = useState({
    value: '',
    label: '',
  });

  if (!councilAndCommittieesData[params.type]) {
    return <NotFoundSearch />;
  }

  const membersList = formatMember(
    councilAndCommittieesData[params.type].members
  );

  const OptionsModality = [
    { value: "En linea", label: "En Linea" },
    { value: "Presencial", label: "Presencial" },
  ];

  const renderLinkMeeting = () => {
    if (councilAndCommittieesData[params.type].meetings.length > 0) {
      const meetingsList = formatMeeting(councilAndCommittieesData[params.type].meetings);

      return (
        <Row style={{ marginTop: 20 }}>
          <Form.Group className="form-group form-elements">
            <div className="custom-controls-stacked">
              <Form.Check
                label="Esta reunión es continuación de una reunion previa"
                checked={isMeetingLinked}
                onChange={(event) => setIsMeetingLinked(event.target.checked)}
              />
            </div>
          </Form.Group>

          {
            isMeetingLinked && (
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Continuación de reunión:</Form.Label>
                <Select
                  //@ts-ignore
                  options={meetingsList}
                  classNamePrefix="Select2"
                  className="multi-select"
                  onChange={(value) => setLinkedMeeting(value)}
                  placeholder=""
                  value={linkedMeeting}
                />
              </Form.Group>
            )
          }
        </Row>
      );
    }
  };

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
            Nueva reunion de {addType}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
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

            {renderLinkMeeting()}

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>
                  Miembros participantes en la reunion de {addType}
                </Form.Label>
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
              {modality.label === "En Linea" ? (
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
              ) : (
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
              )}
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
                    value={dayjs(meetingHour)}
                    defaultValue={dayjs(meetingHour)}
                  />
                </LocalizationProvider>
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
