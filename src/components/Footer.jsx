/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
	const cr_year = new Date().getFullYear();

	return (
		<div
			className="border mt-3 rounded-top-2 text-center d-flex justify-content-center align-items-center "
			style={{
				height: "4.85vh",
				boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px",
				fontSize: "12px",
				fontWeight: 600,
			}}>
			My HRMS @ {cr_year} | Jagadeeshwaran Eswaran
		</div>
	);
};

export default Footer;
