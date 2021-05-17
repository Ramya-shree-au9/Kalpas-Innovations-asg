import React,{useState} from 'react'
import Sidebar from './Sidebar'
import './feedback.css'
import * as EmailValidator from 'email-validator';
import API from 'phone-number-validation'
var api = new API({
    access_key: ['83f331fa39310a332cab920bd1c56186']
});

export const Feedback = () => {
    const [emailErr,setmailErr] = useState('Please Enter valid email ID')
    const [phoneErr,setphoneErr] = useState('Please Enter valid Phone number')
    const [fname,setFname] = useState()
    const [lname,setLname] = useState()
    const [email,setEmail] = useState()
    const [address,setAddress] = useState()
    const [country,setCountry] = useState()
    const [phonumber,setPhonenum] = useState()

    const emailvalidate=(e)=>{
       if(!EmailValidator.validate(e.target.value)) {
        setmailErr('Please Enter valid email ID')
       }else{
        setmailErr('')
       }
    }

    const phonenumbervari=(e)=>{
       if(e.target.value.length < 10) {
        setphoneErr('Please Enter valid Phone number')
       }else{
        setphoneErr('')
       }
    }

    const submitfeedback = ()=>{
        if(!emailErr && !phoneErr){

        }
    }
     
    // const phonenumbervari =(e)=>{
    //     api.validate(e.target.value, function (err, result) {
    //         if (err) {
    //             return console.log('Validate Callback (Error): ' + JSON.stringify(err));
    //         }
    //         console.log('Validate Callback (Success): ' + JSON.stringify(result));
    //     });
    // }
    
    return (
        <div className='datadisplay  row'>
            <div className='col-md-3 sidebar'>
                <Sidebar page={"feed"}/>
            </div>
            <div className='col-md-9 feeddisplay'>
                <div ><b>Thank you so much for taking time!</b></div>
                <p>Please provide below details</p>
                <div className='inputbox'>
                    <label>First Name:</label>
                    <input type='name' placeholder='First name' onChange={(e)=>setFname(e.target.value)}></input>
                </div>
                <div className='inputbox'>
                    <label>Last Name:</label>
                    <input type='name' placeholder='Last name' onChange={(e)=>setLname(e.target.value)}></input>
                </div>
                <div className='inputbox'>
                    <label>Adress:</label>
                    <textarea cols='26' rows='3' type='text' placeholder='Enter your adress' onChange={(e)=>setAddress(e.target.value)}></textarea>
                </div>
                <div className='inputbox'>
                    <label>Country:</label>
                    <input type='text' placeholder='Enter your Country' onChange={(e)=>setCountry(e.target.value)}></input>
                </div>
                <div className='inputbox'>
                    <label>Email ID:</label>
                    <input onChange={emailvalidate} type='email' placeholder='Enter your email ID' onChange={(e)=>setEmail(e.target.value)} ></input><span className='err'>{emailErr}</span>
                </div>
                <div className='inputbox'>
                    <label>Phone Number:</label>
                    <span className='countrycode'>+91</span><input type='email' onChange={phonenumbervari} placeholder='Phone number' onChange={(e)=>setPhonenum(e.target.value)}></input> <span className='err'>{phoneErr}</span>
                </div>
                <button className='btn btn-success feedsubmit' onClick={submitfeedback}>Submit feedback</button>
        </div>
        </div>
    )
}

export default Feedback
