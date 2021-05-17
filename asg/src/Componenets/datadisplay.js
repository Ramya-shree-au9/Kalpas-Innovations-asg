import React,{useEffect, useState} from 'react'
import Sidebar from './Sidebar'
import './display.css'
import axios from 'axios'

export const Datadisplay = () => {
    const [details,setDetails] = useState('')
    const [page,setPage] = useState(1)
    const [limit,setLimit] = useState(5)
    const [pagedetail,setPagedetail] = useState()
    const [position,setPosition] = useState('hori')

    useEffect(() => {
        const fetchfun=async()=>{
            var data =await axios.get('https://api.first.org/data/v1/news')
            setDetails(data.data.data)
        }
        fetchfun()
       
       
    }, [])

    console.log(page === 2)

    useEffect(() => {
        var startIndex = (page-1) * limit
        var endIndex = page * limit
        var results = {}
    
        results = details.slice(startIndex,endIndex)
        setPagedetail(results)
    }, [details,page,limit])


    console.log(details && (details[0].summary.slice(0, 15)))
    const pageclick1=()=>{
        setPage(1)
    }
    const pageclick2=()=>{
        setPage(2)
    }
    const pageclick3=()=>{
        setPage(3)
    }

    const view=(data)=>{
        setPosition(data)
        if(data === 'verti'){
            setLimit(6)
        }else{
            setLimit(5)
        }
    }

    console.log(position)
    return (
        <div className='datadisplay row'>
            <div className='col-md-3 sidebar'>
                <Sidebar view={view} page={"toggle"}/>
            </div>
            <div className='col-md-9'>
                <div className='horisection'>
                {position === 'hori' && pagedetail && pagedetail.map(item=> {
                    
                    return(
                        <div className='rowsec'>
                        <div className='detsection '>
                            <div className='row'>
                                <div className='col-md-2 imgsec'>
                                    <img src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' alt=''></img>
                                </div>
                                <div className='col-md-10'>
                                <div className='titlesec'>{item.title.slice(0,40)}..</div>
                                {item.summary &&
                                <div className='summarysec'>{(item.summary.slice(0,50))}...</div>
                                }
                                <div className='datecolor'>{item.published}</div>
                               
                                </div>
                            
                            </div>
                          
                        </div>
                        <div className='deletesection'>
                        <i  class="fas fa-times"></i>
                        </div>
                        </div>
                    
                    )
                
                }
               
                )}
                </div>
                <div className='vertidisplay'>
                 {position === 'verti' && pagedetail && pagedetail.map(item=> {
                    
                    return(
                        <div className='vertidata'>
                            <div className='deletesecvert'>
                                <i  class="fas fa-times"></i>
                                </div>
                            <div className='titlesec'>{item.title.slice(0,25)}..</div>
                            {item.summary &&
                                <div className='summarysec'>{(item.summary.slice(0,35))}...</div>
                                }
                                <div className='datecolor'>{item.published}</div>
                                
                                <img className='imgverti' src='https://images.ctfassets.net/hrltx12pl8hq/4plHDVeTkWuFMihxQnzBSb/aea2f06d675c3d710d095306e377382f/shutterstock_554314555_copy.jpg' alt=''></img>
                                
                        </div>
                    )}
                 )}
                 </div>
                <p className='pagesetup'><span className={page === 1?'color':'pagenumber'} onClick={pageclick1}>1</span>
                 <span className={page === 2?'color':'pagenumber'} onClick={pageclick2}>2</span>
                <span className={page === 3?'color':'pagenumber'} onClick={pageclick3}>3</span></p>
            </div>
        </div>
    )
}

export default Datadisplay