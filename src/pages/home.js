import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Layout from "../layout/Layout";
import AutoScroll from "./startAutoScroll";
function Home() {
    const currentPage = useRouter().pathname;
    useEffect(() => {
        document.body.className = currentPage === "/home" ? "bg-wight" : "";
    });
    const companies = [
        { src: '/assets/images/logo1.svg' },
        { src: '/assets/images/logo2.svg' },
        { src: '/assets/images/logo3.svg' },
        { src: '/assets/images/logo4.svg' },
        { src: '/assets/images/logo5.svg' },
        { src: '/assets/images/logo6.svg' },
        { src: '/assets/images/logo7.svg' },
        { src: '/assets/images/logo8.svg' },
        { src: '/assets/images/logo9.svg' }
    ]
    const opportunities = [
        {
            src: '/assets/images/development-roles.svg',
            heading: 'Development roles',
            text: 'Explore development jobs at companies like Arrow, Zurao, Infinite',
            img1: '/assets/images/overlap-img1.svg',
            img2: '/assets/images/overlap-img2.svg',
            img3: '/assets/images/overlap-img3.svg'
        },
        {
            src: '/assets/images/design-roles.svg',
            heading: 'Design roles',
            text: 'Explore design jobs at companies like Arrow, Zurao, Infinite ',
            img1: '/assets/images/overlap-img4.svg',
            img2: '/assets/images/overlap-img5.svg',
            img3: '/assets/images/overlap-img6.svg'
        },
        {
            src: '/assets/images/sales-roles.svg',
            heading: 'Sales roles',
            text: 'Explore Sales jobs at companies like Arrow, Zurao, Infinite ',
            img1: '/assets/images/overlap-img1.svg',
            img2: '/assets/images/overlap-img2.svg',
            img3: '/assets/images/overlap-img3.svg'
        },
        {
            src: '/assets/images/marketing-roles.svg',
            heading: 'Marketing roles',
            text: 'Explore Marketing jobs at companies like Arrow, Zurao, Infinite ',
            img1: '/assets/images/overlap-img1.svg',
            img2: '/assets/images/overlap-img2.svg',
            img3: '/assets/images/overlap-img3.svg'
        },
        {
            src: '/assets/images/finance-roles.svg',
            heading: 'Finance roles',
            text: 'Explore Finance jobs at companies like Arrow, Zurao, Infinite ',
            img1: '/assets/images/overlap-img4.svg',
            img2: '/assets/images/overlap-img5.svg',
            img3: '/assets/images/overlap-img6.svg'
        },
        {
            src: '/assets/images/tech-roles.svg',
            heading: 'Tech roles',
            text: 'Explore Tech jobs at companies like Arrow, Zurao, Infinite ',
            img1: '/assets/images/overlap-img1.svg',
            img2: '/assets/images/overlap-img2.svg',
            img3: '/assets/images/overlap-img3.svg'
        }
    ]
    return (
        <Layout>
            <div className="main-layout">
                <section className="hero-section mt-0">
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-5">
                                <div className="future-of-startups">
                                    <h1>Find Your <span>Perfect Job</span></h1>
                                    <p className="mt-3">Whether you’re looking for your dream role or searching for top talent, we’ve got you covered. Explore thousands of opportunities, connect with expert consultants, and take the next step in your career with ease.</p>
                                    <div className="buttons">
                                        <button className="enroll-startup-btn mt-2 mt-sm-0">Sign up for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 px-5 px-xl-0">
                                <div className="auto-card-scroll">
                                    <AutoScroll />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="logo-horizontal-scroll">
                    <div className="container">
                        <p className="text-center">The world’s best Companies are hiring on NGHR</p>
                    </div>
                    <div className="investor-scroll-container">
                        <div className="investor-scroll scroll-right mt-5">
                            {companies.map((data, index) => (
                                <div className="mx-5" key={`scroll2-${index}`}>
                                    <img src={data.src} alt={index} />
                                </div>
                            ))}
                            {companies.map((data, index) => (
                                <div className="mx-5" key={`scroll2-duplicate-${index}`}>
                                    <img src={data.src} alt={index} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="find-job px-4 px-lg-0">
                    <div className="container">
                        <div className="row my-4">
                            <div className="col">
                                <div className="d-flex flex-row align-items-center justify-cotent-center">
                                    <div className="overlap-images">
                                        <img src="/assets/images/overlap-head-img1.svg" alt="Image 1" className="image" />
                                        <img src="/assets/images/overlap-head-img2.svg" alt="Image 2" className="image" />
                                        <img src="/assets/images/overlap-head-img3.svg" alt="Image 3" className="image" />
                                        <img src="/assets/images/overlap-head-img4.svg" alt="Image 4" className="image" />
                                    </div>
                                    <div>
                                        <p className="find-job-text mb-0 ms-3">Find a Job<img src="/assets/images/right-arrow.svg" className="ms-1" alt="arrow" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <h4 className="heading">Explore 50,000 + Job Opportunities</h4>
                                <p className="text mt-3">Personalized filters make it quick and easy to find the jobs you care about.</p>
                            </div>
                            <div className="col-lg-6 d-flex flex-row justify-content-end align-items-center">
                                <button className="search-job-btn">Search Jobs</button>
                            </div>
                        </div>
                        <div className="row mt-5 px-lg-5">
                            {opportunities.map((opportunity, index) => (
                                <div className="col-lg-4" key={index}>
                                    <div className="card">
                                        <div className="d-flex flex-row justify-content-between">
                                            <div className="left-icon">
                                                <img src={opportunity.src} alt="img" />
                                            </div>
                                            <div className="overlap-images">
                                                <img src={opportunity.img1} alt="Image 1" className="image" />
                                                <img src={opportunity.img2} alt="Image 2" className="image" />
                                                <img src={opportunity.img3} alt="Image 3" className="image" />
                                            </div>
                                        </div>
                                        <h6 className="card-head">{opportunity.heading}</h6>
                                        <p className="card-text">{opportunity.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Home;
