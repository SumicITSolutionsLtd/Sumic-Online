import React from 'react'
import "../../../styles/hero_section.css"
import { Menu, Search, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';


function HeroSection() {
    return (

        <div className='alibaba-hero'>

                {/* hero content */}
                <div className='hero_content'>

                    <h1 className='hero_title'>The leading B2B ecommerce platform for global trade</h1>

                    <div className='hc_top'>
                        <h2 className='hc_links'>Products</h2>
                        <h2 className='hc_links'>Manufacturers</h2>
                        <h2 className='hc_links'>Regional supplies</h2>
                    </div>
                    {/* searchbar */}
                    <div className="">
                        <div className='search-area'>
                            <div className="search-box">
                                <input type="text" placeholder="sneakers" />
                                <button className="search-btn">
                                    <Search className='hc_icon' size={15} />
                                    <p className='hc_btn_links'>Search</p>
                                </button>

                            </div>
                            <button className="image-btn">
                                <Camera className='hc_icon' size={15} />
                                <p className='hc_btn_links'>Image Search</p>
                            </button>
                        </div>



                        <div className="frequent-search">
                            <span>Frequently searched: </span>
                            <a href="#">iphones 15 pro max</a>
                            <a href="#">watch for men</a>
                            <a href="#">earbuds</a>
                            <a href="#">drone</a>
                            <a href="#">shoes men</a>
                            <a href="#">electric scooter</a>
                        </div>
                    </div>
                </div>


        </div>


    )
}

export default HeroSection