import React from "react";
import { Badge, Table, Button } from "react-bootstrap";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { findMostFrequentChoice } from "../../councilAndCommitteeUtils";
export const Votings = ({ votingType }) => {
  
  const renderMeetingList = () => {
    if (!councilAndCommittieesData[votingType].votings.length) {
      return (
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Aún no se han registrado votaciones
        </p>
      );
    }

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
            {councilAndCommittieesData[votingType].votings.map(
              (vote, index) => (
                <tr key={index}>
                  <td>{vote.title}</td>
                  <td style={{textAlign: 'center'}}>
                    {vote.participants.length} /{" "}
                    {councilAndCommittieesData[votingType].members.length}
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
                    <Link to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/voatingDescription/type/${votingType}/id/${vote.id}`}
                    >
                      Ver
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
          variant="primary"
          size="sm"
          className=" mb-1"
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
