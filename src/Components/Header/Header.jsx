import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "/Logo.png";
const Header = () => {
  return (
    <div>
      <div className="navbar my-5 container mx-auto">
        <div className="navbar-start">
          <a className="normal-case text-xl">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="navbar-end">
          <div className="link-div hidden md:flex gap-10">
            <NavLink className="font-bold text-xl" to="/">
              Home
            </NavLink>
            <NavLink className="font-bold text-xl" to="/donation-box">
              Donation
            </NavLink>

            <NavLink className="font-bold text-xl" to="/statistics">
              Statistics
            </NavLink>
          </div>
          <div className="dropdown  dropdown-end">
            <label tabIndex={0} className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/donation">Donation</NavLink>
              </li>

              <li>
                <NavLink to="/statistics">Statistics</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
