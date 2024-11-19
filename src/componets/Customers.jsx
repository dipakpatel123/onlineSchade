import React from 'react'
import "../assets/css/Customer.css"
import Navigation from './Navigation'

const Customers = () => {
  return (
    <>
        <section className='customer_section'>
       
        <div className='container'>
            <div className='customer_part'>
                <div className='customer_heading'>
                    <h1>Our Customers</h1>
                </div>
                <div className='customer_img'>
                    <img src="src/assets/img/customer-img/customer.png" alt="" />             
                </div>
            </div>
            </div>
        </section>
    </>
  )
}

export default Customers
