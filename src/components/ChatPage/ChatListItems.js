import React, { useState } from "react";
import Avatar from "./Avatar";
import "./ListofContacts.css";
const ChatListItems = (props) => {
  const [activeclass, setactiveclass] = useState(false);

  const setindexfun = (e) => {
    if (props.curindex !== -2) {
      setactiveclass(true);
      props.setindexfunc(props.index);
      props.setindexwithname({
        username: props.userName,
        firstName: props.name,
        lastName: props.lastName,
      });
    } else {
      props.setindexfunc(-1);
    }
  };
  const handlesubmission = (e) => {
    //props.setpersonfunc
    props.setpersonfunc(`${props.name + " " + props.lastName}`);
    props.setindexwithname({
      username: props.userName,
      firstName: props.name,
      lastName: props.lastName,
    });
  };
  return (
    <div
      className={`chatlist__item ${
        props.curindex === props.index ? "active" : ""
      } `}
    >
      <Avatar
        image={
          props.image
            ? props.image
            : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }
        isOnline={props.isOnline}
      />

      <div className="userMeta" onClick={setindexfun}>
        <p style={{ color: "white" }} onClick={handlesubmission}>
          {props.name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};
export default ChatListItems;
