// Account.js

import { Form } from "react-router-dom";
// Amplify Setup
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import "@aws-amplify/ui-react/styles.css";

// Amplify Components
import { ProfileCard } from "../ui-components";
import { useAmplify, useAuthenticator } from "@aws-amplify/ui-react";
// Images
import avatarimg from "../images/default-avatar.png";

// Custom
import useAmpliyUser from "../useAmplifyUser";
import { useEffect, useState } from "react";


const Account = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchAccountData();
  }, []);

  async function fetchAccountData() {
    function getUser() {
      return Auth.currentAuthenticatedUser()
        .then((userData) => userData)
        .catch(() => console.log("Not signed in"));
    }
    getUser().then((userData) => setUser(userData));
  }


  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  //const [user, setUser] = useAmpliyUser();
  console.log(user)
  const profile = Auth.currentSession()
  let lname = Auth.currentUserInfo.Emailo9
  let mail = user.attributes
  let pp = profile.avatarimg
  let advis = "Advisory: " + "1"
  return (

    <div>
      <div className="AccountPage">
        {user && user == ! "null" && user !== "undefined" ? (
          () => {
            let tempUser = { ...user };
            return (
              <ProfileCard
                image={pp}
                Name={lname}
                Advisory={advis}
                Email={tempUser.attributes.email}
                Points="100 points"
              />
            )
          }

        ) : (
          <ProfileCard

          />
        )}
      </div>

    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

export default Account;