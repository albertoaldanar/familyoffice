import React, { Fragment, useState } from "react";
import { Button, Card, Col, Row, Form, InputGroup } from "react-bootstrap";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import { Link } from "react-router-dom";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";

export default function VotingCreate(props) {
  const params = useParams();
  const addType =
    params.type === "familyCouncil"
      ? "Consejo Familiar"
      : params.type === "investmentCommittee"
      ? "Comite de Inversión"
      : null;
  const [hideVotes, setHideVotes] = useState(false);
  const [title, setTitle] = useState("");
  const [members, setMembers] = useState([]);
  const [customOptions, setCustomOptions] = useState([]);
  const [newCustomOption, setNewCustomOption] = useState("");
  const [meetingDate, setMeetingDate] = useState<Dayjs | null>(dayjs(""));
  const [modality, setModality] = useState({
    value: "",
    label: "",
  });

  if (!councilAndCommittieesData[params.type]) {
    return <NotFoundSearch />;
  }

  const membersList = formatMember(
    councilAndCommittieesData[params.type].members
  );

  const OptionsModality = [
    { value: "SI - NO", label: "SI - NO" },
    { value: "A FAVOR - EN CONTRA", label: "A FAVOR - EN CONTRA" },
    { value: "SI - NO - VOTO NULO", label: "SI - NO - VOTO NULO" },
    { value: "Opciones personalizadas", label: "Opciones personalizadas" },
  ];

  const addCustomOption = (newOption) => {
    if(newOption.length){
      setCustomOptions((prevOptions) => [...prevOptions, newOption]);
      setNewCustomOption("");
    }
  };

  const deleteCustomOption = (optionToDelete) => {
    setCustomOptions((prevOptions) =>
      prevOptions.filter((option) => option !== optionToDelete)
    );
  };

  const renderCustomOptions = () => {
    return (
      <>
        <div style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
          {customOptions.map((option, index) => (
            <div
              style={{ display: "flex", flexDirection: "row", marginRight: 24 }}
            >
              <p style={{ color: "gray", fontSize: 12 }} key={index}>
                {" "}
                {index + 1}) {option}
              </p>
              <p
                onClick={() => deleteCustomOption(option)}
                style={{
                  fontSize: 12,
                  marginLeft: 4,
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                key={index}
              >
                X
              </p>
            </div>
          ))}
        </div>
        <Row>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label style={{ fontSize: 12 }}>
              Añade una opcion personalizada
            </Form.Label>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <InputGroup hasValidation>
                <Form.Control
                  type="numeric"
                  placeholder=""
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(text) => setNewCustomOption(text.target.value)}
                  value={newCustomOption}
                />
                <Form.Control.Feedback type="invalid">
                  Favor de añadir el monto del pago
                </Form.Control.Feedback>
              </InputGroup>
            </div>
            <p
              onClick={() => addCustomOption(newCustomOption)}
              style={{
                cursor: "pointer",
                marginTop: 5,
                fontSize: 12,
                color: "#5488d2",
              }}
            >
              + Añadir
            </p>
          </Form.Group>
        </Row>
      </>
    );
  };

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <Card.Title style={{ marginBottom: 10 }}>
            Nueva votación de {addType}
          </Card.Title>
          <Form noValidate validated={false} onSubmit={() => {}}>
            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Titulo de votación</Form.Label>
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
                <Form.Label>
                  Miembros participantes en la votación de {addType}
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

            <Row style={{ marginTop: 10 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom09"
                className="form-group"
              >
                <Form.Label>Descripción o motivo de la votación</Form.Label>
                <Form.Control
                  as="textarea"
                  className="textArea-meeting"
                  style={{ minHeight: 200 }}
                  id="validationCustom09"
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group className="mb-3 form-group">
                <Form.Check
                  required
                  checked={hideVotes}
                  onChange={(e) => setHideVotes(e.target.checked)}
                  label="No mostrar votos de otros participantes hasta finalizar"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <p
                style={{
                  color: "gray",
                  fontStyle: "italic",
                  marginTop: -15,
                  marginLeft: 20,
                  fontSize: 13,
                }}
              >
                Esta opción mantendra las votos de otros participantes anonimos,
                hasta que la votación se cierre.
              </p>
            </Row>

            <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="8"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Opciones de resultados</Form.Label>
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

            {modality.label === "Opciones personalizadas" &&
              renderCustomOptions()}

            {/* <Row style={{ marginTop: 20 }}>
              <Form.Group
                as={Col}
                md="3"
                controlId="validationCustom01"
                className="form-group"
              >
                <Form.Label>Dia de finalización</Form.Label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(value) => setMeetingDate(value)}
                    value={dayjs(meetingDate)}
                    defaultValue={dayjs(meetingDate)}
                  />
                </LocalizationProvider>
              </Form.Group>
            </Row> */}

            <Row style={{ marginTop: 20 }}></Row>
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
