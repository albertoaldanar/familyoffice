import React, { Fragment, useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Row,
  Form,
  InputGroup,
  Tab,
  Nav,
} from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import parse from "date-fns/parse";
import { useParams } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import { formateDateForUI } from "../../../../administration/payments/paymentUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { formatMeeting, formatSignleMeeting } from "../../meetingUtils";
import { Votings } from "../voting/voting";

export default function MeetingDescription(props) {
  const params = useParams();
  const navigate = useNavigate();

  if (!councilAndCommittieesData[params.type]) {
    return <NotFoundSearch />;
  }
  const meetingSelected = councilAndCommittieesData[params.type].meetings.find(
    (meet) => meet.id === Number(params.id)
  );

  if (!meetingSelected) {
    return <NotFoundSearch />;
  }

  const meetingDateFormatted = formateDateForUI(meetingSelected.date);
  const meetingTimeFormatted = formateDateForUI(meetingSelected.time);

  const membersList = formatMember(
    councilAndCommittieesData[params.type].members
  );

  const membersSelected = formatMember(meetingSelected.participants);

  const addType =
  params.type === "familyCouncil"
    ? "Consejo Familiar"
    : params.type === "investmentCommittee"
    ? "Comite de Inversión"
    : params.type === "virtualFamilyOffice"
    ? "Virtual Family Office"
    : null;
  const [platform, setPlatform] = useState("");
  const [title, setTitle] = useState(meetingSelected.title);
  const [address, setAddress] = useState(meetingSelected.location);
  const [isMeetingLinked, setIsMeetingLinked] = useState(
    meetingSelected.linkedPreviousMeeting.id !== null
  );
  const [meetUrl, setMeetUrl] = useState("");
  const [linkedMeetingInput, setLinkedMeeting] = useState(
    isMeetingLinked
      ? formatSignleMeeting(meetingSelected.linkedPreviousMeeting)
      : { label: "", value: "" }
  );

  console.log("linkedMeetingInput", linkedMeetingInput);
  const [meetingSubjects, setMeetingSubjects] = useState(
    meetingSelected.meetingSubjects || []
  );

  const [newSubject, setNewSubject] = useState("");
  const [callToAction, setCallToAction] = useState(
    meetingSelected.callToAction || []
  );
  const [newActionItem, setNewActionItem] = useState("");
  const [meetingStatus, setMeetingStatus] = useState({
    label: meetingSelected.status,
    value: meetingSelected.status,
  });
  const [members, setMembers] = useState(membersSelected);
  const [meetingDate, setMeetingDate] = useState<Dayjs | null>(
    dayjs(meetingDateFormatted)
  );
  const [meetingHour, setMeetingHour] = useState(
    parse(meetingSelected.date, "hh:mm a", new Date())
  );

  const [modality, setModality] = useState({
    value: "Presencial",
    label: "Presencial",
  });

  const meetingStatusOptions = [
    { value: "Sin comenzar", label: "Sin comenzar" },
    { value: "En curso", label: "En curso" },
    { value: "Finalizada", label: "Finalizada" },
  ];

  const OptionsModality = [
    { value: "En linea", label: "En Linea" },
    { value: "Presencial", label: "Presencial" },
  ];

  const linkedMeetingData =
    linkedMeetingInput.value !== ""
      ? councilAndCommittieesData[params.type].meetings.find(
          (meet) => meet.id === linkedMeetingInput.value
        )
      : null;

  const isLinkedMeetingDefault =
    linkedMeetingData === null
      ? false
      : meetingSelected.linkedPreviousMeeting.id === linkedMeetingData.id;

  const [reviewOfMinutes, seReviewOfMinutes] = useState(
    linkedMeetingInput.value !== ""
      ? isLinkedMeetingDefault
        ? meetingSelected.reviewOfMinutes
        : linkedMeetingData.callToAction
      : []
  );

  useEffect(() => {
    if (isMeetingLinked) {
      if (isLinkedMeetingDefault) {
        seReviewOfMinutes(meetingSelected.reviewOfMinutes);
      } else {
        seReviewOfMinutes(linkedMeetingData.callToAction);
      }
    }
  }, [linkedMeetingInput]);

  const handleAddSubject = () => {
    if (newSubject.trim()) {
      setMeetingSubjects([...meetingSubjects, newSubject]);
      setNewSubject("");
    }
  };

  const handleRemoveSubject = (index) => {
    setMeetingSubjects(meetingSubjects.filter((_, i) => i !== index));
  };

  const handleAddActionItem = () => {
    if (newActionItem.trim()) {
      setCallToAction([
        ...callToAction,
        { title: newActionItem, result: null },
      ]);
      setNewActionItem("");
    }
  };

  const handleActaStatusChange = (index, result) => {
    const updatedActas = reviewOfMinutes.map((acta, i) =>
      i === index ? { ...acta, result } : acta
    );
    seReviewOfMinutes(updatedActas);
  };

  const handleRemoveActionItem = (index) => {
    setCallToAction(callToAction.filter((_, i) => i !== index));
  };
  
  const handleChangeOfLinkedMeeting = (value) => {
    setLinkedMeeting(value);
  };

  // const handleChangeOfLinkedMeeting = (value) => {
  //   setLinkedMeeting(value);
  //   if (isLinkedMeetingDefault) {
  //     seReviewOfMinutes(meetingSelected.reviewOfMinutes);
  //   } else {
  //     seReviewOfMinutes(linkedMeetingData.callToAction);
  //   }
  // };

  const renderLinkMeeting = () => {
    if (
      councilAndCommittieesData[params.type].meetings.length > 0 &&
      Number(meetingSelected.meetingNumber) !== 1
    ) {
      const meetingsList = formatMeeting(
        councilAndCommittieesData[params.type].meetings.filter(
          (meet) =>
            Number(meet.meetingNumber) < Number(meetingSelected.meetingNumber)
        )
      );

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

          {isMeetingLinked && (
            <Form.Group
              as={Col}
              md="8"
              controlId="validationCustom01"
              className="form-group"
            >
              <Form.Label>Continuación de reunión:</Form.Label>
              <Select
                options={meetingsList}
                classNamePrefix="Select2"
                className="multi-select"
                onChange={(value) => handleChangeOfLinkedMeeting(value)}
                placeholder=""
                value={linkedMeetingInput}
              />
            </Form.Group>
          )}
        </Row>
      );
    }
  };

  const renderRevisionActas = () => {
    return (
      <>
        {(linkedMeetingInput.value !== "" && isMeetingLinked) && (
          <Row style={{ marginTop: 20 }}>
            <Form.Group as={Col} md="10" className="form-group">
              <Form.Label>Revisión de actas</Form.Label>
              {reviewOfMinutes.length > 0 ? (
                <ul style={{ marginLeft: 20 }}>
                  {reviewOfMinutes.map((acta, index) => (
                    <li
                      key={index}
                      style={{ fontSize: 13, color: "gray", marginBottom: 20 }}
                    >
                      {index + 1}. {acta.title}
                      <div style={{ marginTop: 5 }}>
                        <Form.Check
                          type="radio"
                          label="Cumplido"
                          name={`actaStatus${index}`}
                          id={`actaCumplido${index}`}
                          checked={acta.result === "Cumplido"}
                          onChange={() =>
                            handleActaStatusChange(index, "Cumplido")
                          }
                          style={{ marginLeft: 15 }}
                        />
                        <Form.Check
                          type="radio"
                          label="No se cumplió"
                          name={`actaStatus${index}`}
                          id={`actaNoCumplio${index}`}
                          checked={acta.result === "No se cumplió"}
                          onChange={() =>
                            handleActaStatusChange(index, "No se cumplió")
                          }
                          style={{ marginLeft: 15 }}
                        />
                        <Form.Check
                          type="radio"
                          label="No se cumplió, posponer para proxima reunion"
                          name={`actaStatus${index}`}
                          id={`actaPosponer${index}`}
                          checked={acta.result === "No se cumplió, posponer"}
                          onChange={() =>
                            handleActaStatusChange(
                              index,
                              "No se cumplió, posponer"
                            )
                          }
                          style={{ marginLeft: 15 }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={{ color: "gray", fontSize: 13 }}>
                  No hay actas que revisar para esta junta{" "}
                </p>
              )}
            </Form.Group>
          </Row>
        )}
      </>
    );
  };

  const renderDescription = () => {
    return (
      <>
        <Row>
          <Form.Group
            as={Col}
            md="6"
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

          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Estatus de junta</Form.Label>
            <Select
              options={meetingStatusOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setMeetingStatus(value)}
              placeholder=""
              value={meetingStatus}
            />
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="6"
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
          <Form.Group
            as={Col}
            md="4"
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
                value={meetingHour}
                defaultValue={meetingHour}
              />
            </LocalizationProvider>
          </Form.Group>
        </Row>
        {renderLinkMeeting()}
        <Row style={{ marginTop: 20 }}>
          <Form.Group as={Col} md="10" className="form-group">
            <Form.Label>Temas vistos en junta</Form.Label>
            <ul style={{ marginLeft: 20 }}>
              {meetingSubjects.map((subject, index) => (
                <li style={{ fontSize: 13, color: "gray" }} key={index}>
                  {index + 1}. {subject}
                  <Button
                    variant="link"
                    style={{
                      fontSize: 11,
                      marginBottom: 8,
                      color: "black",
                    }}
                    onClick={() => handleRemoveSubject(index)}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
            <InputGroup style={{ marginTop: 13 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
              />
              <Button
                style={{ fontSize: 12 }}
                variant="default"
                onClick={handleAddSubject}
              >
                + Agregar
              </Button>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Form.Group as={Col} md="10" className="form-group">
            <Form.Label>Plan de acción</Form.Label>
            <ul style={{ marginLeft: 20 }}>
              {callToAction.map((item, index) => (
                <li style={{ fontSize: 13, color: "gray" }} key={index}>
                  {index + 1}. {item.title}
                  <Button
                    variant="link"
                    style={{
                      fontSize: 11,
                      marginBottom: 8,
                      color: "black",
                    }}
                    onClick={() => handleRemoveActionItem(index)}
                  >
                    X
                  </Button>
                </li>
              ))}
            </ul>
            <InputGroup style={{ marginTop: 13 }}>
              <Form.Control
                type="text"
                placeholder=""
                value={newActionItem}
                onChange={(e) => setNewActionItem(e.target.value)}
              />
              <Button
                style={{ fontSize: 12 }}
                variant="default"
                onClick={handleAddActionItem}
              >
                + Agregar
              </Button>
            </InputGroup>
          </Form.Group>
        </Row>

        {renderRevisionActas()}
      </>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20, minHeight: 550 }}>
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
            <i
              style={{ marginRight: 10, marginTop: 15 }}
              className="fe fe-calendar fs-13"
            ></i>{" "}
            Reunion # {meetingSelected.meetingNumber} de {addType} -{" "}
            {meetingSelected.title}
          </Card.Title>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <div
              style={{
                paddingBottom: 0,
                paddingLeft: 10,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              <div className="tabs-menu1">
                <Nav as="ul" className="nav panel-tabs">
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="first" href="#">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-file-text text-black fs-13"
                      ></i>
                      Información de reunión
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="second">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-thumbs-up text-black fs-13"
                      ></i>
                      Votaciones
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item as="li" style={{ marginRight: 10 }}>
                    <Nav.Link eventKey="third">
                      <i
                        style={{ marginRight: 9 }}
                        className="fe fe-folder text-black fs-13"
                      ></i>
                      Documentos de reunión
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </div>
            <Tab.Content className="panel-body">
              <Tab.Pane eventKey="first">{renderDescription()}</Tab.Pane>
              <Tab.Pane eventKey="second">
                <Votings
                  data={meetingSelected}
                  votingType={
                    addType === "Comite de Inversión"
                    ? "investmentCommittee"
                    : addType === "Consejo Familiar"
                    ? "familyCouncil"
                    : addType === "Virtual Family Office"
                    ? "virtualFamilyOffice"
                    : null
                  }
                />
              </Tab.Pane>

              <Tab.Pane eventKey="third">{}</Tab.Pane>
            </Tab.Content>
          </Tab.Container>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <div></div>
            <Button
              style={{ position: "absolute", right: 25, bottom: 20 }}
              variant="primary"
              className=" mb-1"
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </Card>
      </Row>
    </Fragment>
  );
}
