import React, { useContext } from "react";
import classes from "./chatContent.module.css";
<<<<<<< HEAD
import AuthContext from '../store/auth-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'
=======
import AuthContext from "../store/auth-context";

>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c
const Logout = () => {
  const authCtx = useContext(AuthContext);
  const logouthandler = () => {
    authCtx.logout();
  };
  return (
    <div className={classes.main__chatcontent}>
      <div className={classes.content__header}>
        <div className={classes.blocks}>
          <div className={classes["current-chatting-user"]}></div>
        </div>
<<<<<<< HEAD
       </div>
       
       <div className={classes.blocks}>
         <div className={classes.settings}>
          <button className={classes['btn-nobg']} onClick={logouthandler}>
             LOGGING
           </button>
           
         </div>
         <i className="fa fa-ellipsis-v" aria-hidden="true" style={{color:"blue"}}></i>
       </div>
     </div>
     </div>
     )};
  export default Logout;
=======
        <div className={classes.blocks}>
          <div className={classes.settings}>
            <button className={classes["btn-nobg"]} onClick={logouthandler}>
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Logout;
>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c
