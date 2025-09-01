import React from 'react'
import "../../../styles/from_factory.css"
import Sample from "../../../media/sample.jpg"
import Live from "../../../media/live.jpg"
import Connect from "../../../media/connec.jpg"


function FromFactory() {
  return (
    <div className='direct-from-factory'>
        <h2 className='dff-title'>Source direct-from-factory</h2>
        <div className='dff-cards'>
            <div className='dff-card'>
                <img src={Sample} alt="sample" />
                <div className='elevate-me'>
                <p className='ev-ttile'>Get Samples</p>
                <p className='ev-action'>View more</p>
                </div>
            </div>
            <div className='dff-card'>
                <img src={Connect} alt="connect" />
            </div>
            <div className='dff-card'>
                <img src={Live} alt="live" />
            </div>
        </div>
    </div>
  )
}

export default FromFactory