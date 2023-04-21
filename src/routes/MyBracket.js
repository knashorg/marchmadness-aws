// MyBracket.js

// React
import React from "react";

//Amplify
import { Auth, API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

// UI Component
import { Image } from "@aws-amplify/ui-react";
import { FFBracket } from "../BracketComponent";
import {
  VerticallyCenteredModal1,
  VerticallyCenteredModal2,
  VerticallyCenteredModal3,
  VerticallyCenteredModal4,
  VerticallyCenteredModal5,
  VerticallyCenteredModal6,
  VerticallyCenteredModal7,
  VerticallyCenteredModal8,
  VerticallyCenteredModal9,
  VerticallyCenteredModal10,
  VerticallyCenteredModal11,
  VerticallyCenteredModal12,
  VerticallyCenteredModal13,
  VerticallyCenteredModal14,
  VerticallyCenteredModal15,
  VerticallyCenteredModal16,
} from "../Modals";

// Image
import fflogo from "../images/frozen-four-logo.png";
import win from "../images/win.png";
import loss from "../images/loss.png";
import und from "../images/undecided.png";
import bonstonuimg from "../images/boston-u.png";
import canisiusimg from "../images/canisius.png";
import colgateimg from "../images/colgate.png";
import cornellimg from "../images/cornell.png";
import denverimg from "../images/denver.png";
import harvardimg from "../images/harvard.png";
import merrimackimg from "../images/merrimack.png";
import michigantechimg from "../images/michigan-tech.png";
import michiganimg from "../images/michigan.png";
import minnstmankatoimg from "../images/minn-st-mankato.png";
import minnesotaimg from "../images/minnesota.png";
import ohiostateimg from "../images/ohio-st.png";
import pennstimg from "../images/penn-st.png";
import quinnpiacimg from "../images/quinnipiac.png";
import stcloudstimg from "../images/st-cloud-st.png";
import westernmichimg from "../images/western-mich.png";

const MyBracket = () => {
  const [user, setUser] = React.useState([]);

  async function fetchAccountData() {
    function getUser() {
      return Auth.currentAuthenticatedUser()
        .then((userData) => userData)
        .catch(() => console.log("Not signed in"));
    }
    getUser().then((userData) => setUser(userData));
  }

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
  const [modalShow15, setModalShow15] = React.useState(false);
  const [modalShow16, setModalShow16] = React.useState(false);

  const initialPositionState = {
    src: und,
    displayname: null,
    team: null,
    logo: null,
    modal: null,
  };

  const [position1, setPositionWL1] = React.useState(initialPositionState);
  const [position2, setPositionWL2] = React.useState(initialPositionState);
  const [position3, setPositionWL3] = React.useState(initialPositionState);
  const [position4, setPositionWL4] = React.useState(initialPositionState);
  const [position5, setPositionWL5] = React.useState(initialPositionState);
  const [position6, setPositionWL6] = React.useState(initialPositionState);
  const [position7, setPositionWL7] = React.useState(initialPositionState);
  const [position8, setPositionWL8] = React.useState(initialPositionState);
  const [position9, setPositionWL9] = React.useState(initialPositionState);
  const [position10, setPositionWL10] = React.useState(initialPositionState);
  const [position11, setPositionWL11] = React.useState(initialPositionState);
  const [position12, setPositionWL12] = React.useState(initialPositionState);
  const [position13, setPositionWL13] = React.useState(initialPositionState);
  const [position14, setPositionWL14] = React.useState(initialPositionState);
  const [position15, setPositionWL15] = React.useState(initialPositionState);
  const [position16, setPositionWL16] = React.useState(initialPositionState);
  const [position17, setPositionWL17] = React.useState(initialPositionState);
  const [position18, setPositionWL18] = React.useState(initialPositionState);
  const [position19, setPositionWL19] = React.useState(initialPositionState);
  const [position20, setPositionWL20] = React.useState(initialPositionState);
  const [position21, setPositionWL21] = React.useState(initialPositionState);
  const [position22, setPositionWL22] = React.useState(initialPositionState);
  const [position23, setPositionWL23] = React.useState(initialPositionState);
  const [position24, setPositionWL24] = React.useState(initialPositionState);
  const [position25, setPositionWL25] = React.useState(initialPositionState);
  const [position26, setPositionWL26] = React.useState(initialPositionState);
  const [position27, setPositionWL27] = React.useState(initialPositionState);
  const [position28, setPositionWL28] = React.useState(initialPositionState);
  const [position29, setPositionWL29] = React.useState(initialPositionState);
  const [position30, setPositionWL30] = React.useState(initialPositionState);

  const [teams, setTeams] = React.useState([]);

  const [champText, setChampText] = React.useState("CHAMPION");

  const [JSONData, setJSONData] = React.useState({
    pos1: position1,
    pos2: position2,
    pos3: position3,
    pos4: position4,
    pos5: position5,
    pos6: position6,
    pos7: position7,
    pos8: position8,
    pos9: position9,
    pos10: position10,
    pos11: position11,
    pos12: position12,
    pos13: position13,
    pos14: position14,
    pos15: position15,
    pos16: position16,
    pos17: position17,
    pos18: position18,
    pos19: position19,
    pos20: position20,
    pos21: position21,
    pos22: position22,
    pos23: position23,
    pos24: position24,
    pos25: position25,
    pos26: position26,
    pos27: position27,
    pos28: position28,
    pos29: position29,
    pos30: position30,
  });

  React.useEffect(() => {
    fetchTeams();
    fetchAccountData();
    //saveBracket();
    getBrackets();
  }, []);

  React.useEffect(() => {
    setJSONData({
      pos1: position1,
      pos2: position2,
      pos3: position3,
      pos4: position4,
      pos5: position5,
      pos6: position6,
      pos7: position7,
      pos8: position8,
      pos9: position9,
      pos10: position10,
      pos11: position11,
      pos12: position12,
      pos13: position13,
      pos14: position14,
      pos15: position15,
      pos16: position16,
      pos17: position17,
      pos18: position18,
      pos19: position19,
      pos20: position20,
      pos21: position21,
      pos22: position22,
      pos23: position23,
      pos24: position24,
      pos25: position25,
      pos26: position26,
      pos27: position27,
      pos28: position28,
      pos29: position29,
      pos30: position30,
    });
  }, [
    position1,
    position2,
    position3,
    position4,
    position5,
    position6,
    position7,
    position8,
    position9,
    position10,
    position11,
    position12,
    position13,
    position14,
    position15,
    position16,
    position17,
    position18,
    position19,
    position20,
    position21,
    position22,
    position23,
    position24,
    position25,
    position26,
    position27,
    position28,
    position29,
    position30,
  ]);

  async function fetchTeams() {
    try {
      const allTeams = await API.graphql(graphqlOperation(queries.listTeams));
      const data = allTeams.data.listTeams.items;
      setTeams(data);
      setPositions(data);
    } catch (err) {
      console.log(err);
    }
  }

  const [data, setData] = React.useState(null)

  async function getBrackets() {
    try {
      //const userBracket = await API.graphql()
      const allBrackets = await API.graphql(
        graphqlOperation(queries.listNewBrackets, { owner: {eq: "Sam"}})
      );
      console.log(allBrackets);
      console.log(user)
    } catch (err) {
      console.log(err);
    }
  }

  async function saveBracket() {
    try {
      setJSONData({
        pos1: position1,
        pos2: position2,
        pos3: position3,
        pos4: position4,
        pos5: position5,
        pos6: position6,
        pos7: position7,
        pos8: position8,
        pos9: position9,
        pos10: position10,
        pos11: position11,
        pos12: position12,
        pos13: position13,
        pos14: position14,
        pos15: position15,
        pos16: position16,
        pos17: position17,
        pos18: position18,
        pos19: position19,
        pos20: position20,
        pos21: position21,
        pos22: position22,
        pos23: position23,
        pos24: position24,
        pos25: position25,
        pos26: position26,
        pos27: position27,
        pos28: position28,
        pos29: position29,
        pos30: position30,
      });
      let data = {};
      try {
        data = {
          json: JSON.stringify(JSONData),
        };
      } catch (err) {
        console.log(err);
      }
      const newBracket = await API.graphql(
        graphqlOperation(mutations.createNewBracket, { input: data })
      );
      console.log(newBracket);
    } catch (err) {
      console.log(err);
    }
  }

  const setPositions = (data) => {
    for (let i = 0; i < 16; i++) {
      let state = { ...initialPositionState };
      state.src = und;
      state.displayname = data[i].displayname;
      state.team = data[i];
      state.logo = getTeamImg(data[i].name);
      let [a, b] = getTeamModal(data[i].name);
      state.modal = a;
      state.modal_function = b;
      switch (data[i].name) {
        case "boston-university":
          setPositionWL7(state);
          break;
        case "canisius":
          setPositionWL2(state);
          break;
        case "colgate":
          setPositionWL10(state);
          break;
        case "cornell":
          setPositionWL6(state);
          break;
        case "denver":
          setPositionWL5(state);
          break;
        case "harvard":
          setPositionWL15(state);
          break;
        case "merrimack":
          setPositionWL14(state);
          break;
        case "michigan":
          setPositionWL9(state);
          break;
        case "michigan-tech":
          setPositionWL12(state);
          break;
        case "minnesota":
          setPositionWL1(state);
          break;
        case "minnesota-state":
          setPositionWL4(state);
          break;
        case "ohio-state":
          setPositionWL16(state);
          break;
        case "penn-state":
          setPositionWL11(state);
          break;
        case "quinnipiac":
          setPositionWL13(state);
          break;
        case "st-cloud-st":
          setPositionWL3(state);
          break;
        case "western-michigan":
          setPositionWL8(state);
          break;
        default:
          console.log("None");
          break;
      }
    }
  };

  const getTeamImg = (name) => {
    switch (name) {
      case "boston-university":
        return bonstonuimg;
        break;
      case "canisius":
        return canisiusimg;
        break;
      case "colgate":
        return colgateimg;
        break;
      case "cornell":
        return cornellimg;
        break;
      case "denver":
        return denverimg;
        break;
      case "harvard":
        return harvardimg;
        break;
      case "merrimack":
        return merrimackimg;
        break;
      case "michigan":
        return michiganimg;
        break;
      case "michigan-tech":
        return michigantechimg;
        break;
      case "minnesota":
        return minnesotaimg;
        break;
      case "minnesota-state":
        return minnstmankatoimg;
        break;
      case "ohio-state":
        return ohiostateimg;
        break;
      case "penn-state":
        return pennstimg;
        break;
      case "quinnipiac":
        return quinnpiacimg;
        break;
      case "st-cloud-st":
        return stcloudstimg;
        break;
      case "western-michigan":
        return westernmichimg;
        break;
    }
  };

  const getTeamModal = (name) => {
    switch (name) {
      case "boston-university":
        return [modalShow7, setModalShow7];
        break;
      case "canisius":
        return [modalShow2, setModalShow2];
        break;
      case "colgate":
        return [modalShow10, setModalShow10];
        break;
      case "cornell":
        return [modalShow6, setModalShow6];
        break;
      case "denver":
        return [modalShow5, setModalShow5];
        break;
      case "harvard":
        return [modalShow15, setModalShow15];
        break;
      case "merrimack":
        return [modalShow14, setModalShow14];
        break;
      case "michigan":
        return [modalShow9, setModalShow9];
        break;
      case "michigan-tech":
        return [modalShow12, setModalShow12];
        break;
      case "minnesota":
        return [modalShow1, setModalShow1];
        break;
      case "minnesota-state":
        return [modalShow4, setModalShow4];
        break;
      case "ohio-state":
        return [modalShow16, setModalShow16];
        break;
      case "penn-state":
        return [modalShow11, setModalShow11];
        break;
      case "quinnipiac":
        return [modalShow13, setModalShow13];
        break;
      case "st-cloud-st":
        return [modalShow3, setModalShow3];
        break;
      case "western-michigan":
        return [modalShow8, setModalShow8];
        break;
    }
  };

  return (
    <div>
      <FFBracket
        width="100%"
        backgroundColor={"rgb(148, 198, 227)"}
        logo={<Image src={fflogo} />}
        teamlabel1={position1.displayname}
        teamlabel2={position2.displayname}
        teamlabel3={position3.displayname}
        teamlabel4={position4.displayname}
        teamlabel5={position5.displayname}
        teamlabel6={position6.displayname}
        teamlable7={position7.displayname}
        teamlabel8={position8.displayname}
        teamlabel9={position9.displayname}
        teamlabel10={position10.displayname}
        teamlabel11={position11.displayname}
        teamlabel12={position12.displayname}
        teamlabel13={position13.displayname}
        teamlabel14={position14.displayname}
        teamlabel15={position15.displayname}
        teamlabel16={position16.displayname}
        quarterlabel1={position17.displayname}
        quarterlabel2={position18.displayname}
        quarterlabel3={position19.displayname}
        quarterlabel4={position20.displayname}
        quarterlabel5={position21.displayname}
        quarterlabel6={position22.displayname}
        quarterlabel7={position23.displayname}
        quarterlabel8={position24.displayname}
        semilabel1={position25.displayname}
        semilabel2={position26.displayname}
        semilabel3={position27.displayname}
        semilabel4={position28.displayname}
        finallabel1={position29.displayname}
        finallabel2={position30.displayname}
        teamimg1={position1.logo}
        teamimg2={position2.logo}
        teamimg3={position3.logo}
        teamimg4={position4.logo}
        teamimg5={position5.logo}
        teamimg6={position6.logo}
        teamimg7={position7.logo}
        teamimg8={position8.logo}
        teamimg9={position9.logo}
        teamimg10={position10.logo}
        teamimg11={position11.logo}
        teamimg12={position12.logo}
        teamimg13={position13.logo}
        teamimg14={position14.logo}
        teamimg15={position15.logo}
        teamimg16={position16.logo}
        teamimg17={position17.logo}
        teamimg18={position18.logo}
        teamimg19={position19.logo}
        teamimg20={position20.logo}
        teamimg21={position21.logo}
        teamimg22={position22.logo}
        teamimg23={position23.logo}
        teamimg24={position24.logo}
        teamimg25={position25.logo}
        teamimg26={position26.logo}
        teamimg27={position27.logo}
        teamimg28={position28.logo}
        teamimg29={position29.logo}
        teamimg30={position30.logo}
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
        pos15wl={position15.src}
        pos16wl={position16.src}
        pos17wl={position17.src}
        pos18wl={position18.src}
        pos19wl={position19.src}
        pos20wl={position20.src}
        pos21wl={position21.src}
        pos22wl={position22.src}
        pos23wl={position23.src}
        pos24wl={position24.src}
        pos25wl={position25.src}
        pos26wl={position26.src}
        pos27wl={position27.src}
        pos28wl={position28.src}
        pos29wl={position29.src}
        pos30wl={position30.src}
        overrides={{
          TeamButton137902129: {
            onClick: () => {
              position1.modal_function(true);
            },
          },
          TeamButton237902134: {
            onClick: () => {
              position2.modal_function(true);
            },
          },
          TeamButton137902146: {
            onClick: () => {
              position3.modal_function(true);
            },
          },
          TeamButton237902151: {
            onClick: () => {
              position4.modal_function(true);
            },
          },
          TeamButton138061519: {
            onClick: () => {
              position5.modal_function(true);
            },
          },
          TeamButton238061524: {
            onClick: () => {
              position6.modal_function(true);
            },
          },
          TeamButton138061536: {
            onClick: () => {
              position7.modal_function(true);
            },
          },
          TeamButton238061541: {
            onClick: () => {
              position8.modal_function(true);
            },
          },
          TeamButton138061672: {
            onClick: () => {
              position9.modal_function(true);
            },
          },
          TeamButton238061677: {
            onClick: () => {
              position10.modal_function(true);
            },
          },
          TeamButton138061689: {
            onClick: () => {
              position11.modal_function(true);
            },
          },
          TeamButton238061694: {
            onClick: () => {
              position12.modal_function(true);
            },
          },
          TeamButton137902005: {
            onClick: () => {
              position13.modal_function(true);
            },
          },
          TeamButton237902010: {
            onClick: () => {
              position14.modal_function(true);
            },
          },
          TeamButton137902022: {
            onClick: () => {
              position15.modal_function(true);
            },
          },
          TeamButton237902027: {
            onClick: () => {
              position16.modal_function(true);
            },
          },
          TeamButton137902111: {
            onClick: () => {
              position17.modal_function(true);
            },
          },
          TeamButton237902116: {
            onClick: () => {
              position18.modal_function(true);
            },
          },
          TeamButton138061553: {
            onClick: () => {
              position19.modal_function(true);
            },
          },
          TeamButton238061558: {
            onClick: () => {
              position20.modal_function(true);
            },
          },
          TeamButton138061654: {
            onClick: () => {
              position21.modal_function(true);
            },
          },
          TeamButton238061659: {
            onClick: () => {
              position22.modal_function(true);
            },
          },
          TeamButton137901987: {
            onClick: () => {
              position23.modal_function(true);
            },
          },
          TeamButton237901992: {
            onClick: () => {
              position24.modal_function(true);
            },
          },
          TeamButton137902099: {
            onClick: () => {
              position25.modal_function(true);
            },
          },
          TeamButton138061568: {
            onClick: () => {
              position26.modal_function(true);
            },
          },
          TeamButton138061642: {
            onClick: () => {
              position27.modal_function(true);
            },
          },
          TeamButton137901975: {
            onClick: () => {
              position28.modal_function(true);
            },
          },
          TeamButton138061736: {
            onClick: () => {
              position29.modal_function(true);
            },
          },
          TeamButton138061730: {
            onClick: () => {
              position30.modal_function(true);
            },
          },
          Circle1: {
            onClick: () => {
              setPositionWL17({ ...position1, src: und });
              let prevState1 = { ...position1 };
              let prevState2 = { ...position2 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL1(prevState1);
              setPositionWL2(prevState2);
            },
          },
          Circle2: {
            onClick: () => {
              setPositionWL17({ ...position2, src: und });
              let prevState1 = { ...position1 };
              let prevState2 = { ...position2 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL1(prevState1);
              setPositionWL2(prevState2);
            },
          },
          Circle3: {
            onClick: () => {
              setPositionWL18({ ...position3, src: und });
              let prevState1 = { ...position3 };
              let prevState2 = { ...position4 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL3(prevState1);
              setPositionWL4(prevState2);
            },
          },
          Circle4: {
            onClick: () => {
              setPositionWL18({ ...position4, src: und });
              let prevState1 = { ...position3 };
              let prevState2 = { ...position4 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL3(prevState1);
              setPositionWL4(prevState2);
            },
          },
          Circle5: {
            onClick: () => {
              setPositionWL19({ ...position5, src: und });
              let prevState1 = { ...position5 };
              let prevState2 = { ...position6 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL5(prevState1);
              setPositionWL6(prevState2);
            },
          },
          Circle6: {
            onClick: () => {
              setPositionWL19({ ...position6, src: und });
              let prevState1 = { ...position5 };
              let prevState2 = { ...position6 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL5(prevState1);
              setPositionWL6(prevState2);
            },
          },
          Circle7: {
            onClick: () => {
              setPositionWL20({ ...position7, src: und });
              let prevState1 = { ...position7 };
              let prevState2 = { ...position8 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL7(prevState1);
              setPositionWL8(prevState2);
            },
          },
          Circle8: {
            onClick: () => {
              setPositionWL20({ ...position8, src: und });
              let prevState1 = { ...position7 };
              let prevState2 = { ...position8 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL7(prevState1);
              setPositionWL8(prevState2);
            },
          },
          Circle9: {
            onClick: () => {
              setPositionWL21({ ...position9, src: und });
              let prevState1 = { ...position9 };
              let prevState2 = { ...position10 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL9(prevState1);
              setPositionWL10(prevState2);
            },
          },
          Circle10: {
            onClick: () => {
              setPositionWL21({ ...position10, src: und });
              let prevState1 = { ...position9 };
              let prevState2 = { ...position10 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL9(prevState1);
              setPositionWL10(prevState2);
            },
          },
          Circle11: {
            onClick: () => {
              setPositionWL22({ ...position11, src: und });
              let prevState1 = { ...position11 };
              let prevState2 = { ...position12 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL11(prevState1);
              setPositionWL12(prevState2);
            },
          },
          Circle12: {
            onClick: () => {
              setPositionWL22({ ...position12, src: und });
              let prevState1 = { ...position11 };
              let prevState2 = { ...position12 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL11(prevState1);
              setPositionWL12(prevState2);
            },
          },
          Circle13: {
            onClick: () => {
              setPositionWL23({ ...position13, src: und });
              let prevState1 = { ...position13 };
              let prevState2 = { ...position14 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL13(prevState1);
              setPositionWL14(prevState2);
            },
          },
          Circle14: {
            onClick: () => {
              setPositionWL23({ ...position14, src: und });
              let prevState1 = { ...position13 };
              let prevState2 = { ...position14 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL13(prevState1);
              setPositionWL14(prevState2);
            },
          },
          Circle15: {
            onClick: () => {
              setPositionWL24({ ...position15, src: und });
              let prevState1 = { ...position15 };
              let prevState2 = { ...position16 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL15(prevState1);
              setPositionWL16(prevState2);
            },
          },
          Circle16: {
            onClick: () => {
              setPositionWL24({ ...position16, src: und });
              let prevState1 = { ...position15 };
              let prevState2 = { ...position16 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL15(prevState1);
              setPositionWL16(prevState2);
            },
          },
          Circle17: {
            onClick: () => {
              setPositionWL25({ ...position17, src: und });
              let prevState1 = { ...position17 };
              let prevState2 = { ...position18 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL17(prevState1);
              setPositionWL18(prevState2);
            },
          },
          Circle18: {
            onClick: () => {
              setPositionWL25({ ...position18, src: und });
              let prevState1 = { ...position17 };
              let prevState2 = { ...position18 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL17(prevState1);
              setPositionWL18(prevState2);
            },
          },
          Circle19: {
            onClick: () => {
              setPositionWL26({ ...position19, src: und });
              let prevState1 = { ...position19 };
              let prevState2 = { ...position20 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL19(prevState1);
              setPositionWL20(prevState2);
            },
          },
          Circle20: {
            onClick: () => {
              setPositionWL26({ ...position20, src: und });
              let prevState1 = { ...position19 };
              let prevState2 = { ...position20 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL19(prevState1);
              setPositionWL20(prevState2);
            },
          },
          Circle21: {
            onClick: () => {
              setPositionWL27({ ...position21, src: und });
              let prevState1 = { ...position21 };
              let prevState2 = { ...position22 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL21(prevState1);
              setPositionWL22(prevState2);
            },
          },
          Circle22: {
            onClick: () => {
              setPositionWL27({ ...position22, src: und });
              let prevState1 = { ...position21 };
              let prevState2 = { ...position22 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL21(prevState1);
              setPositionWL22(prevState2);
            },
          },
          Circle23: {
            onClick: () => {
              setPositionWL28({ ...position23, src: und });
              let prevState1 = { ...position23 };
              let prevState2 = { ...position24 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL23(prevState1);
              setPositionWL24(prevState2);
            },
          },
          Circle24: {
            onClick: () => {
              setPositionWL28({ ...position24, src: und });
              let prevState1 = { ...position23 };
              let prevState2 = { ...position24 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL23(prevState1);
              setPositionWL24(prevState2);
            },
          },
          Circle25: {
            onClick: () => {
              setPositionWL29({ ...position25, src: und });
              let prevState1 = { ...position25 };
              let prevState2 = { ...position26 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL25(prevState1);
              setPositionWL26(prevState2);
            },
          },
          Circle26: {
            onClick: () => {
              setPositionWL29({ ...position26, src: und });
              let prevState1 = { ...position25 };
              let prevState2 = { ...position26 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL25(prevState1);
              setPositionWL26(prevState2);
            },
          },
          Circle27: {
            onClick: () => {
              setPositionWL30({ ...position27, src: und });
              let prevState1 = { ...position27 };
              let prevState2 = { ...position28 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL27(prevState1);
              setPositionWL28(prevState2);
            },
          },
          Circle28: {
            onClick: () => {
              setPositionWL30({ ...position28, src: und });
              let prevState1 = { ...position27 };
              let prevState2 = { ...position28 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL27(prevState1);
              setPositionWL28(prevState2);
            },
          },
          Circle29: {
            onClick: () => {
              setChampText(position29.displayname.toUpperCase());
              let prevState1 = { ...position29 };
              let prevState2 = { ...position30 };
              prevState1.src = win;
              prevState2.src = loss;
              setPositionWL29(prevState1);
              setPositionWL30(prevState2);
            },
          },
          Circle30: {
            onClick: () => {
              setChampText(position30.displayname.toUpperCase());
              let prevState1 = { ...position29 };
              let prevState2 = { ...position30 };
              prevState2.src = win;
              prevState1.src = loss;
              setPositionWL29(prevState1);
              setPositionWL30(prevState2);
            },
          },
          CHAMPION: {
            children: champText,
          },
        }}
      />
      <VerticallyCenteredModal1
        show={modalShow1}
        onHide={() => setModalShow1(false)}
      />
      <VerticallyCenteredModal2
        show={modalShow2}
        onHide={() => setModalShow2(false)}
      />
      <VerticallyCenteredModal3
        show={modalShow3}
        onHide={() => setModalShow3(false)}
      />
      <VerticallyCenteredModal4
        show={modalShow4}
        onHide={() => setModalShow4(false)}
      />
      <VerticallyCenteredModal5
        show={modalShow5}
        onHide={() => setModalShow5(false)}
      />
      <VerticallyCenteredModal6
        show={modalShow6}
        onHide={() => setModalShow6(false)}
      />
      <VerticallyCenteredModal7
        show={modalShow7}
        onHide={() => setModalShow7(false)}
      />
      <VerticallyCenteredModal8
        show={modalShow8}
        onHide={() => setModalShow8(false)}
      />
      <VerticallyCenteredModal9
        show={modalShow9}
        onHide={() => setModalShow9(false)}
      />
      <VerticallyCenteredModal10
        show={modalShow10}
        onHide={() => setModalShow10(false)}
      />
      <VerticallyCenteredModal11
        show={modalShow11}
        onHide={() => setModalShow11(false)}
      />
      <VerticallyCenteredModal12
        show={modalShow12}
        onHide={() => setModalShow12(false)}
      />
      <VerticallyCenteredModal13
        show={modalShow13}
        onHide={() => setModalShow13(false)}
      />
      <VerticallyCenteredModal14
        show={modalShow14}
        onHide={() => setModalShow14(false)}
      />
      <VerticallyCenteredModal15
        show={modalShow15}
        onHide={() => setModalShow15(false)}
      />
      <VerticallyCenteredModal16
        show={modalShow16}
        onHide={() => setModalShow16(false)}
      />
    </div>
  );
};

export default MyBracket;
