import React from 'react';
import TaskDetail from "./taskDetail.js"
import Checklist from "./checklist.js"
import Upload from "./upload.js"

import option from "../../assets/option.png";

class Middle extends React.Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor: "black", height:"80px"}} class="d-flex align-items-center">
                    <div class="col-6 d-flex align-items-center">
                        <h5 class="text-white">Add New Task</h5>
                    </div>
                    <div class="col-5 p-0 d-flex justify-content-end align-items-center">
                        <text class="text-white"><u>to Assigned Person Name</u></text>
                    </div>
                    <div class="col-1 d-flex justify-content-end">
                        <img src={option} alt="" height="20"/>
                    </div>
                </div>

                <br></br>

                <TaskDetail/>

                <Checklist/>

                <Upload/>
            </div>
        )
    }
}

export default Middle;