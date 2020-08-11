import man1 from "../assets/man (1).jpg";
import man2 from "../assets/man (2).jpg";
import man3 from "../assets/man (3).jpg";

import woman1 from "../assets/woman.jpg";
import woman2 from "../assets/woman (1).jpg";
import woman3 from "../assets/woman (2).jpg";

import menu from "../assets/list.png";
import chat from "../assets/chat.png";
import attachment from "../assets/paper-clip.png";

export const overdueData = [
	{
		name: "Lucy Lee",
		photo: woman1,
		message: "Hey let’s schedule a call for next week fo...",
		date: "Tue, 17 Sep 2019",
		time: "11:00 AM",
		menuIcon: menu,
		chatIcon: chat,
		attachmentIcon: attachment,
		status: "overdue"
	},
	{
		name: "Mike Wilson",
		photo: man1,
		message: "Thanks for getting back me. I think we...",
		date: "Tue, 19 Sep 2019",
		time: "11:00 AM",
		menuIcon: null,
		chatIcon: attachment,
		attachmentIcon: null,
		status: "overdue"
	},
];

export const todayData = [
	{
		name: "Mark Johnson",
		photo: man2,
		message: "Great idea!",
		date: "Tue, 19 Sep 2019",
		time: "11:00 AM",
		menuIcon: null,
		chatIcon: chat,
		attachmentIcon: null,
		status: "today"
	},
	{
		name: "Jacob Miller",
		photo: man3,
		message: "Good job. Looking forward to see you soo...",
		date: "Tue, 19 Sep 2019",
		time: "11:00 AM",
		menuIcon: null,
		chatIcon: null,
		attachmentIcon: null,
		status: "today"
	},
];
export const laterData = [
	{
		name: "Sara Kowalski",
		photo: woman2,
		message: "Great to catch up today. Looking forward to...",
		date: "Tue, 19 Sep 2019",
		time: "11:00 AM",
		menuIcon: null,
		chatIcon: chat,
		attachmentIcon: attachment,
		status: "later"
	},
];
export const completeData = [
	{
		name: "Lucy Picklesworth",
		photo: woman3,
		message: "Hello, thanks for the update",
		date: "Tue, 19 Sep 2019",
		time: "11:00 AM",
		menuIcon: null,
		chatIcon: chat,
		attachmentIcon: attachment,
		status: "complete"
	},
];
