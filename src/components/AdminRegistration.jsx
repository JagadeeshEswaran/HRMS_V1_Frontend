/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const AdminRegistration = ({ handleUserCreation, userData }) => {
	const handleSignUp = (e) => {
		e.preventDefault();
		// console.log(userData);

		handleUserCreation(userData);
	};

	return (
		<>
			<section className="d-flex justify-content-center align-items-center vh-100">
				<form action="#" className="w-50 rounded px-3 py-3 shadow form-tabs">
					<h4 className="text-light d-flex justify-content-center align-items-center my-3">
						New Admin user Registration
					</h4>

					<article className="mb-3">
						<label htmlFor="userId" className="mb-2 fw-bold text-light">
							User ID (or) Email :{" "}
						</label>
						<input
							type="text"
							name="userId"
							autoComplete="off"
							placeholder="Enter Email"
							className="form-control"
							onChange={(e) => (userData.username = e.target.value)}
						/>
					</article>

					<article className="mb-3">
						<label htmlFor="passWord" className=" me-4 mb-2 fw-bold text-light">
							Password :
						</label>
						<input
							type="password"
							name="passWord"
							placeholder="Enter Password"
							className="form-control"
							style={{ width: "" }}
							onChange={(e) => (userData.password = e.target.value)}
						/>
					</article>

					<article className="d-flex justify-content-between mt-4">
						<button
							className="btn btn-info fw-bold text-info-emphasis"
							onClick={handleSignUp}>
							Register
						</button>

						<button className="bg-transparent border-0 fs-6 text-danger fw-bold trouble-shoot">
							Unable to Register
						</button>
					</article>

					<article className="text-light mt-3">
						<p>
							If already Registered, Please proceed to{" "}
							<NavLink to={"/auth/adminLogin"}>
								<span
									className="text-warning fw-medium"
									style={{ cursor: "pointer" }}>
									Login Page.
								</span>
							</NavLink>
						</p>
					</article>
				</form>
			</section>
		</>
	);
};

export default AdminRegistration;
