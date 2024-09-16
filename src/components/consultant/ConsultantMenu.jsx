import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function ConsultantMenu() {
  const currentPath = useRouter().pathname;
  return (
    <>
      <div className="col-lg-12">
        <div className="dashboard-sidebar">
          <div className="dashboard-menu">
            <ul>
              <li>
                <Link legacyBehavior href="/consultant/consultant-dashboard">
                  <a
                    className={
                      `justify-center ${ currentPath === "/consultant/consultant-dashboard"
                        ? "active"
                        : ""}`
                     
                    }
                  >
                    Dashboard
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/consultant/consultant-profile">
                  <a
                    className={
                      `justify-center ${ currentPath === "/consultant/consultant-profile" ? "active" : "" }`
                    }
                  >
                    My Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className={
                      `justify-center ${
                      currentPath === "/"
                        ? "active"
                        : "" }`
                    }
                  >
                    Applications
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/">
                  <a
                    className={
                      `justify-center ${ 
                      currentPath === "/" ? "active" : "" }`
                    }
                  >
                    Clients
                  </a>
                </Link>
              </li>
              <li>
                <Link legacyBehavior href="/consultant/training">
                  <a
                    className={
                      `justify-center ${
                      currentPath === "/consultant/training" ? "active" : "" }`
                    }
                  >
                    Training
                  </a>
                </Link>
              </li>
              <li>
                <a className={
                      `justify-center ${
                      currentPath === "/" ? "active" : "" }`
                    }
                  >
                    Subscription
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConsultantMenu;
