import React, { useState, useEffect, useRef } from "react";
import "./slider.css";
import ads from "../../assets/images/ads.jpg";
import realestate from "../../assets/images/realestate.jpg";
import film from "../../assets/images/film.jpg";
<link rel="icon" href="./xixlogo.png" />;
const slides = [
	{
		image: ads,
		title: "Advertisement",
		description:
			"We offer innovative Advertising solutions that maximize brand visibility and engagement. Our strategies ensure impactful campaigns, reaching the right audience with creativity and precision.",
	},
	{
		image: realestate,
		title: "Real Estate",
		description:
			"We provide expert Real Estate solutions, ensuring seamless property transactions with transparency and efficiency. Our focus is on innovation, customer satisfaction, and making buying, selling, or investing hassle-free.",
	},
	{
		image: film,
		title: "Film Production",
		description:
			"We specialize in Film Production, delivering high-quality content with creativity and precision. Our team ensures seamless execution, from concept to final production, bringing stories to life.",
	},
];

const CarouselComponent = () => {
	const carouselRef = useRef(null);
	const carouselInstance = useRef(null);
	const timerRef = useRef(null);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (carouselRef.current) {
			carouselInstance.current = new window.bootstrap.Carousel(
				carouselRef.current,
				{
					interval: 3000,
					pause: "hover",
				}
			);

			const handleSlid = (event) => {
				setCurrentIndex(event.to);
			};

			carouselRef.current.addEventListener("slid.bs.carousel", handleSlid);

			carouselInstance.current.cycle();

			return () => {
				if (carouselRef.current) {
					carouselRef.current.removeEventListener(
						"slid.bs.carousel",
						handleSlid
					);
				}
			};
		}
	}, []);

	const onDotClick = (index) => {
		if (carouselInstance.current) {
			carouselInstance.current.to(index);
			carouselInstance.current.pause();

			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}

			timerRef.current = setTimeout(() => {
				carouselInstance.current.cycle();
			}, 3000);
		}
	};

	return (
		<div className="carousel-wrapper p-5">
			<div id="carouselExample" className="carousel slide" ref={carouselRef}>
				<div className="carousel-inner">
					{slides.map((slide, index) => (
						<div
							key={index}
							className={`carousel-item ${index === 0 ? "active" : ""}`}>
							<div className="slider-content d-flex align-items-center justify-content-center">
								<img
									src={slide.image}
									className="d-block"
									alt={slide.title}
								/>
								<div className="slider-text content p-4">
									<h2 className="slider-title fs-1 fw-bold">{slide.title}</h2>
									<p className="slider-para">{slide.description}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="carousel-dots mt-5">
				{slides.map((_, index) => (
					<span
						key={index}
						className={`dot ${currentIndex === index ? "active" : ""}`}
						onClick={() => onDotClick(index)}></span>
				))}
			</div>
		</div>
	);
};

export default CarouselComponent;