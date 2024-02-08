/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "../../components/Login";
import styles from "./LandingPage.module.css";
import axios from "axios";
import { HRMS_Custom_Axios } from "../../APIs/axios";
import AdminRegistration from "../../components/AdminRegistration";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LandingPage = ({ page }) => {
	const [userData, setUserData] = useState({ username: "", password: "" });
	const navigate = useNavigate();

	const handleUserLoginInput = async () => {
		// console.log(userData);

		try {
			let response = await HRMS_Custom_Axios.post("/auth/login", userData);

			if (response.data.loginStatus === true) {
				console.log("Login successful");

				toast.success("Login Successful, Re-directing to Dashboard", {
					position: "top-right",
					autoClose: 1600,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					// transition: Flip,
				});

				setTimeout(() => {
					navigate("/dashboard");
				}, 2000);
			} else {
				console.log(response.data);

				toast.error(response.data.Error, {
					position: "top-right",
					autoClose: 2500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
					// transition: Flip,
				});
			}
		} catch (error) {
			console.log(error);

			toast.error(error, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
				// transition: Flip,
			});
		}
	};

	const handleUserCreation = async (userData) => {
		// console.log(userData);

		const admin_creation_response = await HRMS_Custom_Axios.post(
			// "/auth/adminCreation",
			"/auth/admin",
			userData
		);

		// if (admin_creation_response.status === 200) {

		// }

		console.log(admin_creation_response);
	};

	return (
		<main className={styles.main} style={{ height: "100vh", width: "100vw" }}>
			{page === "login" ? (
				<Login handleInput={handleUserLoginInput} userData={userData} />
			) : (
				<AdminRegistration
					handleUserCreation={handleUserCreation}
					userData={userData}
				/>
			)}

			<ToastContainer />
		</main>
	);
};

export default LandingPage;
