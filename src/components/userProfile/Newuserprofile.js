import React,{useState} from 'react'
import classes from './newuserprofile.module.css'
import 'font-awesome/css/font-awesome.min.css';
import { useRecoilValue, useRecoilState } from "recoil";
import {
  chatActiveContact,
  chatMessages,
  loggedInUser,
} from "../../atom/globalState";
const  Newuserprofile=(props)=>{
  const submithandler=()=>{
    //add karo props.user ko
    console.log("submit handler");
    console.log(props.curindex);
    
    props.updatecontacts(props.user);
  }
  const [image,setimage]=useState("https://lh3.googleusercontent.com/-paS9Qm_3L9E/XGK6C0wkWbI/AAAAAAAAAyg/sqwN0ovgb4oD-8cmkNYhLY67SvWZSAnbQCLcBGAs/h120/askjd.jpg");

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        setimage( reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0]);
  };
  
  const photochange=(e)=>{
    window.alert("Dddd");
    console.log("Ssssssssssssssssssss");
    console.log(e.target);
    console.log(e.target.files);
    const choosedFile = e.target.files[0];
     console.log(e.target.files[0]);

    if (choosedFile) {
        
        const reader = new FileReader(); //FileReader is a predefined function of JS
         console.log("Ssssssssssssssssssss");
        reader.onload=function(e)
        {
            setimage(reader.result);
        };

        reader.readAsDataURL(choosedFile);
  }
}
  
	return (
		<div className={classes.card}>

    <div className={classes['profile-pic-div']}>
  <img src={image} className={classes.photo}/>
  <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
          <div className={classes.label}>
          <label className={classes['image-upload']} htmlFor="input">
            <i className="material-icons">add_photo_alternate</i>
            Choose your Photo
          </label>
          </div>
</div>

  <div className={classes['card-background']}>
   <img src="https://lh3.googleusercontent.com/-paS9Qm_3L9E/XGK6C0wkWbI/AAAAAAAAAyg/sqwN0ovgb4oD-8cmkNYhLY67SvWZSAnbQCLcBGAs/h120/askjd.jpg" className={classes['card-image']} />
  </div>

  <div className={classes['card-info']}>
   
    <h1>{props.user.firstName}{' '}{props.user.lastName}</h1>
    <p>Demi Lovato is a Grammy nominated and multi-platinum singer, songwriter, actress</p>
</div>
  
  {props.curindex===-2&&<button className={"buttonflex"} onClick={submithandler}>ADD USER TO CONTACTS</button>}


</div>
	)
}

export default Newuserprofile;