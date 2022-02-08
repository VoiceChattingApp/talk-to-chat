import React, { useState } from "react";
import axios from "axios";
import classes from "./AddContacts.module.css";
import "font-awesome/css/font-awesome.min.css";
import Newuserprofile from "../userProfile/Newuserprofile";
import NoUserProfile from "../userProfile/NoUserProfile";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Adduser = (props) => {
  const [user, setuser] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });
  const [searchval, setsearchval] = useState("");
  const [nodata, setnodata] = useState(false);
  const setsearchvalfunc = (e) => {
    setsearchval(e.target.value);
  };
  const setempty = () => {
    setsearchval("");
  };
  const [wrongval, setwrongval] = useState(false);
  const submithandler = (e) => {
    e.preventDefault();

    if (searchval.includes("@") && searchval.includes(".com")) {
      //search for email represented by searchval in database of all users

      const url = "https://chat-lg.azurewebsites.net/user/" + searchval;
      axios.get(url).then((response) => {
        if (response.data) {
          setuser({
            username: response.data.username,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
          });
        } else {
          setuser({ username: "", firstName: "", lastName: "" });
          setnodata(true);
        }
      });
      setwrongval(false);
      setsearchval("");
    } else {
      toast.error(" Enter Valid Email Address!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setwrongval(true);
      setnodata(false);
      return;
    }
  };
  const updatecontacts = (e) => {
    props.setupdatecontacts({
      username: e.username,
      firstName: e.firstName,
      lastName: e.lastName,
    });
  };
  return (
    <div className={classes.main__chatlist}>
      <div>
        <h2>Search All Users</h2>
      </div>

      <form>
        <div className={classes.form}>
          <div className={classes.chatList__search}>
            <div className={classes.search_wrap}>
              {searchval.length > 0 && (
                <i
                  className="fa fa-times"
                  style={{ paddingLeft: "5%" }}
                  onClick={setempty}
                ></i>
              )}
              <input
                type="email"
                placeholder="Search Here"
                value={searchval}
                onChange={setsearchvalfunc}
                required
              />
              <button className={classes.searchbtn} onClick={submithandler}>
                <i className="fa fa-search" style={{ color: "white" }}></i>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className={classes.thirddiv}>
        {user.username.length > 0 && wrongval === false && (
          <Newuserprofile
            setindexfunc={props.setindexfunc}
            curindex={props.curindex}
            user={user}
            updatecontacts={updatecontacts}
          />
        )}
        {user.username.length === 0 && nodata && <NoUserProfile />}
      </div>
    </div>
  );
};
export default Adduser;
