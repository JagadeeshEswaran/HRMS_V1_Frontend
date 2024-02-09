/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { generatePath } from "react-router-dom";

const UserCreation_Container = ({ user_type }) => {
	const [userData, setUserData] = useState({
		emp_id: "",
		username: "",
		region_name: "",
		branch_name: "",
	});

	const generateRandomPassword = (e) => {
		e.preventDefault();

		console.log(userData.emp_id);

		if (userData.emp_id.length < 4) {
			let empId_arr = userData.emp_id.split("");
			console.log(empId_arr);

			while (empId_arr.length < 4) {
				empId_arr.unshift("0");
			}

			setUserData({ ...userData, emp_id: empId_arr.join("") });

			console.log(userData.emp_id);
		}

		console.log(userData.emp_id);

		let empIdChar = userData.emp_id.slice(0, 5);
		let usernameChar = (username) => {
			console.log(username);

			username.map((char) => {
				let charsArr = [];

				if (char) {
					charsArr.push(char);
				}

				return charsArr.join("");
			});
		};
		console.log(usernameChar(userData.username.split("")));
	};

	const handleCreateUser = (e) => {
		e.preventDefault();

		console.log(userData);
	};

	return (
		<>
			<h5 className="text-info-emphasis">Branch {user_type} Creation</h5>
			<form className="card p-4 gap-3">
				<article>
					<label htmlFor="username">Emp ID : </label>
					<input
						type="text"
						placeholder="Please enter Emp ID"
						className="form-control w-50 border-dark-subtle"
						value={userData.emp_id && userData.emp_id}
						onChange={(e) =>
							setUserData({ ...userData, emp_id: e.target.value })
						}
					/>
				</article>

				<article>
					<label htmlFor="username">Username / Email ID : </label>
					<input
						type="select"
						placeholder="Please enter the username"
						className="form-control w-50 border-dark-subtle"
						value={userData.username}
						onChange={(e) =>
							setUserData({ ...userData, username: e.target.value })
						}
					/>
				</article>

				<article>
					<label htmlFor="username">Select Region : </label>
					<select
						className="form-select w-25"
						aria-label="Default select example"
						onChange={(e) =>
							setUserData({ ...userData, region_name: e.target.value })
						}>
						<option defaultValue>Open this select menu</option>
						<option value="region_1">Region_1</option>
						<option value="region_2">Region_2</option>
						<option value="region_3">Region_3</option>
					</select>
				</article>

				<article>
					<label htmlFor="username">Select Branch : </label>
					<select
						className="form-select w-25"
						aria-label="Default select example"
						onChange={(e) =>
							setUserData({ ...userData, branch_name: e.target.value })
						}>
						<option defaultValue>Open this select menu</option>
						<option value="branch_1">Branch1</option>
						<option value="branch_2">Branch2</option>
						<option value="branch_3">Branch3</option>
					</select>
				</article>

				<article>
					<button className="btn btn-success" onClick={handleCreateUser}>
						Create {user_type}
					</button>
				</article>

				{/* <article>
					<label htmlFor="password">Password Generation : </label>
					<input
						type="password"
						className="form-control w-50 border-dark-subtle"
					/>
					<button
						className="btn btn-warning mt-2"
						onClick={generateRandomPassword}>
						Generate
					</button>
				</article> */}
			</form>
		</>
	);
};

export default UserCreation_Container;
