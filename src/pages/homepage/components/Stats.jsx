import React from 'react'
import "../../../styles/stats_area.css"

function Stats() {
  return (
    <div className='stats-section'>

        <h2 className='stats_title'>Exlore millions of offerings tailored to your business needs</h2>

        <div className='stats-area'>
        <div className='top-stats'>
                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>10+</h3>
                <p className='stats-item-desc'>
                    Businesses
                </p>
            </div>

                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>50+</h3>
                <p className='stats-item-desc'>
                    suppliers
                </p>
            </div>
        </div>
         <div className='top-stats lower-stats'>
                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>590</h3>
                <p className='stats-item-desc'>
                    products
                </p>
            </div>

                <div className='stats-item border-l'>
                <h3 className='stats-item-title'>30+</h3>
                <p className='stats-item-desc'>
   regions
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Stats