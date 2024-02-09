/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./Employees/Home";
import MyAttendence from "./Employees/MyAttendence";
import MyLeave from "./Employees/MyLeave";

const MainSection = () => {
	return (
		<div className="col-8 border h-100 rounded-1 shadow">
			<h6>Main Section</h6>

			<Home />

			<MyAttendence />

			<MyLeave />
		</div>
	);
};

export default MainSection;
