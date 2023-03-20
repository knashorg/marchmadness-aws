// MyBracket.js

// React
import React from "react";

// UI Component
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Image } from "@aws-amplify/ui-react";
import { Bracket } from "../ui-components";

// Image
import fflogo from "../images/frozen-four-logo.png";
import win from "../images/win.png";
import loss from "../images/loss.png";
import und from "../images/undecided.png";

const MyBracket = () => {
  const [modalShow1, setModalShow1] = React.useState(false);
  const [modalShow2, setModalShow2] = React.useState(false);
  const [modalShow3, setModalShow3] = React.useState(false);
  const [modalShow4, setModalShow4] = React.useState(false);
  const [modalShow5, setModalShow5] = React.useState(false);
  const [modalShow6, setModalShow6] = React.useState(false);
  const [modalShow7, setModalShow7] = React.useState(false);
  const [modalShow8, setModalShow8] = React.useState(false);
  const [modalShow9, setModalShow9] = React.useState(false);
  const [modalShow10, setModalShow10] = React.useState(false);
  const [modalShow11, setModalShow11] = React.useState(false);
  const [modalShow12, setModalShow12] = React.useState(false);
  const [modalShow13, setModalShow13] = React.useState(false);
  const [modalShow14, setModalShow14] = React.useState(false);
  const [position1, setPositionWL1] = React.useState({ src: und });
  const [position2, setPositionWL2] = React.useState({ src: und });
  const [position3, setPositionWL3] = React.useState({ src: und });
  const [position4, setPositionWL4] = React.useState({ src: und });
  const [position5, setPositionWL5] = React.useState({ src: und });
  const [position6, setPositionWL6] = React.useState({ src: und });
  const [position7, setPositionWL7] = React.useState({ src: und });
  const [position8, setPositionWL8] = React.useState({ src: und });
  const [position9, setPositionWL9] = React.useState({ src: und });
  const [position10, setPositionWL10] = React.useState({ src: und });
  const [position11, setPositionWL11] = React.useState({ src: und });
  const [position12, setPositionWL12] = React.useState({ src: und });
  const [position13, setPositionWL13] = React.useState({ src: und });
  const [position14, setPositionWL14] = React.useState({ src: und });

  function VerticallyCenteredModal11(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Team 11
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Record</h4>
          <p>
            About this team.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <div>
      <Bracket
        width="100%"
        backgroundColor={"rgb(148, 198, 227)"}
        logo={<Image src={fflogo} />}
        pos1wl={position1.src}
        pos2wl={position2.src}
        pos3wl={position3.src}
        pos4wl={position4.src}
        pos5wl={position5.src}
        pos6wl={position6.src}
        pos7wl={position7.src}
        pos8wl={position8.src}
        pos9wl={position9.src}
        pos10wl={position10.src}
        pos11wl={position11.src}
        pos12wl={position12.src}
        pos13wl={position13.src}
        pos14wl={position14.src}
        overrides={{
            "TeamButton137902129": {
                onClick: () => {
                    setModalShow11(true)
                }
            },
            "Circle 137902125": {
            onClick: () => {
                let prevState11 = {...position11}
                let prevState12 = {...position12}
                prevState11.src = win
                prevState12.src = loss
              setPositionWL11(prevState11);
              setPositionWL12(prevState12);
            },
          },
        }}
      />
      <VerticallyCenteredModal11
        show={modalShow11}
        onHide={() => setModalShow11(false)}
      />
    </div>
  );
};

export default MyBracket;
