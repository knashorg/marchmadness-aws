// Home.js
import React, { useEffect, useState } from "react";

// Amplify Setup
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";
import loadUser from "../loadUser";

// Amplify Components
import { KnashNavigationBar } from "../ui-components";

// Images
import avatarimg from "../images/default-avatar.png";
import logo from "../images/logo.png";
import { Outlet } from "react-router-dom";

// DO NOT TOUCH
Amplify.configure(awsExports);

const Root = () => {
  const [user, setUser] = useState({user: null})

  useEffect(() => {
    loadUser(setUser);
  })

  return (
    <div>
      <div className="NavBar">
        {user.user ? (
          <KnashNavigationBar
            signedIn="Yes"
            width={"100%"}
            logoimg={logo}
            avatarimg={avatarimg}
            buttonlabel="Sign Up"
            buttonurl="/sign-up"
            avatarurl="/account/1"
          />
        ) : (
          <KnashNavigationBar
            signedIn="No"
            width={"100%"}
            logoimg={logo}
            avatarimg={avatarimg}
            buttonlabel="Sign Up"
            buttonurl="/sign-up"
            avatarurl="/account/1"
          />
        )}
      </div>
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
