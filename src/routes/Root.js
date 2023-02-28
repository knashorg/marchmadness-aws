// Home.js
import React, { useEffect, useState } from "react";

// Amplify Setup
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

// Amplify Components
import { KnashNavigationBar } from "../ui-components";
import { Button, useAuthenticator } from "@aws-amplify/ui-react";

// Images
import avatarimg from "../images/default-avatar.png";
import logo from "../images/logo.png";
import { Outlet, useNavigate } from "react-router-dom";

// DO NOT TOUCH
Amplify.configure(awsExports);

const Root = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate("/login");
  }

  return (
    <div>
      <div className="NavBar">
        {route === 'authenticated' ? (
          <KnashNavigationBar
            signedIn="Yes"
            width={"100%"}
            logoimg={logo}
            avatarimg={avatarimg}
            buttonlabel="Sign Up"
            buttonurl="/login"
            avatarurl="/account/1"
          />
        ) : (
          <KnashNavigationBar
            signedIn="No"
            width={"100%"}
            logoimg={logo}
            avatarimg={avatarimg}
            buttonlabel="Sign Up"
            buttonurl="/login"
            avatarurl="/account/1"
          />
        )}
      </div>
      <div className="detail">
        <Outlet />
        <Button>{onclick=logOut}Log Out</Button>
      </div>
    </div>
  );
};

export default Root;
