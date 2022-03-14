import React, { useState,useEffect} from "react";
import Avatar from "./Avatar";
import "./ListofContacts.css";
import axios from "axios";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  chatActiveContact,
  chatMessages,
  loggedInUser,
} from "../../atom/globalState";
const ChatListItems = (props) => {
  const currentUser = useRecoilValue(loggedInUser);
  const[count,setcount]=useState(100);
  const [activeclass, setactiveclass] = useState(false);
  const[image,setimage]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");
  const setindexfun = (e) => {
    
    
      setactiveclass(true);
      props.setindexfunc(props.index);
       props.setpersonfunc(`${props.name + " " + props.lastName}`);
      props.setindexwithname({
        username: props.userName,
        firstName: props.name,
        lastName: props.lastName,
      });
   
  };
  const handlesubmission = (e) => {
    //props.setpersonfunc
    setcount(0);
   
    var url = "https://chat-lg.azurewebsites.net/contacts/"+currentUser.username+"/"+props.userName+"/0";
        axios
      .post(url)
      .then((result) => {
        
      })
      .catch((err) => {window.alert("error aagya")}); 
     let temparr=[...props.notifyuser];
      for(var i=0;i<temparr.length;i++)
      {
        if(temparr[i].username===props.userName)
        {
          temparr[i].unread=0;
        }
      }
     
    props.setnotifyuser(temparr);
    props.setindexwithname({
      username: props.userName,
      firstName: props.name,
      lastName: props.lastName,
    });
  };
  console.log("image obtained");
  console.log(props.image);
  useEffect(()=>{
  var url = "https://chat-lg.azurewebsites.net/photos/" + props.userName;
    axios
      .get(url)
      .then((result) => {
        console.log(result.data);
        
        setimage(`data:image/png;base64,${result.data}`);
      })
      .catch((err) => {console.log("ERROR IN GET")});
  },[props.userName])
  
  return (
    <div
      className={`chatlist__item ${
        props.curindex === props.index ? "active" : ""
      } ` } 
    >
      <Avatar
        image={image}
        isOnline={props.isOnline}
      />
      
      <div className="userMeta" onClick={setindexfun}>
        <p style={{ color: "white" }} onClick={handlesubmission}>
          {props.name.toUpperCase()}
        </p>
      </div>
    

     {props.curindex!==props.index&&props.notifiction!==0&&<div className="notify">
     {props.notifiction}
     </div>}
    </div>
  );
};
export default ChatListItems;
