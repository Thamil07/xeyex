import React from "react";
import "./header.css";
import logo from "../../assets/images/logo/xixlogo.png";

const Header = () => {
	return (
		<header className="header">
			<div className="logo d-flex gap-2 align-items-center">
				<img
					className="logo-image d-flex"
					src={logo}
					alt="Logo 404 not Found"
				/>
				<p className="" style={{ color: "#ff9d0b" }}>
					XeyeX <span style={{ color: "#7e16be" }}>Media</span>
				</p>
			</div>
			<nav>
				{/* <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul> */}
			</nav>
		</header>
	);
};

export default Header;
