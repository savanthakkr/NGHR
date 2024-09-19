import React, { useRef, useState, useReducer } from "react";
const initialState = {
    password: "",
    passwordVisible: false,
    newPassword: "",
    newPasswordVisible: false,
    confirmPassword: "",
    confirmPasswordVisible: false,
};

function reducer(state, action) {
    switch (action.type) {
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        case "TOGGLE_PASSWORD_VISIBILITY":
            return { ...state, passwordVisible: !state.passwordVisible };
        case "SET_NEW_PASSWORD":
            return { ...state, newPassword: action.payload };
        case "TOGGLE_NEW_PASSWORD_VISIBILITY":
            return { ...state, newPasswordVisible: !state.newPasswordVisible };
        case "SET_CONFIRM_PASSWORD":
            return { ...state, confirmPassword: action.payload };
        case "TOGGLE_CONFIRM_PASSWORD_VISIBILITY":
            return {
                ...state,
                confirmPasswordVisible: !state.confirmPasswordVisible,
            };
        default:
            throw new Error();
    }
}
function ConsultantProfiles() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handlePasswordToggle = () => {
        dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" });
    };

    const handleNewPasswordToggle = () => {
        dispatch({ type: "TOGGLE_NEW_PASSWORD_VISIBILITY" });
    };

    const handleConfirmPasswordToggle = () => {
        dispatch({ type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY" });
    };

    // Checkbox disable text
    const [checkboxes, setCheckboxes] = useState([
        { id: 1, label: 'I want to know who buy my course.', checked: false },
        { id: 2, label: 'I want to know who write a review on my course.', checked: true },
        { id: 3, label: 'I want to know who commented on my lecture.', checked: false },
        { id: 4, label: 'I want to know who replied on my comment.', checked: true },
        { id: 5, label: 'I want to know daily how many people visited my profile.', checked: true },
        { id: 6, label: 'I want to know who download my lecture notes.', checked: false },
        { id: 7, label: 'I want to know who download my lecture attach file.', checked: true },
    ]);

    // Handle checkbox change
    const handleCheckboxChange = (id) => {
        setCheckboxes(checkboxes.map(checkbox =>
            checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
        ));
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
    return (
        <div className="col-lg-12">
            <div className="my-profile-inner consultant-profile">
                <div className="form-wrapper mb-20">
                    <form className="consultant-profile-form profile-form">
                        <div className="section-title">
                            <h5>Account Settings</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="firstname1">Full name</label>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        id="firstname"
                                                        name="firstname"
                                                        placeholder="First name"
                                                    />
                                                </div>
                                                <div className="col-lg-6">
                                                    <input
                                                        type="text"
                                                        id="lastname"
                                                        name="lastname"
                                                        placeholder="Last name"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="username">Username</label>
                                            <input
                                                type="text"
                                                id="username"
                                                name="username"
                                                placeholder="Enter your username"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="phonenumber">Phone Number</label>
                                            <input
                                                type="text"
                                                id="phonenumber"
                                                name="phonenumber"
                                                placeholder="Your Phone number..."
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
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
                                                <p>Upload Image</p>
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
                                    <p>Image size should be under 1MB and image ration needs to be 1:1</p>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner mb-25">
                                    <label htmlFor="title">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Your title, profession or small biography"
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner mb-25">
                                    <label htmlFor="biography">Biography</label>
                                    <textarea
                                        name="biography"
                                        id="biography"
                                        placeholder="Your title, profession or small biography"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner">
                                    <button
                                        className="primry-btn-2 lg-btn w-unset"
                                        type="submit"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="form-wrapper mb-20">
                    <form className="consultant-profile-form profile-form">
                        <div className="section-title">
                            <h5>Social Profile</h5>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-inner mb-25">
                                    <label>Personal Website</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/website-2.svg" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Personal Website or portfolio url..."
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>Facebook</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/facebook-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>Instagram</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/instagram-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>LinkedIn</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/linkdln-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>Twitter</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/twitter-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>Whatsapp</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/whatsapp-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-inner mb-25">
                                    <label>Youtube</label>
                                    <div className="input-area">
                                        <img src="/assets/images/icon/youtube-icon.png" alt="" />
                                        <input
                                            type="text"
                                            placeholder="Username"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-inner">
                                    <button
                                        className="primry-btn-2 lg-btn w-unset"
                                        type="submit"
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-wrapper notifications">
                            <form className="consultant-profile-form profile-form">
                                <div className="section-title">
                                    <h5>Notifications</h5>
                                </div>
                                <div className="row">
                                    {checkboxes.map((checkbox) => (
                                        <div className="col-md-12" key={checkbox.id}>
                                            <label className="containers mb-15">
                                                <input
                                                    type="checkbox"
                                                    checked={checkbox.checked}
                                                    onChange={() => handleCheckboxChange(checkbox.id)}
                                                />
                                                <span className="checkmark" />
                                                <span className={`text ${checkbox.checked ? '' : 'text-disable'}`}>
                                                    {checkbox.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                    <div className="col-md-12 mt-10">
                                        <div className="form-inner">
                                            <button
                                                className="primry-btn-2 lg-btn w-unset"
                                                type="submit"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-wrapper">
                            <form className="consultant-profile-form profile-form">
                                <div className="section-title">
                                    <h5>Change Password</h5>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="password">Current Password*</label>
                                            <input
                                                type={!state.passwordVisible ? "password" : "text"}
                                                name="password"
                                                id="password"
                                                placeholder="Password"
                                            />
                                            <i onClick={handlePasswordToggle}
                                                className={
                                                    !state.passwordVisible
                                                        ? "bi bi-eye-slash"
                                                        : "bi bi-eye-slash  bi-eye"
                                                }
                                                id="togglePassword"
                                            />

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="password">New Password*</label>
                                            <input
                                                type={!state.newPasswordVisible ? "password" : "text"}
                                                name="newPassword"
                                                id="newPassword"
                                                placeholder="Password"
                                            />
                                            <i onClick={handleNewPasswordToggle}
                                                className={
                                                    !state.newPasswordVisible
                                                        ? "bi bi-eye-slash"
                                                        : "bi bi-eye-slash  bi-eye"
                                                }
                                            />

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner mb-25">
                                            <label htmlFor="password">Confirm Password*</label>
                                            <input
                                                type={!state.confirmPasswordVisible ? "password" : "text"}
                                                name="confirmPassword"
                                                id="confirmPassword"
                                                placeholder="Confirm new password"
                                            />
                                            <i onClick={handleConfirmPasswordToggle}
                                                className={
                                                    !state.confirmPasswordVisible
                                                        ? "bi bi-eye-slash"
                                                        : "bi bi-eye-slash  bi-eye"
                                                }
                                            />

                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-inner">
                                            <button
                                                className="primry-btn-2 lg-btn w-unset"
                                                type="submit"
                                            >
                                                Save Changes
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConsultantProfiles;
