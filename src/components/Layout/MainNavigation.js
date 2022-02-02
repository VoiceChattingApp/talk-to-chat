import { useContext } from "react";

import AuthContext from "../store/auth-context";

const MainNavigation = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;
  console.log("isloggedin main navigation");
  console.log(isLoggedIn);
  const logoutHandler = () => {
    authCtx.logout();
    // optional: redirect the user
  };

  return <div>HELLO</div>;
};

export default MainNavigation;
