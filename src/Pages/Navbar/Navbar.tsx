import React from "react";
import Button from "../../Utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { clearUser } from "../../redux/api/authSlice";
import carLogo from "../../assets/images/car-logo.png";
import { logout } from "../../redux/api/authSlice";
import { RootState } from "../../redux/store/store";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.auth.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="bg-gradient-to-r dark:from-[#060d3b] dark:to-[#2c3a94]">
      <div className="navbar  max-w-screen-2xl mx-auto  bg-gradient-to-r dark:from-[#081049] dark:border-[#656fe2] border-[#394481] border-b-2 dark:to-[#263381] bg-opacity-30">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/booking">Booking</Link>
              </li>
              <li>
                <Link to="/carListing">Car Listings</Link>
              </li>

              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold  text-white">
            <img className="w-40 " src={carLogo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal     text-white text-lg ">
            <li className="">
              <Link to="/">
                {" "}
                <Button children1={"Home"} children2={"Click"} />
              </Link>
            </li>

            <li>
              <Link to="/carListing">
                <Button children1={"Car Listings"} children2={"Click"} />
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <Button children1={"About Us"} children2={"Click"} />
              </Link>
            </li>
            {user?.role === "user" ? (
              <li>
                <Link to="/dashboard/user-persional-info">
                  <Button children1={"Dashboard"} children2={"Click"} />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/dashboard">
                  {" "}
                  <Button children1={"Dashboard"} children2={"Click"} />
                </Link>
              </li>
            )}
          </ul>
          <div>
            <input
              type="checkbox"
              className="toggle toggle-error"
              defaultChecked
            />
          </div>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <span className="mr-4 text-white font-bold">
                Hello, {user.name}
              </span>
              <button onClick={handleLogout} className="">
                <Button children1={"Logout"} children2={"Click"} />
              </button>
            </>
          ) : (
            <button onClick={() => navigate("/login")} className="">
              <Button children1={"Login"} children2={"Click"} />
            </button>
          )}

          <Link to="/signup"> </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
function logoutUser(): any {
  throw new Error("Function not implemented.");
}
