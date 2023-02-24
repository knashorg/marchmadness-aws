import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";

const SignUp = () => {
  return (
    <Authenticator>
      {({ signOut, user }) => {
        return (
          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        );
      }}
    </Authenticator>
  );
};

export default SignUp;
