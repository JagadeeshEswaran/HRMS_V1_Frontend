import axios from "axios";

export const HRMS_Custom_Axios = axios.create({
	baseURL: "http://192.168.1.182:3000",
});
