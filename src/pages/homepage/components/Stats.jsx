import React from 'react'
import "../../../styles/stats_area.css"

function Stats() {
  return (
    <div className='stats-section'>

        <h2 className='stats_title'>Exlore millions of offerings tailored to your business needs</h2>

        <div className='stats-area'>
        <div className='top-stats'>
                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>100M+</h3>
                <p className='stats-item-desc'>
                    Businesses
                </p>
            </div>

                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>100K+</h3>
                <p className='stats-item-desc'>
                    Businesses
                </p>
            </div>
        </div>
         <div className='top-stats lower-stats'>
                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>5,900</h3>
                <p className='stats-item-desc'>
                    product Categories
                </p>
            </div>

                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>200+</h3>
                <p className='stats-item-desc'>
                    countries & regions
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Stats