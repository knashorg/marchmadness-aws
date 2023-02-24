import { Auth } from "aws-amplify"

const loadUser = (setUser) => {
    Auth.currentAuthenticatedUser()
    .then(user => setUser({user: user}))
    .catch(err => setUser({user: null}))
  }

export default loadUser