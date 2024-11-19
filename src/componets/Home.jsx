import React from 'react'
import "../assets/css/Home.css"
import CustomSlider from './CustomSlider'
import "../assets/css/Footer.css"




const Home = () => {
  return (
    <>
      <section className='home_section'>

        <section className='benner_Section'>
          <div className='benner_part'>
            <div className='benner_text_part'>
              <h1>Personal injury correctly visualized!</h1>
              <h4>Software for online preparation and maintenance of
                damage reports, including calculation of statutory interest.</h4>
            </div>
          </div>
          <section className='slider_Section'>
            <CustomSlider/>
          </section>
        </section>
        <section className='slider_Section1 mt-5'>
            <CustomSlider/>
          </section>


        <div className='container'>
          <section className='typewriter_section'>
            <div className='typewriter_text_part'>
              <h4>Do you still use a Typewriter?</h4>
              <p>Damage reports are often still kept in Excel and sometimes even in Word. The self-developed model is at least as sacred as the typewriter was when the computer came.</p>
            </div>
            <div className='coloroverlap'>
              
            </div>
            

            
          </section>
        </div>


          <section className='OnlineSchadestaat'>
        <div className='container'>
            <div className='info_section'>
              <div className="text-container">
                <h2>What is OnlineSchadestaait?</h2>
                <p>
                  OnlineSchadestaait is the portal where you as a practitioner can
                  easily build up and maintain the damage report. With automatic
                  calculation of interest, settlement of advances, guidelines of the
                  Personal Injury Council, portal to give clients access and much more.
                </p>

                <div className="image-container">
                  <img src="src/assets/img/home-img/onlineschadel.png"
                    alt="OnlineSchadestaait"
                    className="responsive-image" />
                </div>
              </div>

              <div className='image_hide'>
              <div className="image-container">
                  <img src="src/assets/img/home-img/onlineschadel.png"
                    alt="OnlineSchadestaait"
                    className="responsive-image" />
                </div>
              </div>
            </div>
        </div>
          </section>


        <section className='Benefits_section'>
          <div className='container'>
            <div className='Benefits_part'>
              <div className='Benefits_heading'>
                <h1>Benefits of OnlineSchadestaat</h1>
                <a href=""><button>View All <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="" /></button></a>
              </div>
            </div>

            <div className='Benefits_card'>
              <div className='row gx-5'>
                <div className='col-lg-6 col-12 '>
                  <div className='Calculation_card'>
                    <div className='logo_part'>
                      <div className='cal_log'>
                        <div><img src="src/assets/img/home-img/calculation.svg" alt="" /></div>
                      </div>
                      <div className='arrow_log'>
                        <a href=""><button><img src="src/assets/img/home-img/black-cross-arrow.svg" alt="" /></button></a>
                      </div>
                    </div>
                    <div className='Calculation_info'>
                      <h4>Calculation of the (statutory) interest</h4>
                      <p>With automatic calculation of the (legal) interest, whereby received advances are also settled according to the rules.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 col-12'>
                  <div className='comunitty_card'>
                    <div className='logo_part'>
                      <div className='comunitty_log'>
                        <div><img src="src/assets/img/home-img/comunitty.svg" alt="" /></div>
                      </div>
                      <div className='arrow_log'>
                        <a href=""><button><img src="src/assets/img/home-img/black-cross-arrow.svg" alt="" /></button></a>
                      </div>
                    </div>
                    <div className='comunitty_info'>
                      <h4>Easy management of costs and advances</h4>
                      <p>With automatic calculation of the (legal) interest, whereby received advances are also settled according to the rules.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-4 col-12'>
                  <div className='pdf_card'>
                    <div className='pdf_part'>
                      <div className='pdf_logo'>
                        <div><img src="src/assets/img/home-img/pdf.svg" alt="" /></div>
                      </div>
                      <div className='arrow_log'>
                        <a href=""><button><img src="src/assets/img/home-img/black-cross-arrow.svg" alt="" /></button></a>
                      </div>
                    </div>
                    <div className='pdf_info'>
                      <h4>Easy management of costs and advances</h4>
                      <p>Automatic conversion of underlying documents to PDF, merging and providing endpapers everything bundled together for the opposing party or the court with just a few mouse clicks.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-12 '>
                  <div className='Guidelines_card'>
                    <div className='Guidelines_part'>
                      <div className='Guidelines_logo'>
                        <div><img src="src/assets/img/home-img/puzzels.svg" alt="" /></div>
                      </div>
                      <div className='arrow_log'>
                        <a href=""><button><img src="src/assets/img/home-img/black-cross-arrow.svg" alt="" /></button></a>
                      </div>
                    </div>
                    <div className='Guidelines_info'>
                      <h4>Easy management of costs and advances</h4>
                      <p>Automatic conversion of underlying documents to PDF, merging and providing endpapers everything bundled together for the opposing party or the court with just a few mouse clicks.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-12 '>
                  <div className='warning_card'>
                    <div className='warning_part'>
                      <div className='warning_logo'>
                        <div><img src="src/assets/img/home-img/warning.svg" alt="" /></div>
                      </div>
                      <div className='arrow_log'>
                        <a href=""><button><img src="src/assets/img/home-img/black-cross-arrow.svg" alt="" /></button></a>
                      </div>
                    </div>
                    <div className='warning_info'>
                      <h4>Easy management of costs and advances</h4>
                      <p>Automatic conversion of underlying documents to PDF, merging and providing endpapers everything bundled together for the opposing party or the court with just a few mouse clicks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

          <div className='container'>
        <section className='obligation_demo_section'>
        <div className='info_section'>
              <div className="text-container">
                <h2>A free, no-obligation demo</h2>
                <p>
                If you also want to use all the benefits of OnlineSchadestaat or want more information, please contact us for a no-obligation introduction and demonstration. This can be done, if you want, on the basis of a number of current affairs of your office!
                </p>
                <div className='obligation_btn'>
                <button>Contact us <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" /></button>
                </div>

                <div className="image-container">
                  <img src="src/assets/img/home-img/obligation.png"
                    alt="OnlineSchadestaait"
                    className="responsive-image" />
                </div>
              </div>

              <div className='image_hide'>
              <div className="image-container">
                  <img src="src/assets/img/home-img/obligation.png"
                    alt="OnlineSchadestaait"
                    className="responsive-image" />
                </div>
              </div>
            </div>
        </section>
        </div>

    
        <section className='news_section'>
          <div className='container'>
            <div className='news_part'>
              <div className='news_heading'>
                <h1 className='heading1'>The latest OnlineSchadestaat News</h1>
              </div>
              <div className='news_report'>
                <div className='row'>

                  <div className='col-12 col-lg-6'>
                    <div className='news_card'>
                      <div className='report_img'>
                        <img src="src/assets/img/home-img/report 1.png" alt="Report 1" />
                      </div>
                      <div className='news_info'>
                        <h4>Online Damage Report 3.1</h4>
                        <p>
                          Today we have made the new version of the software available.
                          This version contains the following innovations and improvements:
                          Share file with counterpartyIt is possible to give the counterparty access…
                        </p>
                        <div className='border'></div>
                        <div className='date_part'>
                          <h6>February 17, 2024</h6>
                          <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon" />
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className='col-md-12 col-lg-6'>

                    <div className='news_card1'>
                      <div className='report_img1'>
                        <img src="src/assets/img/home-img/report 2.png" alt="Report 2" />
                      </div>
                      <div className='news_info'>
                        <h4>Online Damage Report 3.1</h4>
                        <p>
                          Today we have made the new version of the software available.
                          This version contains the following innovations and improvements:
                          Share file with counterpartyIt is possible to give the counterparty access…
                        </p>
                        <div className='border'></div>
                        <div className='date_part'>
                          <h6>February 17, 2024</h6>
                          <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon" />
                        </div>
                      </div>
                    </div>


                    <div className='news_card1'>
                      <div className='report_img1'>
                        <img src="src/assets/img/home-img/report 3.png" alt="Report 3" />
                      </div>
                      <div className='news_info'>
                        <h4>Online Damage Report 3.1</h4>
                        <p>
                          Today we have made the new version of the software available.
                          This version contains the following innovations and improvements:
                          Share file with counterpartyIt is possible to give the counterparty access…
                        </p>
                        <div className='border'></div>
                        <div className='date_part'>
                          <h6>February 17, 2024</h6>
                          <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



      </section>
    </>
  )
}

export default Home
