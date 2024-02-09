/* eslint-disable no-unused-vars */
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import UserCreation_Main from "./pages/UserCreation/UserCreation_Main";
import UserUpdation_Main from "./pages/UserUpdation/UserUpdation_Main";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* Admin - Login Route */}
				<Route path="/auth/adminLogin" element={<LandingPage page="login" />} />

				{/* Admin - Registration Route */}
				<Route
					path="/auth/adminRegister"
					element={<LandingPage page="register" />}
				/>

				{/* General Routes */}
				<Route path="/dashboard" element={<Dashboard />} />

				{/* Creation Routes */}
				<Route
					path="/create/branch-user-creation"
					element={<UserCreation_Main user_type="br_user" />}
				/>

				<Route
					path="/create/branch-admin-creation"
					element={<UserCreation_Main user_type="br_admin" />}
				/>

				{/* Updation Routes */}
				<Route
					path="/update/branch-user-creation"
					element={<UserUpdation_Main user_type="br_user" />}
				/>

				<Route
					path="/update/branch-admin-creation"
					element={<UserUpdation_Main user_type="br_admin" />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
