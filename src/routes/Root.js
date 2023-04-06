// Root.js

import React from "react";

// Amplify Setup
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

// Amplify Components
import { KnashNavigationBar } from "../ui-components";
import { useAuthenticator } from "@aws-amplify/ui-react";

// Images
import avatarimg from "../images/default-avatar.png";
import logo from "../images/logo.png";
import { Outlet } from "react-router-dom";

// DO NOT TOUCH
Amplify.configure(awsExports);

const Root = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  return (
    <div>
      <div className="NavBar">
        {route === "authenticated" ? (
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
            signinurl="/login"
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
