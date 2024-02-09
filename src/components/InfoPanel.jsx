/* eslint-disable no-unused-vars */
import React from "react";
import InfoBar from "./Employees/Info_Bar/InfoBar";

const InfoPanel = () => {
	return (
		<div className="col-3 border rounded-1 shadow" style={{ height: "85vh" }}>
			<section
				className="d-flex flex-column justify-content-between mt-4"
				style={{ height: "80vh" }}>
				<InfoBar />

				<button
					className="btn btn-danger d-flex justify-content-center"
					type="submit">
					Logout
				</button>
			</section>
		</div>
	);
};

export default InfoPanel;
