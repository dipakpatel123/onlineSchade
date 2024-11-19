import React from 'react'
import "../assets/css/Report.css"

const Report = () => {
  return (
    
    <section className='news_section'>
    <div className='container'>
      <div className='news_part'>
        <div className='news_heading'>
          <h1>The latest OnlineSchadestaat News</h1>
        </div>
        <div className='news_report'>
          <div className='row'>
            {/* Left Column */}
            <div className='col-12 col-md-6 mb-4'>
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
  
            {/* Right Column */}
            <div className='col-12 col-md-6'>
              {/* First Card in Right Column */}
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
  )
}

export default Report
