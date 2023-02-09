import Link from "next/link";
import { useState } from "react";
import { nav } from "/public/data/home";

function NavBar({ isClicked }) {
  const [navId, setNavId] = useState(1);

  return (
    <>
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top  shadow-md">
          <div className="container-fluid  container-lg ">
            <a
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <svg
                  className="border-none"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 4.1875H20.25C20.625 4.1875 21 3.85938 21 3.4375V1.5625C21 1.1875 20.625 0.8125 20.25 0.8125H0.75C0.328125 0.8125 0 1.1875 0 1.5625V3.4375C0 3.85938 0.328125 4.1875 0.75 4.1875ZM0.75 11.6875H20.25C20.625 11.6875 21 11.3594 21 10.9375V9.0625C21 8.6875 20.625 8.3125 20.25 8.3125H0.75C0.328125 8.3125 0 8.6875 0 9.0625V10.9375C0 11.3594 0.328125 11.6875 0.75 11.6875ZM0.75 19.1875H20.25C20.625 19.1875 21 18.8594 21 18.4375V16.5625C21 16.1875 20.625 15.8125 20.25 15.8125H0.75C0.328125 15.8125 0 16.1875 0 16.5625V18.4375C0 18.8594 0.328125 19.1875 0.75 19.1875Z"
                    fill="url(#paint0_linear_258_6838)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_258_6838"
                      x1="1.17347e-07"
                      y1="10"
                      x2="21"
                      y2="10"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#182A44" />
                      <stop offset="1" stopColor="#3C5271" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </a>

            <Link className="navbar-brand m-auto  m-md-auto m-sm-auto " href="/">
              <picture>
                <img
                  className="img-fluid"
                  src={`/images/logo/dark_logo.webp`}
                  alt=""
                  srcSet=""
                />
              </picture>
            </Link>

            <ul className="navbar-nav mb-2  mb-lg-0 d-block d-xl-none d-lg-none ">
              <li className="nav-item user-nav-item  ">
                <Link className="nav-link" href="/about">
                  <span>
                    <svg
                      className="mt--2"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 20.8462V19.8462C5 15.9802 8.13401 12.8462 12 12.8462V12.8462C15.866 12.8462 19 15.9802 19 19.8462V20.8462"
                        stroke="#BCBCBC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 12.8462C14.2091 12.8462 16 11.0553 16 8.84619C16 6.63705 14.2091 4.84619 12 4.84619C9.79086 4.84619 8 6.63705 8 8.84619C8 11.0553 9.79086 12.8462 12 12.8462Z"
                        stroke="#BCBCBC"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  <span className="log_in_text">Log In </span>
                </Link>
              </li>
            </ul>

            <div
              className="collapse navbar-collapse "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  m-auto mb-2  mb-lg-0 ">
                {nav.map((item) => (
                  <li
                    key={item.id}
                    className={`nav-item ${item.id == navId ? "active" : ""}`}
                  >
                    <Link
                      onClick={() => setNavId(item.id)}
                      className="nav-link"
                      aria-current="page"
                      href={item.to}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="navbar-nav mb-2  mb-lg-0 ">
                <li className="nav-item">
                  <a href="#!" className="search_btn" onClick={isClicked}>
                    <svg
                      width="25"
                      height="44"
                      viewBox="0 0 25 44"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_2_602)">
                        <path
                          d="M16.2429 24.3441C17.2112 23.0228 17.6449 21.3846 17.4572 19.7572C17.2695 18.1299 16.4743 16.6334 15.2307 15.5672C13.987 14.501 12.3866 13.9437 10.7497 14.0068C9.11282 14.0699 7.56008 14.7487 6.40217 15.9074C5.24425 17.0662 4.56655 18.6194 4.50465 20.2563C4.44274 21.8933 5.00121 23.4933 6.06831 24.7361C7.1354 25.979 8.63244 26.7732 10.2599 26.9597C11.8874 27.1462 13.5253 26.7113 14.8459 25.7421H14.8449C14.8749 25.7821 14.9069 25.8201 14.9429 25.8571L18.7929 29.7071C18.9804 29.8947 19.2348 30.0002 19.5 30.0003C19.7653 30.0004 20.0198 29.8951 20.2074 29.7076C20.395 29.5201 20.5005 29.2657 20.5006 29.0005C20.5007 28.7352 20.3954 28.4807 20.2079 28.2931L16.3579 24.4431C16.3221 24.4069 16.2837 24.3735 16.2429 24.3431V24.3441ZM16.5009 20.5001C16.5009 21.2224 16.3586 21.9376 16.0822 22.6049C15.8058 23.2722 15.4007 23.8785 14.89 24.3892C14.3793 24.8999 13.7729 25.305 13.1057 25.5814C12.4384 25.8578 11.7232 26.0001 11.0009 26.0001C10.2786 26.0001 9.56343 25.8578 8.89614 25.5814C8.22885 25.305 7.62253 24.8999 7.11181 24.3892C6.60109 23.8785 6.19596 23.2722 5.91956 22.6049C5.64316 21.9376 5.5009 21.2224 5.5009 20.5001C5.5009 19.0414 6.08036 17.6425 7.11181 16.611C8.14326 15.5796 9.54221 15.0001 11.0009 15.0001C12.4596 15.0001 13.8585 15.5796 14.89 16.611C15.9214 17.6425 16.5009 19.0414 16.5009 20.5001V20.5001Z"
                          fill="#929AA4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_2_602">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(4.5 14)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li className="get_btn_li">
                  <a className="get_started_btn" href="">
                    Get Started
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NavBar;
