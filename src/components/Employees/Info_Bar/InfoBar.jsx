/* eslint-disable no-unused-vars */
import React from "react";
import User_Info from "./User_Info";
import Info_Bar_Links from "./Info_Bar_Links";

const InfoBar = () => {
	return (
		<div className="h-75">
			<User_Info />

			<Info_Bar_Links />
		</div>
	);
};

export default InfoBar;
