import React from "react";
import { Badge, Table, Button } from "react-bootstrap";
import "reactflow/dist/style.css";
import { Link } from "react-router-dom";
import { councilAndCommittieesData } from "../../councilAndCommitteeData";
import { hasDateTimePassed } from "../../councilAndCommitteeUtils";

export const TaskList = () => {

  const renderTaskList = () => {
    if (!councilAndCommittieesData.virtualFamilyOffice.tasks.length) {
      return (
        <p style={{ textAlign: "center", marginTop: 20 }}>
          Aún no se han registrado actividades para el equipo de VF 
        </p>
      );
    }

    function addEllipsis(str: string): string {
      if (str.length > 20) {
        return str.substring(0, 60) + "...";
      } else {
        return str;
      }
    }

    return(
      <div className="table-responsive" style={{ marginTop: 15 }}>
        <Table className="table border text-nowrap text-md-nowrap mb-0">
          <thead className="bg-light">
            <tr>
              <th>Titulo</th>
              <th>Estatus</th>
              <th>Miembro VFO</th>
              <th>Fecha de creación</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {councilAndCommittieesData.virtualFamilyOffice.tasks.map(
              (task, index) => (
                <tr key={index}>
                  <td>{addEllipsis(task.title)}</td>
                  <td>
                    <div style={{ marginTop: 2 }}>
                      {task.status === 'Finalizada' ? (
                        <Badge bg="success-transparent" className={`me-2 my-1 Primary`}>
                          Finalizada
                        </Badge>
                      ) : task.status === 'En curso' ? (
                        <Badge bg="primary-transparent" className={`me-2 my-1 Primary`}>
                          En curso
                        </Badge>
                      ) : (
                        <Badge bg="info-transparent" className={`me-2 my-1 Primary`}>
                          Sin comenzar
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td>{task.userAsigned.name}</td>
                  <td>{task.createdDate}</td>
                  <td
                    style={{
                      cursor: "pointer",
                      textDecoration: "underline",
                      color: "#5488d2",
                    }}
                  >
                    {/*// @ts-ignore */}
                    <Link to={`${import.meta.env.BASE_URL}governance/virtualFamilyOffice/taskDescription/${task.id}`}
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
          <Link style={{ color: "white" }} to={`${import.meta.env.BASE_URL}governance/virtualFamilyOffice/taskCreate`}
          >
            + Añadir nueva actividad
          </Link>
        </Button>
      </div>

      {renderTaskList()}
    </div>
  );
};
