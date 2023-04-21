// Home.js

import { Form } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
// Amplify Setup
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

// Amplify Components
import { CountdownTimer } from "../ui-components";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Image } from "@aws-amplify/ui-react";

// Images
import avatarimg from "../images/default-avatar.png";
import fflogo from "../images/frozen-four-logo.png";

// Custom
import useAmpliyUser from "../useAmplifyUser";

const Home = () => {
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");//sets up the timer on the home page

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    const days = Math.floor((total / 1000 / 60 / 60 / 24) % 365);
    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (days > 9 ? days : "0" + days) +
          ":" +
          (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("00:00:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    let timeNow = new Date().getTime() / 1000;
    let timeDiff = 1682899200 - timeNow;

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setSeconds(deadline.getSeconds() + timeDiff);
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (//dev of home page
    <div>
      <div className="MainPage">
        <center>
        <CountdownTimer width="100%" countdownvalue={timer} />
        </center>
      </div>
      <h1>
        <center>Welcome to our Frozen Four Bracket Challenge!</center>
      </h1>
      <div id="logo_img" style={styles}>
        <Image
          src={fflogo}
          alt="Frozen Four"
          width="500px"
          height="500px"
          objectPosition="50% 50%"
        />
      </div>
    </div>
  );
};

const styles = {
  "text-align": "center",
};

export default Home;
