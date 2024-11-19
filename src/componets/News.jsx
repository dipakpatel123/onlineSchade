import React from 'react'
import NewsSection from './Pagination'
// import "../assets/css/Home.css"
import "../assets/css/News.css"

const News = () => {
  return (
    <>

         <section className='news_section'>
    <div className='container'>
      <div className='news_part'>
        <div className='news_heading'>
          <h1>Recent News Posts</h1>
        </div>
        <div className='news_report'>
          <div className='row'>
            {/* Left Column */}
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
                    <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon"  className='arrowhelight'/>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column */}
            <div className='col-12 col-lg-6'>
              
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
                    <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon"  className='arrowhelight'/>
                  </div>
                </div>
              </div>
  
              {/* Second Card in Right Column */}
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
                    <img src="src/assets/img/home-img/gray-cross-icon.svg" alt="Icon"  className='arrowhelight'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
        
        <section className='pagination_section'>
        <div className='container'>
        <div className='news_heading'>
          <h1>News</h1>
        </div>
        <NewsSection/>
        </div>
        </section>

        <section className='Newsletter_section'>
                <div className='container'>
            <div className='Newsletter_part'>
                    <div className='informtion'>
                        <h1>Newsletter</h1>
                        <p>Receive legal insights, case studies, and expert advice straight to your inbox to help you navigate the law.</p>
                        <div className='email_and_subscribe'>
                            <input type="email" placeholder='Enter your email' />
                            <button className='subscribe_btn'>subscribe <img src="src/assets/img/home-img/white-cross-arrow.svg" alt="" /></button>
                        </div>
                        <a href="" className='privacy'> <p className='privacy'>We care about your data in our <span>privacy policy</span></p></a>
                         
                    </div>
                <div className='ellipse_top'>
                  <img src="src/assets/img/news-img/Ellipse-bottom.svg" alt="" />
                </div>
                <div className='ellipse_bottom'>
                  <img src="src/assets/img/news-img/Ellipse-top.svg" alt="" />
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default News
