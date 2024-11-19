import React from 'react'
import "../assets/css/GetIntoch.css"

const GetIntoch = () => {
    return (
        <>
            <div className='Get_in_toch'>
                <div className='container'>
                    <div>
                        <h2 className="heading">Get In Touch</h2>
                        <p className="Body-B1">
                            You can also contact us directly through phone or email for any urgent inquiries.
                            We look forward to connecting with you!
                        </p>

                        <div className='row justify-content-center'>
                            <div className='col-lg-4 col-sm-6 mb-4'>
                                <div className="contact-card">
                                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.004 19.95L34.324 8.84603C37.724 7.22603 41.272 10.776 39.654 14.178L28.55 37.496C27.032 40.682 22.432 40.486 21.192 37.18L19.14 31.702C18.9395 31.1676 18.6269 30.6823 18.2233 30.2787C17.8197 29.8751 17.3344 29.5625 16.8 29.362L11.32 27.308C8.01597 26.068 7.81797 21.468 11.004 19.95Z" stroke="#F47B34" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <circle cx="38.5" cy="38" r="20" fill="#F47B34" fill-opacity="0.08" />
                                    </svg>
                                    <h5 className="contact-title">Our Location</h5>
                                    <p>OnlineSchadestaan BV<br />Strandweg 633891 AG Zeewolde</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 mb-4'>
                                <div className="contact-card">
                                    <svg width="59" height="58" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9375 8.23168L9.42138 9.59201C9.6218 10.278 9.90176 10.9382 10.2555 11.5592C10.6246 12.1756 11.0692 12.7435 11.5792 13.2495L13.5427 12.6445C14.6427 12.3053 15.8435 12.6537 16.575 13.5245L17.6934 14.8555C18.1462 15.3898 18.3732 16.0794 18.3263 16.7782C18.2794 17.477 17.9623 18.1301 17.4422 18.5992C15.618 20.2638 12.8094 20.8267 10.7065 19.1748C8.85757 17.7205 7.29368 15.9366 6.09388 13.9132C4.89102 11.8997 4.08569 9.67414 3.72155 7.35718C3.31821 4.75018 5.22671 2.66385 7.60638 1.95251C9.02538 1.52718 10.5397 2.25685 11.0604 3.61718L11.6745 5.22135C12.0779 6.27735 11.7882 7.46901 10.9375 8.23168Z" fill="#FEF2EA" />
                                    </svg>
                                    <h5 className="contact-title">Telephone</h5>
                                    <a href="tel:0365245576" className="phone-link">
                                        036-5245576
                                    </a>

                                </div>
                            </div>
                            <div className='col-lg-4 col-sm-6 mb-4'>
                                <div className="contact-card">
                                    <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="38.5" cy="38" r="20" fill="#F47B34" fill-opacity="0.08" />
                                        <g clip-path="url(#clip0_0_546)">
                                            <path d="M44 42H5C2.51 42 0.5 39.99 0.5 37.5V10.5C0.5 8.01 2.51 6 5 6H44C46.49 6 48.5 8.01 48.5 10.5V37.5C48.5 39.99 46.49 42 44 42ZM5 9C4.16 9 3.5 9.66 3.5 10.5V37.5C3.5 38.34 4.16 39 5 39H44C44.84 39 45.5 38.34 45.5 37.5V10.5C45.5 9.66 44.84 9 44 9H5Z" fill="#F47B34" />
                                            <path d="M24.4998 28.88C22.3998 28.88 20.4798 28.04 19.0398 26.51L3.28977 9.76999C2.71977 9.16999 2.74977 8.20999 3.34977 7.63999C3.94977 7.06999 4.90977 7.09999 5.47977 7.69999L21.2298 24.44C22.9398 26.27 26.0598 26.27 27.7698 24.44L43.5198 7.72999C44.0898 7.12999 45.0498 7.09999 45.6498 7.66999C46.2498 8.23999 46.2798 9.19999 45.7098 9.79999L29.9598 26.54C28.5198 28.07 26.5998 28.91 24.4998 28.91V28.88Z" fill="#F47B34" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_0_546">
                                                <rect width="48" height="48" fill="white" transform="translate(0.5)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <h5 className="contact-title">E-mail</h5>
                                    <a href="mailto:korapanadipak@gmail.com" className="email-link">
                                        korapanadipak@gmail.com
                                    </a>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GetIntoch
