import React from 'react';

import conversation from "../../assets/conversation.png"
import attachment from "../../assets/paper-clip.png"

class Right extends React.Component{
    render(){
        return(
            <div>
                <div style={{backgroundColor: "black", height:"80px"}} class="d-flex align-items-center"> 
                    <h5 class="text-white ml-3">Task Conversation</h5>
                </div>

                <div class="container d-flex justify-content-center align-items-center" style={{height: "85vh"}}>
                    <div class="row m-0">
                        <div class="col-3 p-0"></div>
                        <div class="col-6 d-flex justify-content-center">
                            <img class="img-fluid" src={conversation} alt="" height="200"/>
                        </div>

                        <div class="col-12 d-flex justify-content-center">
                            <p style={{color: "#B2B8BD", fontFamily: "verdana", fontSize: "13px"}}>Start chatting here</p>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="input-group">
                                <input class="form-control form-control-sm border-right-0 p-2" type="text" style={{borderRadius: "30px 0px 0px 30px", webkitBoxShadow: "none", mozBoxShadow: "none", boxShadow: "none"}} placeholder="Write your message..."/>

                                <span class="input-group-append">
                                    <div class="input-group-text bg-transparent" style={{borderRadius: "0px 30px 30px 0px"}}>
                                        <img src={attachment} alt="" height="16" />
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Right;