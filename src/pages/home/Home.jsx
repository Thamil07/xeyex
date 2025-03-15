import React from "react";
import Advertisement from "../../component/banners/Advertisement";
import ContactForm from "../../component/forms/Form";
import CarouselComponent from "../../component/slider/Sliderview";

function Home() {
	return (
		<div>
			<Advertisement />
			<CarouselComponent />
			<ContactForm />
		</div>
	);
}

export default Home;
