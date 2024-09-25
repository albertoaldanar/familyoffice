import React, { Fragment, useState } from "react";
import {
  Button,
  Badge,
  Card,
  Col,
  Row,
  Form,
  ProgressBar,
  InputGroup,
} from "react-bootstrap";
import dayjs, { Dayjs } from "dayjs";
import Swal from "sweetalert2";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  councilAndCommittieesData,
  currentUser,
} from "../../councilAndCommitteeData";
import { formatMember } from "../../councilAndCommitteeUtils";
import NotFoundSearch from "../../../../shared/notFoundSearch";
import { formateDateForUI } from "../../../../administration/payments/paymentUtils";
import {
  calculateVotePercentages,
  calculateMostVoted,
  findMostFrequentChoice,
} from "../../councilAndCommitteeUtils";

export default function VotingDescription(props) {
  const navigate = useNavigate();
  const params = useParams();

  if (!councilAndCommittieesData[params.type]) {
    return <NotFoundSearch />;
  }
  const votingSelected = councilAndCommittieesData[params.type].votings.find(
    (votes) => votes.id === Number(params.id)
  );

  if (!votingSelected) {
    return <NotFoundSearch />;
  }

  const isCurrentUserVotingCreator =
    votingSelected.createdBy.name === currentUser.name;

  const currentUserStatus =
    votingSelected.createdBy.name === currentUser.name
      ? "Creator"
      : votingSelected.participants.find(
          (votes) => votes.name === currentUser.name
        )
      ? "Voter"
      : "Visitor";
  
  console.log('currentUserStatus', currentUserStatus)

  const currentUserVote = currentUserStatus!== 'Visitor' ? votingSelected.participants.find(
    (votes) => votes.name === currentUser.name
  ).choiceSelected: null;

  const [hideVotes, setHideVotes] = useState(false);
  const [title, setTitle] = useState(votingSelected.title);
  const [members, setMembers] = useState([]);
  const [voteSelected, setVoteSelected] = useState(currentUserVote);
  const [description, setDescription] = useState(votingSelected.description);

  if (!councilAndCommittieesData[params.type]) {
    return <NotFoundSearch />;
  }

  const lockIcon = (
    <i
      style={{
        cursor: "pointer",
        marginTop: 5,
        fontSize: 12,
      }}
      className="fa fa-lock"
      data-bs-toggle="tooltip"
      title="fa fa-lock"
    ></i>
  );

  const renderVotesResults = () => {
    return (
      <>
        <div>
          {votingSelected.participants.map((vote, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                width: 350,
                justifyContent: "space-between",
                borderBottomColor: "#dcdcdc",
                borderBottomWidth: 0.5,
                paddingTop: 10,
                borderBottomStyle: "solid",
              }}
            >
              <p style={{ color: "gray", fontSize: 12 }} key={index}>
                {" "}
                {index + 1}){" "}
                {currentUser.name === vote.name
                  ? `${vote.name} (Tu)`
                  : vote.name}
              </p>
              <p
                style={{
                  fontSize: 12,
                  marginLeft: 4,
                  fontWeight: "bold",
                }}
                key={index}
              >
                {vote.choiceSelected.length
                  ? !votingSelected.hiddenVotes ||
                    votingSelected.isVotingFinished
                    ? vote.choiceSelected
                    : lockIcon
                  : "--"}
              </p>
            </div>
          ))}
        </div>
      </>
    );
  };

  const renderResultStats = () => {
    const votesPercentages = calculateVotePercentages(
      votingSelected.participants
    );
    return (
      <div style={{ width: 400 }}>
        {votesPercentages.map((vote) => (
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <p style={{ color: "gray", fontSize: 12 }}>{vote.response}</p>
              <p style={{ color: "gray", fontSize: 12 }}>
                {vote.percentage.toFixed(0)}%
              </p>
            </div>

            <ProgressBar
              style={{ height: 7, marginTop: -10 }}
              variant="primary"
              now={vote.percentage}
              className="progress-md mb-3"
            />
          </div>
        ))}
      </div>
    );
  };

  const renderMyVoteOptions = () => {
    return (
      <Form.Group className="form-group form-elements">
        <div className="custom-controls-stacked">
          {votingSelected.options.map((option, index) => (
            <Form.Check
              type="radio"
              name="example-radios"
              label={option}
              disabled={votingSelected.isVotingFinished}
              value={option}
              checked={voteSelected === option}
              onChange={(event) => setVoteSelected(event.target.value)}
            />
          ))}
        </div>
      </Form.Group>
    );
  };

  const renderVoatingActions = () => {
    if (isCurrentUserVotingCreator) {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
          }}
        >
          {votingSelected.isVotingFinished ? (
            <div></div>
          ) : (
            <Button
              onClick={Warningalert}
              variant="danger"
              className=" mb-1"
              type="submit"
            >
              Finalizar votación
            </Button>
          )}

          {!votingSelected.isVotingFinished ? (
            <Button variant="primary" className=" mb-1" type="submit">
              Guardar
            </Button>
          ) : (
            <Button variant="default" className=" mb-1" type="submit">
              Reactivar votación
            </Button>
          )}
        </div>
      );
    }

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <div></div>

        {(votingSelected.isVotingFinished || currentUserStatus === 'Visitor') ? (
          <Button variant="default" className=" mb-1" type="submit">
            Vover
          </Button>
        ) : (
          <Button variant="primary" className=" mb-1" type="submit">
            Guardar
          </Button>
        )}
      </div>
    );
  };

  const renderVotingStatus = () => {
    return (
      <div>
        {votingSelected.isVotingFinished ? (
          <div style={{ marginTop: -5, marginLeft: 15 }}>
            <Badge bg="success-transparent" className={`me-2 my-1 Primary`}>
              Terminada
            </Badge>
          </div>
        ) : (
          <div style={{ marginTop: -5, marginLeft: 15 }}>
            <Badge bg="primary-transparent" className={`me-2 my-1 Primary`}>
              Activa
            </Badge>
          </div>
        )}
      </div>
    );
  };

  function Warningalert() {
    const notVotedMembers = votingSelected.participants.filter(
      (member) => member.choiceSelected === ""
    );

    if (notVotedMembers.length > 0) {
      Swal.fire({
        title: "Estas seguro?",
        text: "Aún faltan participantes por votar, seguro que quiers finalizar la votación?",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        icon: "warning",
        allowOutsideClick: false,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Si, finalizar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            confirmButtonColor: "#3085d6",
            text: "La votación se ha finalizado",
          });
        }
      });
    } else if (calculateMostVoted(votingSelected.participants) === "TIE") {
      Swal.fire({
        title: "No se puede finalizar la votación",
        text: "Hay un empate en votos, reunete con los participantes para dictar un desempate y finalizar la votación",
        icon: "warning",
        allowOutsideClick: false,
        showCancelButton: false,
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Entendido",
      });
    }
  }

  console.log(
    "mmmm",
    !votingSelected.hiddenVotes || votingSelected.isVotingFinished
  );

  return (
    <Fragment>
      <Row>
        <Card style={{ padding: 30, marginTop: 20 }}>
          <div style={{ display: "flex", flexDirection: "row" }}>
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
              Votación - {votingSelected.title}
            </Card.Title>
            {renderVotingStatus()}
          </div>

          <Form noValidate validated={false} onSubmit={() => {}}>
            <p
              style={{
                height: 7,
                justifyContent: "center",
                alignSelf: "center",
                color: "gray",
                fontSize: 12,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              Esta votacion fue creada por {votingSelected.createdBy.name} y
              solo este usuario puede editar información y condiciones de la
              votación
            </p>
            <Row style={{ marginTop: 30 }}>
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
                    disabled={
                      !isCurrentUserVotingCreator ||
                      votingSelected.isVotingFinished
                    }
                    onChange={(text) => setTitle(text.target.value)}
                    value={title}
                  />
                  <Form.Control.Feedback type="invalid">
                    Favor de añadir el monto del pago
                  </Form.Control.Feedback>
                </InputGroup>
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
                  onChange={(text) => setDescription(text.target.value)}
                  value={description}
                  disabled={
                    !isCurrentUserVotingCreator ||
                    votingSelected.isVotingFinished
                  }
                  style={{ minHeight: 200 }}
                  id="validationCustom09"
                ></Form.Control>
              </Form.Group>
            </Row>

            <Row style={{ marginTop: 10, marginBottom: 10 }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  overflowX: "scroll",
                }}
              >
                <div>
                  <Form.Label>Votos de participantes</Form.Label>
                  {renderVotesResults()}
                </div>
                {
                  !(currentUserStatus === 'Visitor') && (
                    <div style={{ marginLeft: 120 }}>
                      <Form.Label>Mi voto</Form.Label>
                      <p
                        style={{
                          height: 7,
                          justifyContent: "center",
                          alignSelf: "center",
                          color: "gray",
                          fontSize: 12,
                          marginBottom: 20,
                          marginTop: -7,
                          fontStyle: "italic",
                        }}
                      >
                        Asegurate de hacer click en guardar para registrar o cambiar
                        tu voto
                      </p>
                      {renderMyVoteOptions()}
                    </div>
                  )
                }

              </div>
            </Row>
            {!votingSelected.hiddenVotes || votingSelected.isVotingFinished ? (
              <Row style={{ marginTop: 40, marginBottom: 10 }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    overflowX: "scroll",
                  }}
                >
                  <div>
                    <Form.Label>
                      Resultados votaciones{" "}
                      {!votingSelected.isVotingFinished
                        ? "hasta el momento"
                        : ""}
                    </Form.Label>
                    {renderResultStats()}
                  </div>
                  {votingSelected.isVotingFinished && (
                    <div style={{ marginLeft: 70 }}>
                      <Form.Label>Resultado ganador</Form.Label>

                      <p
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          fontStyle: "italic",
                        }}
                      >
                        {findMostFrequentChoice(votingSelected.participants)}
                      </p>
                    </div>
                  )}
                </div>
              </Row>
            ) : null}
          </Form>
          {renderVoatingActions()}
        </Card>
      </Row>
    </Fragment>
  );
}
