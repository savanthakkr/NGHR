import Link from "next/link";
import React, { useReducer } from "react";
import Layout from "../layout/Layout";
const initialState = {
  password: "",
  passwordVisible: false,
  confirmPassword: "",
  confirmPasswordVisible: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "TOGGLE_PASSWORD_VISIBILITY":
      return { ...state, passwordVisible: !state.passwordVisible };
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
function Register() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePasswordToggle = () => {
    dispatch({ type: "TOGGLE_PASSWORD_VISIBILITY" });
  };

  const handleConfirmPasswordToggle = () => {
    dispatch({ type: "TOGGLE_CONFIRM_PASSWORD_VISIBILITY" });
  };

  return (
    <Layout>
      <div className="register-area pt-120 mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="form-wrapper">
                <div className="form-title">
                  <h3>Register Account</h3>
                  <span />
                </div>
                <div className="register-tab">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Candidate
                      </button>
                      <button
                        className="nav-link"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Company
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="firstname1">First Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="firstname1"
                                  name="firstname1"
                                  placeholder="Mr. Robert"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="lastname1">Last Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="lastname1"
                                  name="lastname1"
                                  placeholder="Jonson"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="username">User Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="username"
                                  name="username"
                                  placeholder="robertjonson"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="email">Email*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/email-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="email"
                                  name="email"
                                  placeholder="info@example.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="password">Password*</label>
                              <input
                                type={
                                  !state.passwordVisible ? "password" : "text"
                                }
                                name="password"
                                id="password"
                                placeholder="Password"
                              />
                              <i
                                onClick={handlePasswordToggle}
                                className={
                                  !state.passwordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                                id="togglePassword"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label htmlFor="password2">
                                Confirm Password*
                              </label>
                              <input
                                type={
                                  !state.confirmPasswordVisible
                                    ? "password"
                                    : "text"
                                }
                                name="confirmpassword"
                                id="password2"
                                placeholder="Confirm Password"
                              />
                              <i
                                onClick={handleConfirmPasswordToggle}
                                className={
                                  !state.confirmPasswordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                              <div className="form-group two">
                                <input type="checkbox" id="html1" />
                                <label htmlFor="html1">
                                  Here, I will agree company terms &amp;
                                  conditions.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner">
                              <button className="primry-btn-2" type="submit">
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <h6>
                            Already have an account?{" "}
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>{" "}
                            Here
                          </h6>
                          <div className="login-difarent-way">
                            <div className="row g-4">
                              <div className="col-md-6">
                                <a href="https://myaccount.google.com/">
                                  <img
                                    src="assets/images/icon/google1.svg"
                                    alt=""
                                  />
                                  Log in with Google
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a href="https://myaccount.google.com/">
                                  <img
                                    src="assets/images/icon/facebook1.svg"
                                    alt=""
                                  />
                                  Log in with Facebook
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="firstname">First Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="firstname"
                                  name="firstname"
                                  placeholder="Mr. Robert"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="lastname">Last Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="lastname"
                                  name="lastname"
                                  placeholder="Jonson"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="username">User Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/user-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="username1"
                                  name="username"
                                  placeholder="robertjonson"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="email">Email*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/email-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="email1"
                                  name="email"
                                  placeholder="info@example.com"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="companyname">Company Name*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/category-2.svg"
                                  alt=""
                                />
                                <input
                                  type="text"
                                  id="companyname"
                                  name="companyname"
                                  placeholder="Mr. Robert"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label>Company Type*</label>
                              <div className="input-area">
                                <img
                                  src="assets/images/icon/category-2.svg"
                                  alt=""
                                />
                                <select className="select1">
                                  <option value={0}>Digital Agency</option>
                                  <option value={1}>
                                    Digital Marketing Agency
                                  </option>
                                  <option value={2}>Software Company</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner mb-25">
                              <label htmlFor="password">Password*</label>
                              <input
                                type={
                                  !state.passwordVisible ? "password" : "text"
                                }
                                name="password"
                                id="password"
                                placeholder="Password"
                              />
                              <i
                                onClick={handlePasswordToggle}
                                className={
                                  !state.passwordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                                id="togglePassword"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-inner">
                              <label htmlFor="password2">
                                Confirm Password*
                              </label>
                              <input
                                type={
                                  !state.confirmPasswordVisible
                                    ? "password"
                                    : "text"
                                }
                                name="confirmpassword"
                                id="password2"
                                placeholder="Confirm Password"
                              />
                              <i
                                onClick={handleConfirmPasswordToggle}
                                className={
                                  !state.confirmPasswordVisible
                                    ? "bi bi-eye-slash"
                                    : "bi bi-eye-slash  bi-eye"
                                }
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
                              <div className="form-group two">
                                <input type="checkbox" id="html" />
                                <label htmlFor="html">
                                  Here, I will agree company terms &amp;
                                  conditions.
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-inner">
                              <button className="primry-btn-2" type="submit">
                                Sign Up
                              </button>
                            </div>
                          </div>
                          <h6>
                            Already have an account?{" "}
                            <Link legacyBehavior href="/login">
                              <a>Login</a>
                            </Link>{" "}
                            Here
                          </h6>
                          <div className="login-difarent-way">
                            <div className="row g-4">
                              <div className="col-md-6">
                                <a href="https://myaccount.google.com/">
                                  <img
                                    src="assets/images/icon/google1.svg"
                                    alt=""
                                  />
                                  Log in with Google
                                </a>
                              </div>
                              <div className="col-md-6">
                                <a href="https://myaccount.google.com/">
                                  <img
                                    src="assets/images/icon/facebook1.svg"
                                    alt=""
                                  />
                                  Log in with Facebook
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
