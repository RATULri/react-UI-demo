import React, { Fragment } from "react";

import Searchbar from "./searchbar.js";
import Chat from "./chat.js";

import {
	overdueData,
	todayData,
	completeData,
	laterData,
} from "../../data/chatlistData.js";

import profile from "../../assets/profile.jpg";
import invite from "../../assets/user.png";

class Left extends React.Component {
	render() {
		return (
			<div>
				<div style={{ backgroundColor: "black", height: "80px" }} class="d-flex align-items-center">
					<div class="row ml-2">
						<div class="col-3">
							<img
								src={profile}
								class="rounded-circle border border-white"
								height="50"
								alt=""
							/>
							<span class="dot border border-white"></span>
						</div>
						<div class="col-9">
							<div class="row">
								<div class="col">
									<h5 class="text-white mb-0">Raiyad Raad</h5>
								</div>
							</div>
							<div class="row">
								<div class="col">
									<text class="text-white" style={{ fontSize: "13px" }}>
										Online
									</text>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="row">
					<div class="col-12 m-2">
						<Searchbar />
					</div>
				</div>


				<p class="text-sm-center mt-2" style={{ fontSize: "13px", color: "grey" }}>Add Task</p>
				<hr></hr>

				<div class="mb-3">
					<img src={invite} class="ml-4" height="20" alt="" />
					<text class="ml-3" style={{ fontSize: "13px" }}>
						Invite a friend
					</text>
				</div>

				{[
					{ status: "Overdue", data: overdueData },
					{ status: "Today", data: todayData },
					{ status: "Later", data: laterData },
					{ status: "Complete", data: completeData },
				].map((props) => this.renderChat(props.status, props.data))}
			</div>
		);
	}

	
	renderChat = (status, data) => {
		return (
			<Fragment>
				<div style={{ background: "#e8e9ea" }}>
					<div class="text-sm-center p-1" style={{ color: "grey", fontSize: "12px" }}>
						{status}
					</div>
				</div>
				
				{data.map((info) => (
					<Chat data={info} />
				))}
			</Fragment>
		);
	};
}

export default Left;
