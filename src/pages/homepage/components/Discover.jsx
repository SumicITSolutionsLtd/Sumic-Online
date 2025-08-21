import React from 'react'
import "../../../styles/discover.css"
import J4 from "../../../media/j4.jpg"
import J1 from "../../../media/j1.jpg"
import J2 from "../../../media/jmain.jpg"
import J3 from "../../../media/j3.jpg"
import Rect from "../../../media/rec.png"

function Discover() {
return (
    <div className="opportunities">
      <h2 className='discover_title'>Discover your next business opportunity</h2>


      <div className="opportunity-columns">
        {/* Column 1: Top Ranking */}
        <div className="opportunity-col">
          <div className="col-header">
            <h3>Top ranking</h3>
            <a href="#">View more</a>
          </div>
              {/* <div className="product-info">
              <strong>Hot selling</strong>
              <p>LED Tail Lights</p>
              <span className="tag">4.1 ★</span>
            </div> */}
          <div className="product-card">
            <img src={J4} alt="Hot selling" />
          </div>
          <div className="product-grid">
            <img className='op-extra' src={J1} alt="extra1" />
            <img className='op-extra' src={J1} alt="extra2" />
          </div>
        </div>

        {/* Column 2: New arrivals */}
        <div className="opportunity-col">
          <div className="col-header">
            <h3>New arrivals</h3>
            <a href="#">View more</a>
          </div>
          <div className="product-grid big">
            <img className='quad' src={J2} alt="new1" />
            <img className='quad' src={J3} alt="new2" />
            <img className='quad' src={J3} alt="new3" />
            <img className='quad' src={J2} alt="new4" />
          </div>
          <div className="product-card small">
            <img src={Rect} alt="This week" />
            <div className="product-info">
              <strong>New this week</strong>
              <p>Products f`rom Verified Suppliers only</p>
            </div>
          </div>
        </div>

        {/* Column 3: Top deals */}
        <div className="opportunity-col">
          <div className="col-header">
            <h3>Top deals</h3>
            <a href="#">View more</a>
          </div>
          <div className="product-card top-deals-top">
            <img style={{width: '30%'}} 
            className='deals-top-img' src={J1} alt="deal1" />
            <div className="product-info smaller">
              <p>180-day lowest price</p>
            </div>

          
          </div>
          <div className="product-card">
          <div className="product-info">
              <p>Deals on best sellers</p>
            </div>
            <img src={J4} alt="deal2" />    
          </div>
        </div>
      </div>
    </div>
  );
}

export default Discover