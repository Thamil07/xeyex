import React from "react";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
	return (
		<footer className="footer p-3 d-flex align-items-center justify-content-between">
			<p className="text-center">
				&copy; 2024 Xeyex.Media . All rights reserved.
			</p>
			<ul className="footer-links d-flex">
				<li>
					<a href="#">
						<FaFacebook />
					</a>
				</li>
				<li>
					<a href="mailto:xeyex.media.private.limited@gmail.com?subject=Inquiry&body=Hello, I want to learn more about your services.">
						<SiGmail />
					</a>
				</li>
				<li>
					<a href="#">
						<IoLogoInstagram />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
