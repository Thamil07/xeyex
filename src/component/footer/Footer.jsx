import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
	return (
		<footer className="footer d-flex">
				<ul className="footer-icons d-flex">
					
				<li>
					<a href="#">
					<FaFacebookF className="f-icons"/>
					</a>
				</li>
				<li>
					<a href="#">
					<AiFillInstagram className="f-icons"/>
					</a>
				</li>
				<li>	
					<a href="#">
					<FaTwitter className="f-icons"/>
					</a>
				</li>
				
			</ul>
			<p className="center-text-f text-center">
				&copy; 2024 Xeyex.Media . All rights reserved.
			</p>
			<ul className="footer-links d-flex">
			<div className="aligning_div">
				<li>
					<a href="#">
						<div className="footer-p-details">
						<div className="footer-r-icon"><IoCall className="f-icons"/></div>
						<p>8608257794</p>
						</div>
					</a>
				</li>
				<li>
					<a href="mailto:xeyex.media.private.limited@gmail.com?subject=Inquiry&body=Hello, I want to learn more about your services.">
					<div className="footer-p-details">
						<div className="footer-r-icon" id="gmail_icon"><SiGmail className="f-icons"/></div>
						<p>XeyeX.media.private.limited@gmail.com</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#">
					<div className="footer-p-details">
						<div className="footer-r-icon"><FaLocationDot className="f-icons"/></div>
						<p>No.4 water tank street, Kurumampet, Pondicherry- 605009</p>
						</div>
					</a>
				</li>
				</div>
			</ul>

		</footer>
	);
};

export default Footer;