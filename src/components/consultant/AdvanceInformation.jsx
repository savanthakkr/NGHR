import React, { useState, useRef } from "react";
import "react-quill/dist/quill.snow.css";

function AdvanceInformation() {
    const [divs, setDivs] = useState([1, 2, 3, 4]);
    const [courses, setCourses] = useState([1, 2, 3, 4]);
    const [requirements, setRequirements] = useState([1, 2, 3, 4]);
    const maxDivs = 8;

    const addNewDiv = () => {
        if (divs.length < maxDivs) {
            setDivs([...divs, divs.length + 1]);
        }
    };
    const addTargetCourse = () => {
        if (courses.length < maxDivs) {
            setCourses([...courses, courses.length + 1]);
        }
    };
    const addCourseRequirements = () => {
        if (requirements.length < maxDivs) {
            setRequirements([...requirements, requirements.length + 1]);
        }
    };

    // Image
    const [image, setImage] = useState("");

    const fileInputRef = useRef(null);
    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };
    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };
    // image end
    const [video, setVideo] = useState(null);
    const fileInputRef2 = useRef(null);

    const handleDrop2 = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        if (file && file.type.startsWith('video/')) {
            setVideo(URL.createObjectURL(file));
        }
    };

    const handleDragOver2 = (event) => {
        event.preventDefault();
    };

    const handleClick2 = () => {
        fileInputRef2.current.click();
    };

    const handleFileSelect2 = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith('video/')) {
            setVideo(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        if (video) {
            const formData = new FormData();
            formData.append('video', video);

            fetch('YOUR_UPLOAD_ENDPOINT', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error('Error:', error));
        } else {
            console.error('No video selected');
        }
    };
    return (
        <div className="col-lg-12">
            <div className="row">
                <div className="col-md-6">
                    <div className="section-title">
                        <h5>Advance Informations</h5>
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

            <div className="advance-info">
                <div className="upload-img-video">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="title mb-3">Course Thumbnail</h6>
                                </div>
                                <div className="col-md-6">
                                    <div className="consultant-upload-photo">
                                        <div
                                            title="Drag and drop an image here"
                                            className="image-uploader"
                                        >
                                            <div
                                                className="dropzone drag-area"
                                                onDrop={handleDrop}
                                                onDragOver={handleDragOver}
                                                onClick={handleClick}
                                            >
                                                {image ? (
                                                    <img
                                                        src={image}
                                                        alt="preview"
                                                        className="preview"
                                                    />
                                                ) : (
                                                    <p>Upload Image {image}</p>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={handleFileSelect}
                                                ref={fileInputRef}
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Upload your course Thumbnail here. <strong>Important guidelines:</strong> 1200x800 pixels or 12:8 Ratio. Supported format: <strong>.jpg, .jpeg, or .png</strong>
                                    </p>
                                    <button className="save-btn lg-btn w-unset" onClick={handleClick}>
                                        Upload Image
                                        <i className="bi bi-upload ms-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12">
                                    <h6 className="title mb-3">Course Trailer</h6>
                                </div>
                                <div className="col-md-6">
                                    <div className="consultant-upload-photo">
                                        <div
                                            title="Drag and drop an image here"
                                            className="image-uploader"
                                        >
                                            <div
                                                className="dropzone drag-area"
                                                onDrop={handleDrop2}
                                                onDragOver={handleDragOver2}
                                                onClick={handleClick2}
                                            >
                                                {image ? (
                                                    <img
                                                        src={image}
                                                        alt="preview"
                                                        className="preview"
                                                    />
                                                ) : (
                                                    <p>Upload Video</p>
                                                )}
                                            </div>
                                            <input
                                                type="file"
                                                accept="video/*"
                                                onChange={handleFileSelect2}
                                                ref={fileInputRef2}
                                                style={{ display: "none" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <p>
                                        Students who watch a well-made promo video are 5X more likely to enroll in your course. We've seen that statistic go up to 10X for exceptionally awesome videos.
                                    </p>
                                    <button className="save-btn lg-btn w-unset" onClick={handleUpload}>
                                        Upload Video
                                        <i className="bi bi-upload ms-3"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-descriptions form-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <h6 className="title mb-3">Course Descriptions</h6>
                            <form className="p-0 border-0">
                                <div className="form-inner">
                                    <textarea className="textarea"
                                        name="description"
                                        id="description"
                                        placeholder="Enter you course descriptions"
                                        defaultValue={""}
                                    />
                                    {/* <Editor
                                        init={{
                                            height: 200,
                                            menubar: false,
                                            table_tab_navigation: false,
                                            plugins: [
                                            "advlist autolink lists link image charmap print preview anchor",
                                            "searchreplace visualblocks code fullscreen",
                                            "insertdatetime media table paste code help wordcount",
                                            ],
                                            toolbar:
                                            "formatselect | bold italic ubderline backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help",
                                        }}
                                    /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form-wrapper advance-info-input">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="title mb-3">What you will teach in this course (4/8)</h6>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="add-new-btn" onClick={addNewDiv}>
                                        <i className="bi bi-plus"></i> Add new
                                    </button>
                                </div>
                            </div>
                            <form className="p-0 border-0">
                                {divs.map((div, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-inner mb-25">
                                                    <label htmlFor="title">0{div}</label>
                                                    <input className="input-box"
                                                        type="text"
                                                        id="title"
                                                        name="title"
                                                        placeholder="What you will teach in this course..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form-wrapper advance-info-input">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="title mb-3">Target Audience (4/8)</h6>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="add-new-btn" onClick={addTargetCourse}>
                                        <i className="bi bi-plus"></i> Add new
                                    </button>
                                </div>
                            </div>
                            <form className="p-0 border-0">
                                {courses.map((div, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-inner mb-25">
                                                    <label htmlFor="title">0{div}</label>
                                                    <input className="input-box"
                                                        type="text"
                                                        id="target_audience"
                                                        name="target_audience"
                                                        placeholder="Who this course is for..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="form-wrapper advance-info-input">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-6">
                                    <h6 className="title mb-3">Course requirements (4/8)</h6>
                                </div>
                                <div className="col-md-6 text-end">
                                    <button className="add-new-btn" onClick={addCourseRequirements}>
                                        <i className="bi bi-plus"></i> Add new
                                    </button>
                                </div>
                            </div>
                            <form className="p-0 border-0">
                                {requirements.map((div, index) => (
                                    <div key={index}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-inner mb-25">
                                                    <label htmlFor="title">0{div}</label>
                                                    <input className="input-box"
                                                        type="text"
                                                        id="course_requirement"
                                                        name="course_requirement"
                                                        placeholder="What is you course requirements..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </form>
                        </div>
                    </div>
                </div>
                <div className="advance-info-btn">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-inner">
                                <button
                                    className="cancel-btn lg-btn w-unset"
                                    type="submit"
                                >Previous
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
                </div>
            </div>
        </div>
    );
}

export default AdvanceInformation;
