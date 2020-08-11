import React from 'react';

import cross from "../../assets/close.png";

function Checklist(){
    return(
        <div class="container mt-5 pl-5 pr-5">        
            <div class="container p-0">
                <div class="row">
                    <div class="col">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{width: "100%", backgroundColor: "black"}}></div>
                        </div>
                        <div class="d-flex justify-content-center mb-2" style={{fontSize: "12px"}}>
                            <b>100% Complete</b>
                        </div>
                    </div>
                </div>
            </div>

            <form>
                <div class="row">
                    <div class="col-11">
                        <label class="contain">Subtask 1
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-1 d-flex justify-content-end">
                        <img src={cross} alt="" height="12"/>
                    </div>
                </div>

                <br/>

                <div class="row">
                    <div class="col-11">
                        <label class="contain">Subtask 2
                            <input type="checkbox"></input>
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="col-1 d-flex justify-content-end">
                        <img src={cross} alt="" height="12"/>
                    </div>
                </div>
            </form>

            <button class="btn btn-block btn-sm mt-3" style={{color: "green"}}>+Add Subtask</button>
        </div>
    );    
}

export default Checklist;