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
			"Your vision, our mission. We craft experiences that inspire and drive results.",
	},
	{
		image: realestate,
		title: "Real Estate",
		description:
			"Turning houses into homes, and investments into opportunities.",
	},
	{
		image: film,
		title: "Film Production",
		description:
			"Lights, camera, action! Creating unforgettable stories that captivate and inspire.",
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
							<div className="d-flex align-items-center justify-content-center">
								<img
									src={slide.image}
									className="d-block"
									style={{ width: "40%" ,padding:"1rem",borderRadius:"15px" }}
									alt={slide.title}
								/>
								<div className="content p-4">
									<h2 className="fs-1 fw-bold">{slide.title}</h2>
									<p>{slide.description}</p>
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
