import React from "react";
//@ts-ignore
import doc from "../../../../assets/images/familyOffice/doc.png";
import { Dropdown } from 'react-bootstrap';

interface FileViewProps {
  fileName: string;
  title: string;
}

const FileView: React.FC<FileViewProps> = ({ fileName }) => {
  return (
    <div style={{ borderColor: "#f5f5f5", borderWidth: 2 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "10%",
          marginTop: 25,
        }}
      >
        {/* <p
          style={{
            cursor: "pointer",
            textDecoration: "underline",
            color: "#5488d2",
          }}
        >
          {fileName}
        </p> */}

        <img src={doc} alt={fileName} style={{ width: 50, height: 40 }} />
        <div >
          <Dropdown className="float-end ms-auto">
            <Dropdown.Toggle
              as="a"
              variant="light"
              className="no-caret option-dots text-dark"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i style={{fontWeight: 'bold', marginLeft: -5, marginTop: -10}} className="fe fe-more-horizontal text-dark"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu className="dropdown-menu dropdown-menu-start folder-options">
              <Dropdown.Item className="dropdown-item" href="#">
                <i className="fe fe-edit me-2"></i>
                Editar
              </Dropdown.Item>
              <Dropdown.Item className="dropdown-item" href="#">
                <i className="fe fe-eye me-2"></i> Ver
              </Dropdown.Item>

              <Dropdown.Item className="dropdown-item" href="#">
                <i className="fe fe-download me-2"></i>
                Descargar
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

      </div>
    </div>
  );
};

export default FileView;
