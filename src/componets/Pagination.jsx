import React, { useState } from 'react';
import {Pagination} from 'react-bootstrap';
import "../assets/css/Pagination.css";
import newsData from './Data';
 


const NewsSection = () => {
    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);
  
    const totalPages = Math.ceil(newsData.length / itemsPerPage);
   
    const currentItems = newsData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className="news-section">
            
        <div className='row justify-content-center'>
          {currentItems.map((item, index) => (
            <div key={index} className='col-xs-12 col-lg-4 col-md-6 mb-4'>
            
              <div className="h-100">
              <div className='Report_card'>
                <img src={item.imageUrl} alt="news" className='report_img' />
                <div className='report_information'>
                <h5 className='card_title'>{ item.title}</h5>
                <p className='card_description'>{item.description}</p>
                <div className='border'></div>
                <div className='d-flex justify-content-between align-items-center'>
                        <p className='report_Date'>{item.date}</p>
                        <img src="src/assets/img/home-img/gray-cross-icon.svg" alt=""  className='arrowhelight'/>

                  </div>
                  </div>
                  </div>
              </div>
              </div>
            
            
          ))}
          </div>
       
        
        
        <div className='page_btn'>
        <Pagination className="justify-content-center">
          {/* <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} /> */}
          <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
          {[...Array(totalPages)].map((_, page) => (
            <Pagination.Item
              key={page + 1}
              active={page + 1 === currentPage}
              onClick={() => handlePageChange(page + 1)}
            >
              {page + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
          {/* <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} /> */}
        </Pagination>
        </div>
         
      </div>
    );
  };

export default NewsSection;
