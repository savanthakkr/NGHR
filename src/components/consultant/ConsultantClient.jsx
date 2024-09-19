import React from "react";
import ConsultantClientReceived from "./ConsultantClientReceived";
import ConsultantChat from "./ConsultantChat";

function ConsultantClient() {
    return (
        <div className="col-lg-12">
            <div className="consultant-clients">
                <div className="title">
                    <h5>Clients</h5>
                </div>
            </div>
            <div className="col-12">
                <div className="client-tabs">
                    <div className="form-wrapper">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="received-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#received"
                                    type="button"
                                    role="tab"
                                    aria-controls="received"
                                    aria-selected="true"
                                >
                                    <span />
                                    Received
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="sent-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#sent"
                                    type="button"
                                    role="tab"
                                    aria-controls="sent"
                                    aria-selected="false"
                                >
                                    <span />
                                    Sent
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className="tab-pane fade show active"
                                id="received"
                                role="tabpanel"
                                aria-labelledby="received-tab"
                            >
                                <ConsultantClientReceived/>
                            </div>
                            <div
                                className="tab-pane fade"
                                id="sent"
                                role="tabpanel"
                                aria-labelledby="sent-tab"
                            >
                                <ConsultantChat/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultantClient;