import React from "react";
import clientData from "../../data/clientData.json";
import recentConnections from "../../data/recentConnections.json";
import connectionRequest from "../../data/connectionRequest.json";

function ConsultantClientReceived() {
    return (
        <div className="col-lg-12">
            <div className="row gx-5">
                <div className="col-xl-4 client-lists">
                    {clientData.map(client => (
                        <div className="client-list">
                            <div className="col-2">
                                <img src={client.imgSrc} className="client-img" alt="client-img" />
                            </div>
                            <div className="col-8 client-data">
                                <h6>{client.name}</h6>
                                <small>{client.role}</small>
                            </div>
                            <div className="col-2 send-icon ms-auto">
                                <img src="/assets/images/icon/send.png" alt="send-icon" />
                            </div>
                            <div className="col-12 text-end">
                                <small className="time">Yesterday, 14:30</small>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-xl-8 mt-3 mt-xl-0">
                    <div className="notification-data">
                        <div className="notification-head">
                            <div className="notification-line"></div>
                            <p className="notification-heading">You have <span className="notification-primary">2 new Connections</span></p>
                            <div className="notification-line"></div>
                        </div>
                        {connectionRequest.map(req => (
                            <div className="connection-request">
                                <div className="col-3 col-md-2 col-lg-1">
                                    <img src={req.imgSrc} alt="client-img" className="connection-req-client" />
                                </div>
                                <div className="col-9 col-md-6 col-lg-8">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="connection-request-data">
                                                <h6>{req.name}</h6>
                                                <p className="mb-0"><small>{req.role}</small></p>
                                                <p className="mb-0"><small className="primary-text">{req.totalConnections}</small></p>
                                            </div>
                                        </div>
                                        {req.description != "" ?
                                            <div className="col-lg-7 connection-request-content">
                                                <small>{req.description}</small>
                                            </div> :
                                            <div className="col-lg-7"></div>
                                        }

                                    </div>
                                </div>
                                <div className="col-4 col-lg-3 mt-2 mt-lg-0">
                                    <div className="connection-request-btn">
                                        <div className="accept-btn me-3 me-lg-0 ms-auto ms-lg-0">
                                            <div className="form-inner">
                                                <button
                                                    className="primry-btn-2 w-unset"
                                                    type="submit"
                                                >
                                                    Accept
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="form-inner">
                                                <button
                                                    className="decline-btn w-unset"
                                                    type="submit"
                                                >Decline
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="connection-data">
                        <div className="notification-head">
                            <div className="notification-line"></div>
                            <p className="notification-heading">Recent Connections</p>
                            <div className="notification-line"></div>
                        </div>
                        <div className="recent-connections">
                            {recentConnections.map(connection => (
                                <div className="recent-connections-card">
                                    <div className="recent-connections-list">
                                        <div className="col-2">
                                            <img src={connection.imgSrc} className="recent-connections-img" alt="client-img" />
                                        </div>
                                        <div className="col-10 recent-connections-data">
                                            <h6>{connection.name}</h6>
                                            <small>{connection.role}</small>
                                        </div>
                                        <div className="col-12 text-end">
                                            <small className="time">Yesterday, 14:30</small>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultantClientReceived;