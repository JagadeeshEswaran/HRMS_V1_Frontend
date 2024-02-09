/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "../../components/Navbar";
import { ho_admin_navLink_data } from "../../data/navbar_data";
import Footer from "../../components/Footer";
import UserCreation_Container from "./UserCreation_Container";

const UserCreation_Main = ({ user_type }) => {
	console.log(user_type);

	console.log(ho_admin_navLink_data[2]);

	return (
		<>
			<Navbar
				navLink_data={
					user_type === "br_admin"
						? ho_admin_navLink_data[2]?.br_admin_create_links
						: user_type === "br_user"
						? ho_admin_navLink_data[1].br_user_create_links
						: null
				}
			/>

			<section
				className="container my-3 border rounded shadow py-4 px-5"
				style={{ height: "85.87vh" }}>
				<UserCreation_Container user_type={user_type} />
			</section>

			<Footer />
		</>
	);
};

export default UserCreation_Main;
