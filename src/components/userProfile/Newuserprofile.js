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
  const [image,setimage]=useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png");

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

<div className={`${props.curindex===-3? classes.minheight:" "}`}>
      <div className={`${props.curindex===-3? classes.cardmargin:classes.card}`}>

      <div className={`${props.curindex===-3? classes['card-background-margin']:classes['card-background']}`}>


  
          <div className={classes['img-holder']} style={{  
  backgroundImage: `url(${image})`,

  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
            
          
          <input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} className={classes.nodisplay}/>
          <div className={classes.label}>
          <label className={classes['image-upload']} htmlFor="input">
            <i className={classes['material-icons']}>Add_photo</i>
           
          </label>
          </div>
       </div>
       </div>

  <div className={`${props.curindex===-3? classes['card-info-margin']:classes['card-info']}`}>
   
    <h1>{props.user.firstName}{' '}{props.user.lastName}</h1>
    <p>Demi Lovato is a Grammy nominated and multi-platinum singer, songwriter, actress</p>
</div>
  
  {props.curindex===-2&&<button className={classes.buttonflex} onClick={submithandler}>ADD TO CONTACTS</button>}





		

</div>
</div>
	)
}

export default Newuserprofile;