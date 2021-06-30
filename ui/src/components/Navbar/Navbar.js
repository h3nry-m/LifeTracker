import { Link } from "react-router-dom";
// import Twitter from "../Icons/Twitter";
// import Instagram from "../Icons/Instagram";
// import Facebook from "../Icons/Facebook";
import "./Navbar.css";

export default function Navbar({ user, setUser, handleLogout }) {
  return (
    <nav className="Navbar">
      <div className="content">
        <div className="logo">
          <Link to="/">
            <h1>Life Tracker</h1>
          </Link>
        </div>

        {/* <div className="socials">
          <Twitter fill="var(--pure-white)" />
          <Instagram fill="var(--pure-white)" />
          <Facebook fill="var(--pure-white)" />
        </div> */}

        <ul className="rightLinks">
          <div className="links">
            <li>
              <Link to="/">Home</Link>
              <Link to="/activity">Activity</Link>
              <Link to="/exercise">Exercise</Link>
            </li>
          </div>

          {user?.email ? (
            // if user is logged in
            <>
              <li>
                {/* <span>{user.email}</span> */}
                <span onClick={handleLogout}>Logout</span>
              </li>
            </>
          ) : (
            // if user is logged out
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Sign Up</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
