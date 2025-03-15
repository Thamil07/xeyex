import React from "react";
import "./banners.css";

const Advertisement = () => {
	return (
		<section className="d-flex advertisement">
			<div className="content w-100">
				<h1 className="mb-2" style={{ fontSize: "3rem" }}>
					About us
				</h1>
				<h4 id="headline" className="mb-3">
					Welcome to <span className="span1" style={{fontSize:"2.5"}}>XeyeX</span>-
					<span className="span2">Media</span>
				</h4>
				<p className="blinking-text" style={{ width: "60%", fontSize:"1.5rem" }}>
					where creativity meets strategy! We are a dynamic company specializing
					in <span className="span1">digital marketing</span>,{" "}
					<span className="span1">advertising</span>,{" "}
					<span className="span1">real estate</span>, and 
					<span className="span1"> film production</span>.
				</p>
				<p style={{ width: "65%" ,lineHeight:"2"}}>
					Our mission is to bring innovative solutions that help businesses
					grow, brands stand out, and stories come to life. With a team of
					passionate professionals, we craft result-driven marketing campaigns,
					impactful advertisements, and compelling film productions. In the real
					estate sector, we connect buyers and sellers with seamless
					experiences, ensuring value and trust. Whether you need a digital
					presence that drives engagement, a powerful ad campaign, expert real
					estate guidance, or high-quality film production, we have the
					expertise to deliver excellence. Let’s create something extraordinary
					together!
				</p>
			</div>
		</section>
	);
};

export default Advertisement;
