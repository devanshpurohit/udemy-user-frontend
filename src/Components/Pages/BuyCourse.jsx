import { HiCreditCard } from "react-icons/hi";
import { BiSolidOffer } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faDownload, faStar, faStarHalf, faUser } from "@fortawesome/free-solid-svg-icons";
import { SiPhonepe } from "react-icons/si";

import { useState } from "react";
import { NavLink } from "react-router-dom";



function BuyCourse() {
    const [paymentMethod, setPaymentMethod] = useState("card");
    return (
        <>
            <section className="main-tp-section">
                <div className="main-shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="d-flex align-items-center justify-content-center">
                                <div>
                                    <h3 className="lg_title text-center mb-2">Buy Course</h3>
                                    <div className="admin-breadcrumb">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb custom-breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#" className="breadcrumb-link">
                                                        Home
                                                    </a>
                                                </li>

                                                <li
                                                    className="breadcrumb-item active"
                                                    aria-current="page"
                                                >
                                                    Buy Course
                                                </li>
                                            </ol>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="course-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="course-card">
                                <form action="">
                                    <h5 className="innr-title ">Billing Information</h5>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter Full Name" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <input type="email" name="" id="" className="form-control" placeholder="Enter Email Address" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <select name="" id="" className="form-select">
                                                    <option value="">Country/Regions</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Address(Street Address)" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter City" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="custom-frm-bx">
                                                <select name="" id="" className="form-select">
                                                    <option value="">Select State</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-lg-4">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter Zip Code" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="payment-tp-border">
                                                <h5 className="innr-title ">Payment Method</h5>
                                            </div>
                                        </div>

                                        {/* <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <div className="level-box nw-radio-box">
                                                    <label className="custom-radio">
                                                        Via Credit/Debit Card
                                                        <input type="radio" name="level" checked />
                                                        <span className="checkmark"></span>
                                                    </label>

                                                    <label className="custom-radio">
                                                        Via UPI Payment
                                                        <input type="radio" name="level" />
                                                        <span className="checkmark"></span>
                                                    </label>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="payment-content mb-3">
                                                <h6><span><HiCreditCard className="pay-card-icon" /> </span> Card Payment</h6>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter Name that appear on card" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Enter Card Number" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="Expire Date(MM/YYYY)" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="custom-frm-bx">
                                                <input type="text" name="" id="" className="form-control" placeholder="CVV Number" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="custom-frm-bx">
                                                <div class="d-flex align-items-center gap-2">
                                                    <input type="checkbox" id="check1" class="custom-checkbox" />
                                                    <label for="check1" className='remember-lavel'>Save card details for future purchase</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="payment-tp-border ">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <button className="offer-btn"> <BiSolidOffer className="fz-18" /> Apply Promo Code</button>
                                                </div>
                                            </div>
                                        </div> */}

                                        <>
                                            <div className="col-lg-12">
                                                <div className="custom-frm-bx">
                                                    <div className="level-box nw-radio-box">

                                                        <label className="custom-radio">
                                                            Via Credit/Debit Card
                                                            <input
                                                                type="radio"
                                                                name="level"
                                                                checked={paymentMethod === "card"}
                                                                onChange={() => setPaymentMethod("card")}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                        <label className="custom-radio">
                                                            Via UPI Payment
                                                            <input
                                                                type="radio"
                                                                name="level"
                                                                checked={paymentMethod === "upi"}
                                                                onChange={() => setPaymentMethod("upi")}
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                    </div>
                                                </div>
                                            </div>


                                            {paymentMethod === "card" && (
                                                <>
                                                    <div className="col-lg-12">
                                                        <div className="payment-content mb-3">
                                                            <h6>
                                                                <HiCreditCard className="pay-card-icon" /> Card Payment
                                                            </h6>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="custom-frm-bx">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Name that appear on card"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="custom-frm-bx">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Card Number"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="custom-frm-bx">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Expire Date (MM/YYYY)"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="custom-frm-bx">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="CVV Number"
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="custom-frm-bx">
                                                            <div className="d-flex align-items-center gap-2">
                                                                <input type="checkbox" id="check1" className="custom-checkbox" />
                                                                <label htmlFor="check1" className="remember-lavel">
                                                                    Save card details for future purchase
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>


                                                </>
                                            )}

                                            {paymentMethod === "upi" && (

                                                <>

                                                    <div className="col-lg-12">
                                                        <div className="payment-content mb-3">
                                                            <h6>
                                                                <HiCreditCard className="pay-card-icon" /> UPI Payment </h6>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <div className="custom-frm-bx">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                placeholder="Enter Your UPI Number"
                                                            />

                                                            <div className="payment-method-type">
                                                                <span className="pay-icon"><SiPhonepe /> </span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                        </>
                                        <div className="col-lg-12">
                                            <div className="payment-tp-border">
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <a href="javascript:void(0)" className="offer-btn" data-bs-toggle="modal" data-bs-target="#apply-Coupon">
                                                        <BiSolidOffer className="fz-18" /> Apply Promo Code
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className="col-lg-4">
                            <div className="course-card">
                                <div className="summary-header mb-3">
                                    <h3 className="innr-title mb-3">Order Summary</h3>
                                </div>

                                <div className="summary-content-card summary-header pb-3">
                                    <div className="summary-banner-box">
                                        <img src="/thumb-banner.png" alt="" />
                                    </div>

                                    <div className="summary-details">
                                        <h6>VUE JS SCRATCH COURSE</h6>
                                        <p> <FontAwesomeIcon icon={faUser} className="user-summary-icon" /> Kitani Studio</p>

                                        <ul className="rating-list">
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStarHalf} /> </a></li>
                                            <li className="rating-item"><span className="rating-number">(1.2K)</span></li>
                                        </ul>


                                    </div>

                                </div>

                                <div className="summary-main-content  pb-3">
                                    <div className="price-box ">
                                        <ul className="price-list">
                                            <li className="price-item"> Original Price: <span className="ammount-title">$200</span> </li>
                                            <li className="price-item"> Coupon Dis: <span className="ammount-title">$50</span> </li>
                                            <li className="price-item"> Sub Total: <span className="ammount-title">$250</span> </li>
                                            <li className="price-item"> Include GST(2%): <span className="ammount-title">$50</span> </li>
                                            <div className="divider-line"> </div>
                                            <li className="price-item total-price"> Total <span className="ammount-title">$300</span> </li>
                                        </ul>

                                    </div>

                                </div>

                                <div className="mb-3">
                                    <button type="button" className="thm-btn w-100" data-bs-toggle="modal" data-bs-target="#payment-Successful">Pay Now</button>
                                </div>

                                <div className="custom-frm-bx mb-0">
                                    <div class="d-flex align-items-start gap-2">
                                        <input type="checkbox" id="check2" class="custom-checkbox flex-shrink-0" />
                                        <label for="check2" className='summary-lavel'>By completing this payment, you agree that the course fee is non-refundable once access is provided.</label>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>
                </div>

            </section>

            {/* Edit Announcement Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#apply-Coupon" */}
            <div className="modal step-modal fade" id="apply-Coupon" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content custom-modal-box">
                        <div className="text-end">
                            <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>

                        <div className="modal-body px-4">
                            <div className="row ">
                                <div className="col-lg-12">
                                    <form action="">

                                        <div className="offer-modal-content">
                                            <span className="offer-modal-icon"><BiSolidOffer /></span>

                                            <h6>Enter Coupon Code</h6>
                                        </div>

                                        <div className="custom-frm-bx">
                                            <input type="text" className="form-control" placeholder="Enter Coupon Code" />
                                        </div>

                                        <div className="mt-4 text-center">
                                            <button className="thm-btn px-5" data-bs-dismiss="modal" aria-label="Close">Apply</button>
                                        </div>



                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Edit Announcement Popup End */}


            {/* payment Successful Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#payment-Successful" */}
            <div className="modal step-modal fade" id="payment-Successful" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content custom-modal-box">
                        <div className="text-end">
                            <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>

                        <div className="modal-body px-4">
                            <div className="row ">


                                <div className="col-lg-12">
                                    <div className="">
                                <div className="summary-header mb-3">
                                    <h3 className="innr-title mb-3">Order Summary</h3>
                                </div>

                                <div className="summary-content-card summary-header pb-3">
                                    <div className="summary-banner-box">
                                        <img src="/thumb-banner.png" alt="" />
                                    </div>

                                    <div className="summary-details">
                                        <h6>VUE JS SCRATCH COURSE</h6>
                                        <p> <FontAwesomeIcon icon={faUser} className="user-summary-icon" /> Kitani Studio</p>

                                        <ul className="rating-list">
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                            <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStarHalf} /> </a></li>
                                            <li className="rating-item"><span className="rating-number">(1.2K)</span></li>
                                        </ul>


                                    </div>

                                </div>

                                <div className="summary-main-content  pb-3">
                                    <div className="price-box ">
                                        <ul className="price-list">
                                            <li className="price-item"> Original Price: <span className="ammount-title">$200</span> </li>
                                            <li className="price-item"> Coupon Dis: <span className="ammount-title">$50</span> </li>
                                            <li className="price-item"> Sub Total: <span className="ammount-title">$250</span> </li>
                                            <li className="price-item"> Include GST(2%): <span className="ammount-title">$50</span> </li>
                                            <div className="divider-line"> </div>
                                            <li className="price-item total-price"> Total <span className="ammount-title">$300</span> </li>
                                        </ul>

                                    </div>

                                </div>

                                <div className="mb-3">
                                    <button type="button" className="thm-btn w-100" data-bs-toggle="modal" data-bs-target="#compelte-Successful">Pay Now</button>
                                </div>

                                <div className="custom-frm-bx mb-0">
                                    <div class="d-flex align-items-start gap-2">
                                        <input type="checkbox" id="check23" class="custom-checkbox flex-shrink-0" />
                                        <label for="check23" className='summary-lavel'>By completing this payment, you agree that the course fee is non-refundable once access is provided.</label>
                                    </div>
                                </div>

                            </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  payment Successful Popup End */}


            {/* payment Successful Popup Start  */}
            {/* data-bs-toggle="modal" data-bs-target="#compelte-Successful" */}
            <div className="modal step-modal fade" id="compelte-Successful" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md">
                    <div className="modal-content custom-modal-box">
                        <div className="text-end">
                            <button type="button" className="modal-close-btn" data-bs-dismiss="modal" aria-label="Close">
                                <FontAwesomeIcon icon={faClose} />
                            </button>
                        </div>

                        <div className="modal-body px-4">
                            <div className="row ">

                                <div className="col-lg-12">
                                    <div className="successful-modal-box mb-3">
                                        <div class="uq-success-box uq-success-scale" id="uq-success">
                                            <svg class="uq-success-svg" viewBox="0 0 100 100">
                                                <circle class="uq-success-circle" cx="50" cy="50" r="45" />
                                                <polyline class="uq-success-check" points="30,52 45,65 70,38" />
                                            </svg>
                                        </div>

                                        <h5 className="mt-3">Payment Successful</h5>
                                    </div>

                                </div>

                                <div className="col-lg-12">
                                    <div className="course-card">
                                        <div className="summary-header mb-3">
                                            <h3 className="innr-title mb-3">Order Summary</h3>
                                        </div>

                                        <div className="summary-content-card summary-header pb-3">
                                            <div className="summary-banner-box">
                                                <img src="/thumb-banner.png" alt="" />
                                            </div>

                                            <div className="summary-details">
                                                <h6>VUE JS SCRATCH COURSE</h6>
                                                <p> <FontAwesomeIcon icon={faUser} className="user-summary-icon" /> Kitani Studio</p>

                                                <ul className="rating-list">
                                                    <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                                    <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                                    <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                                    <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStar} /> </a></li>
                                                    <li className="rating-item"><a href="javascript:void(0)" className="rating-text"> <FontAwesomeIcon icon={faStarHalf} /> </a></li>
                                                    <li className="rating-item"><span className="rating-number">(1.2K)</span></li>
                                                </ul>


                                            </div>

                                        </div>

                                        <div className="summary-main-content">
                                            <div className="price-box ">
                                                <ul className="price-list">
                                                    <li className="price-item"> Original Price: <span className="ammount-title">$200</span> </li>
                                                    <li className="price-item"> Coupon Dis: <span className="ammount-title">$50</span> </li>
                                                    <li className="price-item"> Sub Total: <span className="ammount-title">$250</span> </li>
                                                    <li className="price-item"> Include GST(2%): <span className="ammount-title">$50</span> </li>
                                                    <div className="divider-line"> </div>
                                                    <li className="price-item total-price"> Total <span className="ammount-title">$300</span> </li>
                                                </ul>

                                            </div>

                                        </div>


                                    </div>

                                </div>

                                <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                                    <NavLink to="/course-details-content" className="thm-btn px-4" >Start Learning</NavLink>
                                    <button className="thm-btn outline px-4"> <FontAwesomeIcon icon={faDownload} /> Download Invoice</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  payment Successful Popup End */}

        </>
    )
}

export default BuyCourse