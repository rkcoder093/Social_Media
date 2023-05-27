import React, { useEffect } from 'react'
import "./contact.css";
import profile from "../Images/image2.jpg"
import Chatcontainer from '../ChatContainer/Chatcontainer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
export default function Contact() {
  const userDetails = useSelector((state)=>state.user);
  let user = userDetails.user
  let id = user.other._id;
  const accesstoken =user.accessToken;
  const [users , setusers] = useState([]);
  const [currentChatUser ,setcurrentChatUser] =useState('');
 console.log(id);
  console.log(accesstoken);
    useEffect(() => {
        const getuser = async()=>{
         try {
           const res = await axios.get(`http://localhost:5000/api/post/following/${id}` , {
             headers:{
               token:accesstoken
             }
           })
           setusers(res.data);
         } catch (error) {
           
         }
        }
        getuser();
       }, [])
  // console.log(users)
  const handleUser= (e)=>{
    setcurrentChatUser(e);
  }
  return (
    <div className='mainContactContainer'>
        <div>
            <div style={{width:"20pc" , padding:"10px"}}>
                <input type="search" placeholder='Search your Friend' className='searchbarforcontact'/>
            </div>
                <div className='usersDetailContainer'>
                    {users.map((item)=>
                    <div>
                    {item?._id !== id ?
                    <div className='userContainer' onClick={(e) => handleUser(item)}>
                         <img src={`${item?.profile}`} className="chatuserimage" alt="" />
                    <div style={{marginLeft:"10px"}}>
                        <p style={{color:"black" , textAlign:"start" , marginTop:"5px", fontSize:"15px"}}>{item.username}</p>
                        <p style={{color:"black" , textAlign:"start" ,  marginTop:"-16px", fontSize:"14px"}}>Open your Message</p>
                    </div>
                    </div>:""
                         }
                    </div>
                      
                    )}

                </div>
        </div>
        <Chatcontainer currentChatUser={currentChatUser}/>
    </div>
  )
}
  