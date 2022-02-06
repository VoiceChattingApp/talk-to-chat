<<<<<<< HEAD
import React,{useState,useRef,useEffect} from 'react'
import classes from './newuserprofile.module.css'
import 'font-awesome/css/font-awesome.min.css';
import { useRecoilValue, useRecoilState } from "recoil";
import {
  chatActiveContact,
  chatMessages,
  loggedInUser,
} from "../../atom/globalState";
const  Newuserprofile=(props)=>{
  const [editstate,seteditstate]=useState(false);
  const [showpara,setshowpara]=useState(false);
  const inputRef=useRef(null);
  const currentUser=useRecoilValue(loggedInUser);
  useEffect(()=>{
    if(showpara)
    inputRef.current.focus();
  },[showpara]);
  const submithandler=()=>{
    
   
=======
import React, { useState } from "react";
import classes from "./newuserprofile.module.css";
import "font-awesome/css/font-awesome.min.css";
const Newuserprofile = (props) => {
  const submithandler = () => {
    //add karo props.user ko
    console.log("submit handler");
    console.log(props.curindex);

>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c
    props.updatecontacts(props.user);
  };
  const [image, setimage] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
  );

  const imageHandler = (e) => {
    seteditstate(true);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setimage(reader.result);
      }
<<<<<<< HEAD
    }
     var file  = e.target.files[0];
     if (file && file.type.match('image.*'))
    reader.readAsDataURL(e.target.files[0]);
  };
  
  const photochange=(e)=>{
    
    const choosedFile = e.target.files[0];

    if (choosedFile) {
        
        const reader = new FileReader(); //FileReader is a predefined function of JS
        
        reader.onload=function(e)
        {
            setimage(reader.result);
        };

        reader.readAsDataURL(choosedFile);
  }
}

  const editprofilehandler=()=>{
    
      
    
    setshowpara(true);
    seteditstate(true);

  }
  const [status,setstatus]=useState('Hey there I am using talk-to-chat app by divansh mahajan');
  const changestatus=(e)=>{
  setstatus(e.target.value);
}
const submitchangeshandler=(e)=>{
  e.preventDefault();
  console.log(status);
  setshowpara(false);
  seteditstate(false);
}
 console.log(editstate);
	return (


<div className={`${props.curindex===-3? classes.minheight:classes.maxheight}`}>
      <div className={`${props.curindex===-3? classes.cardmargin:classes.card}`}>

      <div className={`${props.curindex===-3? classes['card-background-margin']:classes['card-background']}`}>


  
          <div className={classes['img-holder']} style={{  
  backgroundImage: `url(${image})`,

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
            
          
          <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} className={classes.nodisplay}/>
          <div className={classes.label}>
          {props.curindex===-3&&props.user.username===currentUser.username&&<label className={classes['image-upload']} htmlFor="input">
            <i className={classes['material-icons']}>Add_photo</i>
           
          </label>}
          </div>
       </div>
       </div>

  <div className={`${props.curindex===-3? classes['card-info-margin']:classes['card-info']}`}>
   
    <h1>{props.user.firstName}{' '}{props.user.lastName}</h1>
    <div style={{display:"flex"}}>
    {showpara&&<input type="text" value={status} onChange={changestatus} ref={inputRef}  />}
    {!showpara&&<p dangerouslySetInnerHTML={{ __html: status }} className={`${props.curindex!==-3||props.user.username!==currentUser.username? classes['para-fullwidth']:classes['para-seven']}`}/>}
    {props.user.username===currentUser.username&&props.curindex!==-2&&<i className="fa fa-edit fa-lg" style={{color:"black",justifySelf:"center",alignSelf:"center",width:"10%",margin:"auto"}} onClick={editprofilehandler}></i>}
    </div>
    {editstate &&<button className={classes.buttonflex} onClick={submitchangeshandler} style={{color:"black"}}>SAVE CHANGES</button>}
</div>
  
  {props.curindex===-2&&<button className={classes.buttonflex} onClick={submithandler}>ADD TO CONTACTS</button>}
  





		

</div>
</div>
	)
}

export default Newuserprofile;
=======
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const photochange = (e) => {
    window.alert("Dddd");
    console.log("Ssssssssssssssssssss");
    console.log(e.target);
    console.log(e.target.files);
    const choosedFile = e.target.files[0];
    console.log(e.target.files[0]);

    if (choosedFile) {
      const reader = new FileReader(); //FileReader is a predefined function of JS
      console.log("Ssssssssssssssssssss");
      reader.onload = function (e) {
        setimage(reader.result);
      };

      reader.readAsDataURL(choosedFile);
    }
  };

  return (
    <div className={`${props.curindex === -3 ? classes.minheight : " "}`}>
      <div
        className={`${
          props.curindex === -3 ? classes.cardmargin : classes.card
        }`}
      >
        <div
          className={`${
            props.curindex === -3
              ? classes["card-background-margin"]
              : classes["card-background"]
          }`}
        >
          <div
            className={classes["img-holder"]}
            style={{
              backgroundImage: `url(${image})`,

              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <input
              type="file"
              accept="image/*"
              name="image-upload"
              id="input"
              onChange={imageHandler}
              className={classes.nodisplay}
            />
            <div className={classes.label}>
              <label className={classes["image-upload"]} htmlFor="input">
                <i className={classes["material-icons"]}>Add_photo</i>
              </label>
            </div>
          </div>
        </div>

        <div
          className={`${
            props.curindex === -3
              ? classes["card-info-margin"]
              : classes["card-info"]
          }`}
        >
          <h1>
            {props.user.firstName} {props.user.lastName}
          </h1>
          <p>
            Demi Lovato is a Grammy nominated and multi-platinum singer,
            songwriter, actress
          </p>
        </div>

        {props.curindex === -2 && (
          <button className={classes.buttonflex} onClick={submithandler}>
            ADD TO CONTACTS
          </button>
        )}
      </div>
    </div>
  );
};

export default Newuserprofile;
>>>>>>> 177728965a36f394dc6e94d70f244b0c0f41e53c
