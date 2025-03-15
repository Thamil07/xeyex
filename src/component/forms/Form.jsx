import React, { useState } from "react";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");
	const API_KEY = process.env.REACT_APP_SENDINBLUE_API_KEY;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const sendEmail = async () => {
		try {
			const response = await fetch("https://api.brevo.com/v3/smtp/email", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"api-key": API_KEY, // Replace with your actual API Key
				},
				body: JSON.stringify({
					sender: { email: formData.email }, // Replace with your email
					to: [{ email: "tarasan655@gmail.com" }],
					// to: [{ email: "xeyex.media.private.limited@gmail.com" }], // Replace with recipient email
					subject: "New Contact Form Submission",
					htmlContent: `
            <h3>New Message from your XeyeX website</h3>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong></p>
            <p>${formData.message}</p>
          `,
				}),
			});

			const data = await response.json();
			if (response.ok) {
				setSuccess("Message sent successfully!");
				setFormData({ name: "", email: "", phone: "", message: "" });
			} else {
				setError(`Error: ${data.message}`);
			}
		} catch (err) {
			setError("Failed to send message. Please try again.");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (
			!formData.name ||
			!formData.email ||
			!formData.phone ||
			!formData.message
		) {
			setError("All fields are required!");
			return;
		}

		setError("");
		setSuccess("");
		sendEmail();
	};

	return (
		<div style={styles.container}>
			<form onSubmit={handleSubmit} style={styles.form}>
				<h2 style={styles.title}>Contact Us</h2>

				<input
					type="text"
					name="name"
					placeholder="Your Name"
					value={formData.name}
					onChange={handleChange}
					style={styles.input}
					required
				/>

				<input
					type="email"
					name="email"
					placeholder="Your Email"
					value={formData.email}
					onChange={handleChange}
					style={styles.input}
					required
				/>

				<input
					type="tel"
					name="phone"
					placeholder="Phone Number"
					value={formData.phone}
					onChange={handleChange}
					style={styles.input}
					required
				/>

				<textarea
					name="message"
					rows={4}
					placeholder="Your Message"
					value={formData.message}
					onChange={handleChange}
					style={styles.textarea}
					required></textarea>

				{error && <p style={styles.error}>{error}</p>}
				{success && <p style={styles.success}>{success}</p>}

				<button type="submit" style={styles.button}>
					Send Message
				</button>
			</form>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "#fff",
		margin: "5rem 2rem",
	},
	form: {
		background: "#fff",
		padding: "20px",
		borderRadius: "8px",
		width: "500px",
		boxShadow: "0px 0px 10px rgba(113, 112, 112, 0.3)",
		textAlign: "center",
	},
	title: {
		marginBottom: "15px",
		color: "#000",
	},
	input: {
		width: "92%",
		padding: "10px",
		margin: "8px 0",
		border: "1px solid #000",
		borderRadius: "5px",
		background: "#fff",
		color: "#000",
	},
	textarea: {
		width: "92%",
		padding: "10px",
		margin: "8px 0",
		border: "1px solid #000",
		borderRadius: "5px",
		background: "#fff",
		color: "#000",
	},
	button: {
		width: "100%",
		background: "#ff9d0b",
		padding: "10px",
		color: "#fff",
		border: "none",
		borderRadius: "5px",
		cursor: "pointer",
	},
	error: {
		color: "red",
		fontSize: "14px",
		marginBottom: "10px",
	},
	success: {
		color: "green",
		fontSize: "14px",
		marginBottom: "10px",
	},
};

export default ContactForm;
