/* eslint-disable no-unused-vars */
import React from "react";
import { emp_infobar_data } from "../../../data/infobar_data";

const Info_Bar_Links = () => {
	return (
		<>
			<section className="card mx-3 my-2 pt-5">
				<ul>
					{emp_infobar_data.map((item) => (
						<li key={item.id} className="mb-5">
							<a
								href=""
								style={{
									textDecoration: "none",
									fontSize: "14px",
									fontWeight: "bold",
								}}
								className="text-info-emphasis">
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Info_Bar_Links;
