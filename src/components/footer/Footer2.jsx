import React from 'react';
import Link from "next/link";
function Footer2() {
    return (
        <div className="container">
            <div className="candidate-footer">
                <div className="row mb-5">
                    <div className="col-lg-6">
                        <Link legacyBehavior href="/home">
                            <a>
                                <img
                                    alt="image"
                                    className="img-fluid"
                                    src="/assets/images/header1-logo.svg"
                                />
                            </a>
                        </Link>
                        <p className="footer-text">Sign up now and join over 10,000 remote workers who receive personalized job alerts, curated job matches, and more for free!</p>
                        <div className="d-flex flex-wrap mt-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/facebook-icon.svg" className="icon" alt="icon" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/instagram-icon.svg" className="icon" alt="Instagram" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/linkdln-icon.svg" className="icon" alt="LinkedIn" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <img src="/assets/images/youtube-icon.svg" className="icon" alt="YouTube" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-row align-items-start justify-content-end ms-auto">
                        <img src="/assets/images/google-play-store-icon.svg" alt="icon" className="play-store-icon"/>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <h6 className="heading">About Company</h6>
                            <div className="link">
                                <Link legacyBehavior href="/">Contact Us</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Terms & Conditions</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Privacy Policy</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Candidate Listing</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="heading">For Candidate</h6>
                            <div className="link">
                                <Link legacyBehavior href="/">Create Resumes</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Browse Categories</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Saved Jobs</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Candidate Dashboard</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="heading">For Employers</h6>
                            <div className="link">
                                <Link legacyBehavior href="/">Post a job</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Job Packages</Link>
                            </div>
                            <div className="link">
                                <Link legacyBehavior href="/">Employer Dashboard</Link>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <h6 className="heading">For Consultants</h6>
                        </div>
                    </div>
                </div>
                <div className="copyright-text">
                    <p>© 2024 NGHR . All rights reserved. </p>
                </div>
            </div>
        </div>
    )
}

export default Footer2;