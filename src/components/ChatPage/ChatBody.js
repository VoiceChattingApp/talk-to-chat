import classes from "./ChatBody.module.css";
import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  chatActiveContact
} from "../../atom/globalState";
<<<<<<< HEAD
import ListofContacts from './ListofContacts'
import ChatContent from '../chatsection/ChatContent'
import Newuserprofile from '../userProfile/Newuserprofile'
import Adduser from './Adduser'
import Logout from '../chatsection/Logout'
import AuthContext from '../store/auth-context';
import ThreeDots from './ThreeDots'
const ChatBody=()=> {
  
	const [nameofperson,setnameofperson]=useState('');
   const [activeContact, setActiveContact] = useRecoilState(chatActiveContact);
  const [index,setindex]=useState(-1);
  const [email,setemail]=useState('');
  const[updatecontacts,setupdatecontacts]=useState({username:'',firstName:'',lastName:''});
  const[indexwithname,setindexwithname]=useState({username:'',firstName:'',lastName:''});
  const setindexfunc=(e)=>{
    setindex(e);
  }
   
    useEffect(() => {
     
    }, [])
      
	  const setpersonfunc=(e)=>{
      setnameofperson(e);
    }
    const setemailfunc=(e)=>{
      setemail(e.target.innerText);
    } 
    const setuserindex=()=>{
      setindex(-2);
=======
import ListofContacts from "./ListofContacts";
import ChatContent from "../chatsection/ChatContent";
import Newuserprofile from "../userProfile/Newuserprofile";
import Adduser from "./Adduser";
import Logout from "../chatsection/Logout";
const ChatBody = () => {
  const [nameofperson, setnameofperson] = useState("");
  const [activeContact, setActiveContact] = useRecoilState(chatActiveContact);
  const [index, setindex] = useState(-1);
  const [email, setemail] = useState("");
  const [updatecontacts, setupdatecontacts] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });
  const [indexwithname, setindexwithname] = useState({
    username: "",
    firstName: "",
    lastName: "",
  });
  const setindexfunc = (e) => {
    setindex(e);
  };

  useEffect(() => {}, []);

  const setpersonfunc = (e) => {
    setnameofperson(e.target.innerText);
  };
  const setemailfunc = (e) => {
    setemail(e.target.innerText);
  };
  const setuserindex = () => {
    setindex(-2);
  };

  useEffect(() => {
    if (index === -2) {
      setActiveContact({ name: " ", email: " " });
>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c
    }
  }, [index]);

  console.log("INDEX");
  console.log(index);
  return (
    <div className={classes.main__chatbody}>
      <ListofContacts
        setindexwithname={setindexwithname}
        updatecontacts={updatecontacts}
        adduserindex={setuserindex}
        setpersonfunc={setpersonfunc}
        curindex={index}
        setemailfunc={setemailfunc}
        setindexfunc={setindexfunc}
      />
      {index === -1 && <Logout />}
      {index === -3 && <Newuserprofile curindex={index} user={indexwithname} />}

<<<<<<< HEAD
    console.log("INDEX");
    console.log(index);
	return (
	<div className={classes.main__chatbody}>
        <ListofContacts setindexwithname={setindexwithname} updatecontacts={updatecontacts} adduserindex={setuserindex} setpersonfunc={setpersonfunc} curindex={index} setemailfunc={setemailfunc} setindexfunc={setindexfunc}/>
        
        {index===-3&&<Newuserprofile curindex={index} user={indexwithname} />}
        
        {index!==-1&&index!==-2&&index!==-3&&<ChatContent setindexfunc={setindexfunc} nameofperson={nameofperson} email={email} index={index} setindexwithname={setindexwithname}/>}
        
        {index===-2&&<Adduser curindex={index} setindexfunc={setindexfunc} setupdatecontacts={setupdatecontacts}/>}
        {index===-4&&<ThreeDots/>}
      </div>
	)
}
=======
      {index !== -1 && index !== -2 && index !== -3 && (
        <ChatContent
          setindexfunc={setindexfunc}
          nameofperson={nameofperson}
          email={email}
          index={index}
        />
      )}
      {index === -2 && (
        <Adduser
          curindex={index}
          setindexfunc={setindexfunc}
          setupdatecontacts={setupdatecontacts}
        />
      )}
    </div>
  );
};
>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c

export default ChatBody;
