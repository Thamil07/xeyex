import React from "react";
import Header from "./component/header/Header";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer";

function App() {
	return (
		<div>
			<BrowserRouter>
        <Header />
				<Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
			</BrowserRouter>
		</div>
	);
}

export default App;
