import React from "react";

import edit from "../../assets/edit.png";
import calendar from "../../assets/calendar.png";
import clock from "../../assets/clock.png";
import bell from "../../assets/bell.png";

function TaskDetail(){
    return(
        <div class="pl-5 pr-5">
            <text><b>Task Name</b></text>
            <div class="col-12 mt-1 p-0">
                <div class="input-group mb-3">
                    <span class="input-group-prepend">
                        <div class="input-group-text bg-transparent">
                            <img src={edit} alt="" height="15" />
                        </div>
                    </span>
                    <textarea class="form-control form-control-sm border-left-0" style={{resize: "none", fontSize: "10pt", webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}} rows="4"></textarea>
                </div>
            </div>


            <div class="container-fluid">
                <div class="row">
                    <div class="col-4 pl-0">
                        <text><b>Date</b></text>
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <div class="input-group-text bg-transparent">
                                    <img src={calendar} alt="" height="15" />
                                </div>
                            </span>
                            <input class="form-control form-control-lg border-left-0" style={{resize: "none", fontSize: "10pt", webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}}></input>
                        </div>
                    </div>

                    <div class="col-4 p-0">
                        <text><b>Time</b></text>
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <div class="input-group-text bg-transparent">
                                    <img src={clock} alt="" height="15" />
                                </div>
                            </span>
                            <input class="form-control form-control-lg border-left-0" style={{resize: "none", fontSize: "10pt", webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}}></input>
                        </div>
                    </div>

                    <div class="col-4 pr-0">
                        <text><b>Reminder</b></text>
                        <div class="input-group">
                            <span class="input-group-prepend">
                                <div class="input-group-text bg-transparent">
                                    <img src={bell} alt="" height="15" />
                                </div>
                            </span>
                            <input class="form-control form-control-lg border-left-0" style={{resize: "none", fontSize: "10pt", webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetail;