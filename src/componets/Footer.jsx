import React from 'react'
 
const Footer = () => {
    return (
        <>
            <section className="footer_section">
                <div className="footer_part">

                    <div className="footer_contain">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="company_info">
                                    <div className="crediArc_img">
                                        <img src="src/assets/img/home-img/website-Logo.svg" alt="" />
                                    </div>
                                    <p className="Body_B1">OnlineSchadestaat was developed after questions from the market because a handy tool for drawing up and maintaining damage reports did not exist. The functionality is continuously expanded based on the wishes we hear from our customers. OnlineSchadestaat is 100% independent and therefore not connected to any advocate or insurer.</p>

                                </div>

                            </div>

                            <div className="col-lg-8 col-md-12 ">
                                <div className="second_part">
                                    <div className="solution_part">
                                        <div className="solution_text">
                                            <h1>Company</h1>
                                            <p>Why work with OnlineSchadestaat?</p>
                                            <p>The benefits of OnlineSchadestaat</p>
                                            <p>Our customers</p>
                                            <p>Who are we</p>
                                            <p>News</p>
                                            <p>Contact</p>
                                             
                                        </div>
                                    </div>

                                    <div className="company_part">
                                        <div className="company_link">
                                            <h1>legal</h1>
                                            <p>General terms&Conditions</p>
                                            <p>Disclaimer</p>
                                            <p>Privacy Policy</p>

                                        </div>
                                    </div>

                                    <div className="legal_part">
                                        <h1>Online Damage Statement BV</h1>
                                        <div className='address'>
                                            <a href=""><img src="src/assets/img/home-img/location.svg" alt="" /></a>
                                            <p>Strandweg 633891 AG Zeewolde</p>
                                        </div>
                                        <div className='call'>
                                            <a href=""><img src="src/assets/img/home-img/call.svg" alt="" /></a>
                                            <a href="tel:0365245576" className="phone-link">
                                                036-5245576
                                            </a>
                                        </div>
                                        <div className='email'>
                                            <a href=""><img src="src/assets/img/home-img/email.svg" alt="" /></a>
                                            <a href="mailto:korapanadipak@gmail.com" className="email-link">
                                                korapanadipak@gmail.com
                                            </a>
                                        </div>

                                        {/* <div className="card_part_btn">
                                            <a href="#"><button>Try it Now  <img src="src/assets/img/home-img/orange-arrow.svg" alt="" />
                                            </button></a>
                                        </div> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright_text">
                        <h2>Copyright 2020 OnlineSchadestaat BV</h2>
                    </div>

                </div>


            </section>
        </>
    )
}

export default Footer
