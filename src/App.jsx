/* eslint-disable no-unused-vars */
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard/Dashboard";

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
