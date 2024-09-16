import React from "react";

function BasicInformation() {
    return (
        <div className="col-lg-12">
            <div className="row">
                <div className="col-md-6">
                    <div className="section-title">
                        <h5>Basic Information</h5>
                    </div>
                </div>
                <div className="col-md-6 text-end">
                    <button
                        className="save-btn lg-btn w-unset"
                        type="submit"
                    >
                        Save
                    </button>
                    <button
                        className="save-preview-btn lg-btn w-unset"
                        type="submit"
                    >
                        Save & Preview
                    </button>
                </div>
            </div>

            <form className="basic-info-form profile-form mb-60">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-inner mb-25">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Your course title"
                            />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner mb-25">
                            <label htmlFor="subtitle">Subtitle</label>
                            <input
                                type="text"
                                id="subtitle"
                                name="subtitle"
                                placeholder="Your course subtitle"
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Course Category</label>
                            <div className="input-area select-area">
                                <select className="select1">
                                    <option value={0}>Frontend</option>
                                    <option value={1}>Backend</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-inner mb-25">
                            <label>Course Sub-category</label>
                            <div className="input-area select-area">
                                <select className="select1">
                                    <option value={0}>React</option>
                                    <option value={1}>Angular</option>
                                    <option value={2}>NextJS</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="form-inner mb-25">
                            <label htmlFor="courseTopic">Course Topic</label>
                            <input
                                type="text"
                                id="courseTopic"
                                name="courseTopic"
                                placeholder="What is primarily taught in your course?"
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-inner mb-25">
                            <label>Course Language</label>
                            <div className="input-area select-area">
                                <select className="select1">
                                    <option value={0}>English</option>
                                    <option value={1}>Hindi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-inner mb-25">
                            <label>Subtitle Language(Optional)</label>
                            <div className="input-area select-area">
                                <select className="select1">
                                    <option value={0}>English</option>
                                    <option value={1}>Hindi</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-inner mb-25">
                            <label>Course Level</label>
                            <div className="input-area select-area">
                                <select className="select1">
                                    <option value={0}>Basic</option>
                                    <option value={1}>Advance</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="form-inner mb-25">
                            <label>Durations</label>
                            <div className="input-area select-area">
                                <input
                                    className="ps-3"
                                    type="text"
                                    id="duration"
                                    name="duration"
                                    placeholder="Course Durations"
                                />
                                <select className="select1 course-duration">
                                    <option value={0}>Day</option>
                                    <option value={1}>Month</option>
                                    <option value={2}>Year</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-inner">
                            <button
                                className="cancel-btn lg-btn w-unset"
                                type="submit"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                    <div className="col-6 save-next-btn">
                        <div className="form-inner">
                            <button
                                className="primry-btn-2 lg-btn w-unset"
                                type="submit"
                            >
                                Save & Next
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BasicInformation;
