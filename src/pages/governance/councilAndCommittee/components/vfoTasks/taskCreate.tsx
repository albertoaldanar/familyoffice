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
import dayjs, { Dayjs } from "dayjs";
import { useParams } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import { formateDateForUI } from "../../../../administration/payments/paymentUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { formatMeeting, formatSignleMeeting } from "../../meetingUtils";

export default function TaskCreate(props) {
  const params = useParams();
  const navigate = useNavigate();

  const membersList = formatMember(
    councilAndCommittieesData.virtualFamilyOffice.members
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [taskStatus, setTaskStatus] = useState({
    label: '',
    value: '',
  });
  const [members, setMembers] = useState([]);
  const [deadLine, setDeadline] = useState<Dayjs | null>(dayjs(""))
  const meetingStatusOptions = [
    { value: "Sin comenzar", label: "Sin comenzar" },
    { value: "En curso", label: "En curso" },
    { value: "Finalizada", label: "Finalizada" },
  ];

  const renderDescription = () => {
    return (
      <div style={{marginTop: 40}}>
        <Row>
          <Form.Group
            as={Col}
            md="6"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Titulo de actividad</Form.Label>
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
            <Form.Label>Estatus de actividad</Form.Label>
            <Select
              options={meetingStatusOptions}
              classNamePrefix="Select2"
              className="multi-select"
              onChange={(value) => setTaskStatus(value)}
              placeholder=""
              value={taskStatus}
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
              Miembros responsables de actividad
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

        <Row style={{marginTop: 20}}>
          <Form.Group
            as={Col}
            md="10"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Descripción de actividad</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="numeric"
                placeholder=""
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

        <Row style={{ marginTop: 20 }}>
          <Form.Group
            as={Col}
            md="3"
            controlId="validationCustom01"
            className="form-group"
          >
            <Form.Label>Dia de entrega</Form.Label>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                format="DD/MM/YYYY"
                onChange={(value) => setDeadline(value)}
                value={dayjs(deadLine)}
                defaultValue={dayjs(deadLine)}
              />
            </LocalizationProvider>
          </Form.Group>
        </Row>
      </div>
    );
  };

  return (
    <Fragment>
      <Row>
        <div style={{ padding: 30, minHeight: 550 }}>
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
              className="fe fe-clipboard fs-13"
            ></i>{" "}
            Nuevo registro de actividad
          </Card.Title>

          {renderDescription()}
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
              style={{ position: "absolute", right: 25, bottom: 80 }}
              className="custom-button"
              type="submit"
            >
              Guardar
            </Button>
          </div>
        </div>
      </Row>
    </Fragment>
  );
}
