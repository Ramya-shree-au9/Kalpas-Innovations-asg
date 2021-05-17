import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Display from './datadisplay'
import Feedback from './Feedback'

export const Routing = () => {
    return (
        <BrowserRouter>
            <Route exact path='/' component={Display}></Route>
            <Route exact path='/feedback' component={Feedback}></Route>
        </BrowserRouter>
        
    )
}

export default Routing