/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Navbar = ({ navLink_data }) => {
	return (
		<>
			<nav
				className={`navbar navbar-expand-lg rounded-bottom-2`}
				style={{ boxShadow: "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px" }}>
				<div className="container-fluid">
					<a className="navbar-brand" href="#">
						My HRMS
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{navLink_data.map((item) => (
								<li key={item.id} className="nav-item">
									{item.quickLinks?.length > 0 ? (
										<li className="nav-item dropdown">
											<a
												className="nav-link dropdown-toggle"
												href="#"
												role="button"
												data-bs-toggle="dropdown"
												aria-expanded="false">
												{item.title}
											</a>
											<ul className="dropdown-menu">
												{item.quickLinks?.map((item) => (
													<li key={item.id}>
														<a className="dropdown-item" href="#">
															{item.title}
														</a>
													</li>
												))}
											</ul>
										</li>
									) : (
										<a href="#" className="nav-link">
											{item.title}
										</a>
									)}
								</li>
							))}
						</ul>

						<form className="d-flex" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<section className="d-flex gap-2">
								<button className="btn btn-outline-info" type="submit">
									Search
								</button>
							</section>
						</form>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
