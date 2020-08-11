import React from "react";

import due from "../../assets/red clock.png";
import checked from "../../assets/checked.png";

function Chat(props) {
	console.log(props);
	return (
		<div class="row border mr-0">
			<div class="col-2">
				<img
					src={props.data.photo}
					class="rounded-circle m-3"
					height="40"
					alt=""
				/>
			</div>

			<div class="col-8 mt-1">
				<text class="mr-2">
					<b>{props.data.name}</b>
				</text>
				{props.data.status === "overdue" ? (
					<img src={due} height="12" alt="" />
				) : props.data.status === "complete" ? (
					<img src={checked} height="12" alt="" />
				) : (
					<img src="" height="12" alt="" />
				)}
				<p class="mb-0" style={{ fontSize: "13px" }}>
					{props.data.message}
				</p>

				<div class="row mt-0">
					<div class="col-6">
						<span style={{ fontSize: "10px", color: "grey" }}>
							{props.data.date}
						</span>
					</div>
					<div class="col-6">
						<span style={{ fontSize: "10px", color: "grey" }}>
							{props.data.time}
						</span>
					</div>
				</div>
			</div>

			<div class="col-2">
				<div class="row mt-0">
					<div class="col-12">
						<img src={props.data.menuIcon} alt="" height="12" />
					</div>
					<div class="col-12">
						<img src={props.data.chatIcon} alt="" height="12" />
					</div>
					<div class="col-12">
						<img src={props.data.attachmentIcon} alt="" height="12" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;
