import React from 'react'
import { WorkHelper } from '../helper/WorkHelper'

function Work() {
  return (
    <div className='work'>
        <h1 className='workTitle'>My Works</h1>
        <div className='workList'>{WorkHelper.map((workItem , key)=>{
            return <div className='workItem'> 
            <div> <img src={workItem.image} /> </div>
            <h3>{workItem.name}</h3>
             </div>
        })}</div>
      
    </div>
  )
}

export default Work
