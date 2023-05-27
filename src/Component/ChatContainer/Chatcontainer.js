import React, { useEffect, useState } from 'react'
import "./ChatContainer.css";
import profile from "../Images/image2.jpg"
import axios from 'axios';
import { useSelector } from 'react-redux';
export default function Chatcontainer({currentChatUser}) {
    console.log(currentChatUser);
    const userDetails = useSelector((state)=>state.user);
    let user = userDetails.user
  let id = user.other._id;
  const [message ,setMessage] =useState('');
  const accesstoken =user.accessToken;
//  console.log(id);
//   console.log(accesstoken);
    
       useEffect(() => {
           const getmessage = async()=>{
            try {
              const res = await axios.get(`http://localhost:5000/api/post/get/chat/msg/${id}/${currentChatUser._id}` , {
                headers:{
                  token:accesstoken
                }
              })
              setMessage(res.data);
            } catch (error) {
              
            }
           }
           getmessage();
          }, [currentChatUser])
          console.log(message);
  return (
    <div className= "MainChatContainer">
        <div>
            <div style={{display:"flex " ,marginLeft:"30px", marginTop:"10px",backgroundColor:"rgb(241 243 241)",width:"56pc",padding:"5px",borderRadius:"10px"}}>
                <img src={`${currentChatUser?.profile}`} className="userProfile" alt="" />
                <p style={{marginTop:"10px",marginLeft:"10px"}}>{currentChatUser?.username}</p>
            </div>
            <div className='msgContainer'>
                <div style={{display:"flex" , alignItems:"center" , marginLeft:"30px", backgroundColor:"rgb(241 243 241)" ,marginTop:"10px",padding:"3px",borderRadius:"10px",width:"40%",marginTop:"10px"}}>
                    <img src={`${profile}`} className="chatuserProfile" alt="" />
                    <p style={{textAlign:"start",marginLeft:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectusLorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus.</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , marginLeft:"30px", backgroundColor:"rgb(241 243 241)" ,marginTop:"10px",padding:"3px",borderRadius:"10px",width:"40%",marginTop:"10px" ,marginLeft:"500px"}}>
                    
                    <p style={{textAlign:"start",marginLeft:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus.</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , marginLeft:"30px", backgroundColor:"rgb(241 243 241)" ,marginTop:"10px",padding:"3px",borderRadius:"10px",width:"40%",marginTop:"10px"}}>
                    <img src={`${profile}`} className="chatuserProfile" alt="" />
                    <p style={{textAlign:"start",marginLeft:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus</p>
                </div>
                <div style={{display:"flex" , alignItems:"center" , marginLeft:"30px", backgroundColor:"rgb(241 243 241)" ,marginTop:"10px",padding:"3px",borderRadius:"10px",width:"40%",marginTop:"10px" ,marginLeft:"500px"}}>
                    
                    <p style={{textAlign:"start",marginLeft:"10px"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio, a facere cumque molestias amet delectus.</p>
                </div>
               
            </div>
            <div className='msgSendercontainer'>
                    <input type="text" name='' id='' placeholder='write your message' className='msgInput'/>
                    <button className='msgbutton'>send</button>
            </div>
        </div>
    </div>
  )
}
