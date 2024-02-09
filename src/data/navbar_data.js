export const emp_navLinks_data = [
	{
		id: 1,
		title: "Home",
		link: "#",
	},
	{
		id: 2,
		title: "My Attendance",
		link: "#",
	},
	{
		id: 3,
		title: "My Leave",
		link: "#",
	},
	{
		id: 4,
		title: "Quick Links",
		link: "#",
		quickLinks: [
			{
				id: 1,
				title: "Raise a Ticket",
			},
			{
				id: 2,
				title: "Learn More",
			},
			{
				id: 3,
				title: "Contact Support",
			},
		],
	},
];

export const br_admin_navLinks_data = [
	{
		id: 1,
		title: "Home",
		link: "#",
	},
	{
		id: 2,
		title: "My Attendance",
		link: "#",
	},
	{
		id: 3,
		title: "My Leave",
		link: "#",
	},
	{
		id: 4,
		title: "Team Management",
		link: "#",
		quickLinks: [
			{
				id: 1,
				title: "Raise a Ticket",
			},
			{
				id: 2,
				title: "Learn More",
			},
			{
				id: 3,
				title: "Contact Support",
			},
		],
	},
];

export const ho_admin_navLink_data = [
	{
		id: 1,
		title: "Home",
		link: "#",
	},
	{
		id: 2,
		title: "Add Branch Users",
		link: "create/branch-user-creation",
		br_user_create_links: [
			{
				id: 1,
				title: "Br User Creation - Maker",
			},
			{
				id: 2,
				title: "Br User Creation - Checker",
			},
			{
				id: 3,
				title: "Request Tracker",
			},
		],
	},
	{
		id: 3,
		title: "Add Branch Admin",
		link: "create/branch-admin-creation",
		br_admin_create_links: [
			{
				id: 1,
				title: "Br Admin Creation - Maker",
			},
			{
				id: 2,
				title: "Br Admin Creation - Checker",
			},
			{
				id: 3,
				title: "Request Tracker",
			},
		],
	},
	{
		id: 4,
		title: "Update Links",
		link: "#",
		quickLinks: [
			{
				id: 1,
				title: "Update Branch User",
				link: "update/branch-user-update",
			},
			{
				id: 2,
				title: "Update Branch Admin",
				link: "update/branch-admin-update",
			},
			{
				id: 3,
				title: "Update HO Admin",
				link: "update/ho-user-update",
			},
			// {
			// 	id: 4,
			// 	title: "",
			// },
		],
	},
];
