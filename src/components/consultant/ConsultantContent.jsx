import Link from "next/link";
import React from "react";

function ConsultantContent() {
  return (
    <div className="col-lg-12">
      <div className="dashboard-inner consultant-dashboard">
        <div className="author-and-action-btn-area two mb-40">
          <div className="author-area two">
            <div className="author-img">
              <img src="/assets/images/bg/company-img2.png" alt="" />
            </div>
            <div className="author-content">
              <span>Hello,</span>
              <h4>Elite Hangstroman</h4>
            </div>
          </div>
          <div className="action-btn-group consultant-edit-profile-btn">
            <ul>
              <li>
                <Link legacyBehavior href="/company/company-profile">
                  <a>
                    Edit Profile
                  </a>
                </Link>
              </li>
            </ul>
          </div> 
        </div>
        <div className="counter-area">
          <div className="row g-lg-4 g-md-5 gy-5 justify-content-center">
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single consultant-counter-single">
                <div className="consultant-icon">
                </div>
                <div className="coundown consultant-countdown col-md-7">
                  <p>Total Course</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single consultant-counter-single">
                <div className="consultant-icon">
                </div>
                <div className="coundown consultant-countdown col-md-7">
                  <p>Total Application</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single consultant-counter-single">
                <div className="consultant-icon">
                </div>
                <div className="coundown consultant-countdown col-md-7">
                  <p>Total Connections</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="counter-single consultant-counter-single">
                <div className="consultant-icon">
                </div>
                <div className="coundown consultant-countdown col-md-7">
                  <p>Total Completed Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="table-wrapper">
          <h5 className="title">Jobs Applied</h5>
          <div className="scroll-table">
            <table className="eg-table table category-table mb-0">
              <thead>
                <tr>
                  <th>Job Tittle</th>
                  <th>Apply Date</th>
                  <th>Company</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-06.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Senior UI/UX Designer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $60-$90 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">03/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Tech.Bath Com... </a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-02.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>React JS Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            Dhaka, Bangladesh
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $80-$100 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">07/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Gangster Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn yellow-btn">Interview</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-03.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>WordPress Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 days ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            West London, UK
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $30K-$40K /{" "}
                              <span className="time">Monthly</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">10/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Zoomly.Co Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn orenge-btn">Canceled</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-04.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>Mern-Stack Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            1 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $20-$50 /{" "}
                              <span className="time">Per Hour</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">13/07/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Marko-land Ltd</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn purple-btn">Viewed</button>
                  </td>
                </tr>
                <tr>
                  <td data-label="Job Title">
                    <div className="company-info">
                      <div className="logo">
                        <img
                          src="/assets/images/bg/company-logo/company-05.png"
                          alt=""
                        />
                      </div>
                      <div className="company-details">
                        <div className="top">
                          <h6>
                            <Link legacyBehavior href="/job-details">
                              <a>PHP Developer</a>
                            </Link>
                          </h6>
                          <span>
                            <img
                              src="/assets/images/icon/calender2.svg"
                              alt=""
                            />{" "}
                            2 week ago
                          </span>
                        </div>
                        <ul>
                          <li>
                            <img
                              src="/assets/images/icon/location.svg"
                              alt=""
                            />
                            New-York, USA
                          </li>
                          <li>
                            <img src="/assets/images/icon/arrow2.svg" alt="" />
                            <p>
                              <span className="title">Salary:</span> $40K-$60K /{" "}
                              <span className="time">Per Month</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </td>
                  <td data-label="Apply Job">18/08/2022</td>
                  <td data-label="Company">
                    <Link legacyBehavior href="/company-details">
                      <a className="view-btn">Bistro.Tech Group</a>
                    </Link>
                  </td>
                  <td data-label="Status">
                    <button className="eg-btn green-btn">Success</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantContent;
