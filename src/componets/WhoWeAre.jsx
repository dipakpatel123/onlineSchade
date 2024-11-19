import React from 'react'
import "../assets/css/WhoweAre.css"

const WhoWeAre = () => {
    return (
        <>
            <section className='whoweare_section'>
                <div className='Who_We_are_part'>
                    <div className='container'>
                        <div className='title_part'>
                            <h2 className="heading">Who are We</h2>

                        </div>



                        <div className='who_we_are_img'>
                            <div className='container'>
                                <img src="src/assets/img/who-are-we-img/whowearebg.png" alt="" />
                            </div>
                        </div>

                        <div className='title_part'>
                            <h2 className="heading1">What is OnlineSchadestaat?</h2>
                            <div className='dispriction'>
                                <p>OnlineSchadestaat BV is a specialized ICT company that deals with customized software for the personal injury industry.</p>
                                <p>OnlineSchadestaat BV is 100% independent and therefore not connected to any interest group or insurer. We listen carefully to our customers. The functionality of our software is continuously expanded based on the wishes we hear from the market.</p>
                            </div>


                        </div>

                        <div className='experience'>
                            <h2>Want to know more or experience it yourself?</h2>
                            <div className='btn_contact'>
                            <button className='w-15'> Contact Us <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" /></button>
                            
                            </div>
                            <div className='ellipse_top'>
                  <img src="src/assets/img/news-img/Ellipse-bottom.svg" alt="" />
                </div>
                <div className='ellipse_bottom'>
                  <img src="src/assets/img/news-img/Ellipse-top.svg" alt="" />
                </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre
