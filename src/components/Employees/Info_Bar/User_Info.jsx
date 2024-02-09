/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";

import user_img_placeholder from "../../../assets/5856.jpg";

const User_Info = () => {
	return (
		<>
			<section className="card h-50 mx-3 d-flex justify-content-start align-items-center py-2">
				<article className="mt-4 w-50 d-flex align-items-center justify-content-center flex-column">
					<img src={user_img_placeholder} alt="" width={90} />

					<p>Emp_ID</p>
				</article>

				<article className="mt-2">
					<h6 className="text-info-emphasis">user_name</h6>

					<div className="d-flex justify-content-between mt-3">
						<BsFillInfoCircleFill className="text-info-emphasis fs-4" />
						<ImProfile className="text-info-emphasis fs-4" />
					</div>
				</article>
			</section>
		</>
	);
};

export default User_Info;
