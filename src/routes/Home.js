// Home.js

import { Form } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react'
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
const [timer, setTimer] = useState('00:00:00');
  
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {
        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
  
            // update the timer
            // check if less than 10 then we need to 
            // add '0' at the beginning of the variable
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
    }


const Home = () => {
  return(
        <div>
        <div className="MainPage">
            <CountdownTimer
                width="100%"
                countdownvalue={setTimer('09:09:09')}
            />

        </div>
        <h1><center>

                                                
            Welcome to our Frozen Four Bracket Challenge!</center>
        </h1>
        <div id="logo_img" style={styles}>
            <Image src={fflogo} alt="Frozen Four" width="500px" height="500px" objectPosition="50% 50%"/>
        </div>
        </div>
  )
};

const styles = {
    "text-align": "center"
}


export default Home;