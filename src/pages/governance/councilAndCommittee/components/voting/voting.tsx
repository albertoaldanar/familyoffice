import React from "react";
import { Badge, Table, Button } from "react-bootstrap";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { findMostFrequentChoice } from "../../councilAndCommitteeUtils";

export const Votings = ({ data, votingType }) => {
  const renderMeetingList = () => {
    if (data.votings.length === 0) {
      return (
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Aún no se han registrado votaciones
        </p>
      );
    }
    console.log('data----', data.votings)

    return(
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Titulo</th>
              <th>Patricipantes</th>
              <th>Estatus</th>
              <th>Desición ganadora</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.votings.map(
              (vote, index) => (
                <tr key={index}>
                  <td>{vote.title}</td>
                  <td style={{textAlign: 'center'}}>
                    {vote.participants.filter(v=> v.choiceSelected).length} /{" "}
                    {vote.participants.length}
                  </td>
                  <td>
                    {vote.isVotingFinished ? (
                      <div style={{ marginTop: 2 }}>
                        <Badge
                          bg="success-transparent"
                          className={`me-2 my-1 Primary`}
                        >
                          Terminada
                        </Badge>
                      </div>
                    ) : (
                      <div style={{ marginTop: 2 }}>
                        <Badge
                          bg="primary-transparent"
                          className={`me-2 my-1 Primary`}
                        >
                          Activa
                        </Badge>
                      </div>
                    )}
                  </td>
                  <td>
                    {vote.isVotingFinished ? (
                      `${findMostFrequentChoice(vote.participants)}`
                    ) : (
                      '--'
                    )}
                  </td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/voatingDescription/type/${votingType}/id/${vote.id}/${data.id}`}
                    >
                          <i
                            className="fe fe-arrow-right text-black fs-15"
                          ></i>
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
      </div>
    )
  }

  return (
    <div>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          marginTop: 0,
          marginBottom: 30
        }}
      >
        <div></div>
        <Button
          style={{
            marginRight: 15,
            alignSelf: "flex-end",
            justifyContent: "flex-end",
          }}
          size="sm"
          className="custom-button"
        >
          {/*// @ts-ignore */}
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/voatingCreate/${votingType}`}
          >
            + Crear votaciones
          </Link>
        </Button>
      </div>

      {renderMeetingList()}

    </div>
  );
};
