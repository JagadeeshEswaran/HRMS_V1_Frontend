/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import InfoPanel from "../../components/InfoPanel";
import MainSection from "../../components/MainSection";
import Footer from "../../components/Footer";
import {
	br_admin_navLinks_data,
	emp_navLinks_data,
	ho_admin_navLink_data,
} from "../../data/navbar_data";

const Dashboard = () => {
	const [userType, setUserType] = useState("ho_admin");
	// const [userType, setUserType] = useState("br_user");
	// const [userType, setUserType] = useState("br_admin");
	const [navLink_data, setNavLink_data] = useState([]);

	return (
		<>
			<main>
				<Navbar
					navLink_data={
						userType === "br_user"
							? emp_navLinks_data
							: userType === "br_admin"
							? br_admin_navLinks_data
							: userType === "ho_admin"
							? ho_admin_navLink_data
							: null
					}
				/>

				<section
					className="row container m-auto gap-2 mt-4"
					style={{ height: "85vh" }}>
					<InfoPanel />

					<MainSection />
				</section>

				<Footer />
			</main>
		</>
	);
};

export default Dashboard;
