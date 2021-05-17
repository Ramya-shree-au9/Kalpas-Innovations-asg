import React, { useState } from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'

export const Sidebar = (props) => {
    const [verToggleColor,setVerToggleColor] = useState('')
    const [horiToggleColor,setHoriToggleColor] = useState(true)

    const clickhandler=(value)=>{
        props.view(value)
        if(value === 'verti'){
            setVerToggleColor(true)
            setHoriToggleColor(false)
        }
        else{
            setVerToggleColor(false)
            setHoriToggleColor(true)
        }
    }

    return (
        <div className='sidebarsec'>
        <div className='imgsection'>

            <div className='img'>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt=''>
                    </img>
            </div>
          
            <div className='namesection'>
                <div><b>Hi Redex</b> </div>
                <div>Have you new</div>
            </div>
        </div>
        {props.page === 'toggle' &&
        
        <div className='togsection'>
            <p className='head'>View Toggle</p>
            
               <button id='icon' className={verToggleColor && 'btncolor'}  onClick={()=>clickhandler('verti')}> <span  ><i class="fas fa-grip-lines-vertical"></i></span></button>
               <button className={horiToggleColor &&'btncolor'}  onClick={()=>clickhandler('hori')}><span><i class="fas fa-align-justify"></i></span></button>
             
        </div>
       
            }
        <div className='togsection'>
            <p className='head'>Have a Feedback?</p>
            
               <Link to='/feedback' className='feedbackicon' style={{textDecoration:"none",color:"black"}}>We're Listening!</Link>
            </div>
           
        </div>
    )
}

export default Sidebar
