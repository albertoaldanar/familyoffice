import React from "react";
import { Badge, Table, Button } from "react-bootstrap";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { hasDateTimePassed } from "../../councilAndCommitteeUtils";

export const Meetings = ({ meetingType }) => {
  
  const renderMeetingList = () => {
    if (!councilAndCommittieesData[meetingType].meetings.length) {
      return (
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Aún no se han registrado reuniones
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
              <th>Dia</th>
              <th>Estatus</th>
              <th>Modalidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {councilAndCommittieesData[meetingType].meetings.map(
              (meeting, index) => (
                <tr key={index}>
                  <td>{meeting.title}</td>
                  <td>
                    {meeting.participants.length} /{" "}
                    {councilAndCommittieesData[meetingType].members.length}
                  </td>
                  <td>{meeting.date}</td>
                  <td>
                    {hasDateTimePassed(meeting.date, meeting.time) ? (
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
                          Sin comenzar
                        </Badge>
                      </div>
                    )}
                  </td>
                  <td>{meeting.modality}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/meetingDescription/type/${meetingType}/id/${meeting.id}`}
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
          marginTop: -10,
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
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/councilAndCommittee/meetingCreate/${meetingType}`}
          >
            + Añadir reunion
          </Link>
        </Button>
      </div>

      {renderMeetingList()}

    </div>
  );
};
