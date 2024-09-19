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
                id="basic-info-tab"
                data-bs-toggle="tab"
                data-bs-target="#basic-info"
                type="button"
                role="tab"
                aria-controls="basic-info"
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
                id="advance-info-tab"
                data-bs-toggle="tab"
                data-bs-target="#advance-info"
                type="button"
                role="tab"
                aria-controls="advance-info"
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
                id="curriculum-tab"
                data-bs-toggle="tab"
                data-bs-target="#curriculum"
                type="button"
                role="tab"
                aria-controls="curriculum"
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
              id="basic-info"
              role="tabpanel"
              aria-labelledby="basic-info-tab"
            >
              <BasicInformation/>
            </div>
            <div
              className="tab-pane fade"
              id="advance-info"
              role="tabpanel"
              aria-labelledby="advance-info-tab"
            >
              <AdvanceInformation/>
            </div>
            <div
              className="tab-pane fade"
              id="curriculum"
              role="tabpanel"
              aria-labelledby="curriculum-tab"
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