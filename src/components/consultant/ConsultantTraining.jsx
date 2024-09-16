import Link from "next/link";
import React from "react";
import BasicInformation from "./BasicInformation";
import AdvanceInformation from "./AdvanceInformation";
import Curriculum from "./Curriculum";
import TrainingPrograms from "./TrainingPrograms";

function ConsultantTraining() {
  return (
    <div className="col-lg-12">
      <TrainingPrograms/>
      <div className="training-inner mt-25">
        <div className="form-wrapper">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="home-tab"
                data-bs-toggle="tab"
                data-bs-target="#home"
                type="button"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                <span />
                <img src="/assets/images/icon/basic-info.png" alt="" className="me-2" />
                Basic Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                <span />
                <img src="/assets/images/icon/advance-info.png" alt="" className="me-2" />
                Advance Information
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#contact"
                type="button"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                <span />
                <img src="/assets/images/icon/curriculum.png" alt="" className="me-2" />
                Curriculum
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <BasicInformation/>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <AdvanceInformation/>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <Curriculum/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConsultantTraining;